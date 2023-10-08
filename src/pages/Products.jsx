import React, { useState, useEffect } from 'react';
import './products.css'; // Import the CSS file
import Navigation from '../Navigation/Nav';
import Products from '../Products/Products';
import Recommended from '../Recommended/Recommended';
import Sidebar from '../Sidebar/Sidebar';
import Card from '../components/Card';
import '../index.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    fetch('https://threadup.onrender.com/product')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.product_name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, price, product_name, size,in_stock }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          price.toString() === selected ||
          product_name === selected ||
          size === selected ||
          in_stock === selected
      );
    }

    return filteredProducts.map((product) => (
      <Card
        key={product.product_id}
        img={product.product_image}
        title={product.product_name}
        price={product.price} // Include price
        category={product.category} // Include category
        size={product.size}
        in_stock={product.in_stock}
        // Include other product properties here...
      />
    ));
  }

  const result = filteredData(selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
