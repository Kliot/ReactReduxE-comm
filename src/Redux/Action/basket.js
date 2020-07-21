import { ADD_PRODUCT_TO_BASKET } from "./types";
export const selectItem = (item) => ({type: ADD_PRODUCT_TO_BASKET, item})
export const addBasket= (product) => {
	return(dispatch) => {
		console.log("added" + product);
		dispatch({
			type: ADD_PRODUCT_TO_BASKET,
			payload: product
		})
	}
}
