import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { industryDetails } from '../data/industryDetails';

export default function IndustryDetail() {
  const { id } = useParams<{ id: string }>();
  const industry = id ? industryDetails[id] : null;

  if (!industry) {
    return (
      <section className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-secondary mb-4">Industry Not Found</h1>
          <Link to="/industries" className="text-primary hover:underline">
            Back to Industries
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/industries" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
            <ArrowLeft size={16} /> Back to Industries
          </Link>
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary">{industry.title}</h1>
            <p className="mt-4 text-lg text-primary font-medium">{industry.subtitle}</p>
            <p className="mt-4 text-muted leading-relaxed">{industry.description}</p>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {industry.images.map((img) => (
              <div key={img.alt} className="rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-56 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5">
              {industry.content.map((para, i) => (
                <p key={i} className="text-muted leading-relaxed">{para}</p>
              ))}
            </div>
            <div>
              <div className="bg-accent border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-secondary mb-4">Our Capabilities</h3>
                <ul className="space-y-3">
                  {industry.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Need a Solution for {industry.title}?</h2>
          <p className="mt-3 text-blue-100">
            Let's discuss your specific requirements and how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-6 bg-white text-primary-dark px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
