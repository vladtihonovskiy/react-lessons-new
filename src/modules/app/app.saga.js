import * as appAction from "./app.actions";
import {
	showLoader,
	fetchAllDataFailure,
	hideLoader,
	fetchAllDataSuccess,
	fetchUserFailure,
	fetchUserSuccess
} from "./app.actions";
import { takeEvery, put, select } from "redux-saga/effects";

function* fetchAllData() {
	put(showLoader());
	console.log("saga fetch data");
	try {
		let result = yield fetch('https://jsonplaceholder.typicode.com/posts');
		if(result.status === 404) {
			yield put(fetchAllDataFailure("Not found page"));
		}else {
			result = yield result.json();

			yield put(fetchAllDataSuccess(result));
			yield put(hideLoader());
		}
	}
	catch (e) {
		yield put(fetchAllDataFailure(e));
		yield put(hideLoader());
	}
}


function* fetchUser(data) {
	yield put(showLoader());

	try {
		const id = data.payload.id;
		let result = yield fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
		if(result.status === 404) {
			yield put(fetchUserFailure("Not found page"));
		}else {
			result = yield result.json();
			yield put(fetchUserSuccess(result));
			yield put(hideLoader());
		}
	}
	catch (e) {
		yield put(fetchUserFailure(e));
		yield put(hideLoader());
	}
}



export function* watchFetchApp() {
	yield takeEvery(appAction.fetchAllDataSaga, fetchAllData);
	yield takeEvery(appAction.fetchUserSaga, fetchUser);
}
