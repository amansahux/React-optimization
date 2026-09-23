import React, { useCallback, useMemo, useState } from "react";
import Usercard from "./components/userCard";

const App = () => {
  const user = useMemo(() => {
    return {
      name: "AMAN SAHU X",
      age: 17,
      role: "Developer",
    };
  }, []);

  const skills = useMemo(() => {
    return ["MongoDB", "Express", "React", "Node"];
  }, []);
  const onFollow = useCallback(() => {
   
      console.log("Following");
  },[]);
  const [count, setCount] = useState(0);
  console.log("App Re-rendering..........");
  return (
    <div>
      <h1 className="text-5xl p-10">{count}</h1>

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

      <Usercard user={user} skills={skills} onFollow={onFollow} />
    </div>
  );
};

export default App;
