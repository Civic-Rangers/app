import React from 'react'

const applications = [
  { id: 1, name: 'John Doe', status: 'Pending' },
  { id: 2, name: 'Jane Smith', status: 'Pending' },
  { id: 3, name: 'Alice Johnson', status: 'Pending' },
  { id: 4, name: 'Chris Lee', status: 'Pending' },
  { id: 5, name: 'Patricia Brown', status: 'Pending' },
]

const Applications: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">Pending Parking Applications</h1>
      <div className="space-y-4">
        {applications.map(application => (
          <div key={application.id} className="rounded-lg bg-gray-800 p-4 shadow-md">
            <h2 className="text-xl font-semibold">{application.name}</h2>
            <p className="text-gray-400">Status: {application.status}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Applications
