import React, { Fragment, Children } from 'react';
import { string } from 'prop-types';
import './Box.css';


class Box extends React.Component {

	state = {
		circleIndex: null
	}

	static propTypes = {
		propClassName: string,
		color: string,
		width: string,
		height: string
	}

	renderChildren() {
		const children = Children.toArray(this.props.children);
		if (children.length !== 0) {
			children.map(child => {
				console.log(child)
			})
		}
	}



	render() {
		// tell React that we want to associate the <input> ref
		// with the `textInput` that we created in the constructor
		//console.log(this.textInputSmartInput);
		const { propClassName, color, width, height } = this.props;


		return (
			<Fragment>
				<div style={{
					backgroundColor: color,
					width: width,
					height: height
				}}>

					{ this.props.children }
					{/*{ this.renderChildren() }*/}
				</div>
			</Fragment>
		);
	}
}
export default Box
