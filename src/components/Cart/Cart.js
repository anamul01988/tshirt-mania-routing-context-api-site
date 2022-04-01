import React from 'react';
import './Cart.css';
const Cart = ({cart,handleRemoveFromCart}) => {
    console.log(cart)
    return (
        <div>
            <h3>Items Selected: {cart.length}</h3>
            {
                cart.map(tShirt =><p>
                    {tShirt.name} 
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;