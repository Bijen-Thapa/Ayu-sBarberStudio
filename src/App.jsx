import NavBar from './components/NavBar';
import {  Routes, Route } from 'react-router-dom';
import {Main, AboutUs, Gallery, Services} from "./pages";
import Footer from './components/Footer';
function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
