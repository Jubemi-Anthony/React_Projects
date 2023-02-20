import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

function Product({productItems,
                 handleAddProduct, 
                 setHide, 
                 cartItems, 
                 starItem, 
                 unstarItem, 
                 starItems
    }){
    const [searchProduct, setSearchProduct] = useState("");
    return(
        <div className="Product">
            <div className="container">
                <Header
                    setHide = {setHide}
                    icon='https://cdn4.iconfinder.com/data/icons/cleaning-4/56/any-solvent-except-tetrachlorethylene-washing-64.png'
                    setSearchItem = {setSearchProduct}
                />
                <div className="products">
                   {
                    productItems.filter((productItem) =>{
                        if(searchProduct === ""){
                            return productItem;
                        }else if(productItem.name.toLowerCase().includes(searchProduct.toLowerCase())){
                            return productItem;
                        }
                    }).map((productItem) =>(
                        <div key={productItem.id} className="CardDisplay2">
                            {productItem.marked === false && <img onClick={()=>starItem(productItem)} className="star" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-star-outline-64.png" alt="star"/>}
                            {productItem.marked === true && <img onClick={()=>unstarItem(productItem)} className="star" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-64.png" alt="star"/>}
                            <img className="itemImage" src={productItem.image} alt="Item" />
                            <div className="writeUp">
                                <h2>${productItem.price}</h2>
                                <p>{productItem.name}</p>
                            </div>
                            <button onClick={()=>handleAddProduct(productItem)}>Add to Cart</button>
                        </div>
                    ))
                   }
                </div>
            </div>
            <Footer cartItems= {cartItems} starItems= {starItems}/>
        </div>
    )
}
export default Product;