import { createReducer } from "redux-act";

import * as actions from "./user.actions";


const initialState = {
	users:[],
	usersGetStatus: "",
	selectUser: null
};

const reducer = {
	[actions.getAllUserSaga]: (state) => ({
		...state,
		usersGetStatus: "pending"
	}),
	[actions.setAllUser]: (state, usersData) => ({
		...state,
		usersGetStatus: "success",
		users: usersData
	}),
	[actions.selectUser]: (state, selectUser) => ({
		...state,
		selectUser
	}),
	[actions.unselectUser]: (state) => ({
		...state,
		selectUser: null
	}),
};


export default createReducer(reducer, initialState);
