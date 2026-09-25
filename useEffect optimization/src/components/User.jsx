import { useEffect, useState } from "react";

export default function User() {
  //   const [userId, setUserId] = useState(1);

  //   useEffect(() => {
  //     console.log("Fetching user:", userId);
  //   }, [userId]);

  // // Every reactive value used by your Effect's code generally be declared as a dependency.
  //   return (
  //     <button onClick={() => setUserId(prev => prev + 1)}>
  //       Change User
  //     </button>
  //   );
  const [name, setName] = useState("Aman");
  const [displayName, setDisplayName] = useState("");
  console.log("User re render ")

  useEffect(() => {
    setDisplayName(name.toUpperCase());
  }, [name, displayName]);

  console.log(name)
  console.log(displayName)
}
