import { memo } from "react";

const Product = memo(({ onClick }) => {
  console.log("Product Page re-rendering");
  return <button onClick={onClick}>Click</button>;
});

export default Product;

// reference props lead to re-renders even same props accepts again we use useMemo when props are same where defining the reference props
