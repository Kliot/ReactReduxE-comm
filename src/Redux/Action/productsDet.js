import {  PRODUCT_DETAILS_REQUEST,
 PRODUCT_DETAILS_SUCCESS, 
 PRODUCT_DETAILS_FAIL} from "./types";
import axios from "axios";

export const detailsProduct = (productId) => async (dispatch) => {
	try {
		dispatch({ 
			type: PRODUCT_DETAILS_REQUEST,
			payload: productId
		});
		const { data } = await axios.get("/goods/" + productId);
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
}