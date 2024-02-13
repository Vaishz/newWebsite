import React from 'react';
import { useCart } from 'react-use-cart';

const Item = ({ item }) => {
  const { addItem } = useCart();

  return (
    <div className='h-86 bg-red-200 p-1 flex flex-col items-center justify-center w-60 mb-5 pl-2'>
      <img className='w-60 h-60 object-contain bg-slate-500' src={item.image} alt={item.name} />
      <div className="name">{item.name}</div>
      <div className="price">{item.price}</div>
      <button onClick={() => addItem(item)} className='bg-red-600 text-white rounded-lg p-1'>
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
