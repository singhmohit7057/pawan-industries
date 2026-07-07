import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — Logo + Tagline */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/LOGO-transparent.png" alt="Pawan Industries" className="h-16 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              From Design to Execution — Your One-Stop Engineering Solution.
              Over 35 years of precision engineering and industrial fabrication excellence.
            </p>
            <div className="flex items-center gap-4 mt-5 text-sm text-gray-400">
              <a href="tel:+919761156555" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone size={14} className="text-primary-light" />
                +91-97611 56555
              </a>
              <a href="mailto:info@pawanindustries.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail size={14} className="text-primary-light" />
                info@pawanindustries.com
              </a>
            </div>
            <div className="flex items-start gap-1.5 mt-3 text-sm text-gray-400">
              <MapPin size={14} className="text-primary-light mt-0.5 shrink-0" />
              <span>113, GIDC Industrial Estate, Kalol - 389330, Dist: Panchmahal, Gujarat, India</span>
            </div>
          </div>

          {/* Right — Quick Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-6 md:justify-end">
            <div>
              <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link to="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link></li>
                <li><Link to="/clients" className="hover:text-white transition-colors">Clients</Link></li>
                <li><a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Get in Touch</h4>
              <Link
                to="/contact"
                className="inline-block bg-primary hover:bg-primary-dark text-white text-sm px-5 py-2.5 rounded-lg font-medium transition-colors"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Pawan Industries. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Made with ❤️ by <a href="https://www.tmmt.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TMMT</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
