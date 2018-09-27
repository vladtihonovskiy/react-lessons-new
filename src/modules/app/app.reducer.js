import { createReducer } from "redux-act";

import * as appActions from "./app.actions";


const initialState = {
	loading: true,
	name: "",
	posts:[],
	fetchAllDataStatus: "",
	failureMessage: "",
	fetchUserDataStatus: "",
	user:[]
};

const reducer = {
	[appActions.showLoader]: (state) => ({
		...state,
		loading: true
	}),

	[appActions.hideLoader]: (state) => ({
		...state,
		loading: false
	}),
	[appActions.changeLoader]: (state, value) => ({
		...state,
		loading: value
	}),

	[appActions.fetchAllDataStart]: (state) => ({
		...state,
		fetchAllDataStatus: "pending"
	}),

	[appActions.fetchAllDataSuccess]: (state, data) => ({
		...state,
		fetchAllDataStatus: "success",
		posts: data,
	}),

	[appActions.fetchAllDataFailure]: (state, failure) => ({
		...state,
		fetchAllDataStatus: "failure",
		failureMessage: failure
	}),

	[appActions.fetchUserStart]: (state) => ({
		...state,
		fetchUserDataStatus: "pending"
	}),

	[appActions.fetchUserSuccess]: (state, data) => ({
		...state,
		fetchUserDataStatus: "success",
		user: data,
	}),

	[appActions.fetchUserFailure]: (state, failure) => ({
		...state,
		fetchUserDataStatus: "failure",
		failureMessage: failure
	}),
};


export default createReducer(reducer, initialState);
