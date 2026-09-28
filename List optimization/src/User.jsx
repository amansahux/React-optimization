import React, { memo } from 'react'


const User = ({user}) => {
console.log("Rendering:", user.name);
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-100 flex flex-col items-center p-6">
      <img className="h-24 w-24 rounded-full object-cover border-4 border-indigo-50 mb-4" src={user.avatar} alt={`${user.name}'s avatar`} />
      <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-500 text-sm mb-4">{user.email}</p>
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
        user.role === 'Admin' ? 'bg-indigo-100 text-indigo-800' :
        user.role === 'Moderator' ? 'bg-emerald-100 text-emerald-800' :
        'bg-gray-100 text-gray-800'
      }`}>
        {user.role}
      </span>
    </div>
  )
}

export default memo(User)