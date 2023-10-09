import React, {useContext} from "react";

//Context
import {CartContext} from "../../context/CartContextProvider";

//functions
import {shorten} from "../../helper/function";

//Icons
import trashIcon from "../../assets/icons/trash (1).svg";

//Css
import styles from "../../css/Cart.module.css";


const Cart = (props) => {

    const {dispatch} = useContext(CartContext);
    const {image, title, price, quantity} = props.data;

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product"/>
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {quantity > 1 ?
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-
                    </button> :
                    <button onClick={() => dispatch({type: "REMOVE-ITEM", payload: props.data})}>
                        <img src={trashIcon} alt="trash"/>
                    </button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+
                </button>

            </div>
        </div>
    );
}

export default Cart;