/*import {createAsyncAction} from 'Helpers/asyncAction'
import {apiCall} from './store'

export const SELECT_PRODUCT = "SELECT_PRODUCT"
export const selectPdoductAction = (product) => {
	type: SELECT_PRODUCT,
	product
}

export const GET_PRODUCT = "GET_PRODUCT"
export const getProductAction = () => {
	return apiCall({
		type: GET_PRODUCT,
		endpoint: "/goods"
	})
	
}*/
import { PRODUCT_LIST_REQUEST,
 PRODUCT_LIST_FAIL,
 PRODUCT_LIST_SUCCESS } from "./types";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
	try {
		dispatch({ 
			type: PRODUCT_LIST_REQUEST
		});
		const { data } = await axios.get("/goods/");
		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data
		})
	}
	catch(error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload: error.message
		})
	}
	
}

/*export const detailsProduct = (productId) => async (dispatch) => {
	try {
		dispatch({ 
			type: PRODUCT_DETAILS_REQUEST,
			payload: productId
		});
		const { data } = await axios.get("/goods" + productId);
		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data
		})
	}
	catch(error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload: error.message
		})
	}
	
}*/