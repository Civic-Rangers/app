import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AppContainer } from './components/AppContainer'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import DonorSignup from './pages/DonorForm'
import { Home } from './pages/Home'
import Profile from './pages/Profile'
import SeekerSignup from './pages/SeekerForm'
import UserLogin from './pages/UserLogin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<AppContainer />}>
            {/* seeker routes */}
            <Route path="/seeker/dashboard" element={<Dashboard />} />
            <Route path="/seeker/signup" element={<SeekerSignup />} />
            <Route path="/seeker/applications" element={<Dashboard />} />

            {/* donor routes */}
            <Route path="/donor/signup" element={<DonorSignup />} />
            <Route path="/donor/spots" element={<Dashboard />} />
            <Route path="/donor/requests" element={<Dashboard />} />

            {/* share routes */}
            <Route path="/login" element={<UserLogin />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
