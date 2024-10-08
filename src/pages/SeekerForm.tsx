import React, { useState } from 'react'

import Toast from '../components/Toast'
import HTTP from '../utils/http'

export function SeekerSignup() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    address_street: '',
    address_state: '',
    address_zip: '',
    address_city: '',
    phone: '',
    email: '',
    dob: '',
    password: '',
    role: 'seekers',
    biography: '',
    photo_id: '',
  })

  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await HTTP({
        method: 'POST',
        url: `/auth/signup`,
        data: formData,
      })

      const data = response.data

      if (response.status === 201) {
        setToast({ message: 'User created successfully!', type: 'success' })
      } else {
        setToast({ message: `Error: ${data.message}`, type: 'error' })
      }
    } catch (error) {
      setToast({ message: `Error `, type: 'error' })
    }
  }

  return (
    <div className="container mx-auto p-4 pb-20">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

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

        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Role</span>
          </label>
          <input type="text" name="role" value={formData.role} readOnly className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Biography</span>
          </label>
          <textarea
            name="biography"
            value={formData.biography}
            onChange={handleChange}
            className="textarea textarea-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo ID (URL)</span>
          </label>
          <input
            type="text"
            name="photo_id"
            value={formData.photo_id}
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
    </div>
  )
}

export default SeekerSignup
