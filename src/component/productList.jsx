import React, { useState, useEffect } from "react";
import ProductCard from "./productCard";

const ProductList = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>
      <h2>Product List</h2>
      <label htmlFor="category">Filter by category:</label>
      <select
        id="category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="All">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard product={product}  addToCart={addToCart} isCart={false}  key={product.id}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
