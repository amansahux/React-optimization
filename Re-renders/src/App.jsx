import React, { useMemo, useState } from "react";
import Product from "./components/Product";

const App = () => {
  const product = useMemo(() => {
    return { name: "Laptop", price: 500000 };
  }, []);
  console.log("App Page re-rendering");
  const [count, setCount] = useState(0);
  return (
    <div>
      <Product product={product} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
