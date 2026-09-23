
import { memo } from "react";

const Product = memo( ({name}) => {
  console.log("Product Page re-rendering");
  return <div>Product : {name}</div>;
})

export default Product;

// primitive values does not lead to re-renders


