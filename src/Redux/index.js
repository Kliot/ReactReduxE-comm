import {createStore} from "redux"

import {appReducer} from "./Reducer"

export const storeCreator = {} => {
	store = createStore(appReducer);
	return store;

}