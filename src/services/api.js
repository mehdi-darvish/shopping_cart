const BASE_URL = "https://fakestoreapi.com";



export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Error!");
  return await res.json();
};


export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Error!");
  return await res.json();
};


export const deleteProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error!");
  return await res.json();
};
