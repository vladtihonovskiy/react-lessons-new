import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";

import Children from "./component/Children";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		}
	}

	handlePrintText(text) {
		this.setState({
			text: text
		});
	}

	render() {
		return(
			<div>
				<h1>Test</h1>
				<div style={{padding: '10px 20px', width: '300px', textAlign: 'center', border: '1px dashed #cccccc'}}>{(this.state.text!='') ? this.state.text : <span>&nbsp;</span>}</div>
				<br />
				<Children
					text={this.state.text}
					onPrintText={this.handlePrintText.bind(this)}
				/>
			</div>
		);
	}
}
export default App
