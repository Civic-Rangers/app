import { useRef } from 'react'

import { FaMapMarkerAlt, FaClipboardList, FaUser, FaMap, FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const BottomNav = () => {
  const userRole = useRef('donor')

  return (
    <div className="btm-nav">
      {userRole.current === 'donor' ? (
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
  )
}
