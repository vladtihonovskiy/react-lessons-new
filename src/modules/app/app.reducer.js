import { createReducer } from "redux-act";

import * as appActions from "./app.actions";


const initialState = {
	loading: false,
	name: ""
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
		loading: value,
	}),
};


export default createReducer(reducer, initialState);
