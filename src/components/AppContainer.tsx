import { Outlet } from 'react-router-dom'

import { BottomNav } from './BottomNav'

export const AppContainer = () => {
  return (
    <div className="px-5">
      <Outlet />
      <BottomNav />
    </div>
  )
}
