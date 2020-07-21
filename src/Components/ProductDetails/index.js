import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { connect } from "react-redux";
import { detailsProduct } from "../../Redux/Action/productsDet";
import { addToCart } from "../../Redux/Action/cartActions";
//import data from "../../data";

//import "./HeaderBlock.scss";

const ProductDesc = (props) => {

	const [qty, setQty] = useState(1);
	const productDetails = useSelector(state => state.productDetails);
	const { product, loading, error } = productDetails;
	const dispatch = useDispatch();

	    useEffect(() => {
	      dispatch(detailsProduct(props.match.params.id));
	      return () => {

	      };
	    }, []);

	    /*const handleAddToCart = () => {
	    	props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
	    }*/

	return (  loading? <div>Loading...</div> :
    error? <div>{error}</div> :
		<div className="details">
			<div className="product">
				<div className="product__item">
					<h2>{product.title}</h2>
				    <ul className="product__desc">
				    	<li>{product.desc}</li>
				    	<li>category: {product.category}</li>
				    	<li>price: {product.price}</li>
				    	<li>company:{product.company}</li>
				    	<li>rating: {product.rating}</li>
				    	<li>num {product.numReviews}</li>
				    </ul>
				</div>
			</div>
			<div className="details-action">
              <ul>
                <li>Price: {product.price}</li>
                <li>
                  Status:  {product.countInStock > 0 ? "In Stock" : "Unavailable"}
              
                </li>
                <li>
                  Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
	                  {[...Array(product.countInStock).keys()].map(x=> 
	                  	<option  key={x+1} value={x+1}>{x+1}</option>
	                  	)}
                  </select>
                </li>
                {product.countInStock > 0 && 
				    	<button onClick={() => props.addToCart(props.match.params.id, qty)} type="button" className="addToCard">Buy</button>
				    }

              </ul>
            </div>
          </div>
	);
}

//export default ProductDesc;
export default connect(null, { addToCart })(ProductDesc);