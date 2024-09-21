import React from 'react'

const Profile: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-sm rounded-lg bg-gray-800 p-6 shadow-lg">
        <div className="flex flex-col items-center">
          <img className="h-24 w-24 rounded-full shadow-lg" src="https://via.placeholder.com/150" alt="Profile" />
          <h2 className="mt-4 text-xl font-semibold text-white">Mario Diaz</h2>
          <p className="mt-2 text-gray-400">Software Developer</p>
          <div className="mt-4">
            <button className="rounded-full bg-blue-500 px-4 py-2 text-white shadow transition duration-300 hover:bg-blue-600">
              Follow
            </button>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold text-white">About</h3>
          <p className="mt-2 text-sm text-gray-400">
            Passionate software developer with experience in building web applications using modern technologies.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
