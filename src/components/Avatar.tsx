import { useNavigate } from 'react-router-dom'

export const Avatar = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    navigate('/login')
  }

  return (
    <div className="mr-3 flex-none">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="avatar btn btn-circle btn-ghost">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul tabIndex={0} className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
              {/* <span className="badge">New</span> */}
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a onClick={() => logout()}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
