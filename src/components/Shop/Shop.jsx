import React, { useState } from 'react';
import dataProducts from '../data';
import Item from '../Item/Item';
import Button from '../Button/Button';
import './Shop.css';
import { useCart } from 'react-use-cart';

const Shop = () => {
  const [query, setQuery] = useState('');
  const { addItem } = useCart();

  const filteredProducts = dataProducts.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = () => {
    console.log('Search clicked:', query);
  };

  const handleAddToCart = (item) => {
    addItem(item);
    console.log('Added to cart:', item);
  };

  return (
    <>
      <div className='searchbar'>
        <input
          type='text'
          className='userInput'
          placeholder='Search for items'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button title='Search' className='searchButton' onClick={handleSearch} />
      </div>
      <div className='itemsToBuy'>
        {filteredProducts.map((item) => (
          <Item
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
