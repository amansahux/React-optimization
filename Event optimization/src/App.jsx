import React, { useMemo, useEffect } from "react";

function throttle(callback, delay) {
  let lastTime = 0;

  return (...args) => {
    const now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;
      callback(...args);
    }
  };
}

const App = () => {

  const handleScroll = useMemo(
  () =>
    throttle(() => {
      console.log(window.scrollY);
    }, 500),
  []
);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return <div className="h-[1000vh]">App</div>;
};

export default App;
