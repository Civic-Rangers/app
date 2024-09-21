import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import HTTP from '../utils/http'

const notifySuccess = (message: string) => toast.success(`${message}`)
const notifyError = (message: string) => toast.error(`${message}`)

export default function Login() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await HTTP({
        method: 'POST',
        url: `/auth/login`,
        data: formData,
      })

      console.log(response.data)

      if (response?.data?.user?.['_id']) {
        notifySuccess(`Welcome back, ${response.data.user.first_name}`)

        setTimeout(() => {
          localStorage.setItem('user', JSON.stringify(response.data.user))
          localStorage.setItem('token', response.data.token)

          navigate('/profile')
          setIsLoading(false)
        }, 2000)
      }
    } catch (error) {
      notifyError('Invalid email or password')
      setIsLoading(false)

      console.log('ERROR: ' + error)
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <h1 className="text-2xl font-semibold">Login</h1>

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

            <div className="form-control mt-6">
              {isLoading ? (
                <button type="button" className="btn btn-primary" disabled>
                  Loading...
                  <svg
                    className="mr-3 h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>{' '}
    </>
  )
}
