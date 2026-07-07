import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Download } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { timeline } from '../data/timeline';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
              35+ Years of Engineering Excellence
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Founded in 1989, Pawan Industries has evolved from a machining-focused business into a
              complete engineering and industrial solutions provider. With a state-of-the-art 2,500
              sq.m. facility and a team of experienced engineers and skilled technicians, we deliver
              precision-engineered solutions that meet the unique needs of our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden">
              <img
                src="/company.jpg"
                alt="Pawan Industries Facility"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
                Our Founder
              </p>
              <h2 className="text-3xl font-bold text-secondary mb-4">Mr. B.N. Giri</h2>
              <p className="text-muted leading-relaxed">
                Mr. B.N. Giri, the founder of the company, brings more than 25 years of experience
                in the engineering and fabrication industry. It is because of his hard work,
                dedication, and capability that Pawan Industries came into existence and has grown
                into a trusted name serving India's leading industrial companies for over 35 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Quality */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-border rounded-xl p-8 text-center md:text-left">
              <Target className="text-primary mb-4 mx-auto md:mx-0" size={32} />
              <h3 className="text-xl font-bold text-secondary mb-3">Our Mission</h3>
              <p className="text-muted text-sm leading-relaxed">
                To enhance customer value proposition by fostering loyalty, driving financial
                well-being, delivering superior quality, ensuring timely execution, and thereby
                achieving unparalleled customer satisfaction.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-8 text-center md:text-left">
              <Eye className="text-primary mb-4 mx-auto md:mx-0" size={32} />
              <h3 className="text-xl font-bold text-secondary mb-3">Our Vision</h3>
              <p className="text-muted text-sm leading-relaxed">
                To be a globally recognized leader in customized engineering solutions, delivering
                exceptional services with focus on precision and performance.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-8 text-center md:text-left">
              <Award className="text-primary mb-4 mx-auto md:mx-0" size={32} />
              <h3 className="text-xl font-bold text-secondary mb-3">Quality Policy</h3>
              <p className="text-muted text-sm leading-relaxed">
                Adherence to the philosophy of continuous improvement to deliver quality products,
                timely delivery and ensure customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What Sets Us Apart" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Design to Execution', desc: 'Complete engineering lifecycle under one roof' },
              { title: 'In-house Infrastructure', desc: '2,500 sq.m. with fabrication & machining shops' },
              { title: 'Experienced Team', desc: 'Skilled engineers and technicians with decades of expertise' },
              { title: 'Multi-industry Projects', desc: 'Serving 6+ industries across diverse sectors' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-border text-center">
                <h4 className="font-semibold text-secondary mb-2">{item.title}</h4>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Journey of Excellence"
            subtitle="Key milestones in our 35+ year journey"
          />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-center mb-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 md:-translate-x-1.5 border-2 border-white shadow" />
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="bg-white border border-border rounded-lg p-4 shadow-sm">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <p className="text-secondary font-medium text-sm mt-1">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Download */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-border rounded-xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-2xl font-bold text-secondary">Company Brochure</h3>
              <p className="mt-2 text-muted text-sm max-w-md">
                Download our complete company profile to learn more about our capabilities, infrastructure, and project portfolio.
              </p>
            </div>
            <a
              href="/Pawan Industries_Company Profile.pdf"
              download
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors shrink-0"
            >
              <Download size={18} />
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Work Together?</h2>
          <p className="mt-3 text-blue-100">
            Let's discuss how our engineering expertise can support your project.
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
