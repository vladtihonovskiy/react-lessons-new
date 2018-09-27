import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bool, func } from "prop-types";


import Loader from "../Loader";
import * as appActions from "../../modules/app/app.actions";


class LoaderRedux extends Component {
	static propTypes = {
		loading: bool,
		hideLoader: func,
		showLoader: func,
		changeLoader: func,
	}

	onShowLoaderBntClick = () => {
		this.props.showLoader();

	}

	onHideLoaderBntClick = () => {
		this.props.hideLoader();
	}

	onChangeLoaderBtnClick = () => {
		const { loading } = this.props;
		this.props.changeLoader(!loading);
	}

	render() {
		const { loading, name } = this.props;
		console.log(this.props);
		console.log(loading);

		return(
			<Fragment>

				<p> my name is { name}</p>

				<button onClick={this.onShowLoaderBntClick}>Show</button>
				<button onClick={this.onHideLoaderBntClick}>Hide</button>

				<button onClick={this.onChangeLoaderBtnClick}>Change Loader State</button>
			</Fragment>
		)
	}
}

function mapStateToProps({ app }) {
	return {
		loading: app.loading,
		name: app.name
	};
}

export default connect(mapStateToProps, { ...appActions })(LoaderRedux);
