import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../Loader';
import "./index.css"
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
		let result = await fetch('https://jsonplaceholder.typicode.com/posts/');
		result = await result.json();
		this.setState({
			jsonMasses: result,
			isLoading: false
		});
		console.log('Запрос отправлен ?');
	}
	returnTitle = (obj) => {
		const { title, id } = obj;

		return(
			<div key={id} className={"post-wrapper"} >
				<Link to={`/homepage/${id}`} >{ title }</Link>
			</div>
		)
	}
	render() {
		const { isLoading, jsonMasses } = this.state;

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
