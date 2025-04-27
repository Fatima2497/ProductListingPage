import React from 'react';

const CartPopup = ({ cartItems, onClose, onIncreaseQuantity, onDecreaseQuantity }) => {


    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-96 p-6 rounded-xl shadow-lg relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 text-2xl font-bold"
          aria-label="Close cart"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="mb-6 border-b pb-4">
              <img
                src={item.images && item.images.length > 0 ? item.images[0] : ''}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-500 text-sm mb-2">{item.category?.name || ''}</p>
              <p className="text-gray-700 font-semibold mb-2">${item.price}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={() => onDecreaseQuantity(item)}
                    className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400"
                    aria-label={`Decrease quantity of ${item.title}`}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => onIncreaseQuantity(item)}
                    className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400"
                    aria-label={`Increase quantity of ${item.title}`}
                  >
                    +
                  </button>
                </div>

                <span className="font-bold text-lg">
                  ${(item.price * item.quantity)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartPopup;
