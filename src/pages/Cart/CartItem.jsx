import React, { useState, useEffect } from "react";

const CartItem = ({ product, onRemove, onCountChange, isFavorite, ToggleFavorite }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    onCountChange(product.id, count);
  }, [count]);

  const increaseCount = () => setCount((prev) => (prev < 10 ? prev + 1 : 10));
  const decreaseCount = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="relative flex flex-col items-center justify-between bg-amber-300 rounded-lg p-4 w-60 shadow-md">
      
      
      <button
        onClick={() => onRemove(product.id)}
        className="absolute cursor-pointer top-2 right-2 text-red-600 font-bold text-lg hover:scale-110 transition"
      >
        ✖
      </button>

      
      <button
        onClick={ToggleFavorite}
        className="absolute top-2 left-2 text-2xl cursor-pointer hover:scale-110 transition"
      >
        {isFavorite ? (
          <span className="text-yellow-400 drop-shadow">⭐</span>
        ) : (
          <span className="text-gray-500">☆</span>
        )}
      </button>

      
      <img
        src={product.image}
        alt="product"
        className="w-24 h-24 object-contain my-3"
      />

      
      <h3 className="text-center font-semibold text-sm">{product.title}</h3>

     
      <span className="text-lime-800 font-bold mt-2">
        {(product.price * count).toFixed(2)}$
      </span>

      
      <div className="flex items-center gap-3 mt-2">
        <button
          onClick={decreaseCount}
          className="bg-amber-700 text-white w-8 h-8 rounded-full font-bold hover:bg-amber-800"
        >
          -
        </button>
        <span className="font-bold text-lg">{count}</span>
        <button
          onClick={increaseCount}
          className="bg-amber-700 text-white w-8 h-8 rounded-full font-bold hover:bg-amber-800"
        >
          +
        </button>
      </div>

    </div>
  );
};

export default CartItem;
