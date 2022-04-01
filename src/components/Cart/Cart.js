import React from 'react';
import './Cart.css';
const Cart = ({cart,handleRemoveFromCart}) => {
    // console.log(cart[0]._id)
     // Conditional rendering options
    // 1. Element variable
    // 2. ternary operator condition ? true : false   
    // 3. && Operator (shorthand)
    // 4. || 
    let command ;
    if(cart.length === 0){
        command = <div>
             <h5>ohh Kipta, khoroch kor</h5>
            <p>kinos na ken</p>
        </div>
    }
    return (
        <div>
            <h3>Items Selected: {cart.length}</h3>
            {
                cart.map(tShirt =><p>
                    {tShirt.name} 
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                    </p>)
            }
                {cart.length === 0 || <p className='orange'>YAY! You are buying</p>}
            {/* jodi length 0 na hoy tahole element a jabe */}
            {cart.length === 3 && <div className='orange'> 
                <h3>Trigonal</h3>
                <p>Tin jon ke ki gift diba</p>
            </div>}
            {command}
            {cart.length !==4 ? <p>Keep adding</p> : <button>Remove ALL</button>}
            {cart.length ===4 && <button className='orange'>Review Order</button>}
                {/* jodi length 4 hoy tahole element a jabe */}
        </div>
    );
};

export default Cart;