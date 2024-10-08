import { useRef, useEffect, useState } from 'react'

import { FaMapMarkerAlt, FaClipboardList, FaUser, FaMap, FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import { getUser } from '../utils/store'
import { useGlobal } from '../utils/global.store'

export const BottomNav = () => {
  const userRole = useRef('donor')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { user } = useGlobal()

  console.log(isLoggedIn)
  useEffect(() => {
    if (getUser()) {
      setIsLoggedIn(true)

      userRole.current = getUser().role
    }
  }, [])

  return (
    <>
      {user._id != '' && (
        <div className="btm-nav">
          {user.role === 'donor' ? (
            <>
              <NavLink to="/donor/requests">
                <FaClipboardList className="h-5 w-5" />
                <span className="btm-nav-label">Requests</span>
              </NavLink>

              <NavLink to="/donor/spots">
                <FaMapMarkerAlt className="h-5 w-5" />
                <span className="btm-nav-label">Spots</span>
              </NavLink>

              <NavLink to="/profile">
                <FaUser className="h-5 w-5" />
                <span className="btm-nav-label">Profile</span>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/seeker/applications">
                <FaHome className="h-5 w-5" />
                <span className="btm-nav-label">Applications</span>
              </NavLink>

              <NavLink to="/seeker/dashboard">
                <FaMap className="h-5 w-5" />
                <span className="btm-nav-label">Dashboard</span>
              </NavLink>

              <NavLink to="/profile">
                <FaUser className="h-5 w-5" />
                <span className="btm-nav-label">Profile</span>
              </NavLink>
            </>
          )}
        </div>
      )}
    </>
  )
}
