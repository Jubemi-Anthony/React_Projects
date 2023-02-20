import "./Cart.css"

function Cart({
    cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handleCartClearance
}){

    const totalPrice = cartItems.reduce((price, item)=> price + item.quantity * item.price, 0)
    return(
        <div className="cart-items">
            <h2 className="header">Cart Items</h2>
            <div className="clear-cart">
                {cartItems.length >=1 &&(
                    <button onClick={handleCartClearance}>Clear Cart</button>
                )}
            </div>
            {cartItems.length === 0 && (
                <p className="empty">No items are added.</p>
            )}
            <div>
                {cartItems.map((item)=>(
                    <div key={item.id} className='cart-items-list'>
                        <img src={item.image} alt={item.name} />
                        <div className="gather">
                            <p className="name">{item.name}</p>
                            <div className="functions">
                                <button className="add" onClick={()=> handleAddProduct(item)}>+</button>
                                <button className="remove" onClick={()=> handleRemoveProduct(item)}>-</button>
                            </div>
                            <p>{item.quantity} * ${item.price}</p>
                        </div>
                    </div>
                ))}
                <div className="total">
                    <p>Total Price</p>
                    <p>${totalPrice}</p>
                </div>
            </div>
        </div>
    )
}
export default Cart;