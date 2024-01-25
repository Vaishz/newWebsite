import React, { useState } from "react";
import dataProducts from "../data";
import "../Shop/Shop.css";
import Item from "../Item";
import Button from "../Button/Button";
const Shop = () => {
  const [query, setQuery] = useState("");

  const filteredProducts = dataProducts.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = () => {
    console.log("Search clicked:", query);
  };

  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          className="userInput"
          placeholder="Search for items"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button title="Search" onClick={handleSearch} />
      </div>
      <div className="itemsToBuy">
        {filteredProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
