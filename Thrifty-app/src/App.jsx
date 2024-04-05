import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Teams from './pages/Teams'



function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Teams />} />
          {/* <Route path="/" element={<PrivateOutlet />}>
              <Route path="/" element={<Dashboard />} />
          </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
