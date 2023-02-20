import React from "react";
import "./Products.css";

function Products({productItems,handleAddProduct}){
    return(
        <div className="products">
           {productItems.map((productItem)=>(
            <div key={productItem.id} className="card">
                <div>
                    <img src={productItem.image} alt={productItem.name} />
                </div>
                <div className="product-details">
                    <h3>{productItem.name}</h3>
                    <p>${productItem.price}</p>
                </div>
                <button className="product-add-button" onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
            </div>
           ))}
        </div>
    )
}
export default Products;