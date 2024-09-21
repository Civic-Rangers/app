import { useState } from 'react'
import { useEffect } from 'react'

import { FaRoute, FaSignInAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

import { getUser } from '../utils/store'
import { Avatar } from './Avatar'
import { useGlobal } from '../utils/global.store'

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { user } = useGlobal()
  const navigate = useNavigate()
  console.log(isLoggedIn)
  useEffect(() => {
    if (getUser()) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Spot Me
          <FaRoute className="mr-2" />
        </Link>
      </div>
      {user._id != '' ? (
        <Avatar setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <a className="btn btn-accent btn-sm mr-3" onClick={() => navigate('/login')}>
          Log In
          <FaSignInAlt className="ml-2" />
        </a>
      )}
    </div>
  )
}
