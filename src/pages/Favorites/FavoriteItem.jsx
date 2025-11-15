import React from "react";

const FavoriteItem = ({ product, onRemove }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-between
                    bg-purple-200 rounded-lg p-4 w-60 shadow-lg"
    >
      <button
        onClick={onRemove}
        className="absolute cursor-pointer top-2 right-2 
                   text-red-600 font-bold text-lg hover:scale-110 transition"
      >
        ✖
      </button>

      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-contain my-3"
      />

      <h3 className="text-center font-semibold text-sm">{product.title}</h3>

      <span className="text-purple-700 font-bold mt-2">
        {product.price.toFixed(2)}$
      </span>
    </div>
  );
};

export default FavoriteItem;
