import React, { Component, Fragment } from 'react';

import { Route, Switch, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import About from "./containers/About";
import HomePage from "./containers/Home";
import HomePageWithId from "./containers/HomePageWithId";
import LoaderRedux from "./containers/LoaderRedux/LoaderRedux";

import Loader from './containers/Loader';
import * as appActions from "./modules/app/app.actions";


class App extends Component {
	state = {
		posts: [],
		isLoading: true
	}

	async componentDidMount() {
		// console.log(this.props.location);
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
			posts: result,
			isLoading: false,
		});

		console.log('Запрос отправлен ?');
	}
	renderLoader =() => {
		const { loading } = this.props;

		if(loading) {
			return <Loader />
		}
	}

  render() {
		const { posts, isLoading } = this.state;

		return (
				<Fragment>
					{this.renderLoader()}
						<Switch>
							<Route exact path={"/"} component={LoaderRedux} />
							<Route exact path={"/homepage"} component={HomePage} />
							<Route path={"/about"} component={About} />
						</Switch>
				</Fragment>
		);
  }
}


function mapStateToProps({ app }) {
	return {
		loading: app.loading,
	};
}

export default withRouter(connect(mapStateToProps, { ...appActions })(App));
