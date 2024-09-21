import { FaEnvelope, FaPhoneAlt, FaEllipsisH } from 'react-icons/fa'

import { Card } from './Card'

// Adjust the import path as necessary

type ProfileProps = {
  role: string
  name: string
  description: string
  phone: string
  email: string
  availableSpaces: Array<{
    address_street: string
    address_city: string
    address_state: string
    address_zip?: string
    distance: string
    available: string
    imageSrc: string
  }>
  isLoggedInUser: boolean // New prop to check if the profile belongs to the logged-in user
}

export function Profile({ role, name, description, phone, email, availableSpaces, isLoggedInUser }: ProfileProps) {
  console.log(role, isLoggedInUser)

  return (
    <div className="p-0 pb-20">
      <header className="mb-6 flex items-center justify-between rounded-lg bg-gray-800 p-4 shadow-lg">
        <h1 className="text-1xl font-bold text-white">Spots</h1>
      </header>
      <>
        <div className="relative mb-16">
          {/* Profile background and dropdown */}
          <div className="h-32 rounded-lg bg-gray-800 bg-cover">
            <div className="absolute right-2 top-2">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-sm">
                  <FaEllipsisH />
                </label>
                <ul tabIndex={0} className="menu dropdown-content w-52 rounded-box bg-base-100 p-2 shadow">
                  <li>
                    <button>Message User</button>
                  </li>
                  <li>
                    <button className="text-red-500">Report User</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Profile picture */}
          <div className="absolute bottom-0 left-4 translate-y-1/2 transform">
            <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white">
              <img
                className="h-full w-full object-cover"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" // Replace with actual image URL
                alt="Profile"
              />
            </div>
          </div>
        </div>

        {/* User Info */}
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-gray-400">{description}</p>
          <div className="mt-2 flex gap-4">
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={14} />
              <p className="text-sm">{phone}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope size={14} />
              <p className="text-sm">{email}</p>
            </div>
          </div>
        </div>

        {/* Available Parking Spaces */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Available Parking Spaces</h3>
          <div className="mt-2 flex flex-wrap gap-4">
            {availableSpaces.length > 0 ? (
              availableSpaces.map((space, index) => (
                <Card
                  key={index}
                  address_street={space.address_street}
                  address_city={space.address_city}
                  address_state={space.address_state}
                  address_zip={space.address_zip}
                  distance={space.distance}
                  available={space.available}
                  imageSrc={space.imageSrc}
                  // onClick={() => document.getElementById('my_modal_1').showModal()} // Example onClick functionality
                />
              ))
            ) : (
              <p>No available parking spaces listed.</p>
            )}
          </div>
        </div>

        {/* Conditional Requests Section */}
        {/* {isLoggedInUser && (
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold">Requests</h3>
                            <table className="table-auto w-full mt-4 rounded-lg shadow-xl overflow-hidden">
                                <thead>
                                    <tr className="bg-gray-100 h-12">
                                        <th className="p-2 text-left">Name</th>
                                        <th className="p-2 text-left">Phone</th>
                                        <th className="p-2 text-left">Vehicle</th>
                                        <th className="p-2 text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {requests.map((request, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="p-2 flex items-center gap-4">
                                                <img src={request.profileImg} alt={request.name} className="w-12 h-12 rounded-full hidden md:block" />
                                                <div>
                                                    <p>{request.name}</p>
                                                    <p className="text-sm text-gray-500">{request.location}</p>
                                                </div>
                                            </td>
                                            <td className="p-2">{request.phone}</td>
                                            <td className="p-2">{request.vehicle}</td>
                                            <td className="p-2">
                                            <button className="btn btn-sm">Review</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )} */}
      </>
    </div>
  )
}
