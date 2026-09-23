import React, { useCallback, useMemo, useState } from "react";
import Product from "./components/Product";

const App = () => {
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
  console.log("App Page re-rendering");
  const [count, setCount] = useState(0);
  return (
    <div>
      <Product onClick={handleClick} />
      <br /><br /><br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
