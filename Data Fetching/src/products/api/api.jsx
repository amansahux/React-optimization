import axios from "axios";

export const fetchProducts = async ({limit=20 , page=1}) => {
  const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}&?page=${page}`);

  return response.data;
};

export const fetchProduct = async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

  return response.data;
};
