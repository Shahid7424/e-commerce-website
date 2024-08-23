import React from "react";
import ProductCard from "./productCard";

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((product) =>
          product.id === productId && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <ProductCard
                product={product}
                isCart={true}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            </div>
          ))}
          <h3>
            Total: $
            {cart
              .reduce(
                (acc, product) => acc + product.price * product.quantity,
                0
              )
              .toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
