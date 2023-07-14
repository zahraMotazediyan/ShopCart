import React, {useState, useEffect} from "react";

import {getProducts} from "../services/api";

const ProductContextProvider = () => {

    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setProduct(await getProducts())
        }
        fetchAPI();

    }, [])


    return (
        <div>

        </div>
    )
}

export default ProductContextProvider;