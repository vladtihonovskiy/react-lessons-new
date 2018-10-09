import React, { Component } from 'react';

import { connect } from "react-redux";

import { array, func, any } from "prop-types";

import { FormGroup, FormControl, Glyphicon  } from "react-bootstrap";
import classes from './UserDetails.less';

import * as userActions from "../../modules/user/user.actions";

class UserDetails extends Component {

	state = {
		selectedBlockId: null
	}

	static propTypes = {
		usersData: array,
		selectUserIndex: any,
	}

	render() {
		const { usersData, selectUserIndex } = this.props;

		return (
			<div className={classes.userDetails}>
				{
					selectUserIndex !==null &&
					<div>
						<div>
							<div className={classes.userImageWrapper}>
								<img src={usersData[selectUserIndex].general.avatar} alt="Cat"/>
							</div>
							<div className={classes.userDescription}>
								{`${usersData[selectUserIndex].general.firstName}
								 ${usersData[selectUserIndex].general.lastName}`}
							</div>
						</div>
					</div>
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
