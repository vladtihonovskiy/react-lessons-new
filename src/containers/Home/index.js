import React, { Component } from 'react';
import Loader from '../Loader';
class HomePage extends Component {
	state = {
		isLoading: true,
		jsonMasses: [],
	}

	async componentDidMount() {
		// console.log(
		//     fetch('https://jsonplaceholder.typicode.com/todos/')
		//         .then(response => response.json())
		//         .then(json => this.setState({
		//             isLoading: false,
		//             JsonMes: json
		//         }))
		// );
		let result = await fetch('https://jsonplaceholder.typicode.com/todos/');
		result = await result.json();
		this.setState({
			jsonMasses: result,
			isLoading: false
		})
		console.log('Запрос отправлен ?');
	}
	returnTitle = (obj) => {
		const { title, id } = obj;
		return <ul key={id} >{title} ID={id}</ul>
	}
	render() {
		const { isLoading, jsonMasses } = this.state;
		console.log(this.state.jsonMasses);
		return(
			<div>
				{ isLoading ?
					<Loader />
					:
					<ul>
						{
							jsonMasses.map(
								jsonMassive => { return this.returnTitle(jsonMassive) }
							)
						}
					</ul>
				}
			</div>
		);
	}
}
export default HomePage
