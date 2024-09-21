import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AppContainer } from './components/AppContainer'
import { Layout } from './components/Layout'
import DonorSignup from './pages/DonorForm'
import { Home } from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import SignUp from './pages/SeekerForm'
import DonorDashboard from './pages/donor/Dashboard'
import SeekerDashboard from './pages/seeker/Dashboard'
import DonorRequests from './pages/donor/Requests'
import SeekerApplications from './pages/seeker/Applications'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<AppContainer />}>
            {/* seeker routes */}
            <Route path="/seeker/dashboard" element={<SeekerDashboard />} />
            <Route path="/seeker/applications" element={<SeekerApplications />} />
            <Route path="/seeker/signup" element={<SignUp />} />

            {/* donor routes */}
            <Route path="/donor/spots" element={<DonorDashboard />} />
            <Route path="/donor/requests" element={<DonorRequests />} />
            <Route path="/donor/signup" element={<DonorSignup />} />

            {/* share routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
