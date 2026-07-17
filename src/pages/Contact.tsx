import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-6 sm:py-10 lg:py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary-light rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-blue-200 font-semibold text-sm tracking-wide uppercase mb-3">
              Contact Us
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Get In Touch</h1>
            <p className="mt-3 text-blue-100 sm:text-lg leading-relaxed">
              Have a project in mind? Reach out and our engineering team will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main content: Form + Contact Info side by side */}
      <section className="py-8 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3 border border-border rounded-2xl p-5 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-secondary mb-1">
                Send Us a Message
              </h2>
              <p className="text-muted text-sm mb-5">
                Fill out the form below and we'll respond promptly.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-accent rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-secondary mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <a href="tel:+919761156555" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">Phone</p>
                      <p className="text-sm text-muted mt-0.5">+91-2676-235213</p>
                      <p className="text-sm text-muted">+91-97611 56555</p>
                    </div>
                  </a>

                  <a href="mailto:info@pawanindustries.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">Email</p>
                      <p className="text-sm text-muted mt-0.5">info@pawanindustries.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary">Address</p>
                      <p className="text-sm text-muted mt-0.5">
                        113, GIDC Industrial Estate,<br />
                        Kalol - 389330, Dist: Panchmahal,<br />
                        Gujarat, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary">Working Hours</p>
                      <p className="text-sm text-muted mt-0.5">Mon – Sat: 9:00 AM – 6:00 PM</p>
                      <p className="text-sm text-muted">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 rounded-xl overflow-hidden border border-border">
                  <iframe
                    title="Pawan Industries Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.5!2d73.4616!3d22.6082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM2JzI5LjUiTiA3M8KwMjcnNDEuOCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
