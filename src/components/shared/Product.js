import React, {useContext} from "react";
import {Link} from "react-router-dom";

//functions
import {shorten, isInCart, quantityCount} from "../../helper/function";
//context
import {CartContext} from "../../context/CartContextProvider";
//Icons
import trashIcon from "../../assets/icons/trash (1).svg";

//Css
import styles from "../../css/Product.module.css";

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img className={styles.CardImage} src={productData.image} alt="product"/>
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price} $`}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productData.id) > 1 &&
                        <button className={styles.smallButton}
                                onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                    {quantityCount(state, productData.id) === 1 &&
                        <button className={styles.smallButton}
                                onClick={() => dispatch({type: "REMOVE-ITEM", payload: productData})}><img
                            src={trashIcon}
                            alt="trash"/>
                        </button>
                    }

                    {
                        isInCart(state, productData.id) ?
                            <button className={styles.smallButton}
                                    onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                            <button onClick={() => dispatch({type: "ADD-ITEM", payload: productData})}>Add To
                                Cart</button>}
                </div>
            </div>
        </div>)
}

export default Product;