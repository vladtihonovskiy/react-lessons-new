import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import Box from "./Box/Box";
import Circle from "./Circle/Circle";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.textInputSmartInputCreating = React.createRef();

		this.text = "";
		// create a ref to store the textInput DOM element
		//this.textInputSmartInput = 5;
	}

	state = {
		text: ""
	}

	componentDidMount() {
		this.refs.textInputSmartInput.value = 15;
		this.refs.textInputSmartInput.focus();

		this.setState({
			text:  this.refs.textInputSmartInput.value
		}, () => {
			console.log("state inside callback", this.state.text);
		});
		console.log("state outside callback", this.state.text);


		this.textInputSmartInputCreating.current.value = "Reaf save on constructor";
	}

	focusTextInput = () => {

		console.log(this.refs);

		this.setState({
			text:  this.refs.textInputSmartInput.value
		});
		// Explicitly focus the text input using the raw DOM API
		// // Note: we're accessing "current" to get the DOM node
		// console.log(this.refs);
		// this.refs.textInput.focus();

		this.textInputSmartInputCreating.current.value = this.refs.textInputSmartInput.value;
	}

	render() {
		// tell React that we want to associate the <input> ref
		// with the `textInput` that we created in the constructor
		//console.log(this.textInputSmartInput);
		return (
			<div>


				<Box color={"red"} width={"150px"} height={"150px"}>
					<Box color={"blue"} width={"15px"} height={"15px"} />
					<Box color={"black"} width={"50px"} height={"50px"} />
					<Circle color={"yellow"} size={"50px"} />
				</Box>

				<input
					type="text"
					onChange={this.focusTextInput}
					ref={"textInputSmartInput"} />

				<input
					type="text"
					onChange={this.focusTextInput}
					ref={this.textInputSmartInputCreating} />

				<input type="text" value={this.state.text} />
				<input
					type="button"
					value="Focus the text input"
					onClick={this.focusTextInput}
				/>
			</div>
		);
	}
}
export default App
