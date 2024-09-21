import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
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
import FloodAlert from './pages/FloodAlertForm'

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
<<<<<<< HEAD

            {/* Other routes */}
            <Route path="/flood-alert" element={<FloodAlert />} />

=======
            
>>>>>>> e13950f4bb0ed641e9daf1220e137b13405f364a
          </Route>
        </Route>
      </Routes>
      <ToastContainer position="bottom-center" />
    </BrowserRouter>
  )
}

export default App
