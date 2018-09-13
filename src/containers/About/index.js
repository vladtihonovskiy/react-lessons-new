import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name  } = this.props;
		console.log("this.props", this.props);
		return(
			<div>Меня звать ) { name } </div>
		)

	}
}

export default About
