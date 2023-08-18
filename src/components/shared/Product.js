import React, {useContext} from "react";
import {Link} from "react-router-dom";

//functions
import {shorten, isInCart} from "../../helper/function";
//context
import {CartContext} from "../../context/CartContextProvider";

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (<div>
        <img src={productData.image} alt="product" style={{width: "200px"}}/>
        <h3>{shorten(productData.title)}</h3>
        <p>{productData.price}</p>
        <div>
            <Link to={`/products/${productData.id}`}>Details</Link>
            <div>
                {
                    isInCart(state, productData.id) ?
                    <button onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                    <button onClick={() => dispatch({type: "ADD-ITEM", payload: productData})}>Add To
                        Cart</button>}
            </div>
        </div>
    </div>)
}

export default Product;