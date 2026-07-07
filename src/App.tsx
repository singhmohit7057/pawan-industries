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
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
