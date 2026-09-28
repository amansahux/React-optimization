import axios from "axios";

export const fetchProducts = async ({ limit = 100, page = 1 } = {}) => {
  const params = new URLSearchParams({ limit: String(limit), page: String(page) });
  const response = await axios.get(
    `https://fakestoreapi.com/products?${params.toString()}`,
  );

  return response.data;
};

// export const fetchProduct = async (id) => {
//   const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

//   return response.data;
// };
