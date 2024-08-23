// src/Cart.js
import React from 'react';

const Cart = ({ cart, setCart }) => {
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(product => product.id !== productId));
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 && <p>Your cart is empty.</p>}
            {cart.map(product => (
                <div key={product.id} className="cart-item">
                    <h4>{product.name}</h4>
                    <p>${product.price.toFixed(2)}</p>
                    <button onClick={() => removeFromCart(product.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
