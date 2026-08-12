
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import SupplyDetails from './Pages/SupplyDetails';
import InstallationDetails from './Pages/InstallationDetails';
import Consultancy from './Pages/ConsultancyDetails';
import Projects from './Pages/Projects';
// import OurClients from './Pages/OurClients';
// import Contact from './Pages/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/Whatsapp';
import {useLanguageDirection} from './hooks/useLanguageDirection';

function App() {
  useLanguageDirection();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/supplyDetails" element={<SupplyDetails />} />
        <Route path="/installationDetails" element={<InstallationDetails />} />
        <Route path="/consultancyDetails" element={<Consultancy />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;