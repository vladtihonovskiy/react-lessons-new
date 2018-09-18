import React, { Fragment, Children } from 'react';
import { string } from 'prop-types';
import './Circle.css';


class Box extends React.Component {
	static propTypes = {
		propClassName: string,
		color: string,
		size: string,
	}

	render() {
		// tell React that we want to associate the <input> ref
		// with the `textInput` that we created in the constructor
		//console.log(this.textInputSmartInput);
		const { propClassName, color, size } = this.props;


		return (
				<div className={"container-circle"} style={{
					backgroundColor: color,
					width: size,
					height: size
				}}>
				</div>
		);
	}
}
export default Box
