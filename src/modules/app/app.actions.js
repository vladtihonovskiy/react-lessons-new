import { createAction } from "redux-act";


export const showLoader = createAction("show loader");
export const hideLoader = createAction("hide loader");
export const changeLoader = createAction("change loader");

export const fetchAllDataStart =  createAction("fetch all data start");
export const fetchAllDataSuccess =  createAction("fetch all data success");
export const fetchAllDataFailure =  createAction("fetch all data failure");


export const fetchAllData = () => async(dispatch, getState) => {
	dispatch(showLoader());
	dispatch(fetchAllDataStart());
	try {

		let result = await fetch('https://jsonplaceholder.typicode.com/posts');
		if(result.status === 404) {
			dispatch(fetchAllDataFailure("Not found page"));
		}else {
			result = await result.json();
			dispatch(fetchAllDataSuccess(result));
			dispatch(hideLoader());
		}
	}
	catch (e) {
		dispatch(fetchAllDataFailure(e));
		dispatch(hideLoader());
	}
};


export const fetchUserStart =  createAction("fetch user start");
export const fetchUserSuccess =  createAction("fetch user success");
export const fetchUserFailure =  createAction("fetch user failure");


export const fetchUser = (id) => async(dispatch, getState) => {
	dispatch(showLoader());
	dispatch(fetchUserStart());
	try {

		let result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
		if(result.status === 404) {
			dispatch(fetchUserFailure("Not found page"));
		}else {
			result = await result.json();
			dispatch(fetchUserSuccess(result));
			dispatch(hideLoader());
		}
	}
	catch (e) {
		dispatch(fetchUserFailure(e));
		dispatch(hideLoader());
	}
};
