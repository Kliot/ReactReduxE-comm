import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } from "./types";
import axios from "axios";
import cookie from "js-cookie";


export const signin = (email, password) => async (dispatch) => {
  dispatch({ 
  	type: USER_SIGNIN_REQUEST, 
  	payload: { email, password } 
  });
  try {
    const { data } = await axios.post("/users/signin", { email, password });
    dispatch({ 
    	type: USER_SIGNIN_SUCCESS,
    	 payload: data 
    	});
    cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ 
    	type: USER_SIGNIN_FAIL, payload: error.message 
    });
  }
}