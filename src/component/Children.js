import React from "react";


class Children extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		}
	}

	componentWillMount() {
		console.log('componentWillMount');
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps');

		this.setState({
			text: nextProps.text
		});
	}

	onChangeInput(event) {
		this.setState({
			text: event.target.value
		});
	}

	onPrintText() {
		this.props.onPrintText(this.state.text);
	}

	render() {
		return (
			<div>
				<input type="text" value={this.state.text} onChange={this.onChangeInput.bind(this)} style={{marginRight: '5px'}}/>
				<button onClick={this.onPrintText.bind(this)}>Print text</button>
			</div>
		);
	}
}

export default Children;
