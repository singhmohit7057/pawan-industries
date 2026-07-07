import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/industries', label: 'Industries' },
  { path: '/projects', label: 'Projects' },
  { path: '/infrastructure', label: 'Infrastructure' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img src="/LOGO.png" alt="Pawan Industries" className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
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
            ))}
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
            {navLinks.map((link) => (
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
            ))}
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
