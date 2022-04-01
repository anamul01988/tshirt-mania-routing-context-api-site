import React from 'react';
import './Tshirt.css';
const Tshirt = ({tShirt,handleAddToCart}) => {
    console.log(tShirt)
    const {name,picture, price} = tShirt;
    return (
        <div className='t-shirt'>
        <img className='my-3' src={picture} alt="" />
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        {/* <button onClick={() => handleAddToCart(tShirt)}>Add to Cart</button> */}
        <button className='mb-3 btn btn-success' onClick={()=> handleAddToCart(tShirt)}>Add To Cart</button>
    </div>
    );
};

export default Tshirt;