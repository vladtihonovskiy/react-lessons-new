import React, { Component } from 'react';

import { connect } from "react-redux";

import { array, func, any } from "prop-types";

import { FormGroup, FormControl, InputGroup  } from "react-bootstrap";
import classes from './UserDetails.less';

import { postRequest } from "../../api";

import * as userActions from "../../modules/user/user.actions";

class UserDetails extends Component {

	state = {
		selectedBlockId: null,
		firstName: "",
		lastName: "",
		avatarUrl: "",
	}

	static propTypes = {
		usersData: array,
		selectUserIndex: any,
		getAllUserSaga: func
	}

	onInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onConfirmBtnClick = async() => {
		const { firstName, lastName, avatarUrl } = this.state;

		const result = await postRequest("/getUsersDataBase",
			{ firstName, lastName, avatarUrl }
			);
		this.props.getAllUserSaga();
	}

	render() {
		const { usersData, selectUserIndex } = this.props;
		const selectedUserDataIndex = usersData.findIndex((user) => {
			return user._id === selectUserIndex;
		});

		return (
			<div className={classes.userDetails}>
				{
					selectUserIndex !==null ?
					<div>
						<div>
							<div className={classes.userImageWrapper}>
								<img src={usersData[selectedUserDataIndex].general.avatar} alt="Cat"/>
							</div>
							<div className={classes.userDescription}>
								{`${usersData[selectedUserDataIndex].general.firstName}
								 ${usersData[selectedUserDataIndex].general.lastName}`}
							</div>
						</div>
					</div>
					:
					<React.Fragment>
						<InputGroup>
							<InputGroup.Addon>firstName</InputGroup.Addon>
							<FormControl onChange={this.onInputChange} name={"firstName"} type="text" />
						</InputGroup>

						<InputGroup>
							<InputGroup.Addon>lastName</InputGroup.Addon>
							<FormControl onChange={this.onInputChange}  name={"lastName"} type="text" />
						</InputGroup>

						<InputGroup>
							<InputGroup.Addon>avatarUrl</InputGroup.Addon>
							<FormControl onChange={this.onInputChange} name={"avatarUrl"} type="text" />
						</InputGroup>

						<button onClick={this.onConfirmBtnClick}> Confirm </button>
					</React.Fragment>
				}
			</div>
		);
	}
}


function mapStateToProps({ user }) {
	return {
		usersData: user.users,
		selectUserIndex: user.selectUser
	};
}

export default connect(mapStateToProps, { ...userActions })(UserDetails);
