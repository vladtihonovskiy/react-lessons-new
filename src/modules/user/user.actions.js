import { createAction } from "redux-act";


// initialize

export const getAllUserSaga = createAction("get all user");
export const setAllUser = createAction("set all user");
export const selectUser = createAction("select user");
export const unselectUser = createAction("unselect user");
