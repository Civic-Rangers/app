import { useState } from 'react'
import { useEffect } from 'react'

import { FaRoute, FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { getUser } from '../utils/store'
import { Avatar } from './Avatar'

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (getUser()) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div className="navbar bg-base-100">
      <div className="flex w-full justify-between">
        <a className="btn btn-ghost text-xl">
          Spot Me
          <FaRoute className="mr-2" />
        </a>

        {isLoggedIn ? (
          <Avatar />
        ) : (
          <a className="btn btn-accent btn-sm mr-3" onClick={() => navigate('/login')}>
            Log In
            <FaSignInAlt className="ml-2" />
          </a>
        )}
      </div>
    </div>
  )
}
