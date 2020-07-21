import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { getBasketCount } from "../../Redux/Action/cartActions"
import { Link } from "react-router-dom";
//import "./HeaderBlock.scss";

const Nav = (props) => {
	console.log(props);

	const userSignin = useSelector((state) => state.userSignin);
  	const { userInfo } = userSignin;
  	console.log(userInfo)

	useEffect(() => {
		getBasketCount();
	}, [])
	return (
		<header>
			<h3>Nav</h3>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li>{userInfo ? (
		              <Link to="/profile">{userInfo.email}</Link>
		            ) : (
		              <Link to="/signin">Sign In</Link>
		            )}
		        </li>
				<li><Link to="/cart">Cart 	<span>{props.basketProps.cartItems.length}</span></Link></li>
			</ul>
		</header>
	);
}

const mapStateToProps = state => ({
	basketProps: state.cart
})

export default connect(mapStateToProps, { getBasketCount })(Nav);