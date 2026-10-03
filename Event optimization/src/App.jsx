import { useEffect, useMemo } from "react";

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

function PerformanceExample() {
  const handleScroll = useMemo(
    () =>
      throttle(() => {
        console.log("Scroll:", window.scrollY);
      }, 200),
    []
  );

  const handleResize = useMemo(
    () =>
      throttle(() => {
        console.log(
          "Width:",
          window.innerWidth,
          "Height:",
          window.innerHeight
        );
      }, 200),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return <div className="h-[1000vh]"> <h1>Performance Demo</h1></div>;
}

export default PerformanceExample;