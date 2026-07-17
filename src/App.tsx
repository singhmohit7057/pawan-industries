import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import Infrastructure from './pages/Infrastructure';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import IndustryDetail from './pages/IndustryDetail';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      {/* Background rotating gears */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden lg:block">
        <img
          src="/Gear.png"
          alt=""
          className="absolute -top-20 -right-20 w-[300px] h-[300px] opacity-[0.06]"
          style={{ animation: 'spin-slow 40s linear infinite' }}
        />
        <img
          src="/Gear.png"
          alt=""
          className="absolute -bottom-16 -left-16 w-[250px] h-[250px] opacity-[0.06]"
          style={{ animation: 'spin-slow-reverse 50s linear infinite' }}
        />
        <img
          src="/Gear.png"
          alt=""
          className="absolute top-[55%] -right-10 w-[180px] h-[180px] opacity-[0.04]"
          style={{ animation: 'spin-slow 35s linear infinite' }}
        />
      </div>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:id" element={<IndustryDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
