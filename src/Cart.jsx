import React from 'react';
import { useCart } from 'react-use-cart';
import dataProducts from './components/data';



const ProductList = () => {
  const { addItem } = useCart();

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      <ul className="divide-y divide-gray-300">
        {dataProducts.map((product) => (
          <li key={product.id} className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-10 h-10 object-cover rounded-full mr-4"
              />
              <div>
                <span className="mr-4">{product.name}</span>
                <span className="font-medium">${product.price.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex items-center">
              <button
                onClick={() => addItem(product)}
                className="bg-blue-500 text-white rounded-full p-2"
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
