import { Link } from "react-router-dom";

function Footer(props){
    return(
        <div className="Footer">
            <Link to="/">
                <div className="page">
                    <img src="https://cdn1.iconfinder.com/data/icons/shopping-346/24/happy-bag-cart-shop-shopping-64.png" alt="shop" />
                    <p>Shop</p>
                </div>
            </Link>
            <Link to="Product">
                <div className="page">
                    <img src="https://cdn4.iconfinder.com/data/icons/cleaning-4/56/any-solvent-except-tetrachlorethylene-washing-64.png" alt="Product" />
                    <p>Product</p>
                </div>
            </Link>
            <Link to="Cart">
                <div className="page">
                    <img src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/cart_shop_buy_retail-64.png" alt="Cart" />
                    <p>Cart</p>
                </div>
            </Link>
            <Link to="Starred">
                <div className="page">
                    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-star-outline-64.png" alt="Starred" />
                    <p>Starred</p>
                </div>
            </Link>
            <Link to="Chat">
                <div className="page">
                    <img src="https://cdn2.iconfinder.com/data/icons/squircle-ui/32/Chat-64.png" alt="Chat" />
                    <p>Chat</p>
                </div>
            </Link>
        </div>
    )
}
export default Footer;