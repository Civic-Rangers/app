import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AppContainer } from './components/AppContainer'
import { Layout } from './components/Layout'
import DonorSignup from './pages/DonorForm'
import { Home } from './pages/Home'
import SeekerSignup from './pages/SeekerForm'
import UserLogin from './pages/UserLogin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<AppContainer />}>
            <Route path="/donor-signup" element={<DonorSignup />} />
            <Route path="/user-login" element={<UserLogin />} />
            {/* <Route path="/donor-dashboard" element={<DonorSignup />} /> */}
            {/* <Route path="/donor-profile" element={<SeekerProfile />} /> */}
            <Route path="/seeker-signup" element={<SeekerSignup />} />
            {/* <Route path="/seeker-dashboard" element={<SeekerSignup />} /> */}
            {/* <Route path="/seeker-profile" element={<SeekerProfile />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
