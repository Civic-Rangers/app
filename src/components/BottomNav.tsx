import { useRef } from 'react'

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

export const BottomNav = () => {
  const userRole = useRef('donor')

  const navigate = useNavigate()
  return (
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
  )
}
