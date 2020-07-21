/*import {SELECT_PRODUCT } from "./Action/products";
const initialState = {
	data: [
		//json data 
	],
	selectedProduct: null
}

export const products = (state = initialState, action) => {
	switch (action, type) {
		case "SELECT_PRODUCT": {
			return {
				...state, 
				selectedProduct: action.product
			}
		},
		default: 
			return state
	}
}
*/

import { PRODUCT_LIST_REQUEST,
 PRODUCT_LIST_FAIL,
 PRODUCT_LIST_SUCCESS} from "../Action/types";

function productListReducer(state= {products: []}, action){
	switch (action.type) {
	    case PRODUCT_LIST_REQUEST:
	      return { loading: true, products: [] };
	    case PRODUCT_LIST_SUCCESS:
	      return { loading: false, products: action.payload };
	    case PRODUCT_LIST_FAIL:
	      return { loading: false, error: action.payload }
	    default:
	      return state;
	  }

}


/*function productDetailsReducer(state= {product: {}}, action){
	switch (action.type) {
	    case PRODUCT_DETAILS_REQUEST:
	      return { loading: true};
	    case PRODUCT_DETAILS_SUCCESS:
	      return { loading: false, products: action.payload };
	    case PRODUCT_DETAILS_FAIL:
	      return { loading: false, error: action.payload }
	    default:
	      return state;
	  }

}*/

//export default { productListReducer, productDetailsReducer }

export default productListReducer