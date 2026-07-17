import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { industries } from '../data/industries';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/industries', label: 'Industries', hasDropdown: true },
  { path: '/projects', label: 'Projects' },
  { path: '/infrastructure', label: 'Infrastructure' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img src="/LOGO.png" alt="Pawan Industries" className="h-16 lg:h-18 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setIndustriesOpen(true)}
                  onMouseLeave={() => setIndustriesOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname.startsWith('/industries')
                        ? 'text-primary bg-blue-50'
                        : 'text-secondary hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  {industriesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-border rounded-lg shadow-lg py-2 z-50">
                      {industries.map((ind) => (
                        <Link
                          key={ind.id}
                          to={`/industries/${ind.id}`}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            location.pathname === `/industries/${ind.id}`
                              ? 'text-primary bg-blue-50'
                              : 'text-secondary hover:text-primary hover:bg-gray-50'
                          }`}
                        >
                          {ind.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary bg-blue-50'
                      : 'text-secondary hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919761156555"
              className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
            >
              <Phone size={16} />
              +91-97611 56555
            </a>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Request Consultation
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-secondary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.path}>
                  <button
                    onClick={() => setIndustriesOpen(!industriesOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname.startsWith('/industries')
                        ? 'text-primary bg-blue-50'
                        : 'text-secondary hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={16} className={`transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {industriesOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link
                        to="/industries"
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-muted hover:text-primary"
                      >
                        All Industries
                      </Link>
                      {industries.map((ind) => (
                        <Link
                          key={ind.id}
                          to={`/industries/${ind.id}`}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-sm text-muted hover:text-primary"
                        >
                          {ind.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary bg-blue-50'
                      : 'text-secondary hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 bg-primary text-white text-center px-5 py-3 rounded-lg text-sm font-semibold"
            >
              Request Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
