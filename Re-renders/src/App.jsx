import React, { useState } from "react";
import Product from "./components/Product";

const App = () => {
  console.log("App Page re-rendering");
  const [count, setCount] = useState(0);
  return (
    <div>
      <Product name="Laptop" />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
