import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">
              Contact Us
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">Get In Touch</h1>
            <p className="mt-3 sm:mt-6 text-muted sm:text-lg leading-relaxed">
              Have a project in mind? Reach out and our team will get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info - compact on mobile, cards on desktop */}
      <section className="py-4 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: compact list */}
          <div className="sm:hidden space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white border border-border rounded-lg">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={16} />
              </div>
              <div>
                <p className="text-xs text-muted">Phone</p>
                <p className="text-sm font-medium text-secondary">+91-97611 56555</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white border border-border rounded-lg">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={16} />
              </div>
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="text-sm font-medium text-secondary">info@pawanindustries.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white border border-border rounded-lg">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={16} />
              </div>
              <div>
                <p className="text-xs text-muted">Address</p>
                <p className="text-sm font-medium text-secondary">113, GIDC Industrial Estate, Kalol, Gujarat</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white border border-border rounded-lg">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                <Clock className="text-primary" size={16} />
              </div>
              <div>
                <p className="text-xs text-muted">Working Hours</p>
                <p className="text-sm font-medium text-secondary">Mon – Sat: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Desktop: card grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-sm transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-primary" size={22} />
              </div>
              <h3 className="font-semibold text-secondary text-sm mb-2">Address</h3>
              <p className="text-sm text-muted leading-relaxed">
                113, GIDC Industrial Estate, Kalol - 389330, Dist: Panchmahal, Gujarat, India
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-sm transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-primary" size={22} />
              </div>
              <h3 className="font-semibold text-secondary text-sm mb-2">Phone</h3>
              <p className="text-sm text-muted">+91-2676-235213</p>
              <p className="text-sm text-muted">+91-97611 56555</p>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-sm transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-primary" size={22} />
              </div>
              <h3 className="font-semibold text-secondary text-sm mb-2">Email</h3>
              <p className="text-sm text-muted">info@pawanindustries.com</p>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-sm transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-primary" size={22} />
              </div>
              <h3 className="font-semibold text-secondary text-sm mb-2">Working Hours</h3>
              <p className="text-sm text-muted">Mon – Sat: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-16 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary text-center mb-6 sm:mb-8">
            Send Us a Message
          </h2>
          <div className="bg-white border border-border rounded-xl p-5 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Prefer to Talk Directly?</h2>
          <p className="mt-3 text-blue-100">
            Call us at +91-97611 56555 or visit our facility in Kalol, Gujarat.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-6 bg-white text-primary-dark px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Learn More About Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
