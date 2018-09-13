import React from "react"
import About from "../About";

class HomeShowId extends React.Component {
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		// console.log("this.props" ,this.props);
	}

	render() {
		return(
			<div>My id {this.props.match.params.id}
				<p>
					<About name={"Денис"} city={"ZP"} />
				</p>
			</div>
		)

	}
}
export default HomeShowId
