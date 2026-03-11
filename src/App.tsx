import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Home from './pages/Home'
import About from './pages/About'
import Mission from './pages/Mission'
import Contact from './pages/Contact'
import { Suspense, lazy } from 'react'

const Products = lazy(() => import('./pages/Products'))
const Legal = lazy(() => import('./pages/Legal'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Suspense fallback={<div style={{ padding: 24 }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/products" element={<Products />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
