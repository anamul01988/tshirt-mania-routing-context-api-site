import React, { useState } from "react";
import useTshirts from "../../hooks/useTshirts";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
const Home = () => {
  const [tShirts] = useTshirts();
  const [cart, setCart] = useState([]); //obj gulu k niye array er moddhe rakhtece
  console.log(tShirts);
  const handleAddToCart = (selectedItems) => {
    const exist = cart.find((tShirt) => tShirt._id === selectedItems._id);
    if (!exist) {
      const newCart = [...cart, selectedItems];
      setCart(newCart);
    }
    else{
        alert('items already added');
    }
  };

  const handleRemoveFromCart = (selectedItems) => {
    console.log(selectedItems);
    const rest = cart.filter((tShirt) => tShirt._id !== selectedItems._id);
    setCart(rest);
  };
  return (
    <div>
      <div className="home-container">
        <div className="tshirt-container">
          {tShirts?.map((tShirt) => (
            <Tshirt
              key={tShirt._id}
              tShirt={tShirt}
              handleAddToCart={handleAddToCart}
            ></Tshirt>
          ))}
        </div>
        <div className="cart-container">
          {/* <Cart  key={cart[0]?._id}  cart = {cart} handleRemoveFromCart={handleRemoveFromCart}> </Cart> */}
          <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}>
            {" "}
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
