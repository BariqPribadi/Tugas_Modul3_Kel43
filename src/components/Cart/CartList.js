import React from 'react';
import CartItem from './CartItem';
import { Link } from "react-router-dom";

function CheckoutButton(cartTotal){
    alert('Terima kasih sudah berbelanja')
}


export default function CartList({value}) {

    const {cart, cartTotal} = value;
    return (
    <div className="container-fluid">
        {cart.map(item => (
        <CartItem key={item.id} item={item} value={value} />
        ))}
        
        <Link to="/" className="ml-auto">
        <button onClick={CheckoutButton} class="btn btn-outline-info">Checkout Rp. {cartTotal}</button>
        </Link>
    
    </div>
    );
}
