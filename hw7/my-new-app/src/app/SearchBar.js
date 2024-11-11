"use client"; // Ensures this component can use hooks like useState and useEffect

import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initially, show all products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search term
  useEffect(() => {
    const results = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  return (
    <div className="search-bar">
      <input
  	type="text"
  	placeholder="Search products..."
  	value={searchTerm}
  	onChange={(e) => setSearchTerm(e.target.value)}
  	className="border rounded p-2 mb-4"
  	style={{ color: '#000' }} // Set text color to black
	/>
      <table className="min-w-full bg-white border rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border">{product.title}</td>
              <td className="py-2 px-4 border">
                <img src={product.image} alt={product.title} className="h-16 w-16 object-contain" />
              </td>
              <td className="py-2 px-4 border">${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;

