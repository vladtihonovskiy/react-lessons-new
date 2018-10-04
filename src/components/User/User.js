import React, { Component } from 'react';

import { object } from "prop-types";
import classes from './User.less';

class User extends Component {

	static propTypes = {
		userData: object
	}

	render() {
		const { firstName, lastName, avatar } = this.props.userData.general;

		return (
				<div className={classes.user}>
					<div className={classes.userImageWrapper}>
						<img src={avatar} alt="Cat"/>
					</div>
						<div className={classes.userDescription}>
							{`${firstName} ${lastName}`}
						</div>
				</div>
		);
	}
}

export default User;
