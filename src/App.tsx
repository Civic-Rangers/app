import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { AppContainer } from './components/AppContainer'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import DonorSignup from './pages/DonorForm'
import { Home } from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import SeekerSignup from './pages/SeekerForm'
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
            <Route path="/seeker/dashboard" element={<Dashboard />} />
            <Route path="/seeker/signup" element={<SeekerSignup />} />
            <Route path="/seeker/applications" element={<SeekerApplications />} />

            {/* donor routes */}
            <Route path="/donor/signup" element={<DonorSignup />} />
            <Route path="/donor/spots" element={<Dashboard />} />
            <Route path="/donor/requests" element={<DonorRequests />} />

            {/* share routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            
          </Route>
        </Route>
      </Routes>
      <ToastContainer position="bottom-center" />
    </BrowserRouter>
  )
}

export default App
