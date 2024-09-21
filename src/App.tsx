import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import DonorSignup from './pages/DonorForm'
import SeekerSignup from './pages/SeekerForm'
import UserLogin from './pages/UserLogin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/donor-signup" element={<DonorSignup />} />
          <Route path="/user-login" element={<UserLogin />} />
          {/* <Route path="/donor-dashboard" element={<DonorSignup />} /> */}
          {/* <Route path="/donor-profile" element={<SeekerProfile />} /> */}
          <Route path="/seeker-signup" element={<SeekerSignup />} />
          {/* <Route path="/seeker-dashboard" element={<SeekerSignup />} /> */}
          {/* <Route path="/seeker-profile" element={<SeekerProfile />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
