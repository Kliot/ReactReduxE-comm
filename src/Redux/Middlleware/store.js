/*import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3333/';*/

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from "../Reducer";

import cookie from "js-cookie";

const cartItems = cookie.getJSON("cartItems") || [];
const userInfo = cookie.getJSON("userInfo") || null;

const initialState = {
	cart: { cartItems },
	userSignin: { userInfo }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancer(
	applyMiddleware(thunk)
);

const store = createStore(reducer, initialState, middleware);

export default store;

/*export const ApiCall = ({
		url = "http://localhost:3333/",
		endpoint = "",
		method = "get",
		body = {},
		headers
	}) => {
	const getMethod = method.toLowerCase();
	const api = axios.create({
		baseURL: url,
		headers
	})

	return api({method: getMethod, url, endpoint, data: body})
	.then(res)
	.catch(err)

}

export default store => next => action => {
	if(action.type !== "") next(action)

		const onSuccess = (data) => {
			const successAction = {
				data,
				type: action.types.SUCCESS
			}

			next(successAction)
		}

		const onFail = (data) => {
			const successAction = {
				code: data.status,
				type: action.types.FAIL,
				error: data
			}

			next(failAction)
		}
}*/