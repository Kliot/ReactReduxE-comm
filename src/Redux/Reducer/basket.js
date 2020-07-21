import { ADD_PRODUCT_TO_BASKET, GET_PRODUCT_IN_BASKET } from "../Action/types";
import { PRODUCT_LIST_SUCCESS } from '../Action/products';
const initialState = {
	basketCount: 0,
	//cartCost: 0,
	inCart: false,
	addedItems:[],
    total: 0,
	items: [
	{_id:'5ef0940f9fdb522880041966…9Z',__v:0, title: "fff"},
	{_id:'5ef094539fdb522880041967…6Z',__v:0, title: "gfdg"}
	  
	]
}

const basket = (state = initialState, action) => {
	switch(action.type) {
		case ADD_PRODUCT_TO_BASKET: 
		console.log({});
		let addedItem = state.items.find(item=> item.id === action.payload)
        let existed_item = state.addedItems.find(item=> action.payload === item.id)
		console.log(existed_item);
		console.log({...state.addedItems})
		 if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
                inCart: true,
                basketCount: state.basketCount + 1
            }
			return {
				//basketCount: state.basketCount + 1,
				//cartCost: state.cartCost + action.payload.price,
				//data: action.payload,
				//inCart: true
			}
		}

		case GET_PRODUCT_IN_BASKET: 
			return {
				...state
			}
		default: 
			return state;
	}
}

export default basket