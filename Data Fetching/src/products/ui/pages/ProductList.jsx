import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/api";


function ProductList() {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;