import React, { useCallback, useMemo, useState } from "react";
import Usercard from "./components/userCard";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Aman Sahu X");
  console.log("App Re-rendering..........");

  const expensiveValue = useMemo(() => {
    console.log("Expensive calculation running..."); // ← only fires on count change
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i * count;
    }
    return result;
  }, [count]); // ← `name` is NOT a dependency
  return (
    <div>
       <p>Count: {count}</p>
      <p>Name: {name}</p>
      <p>Expensive: {expensiveValue}</p>

      <button
        className="py-2 px-4 my-5 bg-emerald-400 rounded-[5px] text-white text-2xl cursor-pointer"
        onClick={() => {
          setCount((prev) => {
            return prev + 1;
          });
        }}
      >
        Increament
      </button>

      <button
        className="py-2 px-4 my-5 bg-emerald-400 rounded-[5px] text-white text-2xl cursor-pointer"
        onClick={() => {
          setName("ADARSH SAHU X");
        }}
      >
        Change Name
      </button>

      {/* <Usercard /> */}
    </div>
  );
};

export default App;
