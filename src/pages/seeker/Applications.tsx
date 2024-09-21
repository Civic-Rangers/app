import React from 'react'

import thumbnailImage from '../../assets/car.png'

const applications = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
    address: '123 Main St, Fort Lauderdale, FL, 33301',
    thumbnail: thumbnailImage,
    time: '10:00 AM',
    status: 'Success',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
    address: '123 Main St, Fort Lauderdale, FL, 33301',
    thumbnail: thumbnailImage,
    time: '10:00 AM',
    status: 'Failure',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
    address: '123 Main St, Fort Lauderdale, FL, 33301',
    thumbnail: thumbnailImage,
    time: '10:50 AM',
    status: 'Pending',
  },
  {
    id: 4,
    name: 'Chris Lee',
    image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
    address: '123 Main St, Fort Lauderdale, FL, 33301',
    thumbnail: thumbnailImage,
    time: '11:00 AM',
    status: 'Pending',
  },
  {
    id: 5,
    name: 'Patricia Brown',
    image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
    address: '123 Main St, Fort Lauderdale, FL, 33301',
    thumbnail: thumbnailImage,
    time: '12:00 PM',
    status: 'Pending',
  },
]

const Applications: React.FC = () => {
  return (
    <div className="p-0 pb-20">
      <h1 className="text-1xl flex w-full items-center justify-between font-bold text-white">
        Parking Sports Near You
        <span role="img" aria-label="rocket" className="ml-5">
          <span role="img" aria-label="congratulations" className="ml-2">
            🚀
          </span>
        </span>
      </h1>

      <div className="space-y-4">
        <table className="mt-4 w-full table-auto overflow-hidden rounded-lg shadow-xl">
          <thead className="text-white">
            <tr className="h-12 bg-gray-800">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Address</th>
              {/* <th className='p-2 text-left'>Image</th> */}
              <th className="p-2 text-left">Time</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 text-white">
            {applications.map(application => (
              <tr key={application.id} className="border-b">
                <td className="items-center gap-4 p-2 md:flex">
                  <img src={application.image} alt={application.image} className="hidden h-10 w-10 rounded md:block" />
                  <div>
                    <p>{application.name}</p>
                  </div>
                </td>
                <td>{application.address}</td>
                {/* Image looks strange in table. Maybe revisit. */}
                {/* <td>
                    <img src={thumbnailImage} className='w-10 h-10'/>
                  </td> */}
                <td>{application.time}</td>
                <td className="p-2">
                  <div
                    className={`badge text-white ${application.status === 'Success' ? 'badge-success' : application.status === 'Failure' ? 'badge-error' : 'badge-warning'}`}>
                    {application.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Applications
