import axios from "axios";

const BASE_URL="https://fakestoreapi.com";

const getProducts=async ()=>{
    const response=await axios.get(`${BASE_URL}/Products`)
    console.log(response)
    return response.data
}


export {getProducts};

// **// Await can also be used if Async is used along with the function declaration.***
