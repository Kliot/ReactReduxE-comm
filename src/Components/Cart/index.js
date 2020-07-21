/*import React from "react";
import { connect } from "react-redux";


const Cart = ({basketProps}) => {
	console.log(basketProps);

	let productsInCart= [];

	Object.keys(basketProps.addedItems).forEach(function(item){
		console.log(item);
	}) 

	productsInCart = basketProps.addedItems.map( (product, index) => {
		console.log(product);

	})
	//console.log(productsInCart[0]);

	return (
		<div>
			<h3>Cart</h3>
				<div className="product__item">
			      	<h2>{basketProps.addedItems.title}</h2>
				    <div className="product__desc">
				    	{basketProps.addedItems.desc}
				    </div>
			    </div>
		</div>
	);
}

const mapStateToProps = state => ({
	basketProps: state.basketState
});


export default connect(mapStateToProps)(Cart);
*/
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/Action/cartActions";


const Cart = (props) => {

	const cart = useSelector(state => state.cart);
	const { cartItems } = cart;

	const productId = props.match.params.id;
	const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
	const dispatch = useDispatch();
	const removeFromCartHandler = (productId) => {
		dispatch(removeFromCart(productId));
	}
	const checkoutHandler = () => {
		props.history.push("/signin?redirect=shipping")
	}

	useEffect(() => {
		if(productId) {
			dispatch(addToCart(productId, qty));
		}
	}, [])

		return (
		<div>
			<h3>Cart</h3>
			<div>
				<div className="cart__items">
				{
					cartItems.length === 0 ?
					<div>Cart is Empty</div>
					:
					cartItems.map( item => 
						<div>
							<img src={item.image} alt="product"/>
							<div>
								<Link to={"/goods/" + item.product}>{item.title}</Link>
							</div>
							<div>
								Qty: 
								<select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
									{[...Array(item.countInStock).keys()].map(x =>
			                        <option key={x + 1} value={x + 1}>{x + 1}</option>
			                      )}
								</select>
							</div>
							<button type="button" onClick={() => removeFromCartHandler(item.product)}>Delete</button>
							<div>{item.price}</div>
						</div>
					)
				}

			      	
			    </div>
			    <div className="cart-action">
			      <h3>
			        Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
			        :
			         $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
			      </h3>
			      <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
			        Proceed to Checkout
			      </button>

			    </div>
			</div>

		</div>
	);

}


export default Cart;