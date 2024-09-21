import { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api'

const mapContainerStyle = { height: '400px', width: '100%' }
const center = { lat: 26.252142412858532, lng: -80.22885988759279 }

export default function Dashboard() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  const [markers, setMarkers] = useState([])
  const [selectedMarker, setSelectedMarker] = useState<{
    lat: number
    lng: number
    address: string
    image: string
    name: string
  } | null>(null)

  useEffect(() => {
    const data = [
      { lat: 26.209490016320487, lng: -80.21320005332836 },
      { lat: 26.283685589596097, lng: -80.25823372626945 },
      { lat: 26.355378834668013, lng: -80.22304524315508 },
      // Add more marker positions if needed
    ]

    setTimeout(() => {
      setMarkers(data)
    }, 1000)
  }, [])

  const toaster = (message: string) => toast.success(`${message}`)

  const select = () => {
    const array = [
      {
        lat: 26.209490016320487,
        lng: -80.21320005332836,
        address: '123 Palm St, Fort Lauderdale, FL',
        image: 'https://via.placeholder.com/150',
        name: 'John Doe',
      },
      {
        lat: 26.283685589596097,
        lng: -80.25823372626945,
        address: '456 Ocean Dr, Boca Raton, FL',
        image: 'https://via.placeholder.com/150',
        name: 'Jane Smith',
      },
      {
        lat: 26.355378834668013,
        lng: -80.22304524315508,
        address: '789 Sunset Blvd, Coral Springs, FL',
        image: 'https://via.placeholder.com/150',
        name: 'Alice Johnson',
      },
    ]

    const result = array[Math.floor(Math.random() * array.length)]

    setSelectedMarker(result)
  }

  const submitApplication = (marker: any) => {
    toaster(`Application submitted to ${marker.name}`)
  }

  return (
    <div className="p-0 pb-20">
      <ToastContainer />

      <header className="mb-6 flex items-center justify-between rounded-lg bg-gray-800 p-4 shadow-lg">
        <h1 className="text-1xl font-bold text-white flex items-center justify-between w-full">
          Parking Sports Near You
          <span role="img" aria-label="rocket" className="ml-5">
            <span role="img" aria-label="congratulations" className="ml-2">
              🎉
            </span>
          </span>
        </h1>
      </header>

      <div>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
            {markers.map((position, index) => (
              <Marker
                key={index}
                position={position}
                icon={{
                  url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                }}
                onClick={() => select()}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>

      {selectedMarker !== null && (
        <div className="mt-6 rounded-lg bg-gray-800 p-4 shadow-lg">
          <div className="flex items-start">
            <div className="mr-4">
              <h2 className="mb-2 text-2xl font-bold text-white">{selectedMarker.name}</h2>
              <p className="mb-2 text-gray-300">Address: {selectedMarker.address}</p>
              <p className="mb-2 text-gray-300">Distance: 5 miles</p>
            </div>

            <img src={selectedMarker.image} alt={selectedMarker.name} className="h-32 w-32 rounded-lg" />
          </div>

          <button
            className="mt-4 flex w-full items-center justify-center rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
            onClick={() => submitApplication(selectedMarker)}>
            <span className="mr-2">Apply</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
