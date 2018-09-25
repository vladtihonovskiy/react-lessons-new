import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import { array } from "prop-types";
import "./index.css"
class HomePageWithId extends Component {
	static propTypes = {
		post: array.isRequired
	}
	// state = {
	// 	jsonMass: [],
	// 	isLoading: true
	//
	// }

	// async componentDidMount() {
	// 	const id = this.props.match.params.id;
	// 	const resultToMap = new Array();
	//
	// 	let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	// 	result = await result.json();
	//
	// 	this.setState({
	// 		siLoading: false
	// 	});
	//
	// 	resultToMap.push(result);
	//
	// 	this.setState({
	// 		jsonMass: resultToMap,
	// 		isLoading: false
	// 	});
	//
	// 	console.log('Запрос отправлен ?');
	// }

	render() {
		const { post } = this.props;

		const { id, title, body } = post;
		console.log(this.props);
		return(
			<div>
				{/*{*/}
					{/*isLoading ?*/}
						{/*<Loader />*/}
						{/*:*/}
						{/*this.state.jsonMass.map((item) => {*/}
							{/*return(*/}
								{/*<div key={item.id} className={"post-wrapper"} >*/}
									{/*<h1 >{ item.title }</h1>*/}
									{/*<h4>{ item.body }</h4>*/}

									{/*<button>*/}
										{/*<Link to='/homepage'>*/}
											{/*Back to homepage*/}
										{/*</Link>*/}
									{/*</button>*/}
								{/*</div>*/}
							{/*)*/}
						{/*})*/}
				{/*}*/}

				<div key={id} className={"post-wrapper"} >
					<h1 >{ title }</h1>
					<h4>{ body }</h4>

					<button>
						<Link to='/homepage'>
							Back to homepage
						</Link>
					</button>
				</div>
			</div>
		);
	}
}
export default HomePageWithId
