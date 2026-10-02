import { useEffect, useState } from "react";

export function Banner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();

    image.src = "https://images.unsplash.com/photo-1779896412186-441e30764c8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    image.onload = () => {
      setLoaded(true);
    };
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: loaded
          ? 'url("https://images.unsplash.com/photo-1790579261804-ea77510df11d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D")'
          : "none",
      }}
    >
      Banner
    </div>
  );
}