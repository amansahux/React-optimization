import React, { useMemo, useState } from "react";
import UserCard from "./components/userCard";

const App = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const users = useMemo(() => {
    return [
      { id: 1, name: "Aman", age: 17 },
      { id: 2, name: "Rahul", age: 22 },
      { id: 3, name: "Adarsh", age: 19 },
      { id: 4, name: "Rohit", age: 25 },
    ];
  }, []);
  const filteredUsers = useMemo(() => {
    console.log("searching...........");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, users]);

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

      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search users"
        className="w-full max-w-md rounded border border-gray-300 px-4 py-2 text-lg"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
