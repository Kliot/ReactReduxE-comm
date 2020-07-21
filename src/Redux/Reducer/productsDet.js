import { PRODUCT_DETAILS_REQUEST,
 PRODUCT_DETAILS_SUCCESS, 
 PRODUCT_DETAILS_FAIL} from "../Action/types";
import axios from "axios";

function productDetailsReducer(state= {product: {}}, action){
	switch (action.type) {
	    case PRODUCT_DETAILS_REQUEST:
	      return { loading: true};
	    case PRODUCT_DETAILS_SUCCESS:
	      return { loading: false, product: action.payload };
	    case PRODUCT_DETAILS_FAIL:
	      return { loading: false, error: action.payload }
	    default:
	      return state;
	  }

}

export default  productDetailsReducer 
