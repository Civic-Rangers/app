import React from 'react'

const Profile: React.FC = () => {
  return (
    <div className="p-0 pb-20">
      <header className="mb-6 flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg">
        <h1 className="text-1xl font-bold text-white">Profile</h1>
      </header>

      <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
        <div className="flex flex-col items-center">
          <img className="h-24 w-24 rounded-full shadow-lg" src="https://via.placeholder.com/150" alt="Profile" />
          <h2 className="mt-4 text-xl font-semibold text-white">Mario Diaz</h2>
          <p className="mt-2 text-gray-400">Software Developer</p>
          <div className="mt-4">
            <button className="rounded-full bg-blue-500 px-4 py-2 text-white shadow transition duration-300 hover:bg-blue-600">
              Seeker
            </button>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold text-white">Bio</h3>
          <p className="mt-2 text-sm text-gray-400">
            Passionate software developer with experience in building web applications using modern technologies.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-gray-800 p-6 shadow-lg">
        <h3 className="font-semibold text-white">Edit Profile</h3>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400" htmlFor="first_name">
              First Name
            </label>
            <input
              className="mt-1 w-full rounded-md bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
              type="text"
              id="first_name"
              name="first_name"
              defaultValue=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400" htmlFor="last_name">
              Last Name
            </label>
            <input
              className="mt-1 w-full rounded-md bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
              type="text"
              id="last_name"
              name="last_name"
              defaultValue=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400" htmlFor="address_street">
              Street Address
            </label>
            <input
              className="mt-1 w-full rounded-md bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
              type="text"
              id="address_street"
              name="address_street"
              defaultValue=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400" htmlFor="address_city">
              City
            </label>
            <input
              className="mt-1 w-full rounded-md bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
              type="text"
              id="address_city"
              name="address_city"
              defaultValue=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400" htmlFor="address_state">
              State
            </label>
            <input
              className="mt-1 w-full rounded-md bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
              type="text"
              id="address_state"
              name="address_state"
              defaultValue=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400" htmlFor="address_zip">
              ZIP Code
            </label>
            <input
              className="mt-1 w-full rounded-md bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
              type="text"
              id="address_zip"
              name="address_zip"
              defaultValue=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400" htmlFor="phone">
              Phone
            </label>
            <input
              className="mt-1 w-full rounded-md bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
              type="text"
              id="phone"
              name="phone"
              defaultValue=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400" htmlFor="email">
              Email
            </label>
            <input
              className="mt-1 w-full rounded-md bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              defaultValue=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400" htmlFor="dob">
              Date of Birth
            </label>
            <input
              className="mt-1 w-full rounded-md bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
              type="date"
              id="dob"
              name="dob"
              defaultValue=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400" htmlFor="password">
              Password
            </label>
            <input
              className="mt-1 w-full rounded-md bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
              type="password"
              id="password"
              name="password"
              defaultValue=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400" htmlFor="role">
              Role
            </label>

            <select
              className="mt-1 w-full rounded-md bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
              id="role"
              name="role"
              defaultValue="seeker">
              <option value="seekers">Seeker</option>
              <option value="donor">Donor</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400" htmlFor="biography">
              Biography
            </label>
            <textarea
              className="mt-1 w-full rounded-md bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
              id="biography"
              name="biography"
              rows={4}
              defaultValue=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400" htmlFor="photo_id">
              Upload Photo ID
            </label>
            <input
              className="mt-1 w-full rounded-md bg-gray-700 p-2 text-white focus:border-blue-500 focus:ring-blue-500"
              type="file"
              id="photo_id"
              name="photo_id"
              accept="image/*"
            />
          </div>

            <div className="flex justify-end">
            <button
              className="w-full rounded-full bg-green-500 px-4 py-2 text-white shadow transition duration-300 hover:bg-green-600"
              type="submit">
              Save 
            </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
