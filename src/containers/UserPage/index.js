import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import { array, bool } from "prop-types";
import "./index.css"
import {connect} from "react-redux";
import * as appActions from "../../modules/app/app.actions";
class UserPage extends Component {
	static propTypes = {
		user: array.isRequired,
		loading: bool
	}

	static defaultProps = {
		user: null
	}

	state = {
		inputNumber: 0
	}

	handleInputChange = (event) => {
		this.setState({
			inputNumber: event.target.value
		})
	}

	onSubmitBtnClick = () => {
		const { inputNumber } = this.state;

		this.props.fetchUser(inputNumber);
	}


	renderUser = () => {
		const { user } = this.props;

		const {id, name, email} = user;

		return (
				<div key={ id } className={"user-wrapper"}>
					<h1>{ name }</h1>
					<h4>{ email }</h4>

					<button>
						<Link to='/homepage'>
							Back to homepage
						</Link>
					</button>
				</div>
		);
	}

	render() {
		const { inputNumber } = this.state;
		const { user } = this.props;

		return (
			<Fragment>
				<input onChange={this.handleInputChange} value={inputNumber} type="number"/>
				<button onClick={this.onSubmitBtnClick}>Submit</button>

				{
					user.length !== 0 &&
					this.renderUser()
				}
			</Fragment>
		);
	}
}

function mapStateToProps({ app }) {
	return {
		user: app.user,
		loading: app.loading
	};
}

export default connect(mapStateToProps, { ...appActions })(UserPage);
