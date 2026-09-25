import { useState } from "react";

export function Fix() {
  const [price, setPrice] = useState(100);
  const [quantity, setQuantity] = useState(2);
  const total = price * quantity;

  return (
    <div>
      <h1>Total: ₹{total}</h1>

      <button onClick={() => setPrice((prev) => prev + 10)}>
        Increase Price
      </button>

      <button onClick={() => setQuantity((prev) => prev + 1)}>
        Increase Quantity
      </button>
    </div>
  );
}
