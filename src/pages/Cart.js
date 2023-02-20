import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

function Cart({cartItems, setHide, handleAddProduct, handleRemoveProduct, handleCartClearance, starItems}){
    const totalPrice = cartItems.reduce((price, item)=> price + item.quantity * item.price, 0)
    const [searchCart, setSearchCart] = useState("");
    return(
        <div className="Cart">
            <div className="container">
                <Header
                     setHide={setHide}
                     icon = "https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/cart_shop_buy_retail-64.png"
                     setSearchItem = {setSearchCart}
                    />
                <section>
                <div className="clear-cart">
                    {cartItems.length >=1 &&(
                        <button onClick={handleCartClearance}>Clear Cart</button>
                    )}
                </div>
                    {cartItems.length === 0 && 
                    <div className="empty-cart">
                        Cart is empty
                        <img src="https://cdn2.iconfinder.com/data/icons/e-commerce-643/24/empty_cart_retail_buy_market_cancel_order_supermarket-64.png" alt="empty cart"></img>
                        <Link to="/Product"><Button text={'Explore'}/></Link>
                    </div>}
                    <div className="cartItems">
                        {cartItems.filter((cartItem) =>{
                            if(searchCart === ""){
                                return cartItem;
                            }else if(cartItem.name.toLowerCase().includes(searchCart.toLowerCase())){
                                return cartItem;
                            }
                        }).map((item)=>(
                            <div key={item.id} className="cart-item">
                                <div className="image-holder">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-name">
                                    <p className="name">{item.name}</p>
                                    <p className="price">${item.price}</p>
                                </div>
                                <div className="cart-functions">
                                    <button className="add" onClick={()=> handleAddProduct(item)}>+</button>
                                    <p>{item.quantity}</p>
                                    <button className="remove" onClick={()=> handleRemoveProduct(item)}>-</button>
                                </div>
                                <div className="cart-price">
                                    <p>${item.quantity * item.price}</p>
                                </div>
                            </div>
                        ))}
                        {cartItems.length > 0 &&(<div className="totalA">
                           <div className="total">
                            <div className="up">
                                    <p>
                                        <span>Total Price</span>
                                        <span>{cartItems.length} items</span>
                                    </p>
                                    <p>${totalPrice}</p>
                                </div>
                                <button>Checkout</button>
                           </div>
                        </div>)}
                    </div>
                </section>
            </div>
            <Footer cartItems= {cartItems} starItems= {starItems}/>
        </div>
    )
}
export default Cart;