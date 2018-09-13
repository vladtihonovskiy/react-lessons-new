import React, { Component, Fragment} from "react";
import "./Loader.css"

class Loader extends Component {

	componentWillUnmount(){
		//alert("Close");
	}

	render() {
		return (
			<Fragment>
				<div className="loader"></div>
			</Fragment>
		);
	}
}

export default Loader;
