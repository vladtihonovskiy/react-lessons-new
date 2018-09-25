import thunk from "redux-thunk";
import { compose, createStore, combineReducers, applyMiddleware } from "redux";

import app from "./app/app.reducer";

// import { initialize } from "./app/app.actions";

const rootReducer = combineReducers({ app });

const store = createStore(rootReducer, undefined, compose(
	applyMiddleware( thunk.withExtraArgument()),
	window.devToolsExtension ? window.devToolsExtension() : (f) => f
));

// store.dispatch(initialize());


export default store;
