import { CART_ADD_ITEM, CART_REMOVE_ITEM, GET_PRODUCT_IN_BASKET } from "./types";
import axios from "axios";
import cookie from "js-cookie";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
	try {
		const { data } = await axios.get("/goods/" + productId);
		dispatch({
			type: CART_ADD_ITEM,
			payload: {
				product: data._id,
				title: data.title,
				desc: data.desc,
		      	category: data.category,
		      	image: data.image,
		      	price: data.price,
		      	countInStock: data.countInStock,
		      	qty
			}
		});
		const { cart: { cartItems } } = getState();
		cookie.set("cartItems", JSON.stringify(cartItems));

	}
	catch(error) {

	}
	
}

export const removeFromCart = (productId) => (dispatch, getState)  => {
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: productId
	})
	const { cart: { cartItems } } = getState();
		cookie.set("cartItems", JSON.stringify(cartItems));
}

export const getBasketCount = () => {
	return(dispatch) => {
		console.log("getting all basket");
		dispatch({
			type: GET_PRODUCT_IN_BASKET
		})
	}
}