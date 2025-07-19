import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhoWeAre from './pages/WhoWeAre'
import Beliefs from './pages/Beliefs'
import Gallery from './pages/Gallery'
import ScrollToTop from './components/ScrollToTop'
import Donate from './pages/Donate'
import Projects from './pages/Projects'
import Participate from './pages/Participate'
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/beliefs" element={<Beliefs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/participate" element={<Participate />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
