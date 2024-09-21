import React from 'react'

const mockRequests = [
  { id: 1, name: 'John Doe', image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp', phone: '561-123-4567', location:'Tamarac, FL', date: '2023-10-01', time: '10:00 AM', status: 'Pending' },
  { id: 2, name: 'Jane Smith', image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp', phone: '561-123-4567', location: 'Tamarac, FL', date: '2023-10-02', time: '11:00 AM', status: 'Success' },
  { id: 3, name: 'Alice Johnson', image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp', phone: '561-123-4567', location: 'Tamarac, FL', date: '2023-10-03', time: '12:00 PM', status: 'Failure' },
  { id: 4, name: 'Bob Brown', image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp', phone: '561-123-4567', location:'Tamarac, FL', date: '2023-10-04', time: '01:00 PM', status: 'Success' },
  { id: 5, name: 'Tom Davis', image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp', phone: '561-123-4567', location:'Tamarac, FL', date: '2023-10-05', time: '02:00 PM', status: 'Success' },
]

const Requests: React.FC = () => {
  return (
    <>
      <div className='p-0 pb-20'>
        <header className="mb-6 flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg">
          <h1 className="text-1xl font-bold text-white">Requests</h1>
        </header>

        <table className='table-auto w-full mt-4 rounded-lg shadow-xl overflow-hidden'>
        <thead className='text-white'>
            <tr className="bg-gray-800 h-12">
                <th className='p-2 text-left'>Name</th>
                <th className='p-2 text-left'>Contact</th>
                <th className='p-2 text-left'>Date</th>
                <th className='p-2 text-left'>Time</th>
                <th className='p-2 text-left'>Status</th>
            </tr>
          </thead>
          <tbody className='text-white bg-gray-800'>
            {mockRequests.map(request => (
              <tr key={request.id} className='border-b'>
                <td className='p-2 md:flex items-center gap-4'>
                    <img src={request.image} alt={request.name} className='w-10 h-10 rounded hidden md:block'/>
                  <div>
                    <p>{request.name}</p>
                    <p className="text-sm text-gray-500">{request.location}</p>

                  </div>
                </td>
                <td className='p-2'>{request.phone}</td>
                <td className='p-2'>{request.date}</td>
                <td className='p-2'>{request.time}</td>
                <td className='p-2'>
                  <div className={`text-white badge ${request.status === 'Success' ? 'badge-success' : request.status === "Failure" ? "badge-error" : "badge-warning"}`}>{request.status}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Requests
