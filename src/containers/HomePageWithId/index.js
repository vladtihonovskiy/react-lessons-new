import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import "./index.css"
class HomePageWithId extends Component {
	state = {
		jsonMass: [],
		isLoading: true

	}

	async componentDidMount() {
		const id = this.props.match.params.id;
		const resultToMap = new Array();

		let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		result = await result.json();

		this.setState({
			siLoading: false
		});

		resultToMap.push(result);

		this.setState({
			jsonMass: resultToMap,
			isLoading: false
		});

		console.log('Запрос отправлен ?');
	}

	render() {
		const { isLoading } = this.state;

		return(
			<div>
				<p>My id {this.props.match.params.id} </p>
				{
					isLoading ?
						<Loader />
						:
						this.state.jsonMass.map((item) => {
							return(
								<div className={"post-wrapper"} >
									<h1 >{ item.title }</h1>
									<h4>{ item.body }</h4>

									<button>
										<Link to='/homepage'>
											Back to homepage
										</Link>
									</button>
								</div>
							)
						})
				}
			</div>
		);
	}
}
export default HomePageWithId
