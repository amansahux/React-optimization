// components/UserCard.jsx
import React, { memo } from "react";

const UserCard = memo(function UserCard({ user }) {
  console.log("UserCard Re-rendering...");

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Avatar */}
      <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 h-24" />
      <div className="px-6 pb-6 -mt-12">
        {/* Avatar circle */}
        <div className="w-24 h-24 bg-white rounded-full p-1 shadow-md">
          <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-3xl font-bold text-gray-500">
            {user.name.charAt(0)}
          </div>
        </div>

        {/* Name & Role */}
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
          <p className="text-sm text-gray-500">
            {user.role} · {user.age} yrs
          </p>
        </div>
        {/* Follow Button */}
        <button className="mt-5 w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer">
          Follow
        </button>
      </div>
    </div>
  );
});

export default UserCard;
