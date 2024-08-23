import React, { useState } from "react";
import ProductList from "./component/productList";
import Cart from "./component/cart";

const App = () => {
  const [cart, setCart] = useState([]); // cart list
  const [showCart, setShowCart] = useState(false); // State to toggle between product list and cart

  return (
    <div className="app-container">
      <header>
        <button
          className="cart-toggle-btn"
          onClick={() => setShowCart(!showCart)}
        >
          {showCart ? "Show Products" : "View Cart"} ({cart.length})
        </button>
      </header>

      {/* conditionally checking cart or product */}
      {showCart ? (
        <Cart cart={cart} setCart={setCart} />
      ) : (
        <ProductList cart={cart} setCart={setCart} />
      )}
    </div>
  );
};

export default App;
