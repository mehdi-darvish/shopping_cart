import React, { useContext, useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import Product from "./Product";
import { ProductsContext } from "../../context/Context";

const ProductsList = () => {
  const { Allproducts, setWantedProducts , isSearchProduct } = useContext(ProductsContext);

  function handleAddtobasket(clickedProduct) {
    setWantedProducts((prev) => {
      const alreadyExists = prev.some((item) => item.id === clickedProduct.id);
      if (alreadyExists) return prev;

      return [...prev, clickedProduct];
    });
  }

  return (
    <div
      className="grid gap-6 mx-5 my-20 justify-center
                 grid-cols-[repeat(auto-fit,minmax(250px,max-content))]"
    >
     
      {Allproducts.length === 0 ? (
        <p className="font-bold text-3xl">Loading data...</p>
      )  : (
        Allproducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            AddItem={() => handleAddtobasket(product)}
          />
        ))
      )}
    </div>
  );
};

export default ProductsList;
