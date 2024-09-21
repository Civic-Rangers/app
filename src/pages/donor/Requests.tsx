import React from 'react'

const mockRequests = [
  { id: 1, name: 'John Doe', date: '2023-10-01', time: '10:00 AM', status: 'Pending' },
  { id: 2, name: 'Jane Smith', date: '2023-10-02', time: '11:00 AM', status: 'Approved' },
  { id: 3, name: 'Alice Johnson', date: '2023-10-03', time: '12:00 PM', status: 'Rejected' },
  { id: 4, name: 'Bob Brown', date: '2023-10-04', time: '01:00 PM', status: 'Pending' },
  { id: 5, name: 'Charlie Davis', date: '2023-10-05', time: '02:00 PM', status: 'Approved' },
]

const Requests: React.FC = () => {
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">Requests</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 bg-gray-800">
          <thead>
            <tr>
              <th className="border-b border-gray-700 px-4 py-2">ID</th>
              <th className="border-b border-gray-700 px-4 py-2">Name</th>
              <th className="border-b border-gray-700 px-4 py-2">Date</th>
              <th className="border-b border-gray-700 px-4 py-2">Time</th>
              <th className="border-b border-gray-700 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockRequests.map(request => (
              <tr key={request.id} className="hover:bg-gray-700">
                <td className="border-b border-gray-700 px-4 py-2">{request.id}</td>
                <td className="border-b border-gray-700 px-4 py-2">{request.name}</td>
                <td className="border-b border-gray-700 px-4 py-2">{request.date}</td>
                <td className="border-b border-gray-700 px-4 py-2">{request.time}</td>
                <td
                  className={`border-b border-gray-700 px-4 py-2 ${request.status === 'Approved' ? 'text-green-400' : request.status === 'Rejected' ? 'text-red-400' : 'text-yellow-400'}`}>
                  {request.status}
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
