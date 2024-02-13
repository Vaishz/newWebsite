import React, { useState } from "react";
import dataProducts from "../data";
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
      <h2>You can buy: </h2>
      <div className="searchbar h-30 bg-red-100 w-6/12 m-10 items-center grid grid-cols-2">
        <input
          type="text"
          className="w-30 h-full bg-transparent p-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button title="Search" onClick={handleSearch} className="text-center" />
      </div>
      <div className="shop grid grid-cols-4 w-screen ">
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
