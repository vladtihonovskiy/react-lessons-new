import createSagaMiddleware from 'redux-saga';
import { compose, createStore, combineReducers, applyMiddleware } from "redux";

import { watchFetchApp } from "./app/app.saga";

import app from "./app/app.reducer";

// import { initialize } from "./app/app.actions";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ app });

const store = createStore(rootReducer, undefined, compose(
	applyMiddleware(sagaMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : (f) => f
));


sagaMiddleware.run(watchFetchApp);
// store.dispatch(initialize());


export default store;
