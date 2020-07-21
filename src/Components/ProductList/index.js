import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductItem } from "../";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { listProducts } from "../../Redux/Action/products";
import {useSelector, useDispatch} from "react-redux";

const ProductList = () => {
/*const [products, setProduct] = useState([]);*/
const productList = useSelector(state => state.productList);
const { products, loading, error } = productList;
const dispatch = useDispatch();

    useEffect(() => {
      /*const fetchData = async () => {
        const {data} = await axios.get("/goods");
        setProduct(data);
      }
      fetchData();*/
      dispatch(listProducts());
      return () => {

      };
    }, [])
    /* <li key={item._id}>
          <em>{item.title}</em>
        </li>*/
  return (
    loading? <div>Loading...</div> :
    error? <div>{error}</div> :
    <ul>
      {products.map(product=> (
       
        <ProductItem key={product.id} {...product} />
        
       
      ))}
    </ul>
  );
}

export default ProductList;