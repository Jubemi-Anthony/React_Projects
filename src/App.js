import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import OldUser from './pages/OldUser';
import Sign from './pages/Sign';
import Register from './pages/Register';
import Shop from './pages/Shop';
import Product from './pages/Product'
import Cart from './pages/Cart';
import Chat from './pages/Chat';
import Starred from './pages/Starred';
import data from './data/data';
import Sidebar from './components/Sidebar';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const {productItems} = data;
  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(
        cartItems.map((item) =>
        item.id === product.id
        ? {...ProductExist, quantity: ProductExist.quantity + 1} : item)
      );
    } else{
        setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  
  const [starItems, setStarItems] = useState([]);
  const starItem = (product) =>{
    const Starred = starItems.find((item) => item.id === product.id)
    if(Starred){
      setStarItems(
        starItems.map((item) =>
        item.id === product.id? {...Starred, quantity: Starred.quantity + 1} : item)
      );
    }else{
      setStarItems([...starItems, {...product, quantity: 1}]);
    }
    product.marked = true;
  };

  const handleRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }else{
      setCartItems(
        cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity -1} : item)
      );
    }
  };

  const unstarItem = (product) =>{
    const Starred = starItems.find((item) => item.id === product.id)
    if(Starred.quantity ===1){
      setStarItems(starItems.filter((item) => item.id !== product.id));
    }else{
      setStarItems(
        starItems.map((item) => item.id === product.id ? {...Starred, quantity: Starred.quantity -1} : item)
      );
    }
    product.marked = false;
  };

  const handleCartClearance = () =>{
    setCartItems([]);
  }

  const unstarAll = () =>{
    setStarItems([]);
  }

  const [hide, setHide] = useState(false);

  return (
    <div>
      <Sidebar hide = {hide} setHide = {setHide}/>
      <Routes>
        <Route path= "/" element = {<Shop setHide={setHide} cartItems= {cartItems} starItems= {starItems}/>}/>
        <Route path="Sign" element={ <Sign/> } />
        <Route path="Register" element={ <Register/> } />
        <Route path="OldUser" element={ <OldUser/> } />
        <Route path="Chat" element={ <Chat setHide={setHide} cartItems= {cartItems} starItems= {starItems}/> } />
        <Route path="Starred" element={ <Starred 
          setHide={setHide} 
          cartItems= {cartItems} 
          starItems= {starItems}
          unstarItem= {unstarItem}
          unstarAll= {unstarAll}
        /> } />
        <Route path="Product" element={ <Product
          productItems= {productItems}
          handleAddProduct= {handleAddProduct} 
          setHide={setHide} 
          cartItems= {cartItems}
          starItem= {starItem}
          starItems= {starItems}
          unstarItem= {unstarItem}
          /> } />
        <Route path="Cart" element={ <Cart
          cartItems= {cartItems} starItems= {starItems}
          handleAddProduct = {handleAddProduct}
          handleRemoveProduct= {handleRemoveProduct}
          handleCartClearance = {handleCartClearance}
          setHide={setHide}
        /> } />
      </Routes>
    </div>
  );
}

export default App;
