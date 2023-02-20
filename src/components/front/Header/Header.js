import { Link } from "react-router-dom";
import "./Header.css";

function Header({cartItems}){
    return(
        <div>
            <header className="header">
                <h1>
                    <Link to ="/" className="Logo">
                        Messi Pic Shop
                    </Link>
                </h1>
                <nav>
                    <ul className="header-links">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/signup'>Signup</Link>
                        </li>
                        <li>
                            <Link to='/cart'>Cart <span className="length">{cartItems.length === 0 ? "" : cartItems.length}</span></Link>
                        </li>
                    </ul>
                </nav>
            </header>
            
        </div>
    )
}
export default Header;