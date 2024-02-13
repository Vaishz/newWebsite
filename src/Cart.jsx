import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart ({totalUniqueItems})</h1>

      <ul className="divide-y divide-gray-300">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 object-cover rounded-full mr-4"
              />
              <div>
                <span className="mr-4">{item.quantity} x</span>
                <span className="font-medium">{item.name}</span>
              </div>
            </div>

            <div className="flex items-center">
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 text-gray-700 rounded-full p-2 mr-2"
              >
                -
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 text-gray-700 rounded-full p-2 mr-2"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white rounded-full p-2"
              >
                &times;
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <p className="text-lg font-semibold">
          Total Price: ${cartTotal}
        </p>
      </div>
    </div>
  );
};

export default Cart;
