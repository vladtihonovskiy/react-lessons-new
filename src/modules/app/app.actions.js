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
			console.log(result);
			dispatch(fetchAllDataSuccess(result));
			dispatch(hideLoader());
		}
	}
	catch (e) {
		dispatch(fetchAllDataFailure(e));
		dispatch(hideLoader());
	}

	// return api.auth.registration(firstName, lastName, email, password)
	// .then((response) => {
	// 	const user = {
	// 		email: response.data.email,
	// 		first_name: response.data.first_name,
	// 		last_name: response.data.last_name,
	// 	};
	//
	// 	dispatch(registrationSuccess(user));
	// 	dispatch(addToLocalStorage("user", user));
	// })
	// .catch((error) => {
	// 	const errorText = error.response.data.errorMessage;
	// 	dispatch(registrationFailure(errorText));
	// 	dispatch(errorMessage({ text: errorText }));
	// });
};
