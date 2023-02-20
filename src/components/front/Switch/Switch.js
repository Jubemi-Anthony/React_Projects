import { Routes, Route } from "react-router-dom"
import Products from "../Products/Products"
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";

function Switch({
    productItems,
    cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handleCartClearance
}){
    return(
        <div>
            <Routes>
                <Route path= "/" element = {<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
                <Route path= "/signup" element = {<Signup/>}/>
                <Route path= "/cart"
                element = {<Cart cartItems={cartItems}
                handleCartClearance={handleCartClearance}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                />}
                />
            </Routes>
        </div>
    )
}
export default Switch;