import { useRef } from 'react'
import { FaEnvelope, FaPhoneAlt, FaEllipsisV, FaMapMarkerAlt, FaClipboardList, FaUser, FaAppStore, FaMap, FaHome } from "react-icons/fa";

export const BottomNav = () => {
  const userRole = useRef('donor')

  return (
    <div className="btm-nav">
      {userRole.current === 'donor' ? (
        <>
          <button>
            <FaClipboardList className="h-5 w-5" />
            <span className="btm-nav-label">Requests</span>
          </button>

          <button className="active">
            <FaMapMarkerAlt className="h-5 w-5" />
            <span className="btm-nav-label">Spots</span>
          </button>

          <button>
            <FaUser className="h-5 w-5" />
            <span className="btm-nav-label">Profile</span>
          </button>
        </>
      ) : (
        <>
          <button>
            <FaHome className="h-5 w-5" />
            <span className="btm-nav-label">Applications</span>
          </button>

          <button className="active">
            <FaMap className="h-5 w-5" />
            <span className="btm-nav-label">Dashboard</span>
          </button>

          <button>
            <FaUser className="h-5 w-5" />
            <span className="btm-nav-label">Profile</span>
          </button>
        </>
      )}
    </div>
  )
}
