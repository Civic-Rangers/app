import { useRef, useEffect, useState } from 'react'

import {
  FaEnvelope,
  FaPhoneAlt,
  FaEllipsisV,
  FaMapMarkerAlt,
  FaClipboardList,
  FaUser,
  FaAppStore,
  FaMap,
  FaHome,
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { getUser } from '../utils/store'
import { useGlobal } from '../utils/global.store'

export const BottomNav = () => {
  const userRole = useRef('donor')
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { user } = useGlobal()

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
          {userRole.current === 'donor' ? (
            <>
              <button onClick={() => navigate('/donor/requests')}>
                <FaClipboardList className="h-5 w-5" />
                <span className="btm-nav-label">Requests</span>
              </button>

              <button onClick={() => navigate('/donor/spots')}>
                <FaMapMarkerAlt className="h-5 w-5" />
                <span className="btm-nav-label">Spots</span>
              </button>

              <button onClick={() => navigate('/profile')}>
                <FaUser className="h-5 w-5" />
                <span className="btm-nav-label">Profile</span>
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate('/seeker/applications')}>
                <FaHome className="h-5 w-5" />
                <span className="btm-nav-label">Applications</span>
              </button>

              <button onClick={() => navigate('/seeker/dashboard')}>
                <FaMap className="h-5 w-5" />
                <span className="btm-nav-label">Dashboard</span>
              </button>

              <button onClick={() => navigate('/profile')}>
                <FaUser className="h-5 w-5" />
                <span className="btm-nav-label">Profile</span>
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
