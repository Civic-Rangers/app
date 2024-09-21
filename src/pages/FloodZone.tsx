// FloodZone.tsx
import { useState, useEffect } from 'react'

interface Address {
  address_street: string
  address_city: string
  address_state: string
  address_zip: string
}
 

interface FloodZoneComponentProps {
  onDataFetched: (addresses: Address[]) => void;
}

const FloodZoneComponent = ({ onDataFetched }: FloodZoneComponentProps) => {
  const [, setAddresses] = useState<Address[]>([])

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetch('https://2hxqzzp7-5001.use2.devtunnels.ms/api/FloodZone')
        const data = await response.json()

        console.log('Fetched ')

        const formattedAddresses: Address[] = data.map((entry: { address: string }) => {
          if (entry.address) {
            const [street, city, state, zip] = entry.address.split(',').map((str: string) => str.trim())

            return {
              address_street: street,
              address_city: city,
              address_state: state,
              address_zip: zip,
            }
          }

          // Return a default empty object if address is missing or null
          return {
            address_street: '',
            address_city: '',
            address_state: '',
            address_zip: '',
          }
        })

        setAddresses(formattedAddresses)
        onDataFetched(formattedAddresses) // Pass data to parent
      } catch (error) {
        console.error('Error fetching addresses:', error)
      }
    }

    fetchAddresses()
  }, [onDataFetched])

  return null // No need to return anything since the data is being passed to parent
}

export default FloodZoneComponent
