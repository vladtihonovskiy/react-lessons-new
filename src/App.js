import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";

class App extends React.Component {
	constructor(props) {
		super(props);

		//this.textIputSmartInput = React.createRef();
		// create a ref to store the textInput DOM element
	}

	focusTextInput = () => {
		// Explicitly focus the text input using the raw DOM API
		// // Note: we're accessing "current" to get the DOM node
		// console.log(this.refs);
		// this.refs.textInput.focus();
		//
		// console.log(this.refs.textInput.value)
		// //this.textIputSmartInput.current.focus();
	}

	render() {
		// tell React that we want to associate the <input> ref
		// with the `textInput` that we created in the constructor
		return (
			<div>
				<input
					type="text"
					ref={"textInput"} />

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
