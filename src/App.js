import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loader from "./component/Loader";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false
			});
		},2000)
	}

	render() {
		const { isLoading } = this.state;
		return (
			<div>
				{isLoading ? <Loader /> : "Hi"}
			</div>
		);
	}
}
export default App
