import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AppContainer } from './components/AppContainer'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<AppContainer />}>
          {/* Add some routes here */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
