import React from 'react'
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom'

import Home from './pages/Home'
import Single from './pages/Single'
import Banner from './assets/images/banner.png'
import './styles.sass'

const App: React.FC = () => (
  <Router>
    <div className="logo">
      <Link to="/">
        <img src={Banner} alt="heroes" />
      </Link>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<Single />} />
      {/* <Route component={NotFound} /> */}
    </Routes>
  </Router>
)

export default App
