import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

function Starred({setHide, cartItems, starItems}){
    const [searchStar, setSearchStar] = useState("");
    return(
        <div className="Starred">
            <div className="container">
                <Header
                    setHide={setHide}
                    icon = 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-64.png'
                    setSearchItem= {setSearchStar}
                />
                <section>
                    {starItems.length === 0 && 
                    <div className="empty-cart">
                        Nothing Starred yet
                        <img src="https://cdn1.iconfinder.com/data/icons/basic-79/24/star-no-64.png" alt="empty cart"></img>
                        <Link to="/Product"><Button text={'Explore'}/></Link>
                    </div>}
                    <div className="starItems">
                        {starItems.filter((item) =>{
                            if(searchStar === ""){
                                return item;
                            }else if(item.name.toLowerCase().includes(searchStar.toLowerCase())){
                                return item;
                            }
                        }).map((item)=>(
                            <div key={item.id} className="star-item">
                                <div className="image-holder">
                                    <img src={item.image} alt={item.name} />
                                </div>                                
                                <div className="saved-details">
                                    <p className="price">Product : ${item.price}</p>
                                    <p className="name">{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer cartItems= {cartItems} starItems= {starItems}/>
        </div>
    )
}
export default Starred;