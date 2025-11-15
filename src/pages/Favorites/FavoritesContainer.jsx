import React, { useContext } from "react";
import FavoriteItem from "./FavoriteItem";
import { ProductsContext } from "../../context/Context";

const FavoritesContainer = () => {
  const { favoriteProducts, removeFromFavorites } = useContext(ProductsContext);
  console.log(favoriteProducts);

  return (
    <div className="flex flex-col items-center mt-10">
      {favoriteProducts.length > 0 ? (
        <div
          className="grid gap-6 mx-5 justify-center 
            grid-cols-[repeat(auto-fit,minmax(250px,max-content))]"
        >
          {favoriteProducts.map((product) => (
            <FavoriteItem
              key={product.id}
              product={product}
              onRemove={() => removeFromFavorites(product)}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-800 text-2xl font-semibold">
          No favorite product yet!
        </p>
      )}
    </div>
  );
};

export default FavoritesContainer;
