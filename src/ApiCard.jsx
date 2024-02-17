import React from 'react';

const ApiCard = ({ title, category, address, country, locality, definition, author, example }) => {
  return (
    <div className='card bg-slate-400 w-11/12 p-2 m-2'>
      <p className='text-white text-xl'><span className='text-blue-800 font- font-bold'>Definition:</span> {definition}</p> 
      <p>Author: {author}</p>
      <p>Example: {example}</p>
    </div>
  );
};

export default ApiCard;
