/* eslint-disable no-unused-vars,import/no-duplicates */
import * as userAction from "./user.actions";
import { takeEvery, put, select } from "redux-saga/effects";

// import customToastify from "../../customFunction/customToastify";
import { postRequest } from "../../api";
import { loader } from "../../components/Loader/Loader";

function *getAllUser() {
	try {
		const result = yield postRequest("/getAllUsers", {
		});

		yield put(userAction.setAllUser(result));
	} catch (error) {
		if (!error) {
			console.log(error);
		} else {
		}
	}
}



export function* watchUser() {
	yield takeEvery(userAction.getAllUserSaga, getAllUser);
}


