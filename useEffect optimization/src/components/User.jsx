import { useEffect, useState } from "react";

export default function User() {
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    console.log("Fetching user:", userId);
  }, [userId]);

// Every reactive value used by your Effect's code generally be declared as a dependency.
  return (
    <button onClick={() => setUserId(prev => prev + 1)}>
      Change User
    </button>
  );
}