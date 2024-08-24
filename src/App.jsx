import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Main, AboutUs, Gallery, HeroSection, Services} from "./pages";
function App() {
  return (
    <>
      {/* <Main /> */}
      <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
