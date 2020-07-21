import { combineReducers } from "redux";
import basket from "./basket";
import productListReducer from "./products";
import productDetailsReducer from "./productsDet";
import cartReducer from "./cartReducer";
import UserSinginReducer from "./UserReducer";

export default combineReducers({ 
	basketState: basket,
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userSignin: UserSinginReducer

});

