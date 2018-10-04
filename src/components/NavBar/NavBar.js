import React, { Component } from 'react';

import { FormGroup, FormControl, Glyphicon  } from "react-bootstrap";
import User from "../User/User";
import classes from './NavBar.less';
import {apiUrl} from "../../constants/config";

class NavBar extends Component {

	state = {
		usersData: []
	}

	componentDidMount() {
		fetch(`${apiUrl}/getAllUsers`, {
			method: 'post',
		}).then((response) => {
			return response.json();
		}).then((data) => {
			console.log(data);
			this.setState({
				usersData: data
			})
		});
	}


	render() {
		const { usersData } = this.state;

		return (
				<div className={classes.navBar}>
					<div className={classes.navBarInputWrapper}>
						<p className={classes.navBarInputLabel}> Поиск </p>
						<FormGroup className={classes.navBarInput}>
							<FormControl type="text" />
							<FormControl.Feedback>
								<Glyphicon glyph="search" />
							</FormControl.Feedback>
						</FormGroup>
					</div>

					{ usersData.map((user) => {
						return <User userData={user}/>
					})
					}
				</div>
		);
	}
}

export default NavBar;
