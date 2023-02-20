import Header from "../components/Header";
import Footer from "../components/Footer";

function Chat({setHide, cartItems, starItems}){
    return(
        <div className="Chat">
            <div className="container">
                <Header
                    setHide={setHide}
                    icon = 'https://cdn2.iconfinder.com/data/icons/squircle-ui/32/Chat-64.png'
                />
                <img src="" alt="" />
            </div>
            <Footer cartItems= {cartItems} starItems= {starItems}/>
        </div>
    )
}
export default Chat;