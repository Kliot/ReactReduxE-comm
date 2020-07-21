import { CART_ADD_ITEM, CART_REMOVE_ITEM, GET_PRODUCT_IN_BASKET } from "../Action/types";

function cartReducer(state= {cartItems: []}, action){
	switch (action.type) {
	    case CART_ADD_ITEM:
	    const item = action.payload;
	    const product = state.cartItems.find(x=> x.product ===item.product);
	    if(product) {
	    	return { 
	    		cartItems: 
	    			state.cartItems.map(x=> x.product ===product.product?item: x)
	    	}
	    }
	    return { cartItems: [...state.cartItems, item] };
	    case CART_REMOVE_ITEM: 
	    	return { 
	    		cartItems: 
	    			state.cartItems.filter(x=> x.product !==action.payload)
	    	}
	    case GET_PRODUCT_IN_BASKET: 
			return {
				...state
			}
	    default:
	      return state;
	  }

}


export default cartReducer