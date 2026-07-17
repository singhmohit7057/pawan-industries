import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary-light to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Desktop: single row with 4 columns */}
        <div className="hidden md:grid md:grid-cols-4 gap-10">
          {/* Logo + About */}
          <div>
            <img src="/LOGO-transparent.png" alt="Pawan Industries" className="h-14 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              From Design to Execution — Your One-Stop Engineering Solution since 1989.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-5 bg-primary hover:bg-primary-dark text-white text-sm px-5 py-2.5 rounded-lg font-medium transition-colors"
            >
              Request Consultation <ArrowRight size={14} />
            </Link>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-primary-light transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Services</Link></li>
              <li><Link to="/industries" className="hover:text-primary-light transition-colors">Industries</Link></li>
              <li><Link to="/projects" className="hover:text-primary-light transition-colors">Projects</Link></li>
              <li><Link to="/clients" className="hover:text-primary-light transition-colors">Clients</Link></li>
              <li><Link to="/careers" className="hover:text-primary-light transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/industries/ceramic" className="hover:text-primary-light transition-colors">Ceramic</Link></li>
              <li><Link to="/industries/glass" className="hover:text-primary-light transition-colors">Glass</Link></li>
              <li><Link to="/industries/railway" className="hover:text-primary-light transition-colors">Railway</Link></li>
              <li><Link to="/industries/chemical" className="hover:text-primary-light transition-colors">Chemical</Link></li>
              <li><Link to="/industries/cement" className="hover:text-primary-light transition-colors">Cement</Link></li>
              <li><Link to="/industries/infrastructure" className="hover:text-primary-light transition-colors">Infrastructure</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:+919761156555" className="flex items-center gap-2.5 hover:text-primary-light transition-colors">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-primary-light" />
                  </div>
                  +91-97611 56555
                </a>
              </li>
              <li>
                <a href="mailto:info@pawanindustries.com" className="flex items-center gap-2.5 hover:text-primary-light transition-colors">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-primary-light" />
                  </div>
                  info@pawanindustries.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={14} className="text-primary-light" />
                  </div>
                  <span>113, GIDC Industrial Estate, Kalol - 389330, Gujarat, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden">
          {/* Logo + tagline + CTA */}
          <div className="text-center flex flex-col items-center mb-10">
            <img src="/LOGO-transparent.png" alt="Pawan Industries" className="h-20 w-auto mb-4" />
            <p className="text-gray-400 text-sm">From Design to Execution</p>
            <p className="text-gray-400 text-sm">— Your One-Stop Engineering Solution since 1989.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-5 bg-primary hover:bg-primary-dark text-white text-sm px-5 py-2.5 rounded-lg font-medium transition-colors"
            >
              Request Consultation <ArrowRight size={14} />
            </Link>
          </div>

          {/* 2-col links */}
          <div className="grid grid-cols-2 gap-8 text-center">
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-primary-light transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-primary-light transition-colors">Services</Link></li>
                <li><Link to="/industries" className="hover:text-primary-light transition-colors">Industries</Link></li>
                <li><Link to="/projects" className="hover:text-primary-light transition-colors">Projects</Link></li>
                <li><Link to="/clients" className="hover:text-primary-light transition-colors">Clients</Link></li>
                <li><Link to="/careers" className="hover:text-primary-light transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-white uppercase tracking-wider">Industries</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><Link to="/industries/ceramic" className="hover:text-primary-light transition-colors">Ceramic</Link></li>
                <li><Link to="/industries/glass" className="hover:text-primary-light transition-colors">Glass</Link></li>
                <li><Link to="/industries/railway" className="hover:text-primary-light transition-colors">Railway</Link></li>
                <li><Link to="/industries/chemical" className="hover:text-primary-light transition-colors">Chemical</Link></li>
                <li><Link to="/industries/cement" className="hover:text-primary-light transition-colors">Cement</Link></li>
                <li><Link to="/industries/infrastructure" className="hover:text-primary-light transition-colors">Infrastructure</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-8 text-center">
            <h4 className="font-semibold text-sm mb-4 text-white uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:+919761156555" className="flex items-center justify-center gap-2.5 hover:text-primary-light transition-colors">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-primary-light" />
                  </div>
                  +91-97611 56555
                </a>
              </li>
              <li>
                <a href="mailto:info@pawanindustries.com" className="flex items-center justify-center gap-2.5 hover:text-primary-light transition-colors">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-primary-light" />
                  </div>
                  info@pawanindustries.com
                </a>
              </li>
              <li>
                <div className="flex items-start justify-center gap-2.5">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={14} className="text-primary-light" />
                  </div>
                  <span>113, GIDC Industrial Estate, Kalol - 389330, Gujarat, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Pawan Industries. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Made with ❤️ by <a href="https://www.tmmt.in" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:text-white transition-colors">TMMT</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
