import React, { useState, useEffect } from 'react';

const ProductList = ({ cart, setCart }) => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('All');

    useEffect(() => {
        // Fetch products from an API or use local data
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                // Assuming the API response structure is { products: [...] }
                setProducts(data.products);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
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
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
            </select>
            <div className="product-list">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
