import { useState } from 'react'

import { FaRoute } from 'react-icons/fa'

import { Avatar } from './Avatar'

export const Navbar = () => {
  const [isLoggedIn] = useState(false)

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          Spot Me
          <FaRoute className="mr-2" />
        </a>
      </div>

      {isLoggedIn ? (
        <Avatar />
      ) : (
        <div className="navbar-end">
          <a className="btn btn-accent btn-sm">Log In</a>
        </div>
      )}
    </div>
  )
}
