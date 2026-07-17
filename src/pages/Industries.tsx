import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Icon from '../components/Icon';
import SectionHeading from '../components/SectionHeading';
import { industries } from '../data/industries';

const industryImages: Record<string, string> = {
  ceramic: '/industries/HIGH SPEED BLUNGER.jpg',
  glass: '/industries/Glass Plant Projects 1.jpg',
  railway: '/industries/Railway Projects 1.jpg',
  chemical: '/industries/10.jpg',
  cement: '/industries/Cement-Chemical Projects 3.jpg',
  infrastructure: '/industries/Structure Projects 1.jpg',
};

export default function Industries() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-6 sm:py-10 lg:py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary-light rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-blue-200 font-semibold text-sm tracking-wide uppercase mb-3">
              Industries We Serve
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Multi-Industry Engineering Expertise
            </h1>
            <p className="mt-3 text-blue-100 sm:text-lg leading-relaxed">
              With over three decades of experience, we serve diverse industrial sectors with
              specialized engineering solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Industry Sectors"
            subtitle="Specialized solutions tailored to each industry's unique requirements"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.id}
                to={`/industries/${ind.id}`}
                className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-primary/30 transition-all flex flex-col"
              >
                <img
                  src={industryImages[ind.id]}
                  alt={ind.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <Icon name={ind.icon} size={20} className="text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-secondary">{ind.title}</h3>
                  </div>
                  <p className="text-xs text-muted leading-relaxed mb-3">{ind.description}</p>
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {ind.expertise.map((e) => (
                        <span
                          key={e}
                          className="text-xs bg-blue-50 text-primary px-2 py-0.5 rounded-full"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold mt-auto">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
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
