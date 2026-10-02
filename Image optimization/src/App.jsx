import React from "react";
import { Banner } from "./Banner";
import logoSvg from "./logo.svg";

const App = () => {
  return (
    <div>

      <picture>
        <img
  // src="https://images.unsplash.com/photo-1790000737546-06f81a4dfc29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
  srcSet="
    https://images.unsplash.com/photo-1779896412186-441e30764c8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 400w,
    https://plus.unsplash.com/premium_photo-1755706180939-1105b36beecb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D 800w,
   https://plus.unsplash.com/premium_photo-1763645023820-3c973bffd7d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D 1200w,
    https://images.unsplash.com/photo-1790579261804-ea77510df11d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D 2000w
  "
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 50vw,
    25vw
  "
  alt="Product"
  width="800"
  height="800"
/>

      </picture>

      <img src={logoSvg} alt="Logo" className="w-50 h-40 border-2 border-gray-500" style={{ color: "black" }} />

      <Banner/>
    </div>
  );
};

export default App;
