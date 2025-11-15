import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/api";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [wantedProducts, setWantedProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [Allproducts, setAllProducts] = useState([]);
  const [OriginalProducts, setOriginalProducts] = useState([]);

  // all products

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setAllProducts(data);
        setOriginalProducts(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // wanted products

  useEffect(() => {
    const saved = localStorage.getItem("cart_items");
    if (saved) setWantedProducts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart_items", JSON.stringify(wantedProducts));
  }, [wantedProducts]);


  // favorite products

  useEffect(() => {
    const saved = localStorage.getItem("fav_items");
    if (saved) setFavoriteProducts(JSON.parse(saved));
  }, []);

  useEffect(()=>{
    localStorage.setItem('fav_items', JSON.stringify(favoriteProducts))
  },[favoriteProducts])

  

  const removeFromFavorites = (product) => {
    setFavoriteProducts((prev) => prev.filter((p) => p.id !== product.id));
  };

  const ToggleFavorite = (product) => {
    setFavoriteProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) return prev.filter((p) => p.id !== product.id);

      return [...prev, product];
    });
  };

  console.log(favoriteProducts);

  return (
    <ProductsContext.Provider
      value={{
        Allproducts,
        setAllProducts,
        OriginalProducts,
        setOriginalProducts,
        wantedProducts,
        setWantedProducts,
        favoriteProducts,
        setFavoriteProducts,
        removeFromFavorites,
        ToggleFavorite,
        
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
