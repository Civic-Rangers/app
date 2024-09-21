import React, { useState } from 'react';
import FloodZoneComponent from '../pages/FloodZone.tsx';
import { Address } from 'cluster';

export function FloodAlertForm() {
  const [formData, setFormData] = useState({
    address_street: '',
    address_state: '',
    address_zip: '',
    address_city: ''  
  });

  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [fetchedAddresses, setFetchedAddresses] = useState<Address[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiUrl = "https://2hxqzzp7-5001.use2.devtunnels.ms";

    console.log('Form data:', formData);
    console.log('API URL:', apiUrl);

    try {
      const address = {
        address: `${formData.address_street}, ${formData.address_city}, ${formData.address_state}, ${formData.address_zip}`
      };
      
      const response = await fetch(`${apiUrl}/api/FloodZone`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(address),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        console.log('User created successfully:', data);
        setToast({ show: true, message: 'User created successfully!', type: 'success' });
      } else {
        console.error('Error creating user:', data);
        setToast({ show: true, message: `Error: ${data.message}`, type: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      //@ts-ignore
      // setToast({ show: true, message: `Error: ${error.message}`, type: 'error' });
    } finally {
      setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000); // Hide toast after 3 seconds
    }
  };

  const handleDataFetched = (addresses: Address[]) => {
    setFetchedAddresses(addresses);
  };

  return (
    <div className="container mx-auto p-4 pb-20">
      {toast.show && (
        <div className={`toast toast-top toast-end ${toast.type === 'success' ? 'alert-success' : 'alert-error'}`}>
          <div className="alert">
            <div>
              <span>{toast.message}</span>
            </div>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Street Address</span>
          </label>
          <input
            type="text"
            name="address_street"
            value={formData.address_street}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">State</span>
          </label>
          <input
            type="text"
            name="address_state"
            value={formData.address_state}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">ZIP Code</span>
          </label>
          <input
            type="text"
            name="address_zip"
            value={formData.address_zip}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">City</span>
          </label>
          <input
            type="text"
            name="address_city"
            value={formData.address_city}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="table table-zebra mt-5">
          <thead>
            <tr className='flex justify-center ...'>
              <th>Flood Zones</th>      
            </tr>
            <tr>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
            </tr>
          </thead>
          <tbody>
            {fetchedAddresses.map((address, index) => (
              <tr key={index}>
                <td>{address.address_street}</td>
                <td>{address.address_city}</td>
                <td>{address.address_state}</td>
                <td>{address.address_zip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <FloodZoneComponent onDataFetched={handleDataFetched} />
    </div>
  );
}

export default FloodAlertForm;