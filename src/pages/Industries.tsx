import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Icon from '../components/Icon';
import { industries } from '../data/industries';

export default function Industries() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              Industries We Serve
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
              Multi-Industry Engineering Expertise
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              With over three decades of experience, we serve diverse industrial sectors with
              specialized engineering solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className="bg-white border border-border rounded-xl p-8 hover:shadow-md hover:border-primary/30 transition-all text-center md:text-left"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 mx-auto md:mx-0">
                  <Icon name={ind.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{ind.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{ind.description}</p>
                <div>
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wide mb-2">
                    Key Expertise
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {ind.expertise.map((e) => (
                      <span
                        key={e}
                        className="text-xs bg-blue-50 text-primary px-2.5 py-1 rounded-full"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Have an Industry-Specific Requirement?</h2>
          <p className="mt-3 text-blue-100">
            Our team has the expertise to deliver tailored solutions for your sector.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-6 bg-white text-primary-dark px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Discuss Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
