import React, { useEffect, useState } from "react";

const Product = ({ product, AddItem }) => {


  
  return (
    <div className="w-50 gap-y-3 flex flex-col rounded-lg bg-amber-300 mt-5  ">
      <img
        className="w-25 m-auto pt-4 cursor-pointer"
        src={product?.image}
        alt="Product Image"
      />
      <span className="pt-5 px-3">{product?.title}</span>
      <hr className="w-[90%] m-auto" />
      <span className="text-lime-800 font-bold px-3">{product?.price}$</span>
      <span className="px-3">
        {product?.rating?.count}{" "}
        {product?.rating?.count == 1 ? "Item" : "Items"} left
      </span>
      <button
        onClick={AddItem}
        className="bg-amber-800 w-full rounded-b-lg py-2 text-white cursor-pointer"
      >
         add to cart
      </button>
    </div>
  );
};

export default Product;
