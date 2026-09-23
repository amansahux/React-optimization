import { memo } from "react";

const Product = memo(({ product }) => {
  console.log("Product Page re-rendering");
  return (
    <>
      <div>Product Namee : {product.name}</div>;
      <div>Product Price : {product.price}</div>;
    </>
  );
});

export default Product;

// reference props lead to re-renders even same props accepts again we use useMemo when props are same where defining the reference props
