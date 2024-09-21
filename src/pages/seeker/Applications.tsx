import React from 'react'
import thumbnailImage from "../../assets/car.png";

const applications = [
  { id: 1, name: 'John Doe', image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp', address: '123 Main St, Fort Lauderdale, FL, 33301', thumbnail:thumbnailImage, time:'10:00 AM', status: 'Success' },
  { id: 2, name: 'Jane Smith', image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp', address: '123 Main St, Fort Lauderdale, FL, 33301', thumbnail:thumbnailImage, time:'10:00 AM', status: 'Failure' },
  { id: 3, name: 'Alice Johnson', image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp', address: '123 Main St, Fort Lauderdale, FL, 33301', thumbnail:thumbnailImage, time:'10:50 AM', status: 'Pending' },
  { id: 4, name: 'Chris Lee', image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp', address: '123 Main St, Fort Lauderdale, FL, 33301', thumbnail:thumbnailImage, time:'11:00 AM', status: 'Pending' },
  { id: 5, name: 'Patricia Brown', image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp', address: '123 Main St, Fort Lauderdale, FL, 33301', thumbnail:thumbnailImage, time:'12:00 PM', status: 'Pending' },
]

const Applications: React.FC = () => {
  return (
    <div className="p-0 pb-20">
      <header className="mb-6 flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg">
        <h1 className="text-1xl font-bold text-white">Applications</h1>
      </header>
      
      <div className="space-y-4">
      <table className='table-auto w-full mt-4 rounded-lg shadow-xl overflow-hidden'>
            <thead className='text-white'>
              <tr className="bg-gray-800 h-12">
                <th className='p-2 text-left'>Name</th>
                <th className='p-2 text-left'>Address</th>
                {/* <th className='p-2 text-left'>Image</th> */}
                <th className='p-2 text-left'>Time</th>
                <th className='p-2 text-left'>Status</th>
              </tr>
            </thead>
            <tbody className='text-white bg-gray-800'>
              {applications.map(application => (
                <tr key={application.id} className='border-b'>
                  <td className='p-2 md:flex items-center gap-4'>
                    <img src={application.image} alt={application.image} className='w-10 h-10 rounded hidden md:block'/>
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
                  <td className='p-2'>
                    <div className={`text-white badge ${application.status === 'Success' ? 'badge-success' : application.status === "Failure" ? "badge-error" : "badge-warning"}`}>{application.status}</div>
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
