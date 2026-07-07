import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';
import { services } from '../data/services';

export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
              Comprehensive Engineering Solutions
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              From initial concept design to final project execution, we provide end-to-end
              engineering solutions tailored to your industry requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, i) => (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  i % 2 !== 0 ? 'md:direction-rtl' : ''
                }`}
              >
                <div className={`${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-secondary">{service.title}</h2>
                  </div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 md:h-64 object-cover rounded-xl mb-4 md:hidden"
                  />
                  <p className="text-muted leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-secondary">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden hidden md:block ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Need a Custom Solution?</h2>
          <p className="mt-3 text-blue-100">
            Our engineering team is ready to discuss your project requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-6 bg-white text-primary-dark px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Request Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
