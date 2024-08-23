import React from 'react';


const ProductCard = ({ product, isCart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const { id, image, title, description, price, quantity } = product;

  return (
    <div className="card" key={id}>
      <img src={image} alt={title} />
      <h1 className="product-title">{title}</h1>
      <p className="price">${price}</p>
      <p className="description">{description.slice(0, 100)}... <span className="read-more">read more</span></p>
      {!isCart && <button onClick={() => addToCart(product)}>Add to Cart</button>}
      {isCart && (
        <div className="cart-controls">
          <span>Quantity: {quantity}</span>
          <button className="quantity-btn" onClick={() => increaseQuantity(id)}>+</button>
          <button className="quantity-btn" onClick={() => decreaseQuantity(id)}>-</button>
          <button className="remove-btn" onClick={() => removeFromCart(id)}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
