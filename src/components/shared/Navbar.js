import React, {useContext} from "react";
import {Link} from "react-router-dom";

//Context
import {CartContext} from "../../context/CartContextProvider";

//Icon
import shopIcon from "../../assets/icons/shop.svg";

//Css
import styles from "../../css/Navbar.module.css";

const Navbar = () => {
    const {state} = useContext(CartContext);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/Cart"> <img src={shopIcon} alt="shopIcon"/></Link>
                    <span> {state.itemsCounter}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;