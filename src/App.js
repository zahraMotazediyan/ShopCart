import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";

//components
import Store from "./components/Store";
import ProductDatails from "./components/shared/ProductDatails";

//context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
    return (
        <ProductContextProvider>
            <CartContextProvider>
                <Switch>
                    <Route path="/products/:id" component={ProductDatails}/>
                    <Route path="/products" component={Store}/>
                    <Redirect to="/products"/>
                </Switch>
            </CartContextProvider>
        </ProductContextProvider>
    );
}

export default App;
