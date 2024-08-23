// src/App.js
import React, { useState } from 'react';
import ProductList from './productList';
import Cart from './cart';
import './App.css';

function App() {
    const [cart, setCart] = useState([]);

    return (
        <div className="App">
            <h1>My E-Commerce Store</h1>
            <ProductList cart={cart} setCart={setCart} />
            <Cart cart={cart} setCart={setCart} />
        </div>
    );
}

export default App;
