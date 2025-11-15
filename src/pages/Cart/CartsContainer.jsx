import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/Context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const CartsContainer = () => {
  const {
    wantedProducts,
    setWantedProducts,
    favoriteProducts,
    ToggleFavorite,
  } = useContext(ProductsContext);
  const [productCounts, setProductCounts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const total = wantedProducts.reduce((sum, product) => {
      const count = productCounts[product.id] || 1;
      return sum + product.price * count;
    }, 0);
    setTotalPrice(total);
  }, [wantedProducts, productCounts]);

  const removeProduct = (id) => {
    setWantedProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleCountChange = (id, count) => {
    setProductCounts((prev) => ({ ...prev, [id]: count }));
  };

  const isCartEmpty = wantedProducts.length === 0;

  return (
    <div className="w-[90%] mx-auto mt-20 py-10 bg-sky-900 rounded-lg">
      {isCartEmpty ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <p className="font-bold text-2xl text-white">Shop is Empty!</p>

          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 font-bold bg-amber-600 rounded-lg text-white cursor-pointer"
          >
            Order now
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10">
          <div
            className="
              grid gap-6 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4
              place-items-center
              w-full
              px-6
            "
          >
            {wantedProducts.map((item) => (
              <div key={item.id} className="w-full max-w-[300px]">
                <CartItem
                  product={item}
                  onRemove={removeProduct}
                  onCountChange={handleCountChange}
                  isFavorite={favoriteProducts.some((p) => p.id === item.id)}
                  ToggleFavorite={() => ToggleFavorite(item)}
                />
              </div>
            ))}
          </div>

          <div className="bg-amber-200 p-4 rounded-lg text-center shadow-md w-full max-w-[420px] mx-auto">
            <h2 className="font-bold text-lg text-amber-800">
              Total Price: {totalPrice.toFixed(2)}$
            </h2>
          </div>

          <button
            className="bg-green-600 hover:bg-green-900 text-white py-2 px-6 rounded-lg font-semibold transition cursor-pointer"
            onClick={() =>
              alert(`Your order total is ${totalPrice.toFixed(2)}$`)
            }
          >
            Order All
          </button>
        </div>
      )}
    </div>
  );
};

export default CartsContainer;
