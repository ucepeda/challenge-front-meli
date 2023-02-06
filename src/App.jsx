import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products.jsx";
import Product from "./Pages/Product.jsx";
import Home from "./Pages/Home.jsx";
import Header from "./Components/Header";
import "./css/globals.scss"



const App = () => {
  const [searchItem, setSearchItem] = useState('');
  const handleSearch = (product) => {
    setSearchItem(product.toLowerCase());
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" searchItem={searchItem} element={<Products searchItem={searchItem} />} />
        <Route path="/items/:id" element={<Product />} />
        <Route path="*" element={<Home />} />
      </Routes>

    </>
  );

}

export default App;