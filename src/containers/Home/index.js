import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { array } from "prop-types";

import "./index.css"
import { connect } from "react-redux";
import * as appActions from "../../modules/app/app.actions";
class HomePage extends Component {
	static propTypes = {
		posts: array
	}

	static defaultProps = {
		posts: []
	}

	returnTitle = (obj) => {
		const { title, id } = obj;

		return(
			<div key={id} className={"post-wrapper"} >
				<Link to={`/homepage/${id}`} >{ title }</Link>
			</div>
		)
	}

	render() {
		const { posts } = this.props;

		return(
			<div>
				HomePage
				<ul>
					{ posts.length !== 0 &&
						posts.map(
								post => { return this.returnTitle(post) }
							)
					}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ app }) {
	return {
		posts: app.posts,
	};
}


export default connect(mapStateToProps, { ...appActions })(HomePage);
