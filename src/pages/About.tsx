import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Download } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { timeline } from '../data/timeline';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary h-[200px] sm:h-[240px] lg:h-[280px] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary-light rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-blue-200 font-semibold text-sm tracking-wide uppercase mb-3">
              About Us
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              35+ Years of Engineering Excellence
            </h1>
            <p className="mt-3 text-blue-100 sm:text-lg leading-relaxed">
              Founded in 1989, Pawan Industries has evolved from a machining-focused business into a
              complete engineering and industrial solutions provider.
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
              <p className="text-muted leading-relaxed">
                The founder of the company brings more than 25+ years of experience
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
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all text-center md:text-left">
              <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <Target className="text-primary" size={20} />
                </div>
                <h3 className="text-base font-semibold text-secondary">Our Mission</h3>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                To enhance customer value proposition by fostering loyalty, driving financial
                well-being, delivering superior quality, ensuring timely execution, and thereby
                achieving unparalleled customer satisfaction.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all text-center md:text-left">
              <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <Eye className="text-primary" size={20} />
                </div>
                <h3 className="text-base font-semibold text-secondary">Our Vision</h3>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                To be a globally recognized leader in customized engineering solutions, delivering
                exceptional services with focus on precision and performance.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all text-center md:text-left">
              <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <Award className="text-primary" size={20} />
                </div>
                <h3 className="text-base font-semibold text-secondary">Quality Policy</h3>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Adherence to the philosophy of continuous improvement to deliver quality products,
                timely delivery and ensure customer satisfaction.
              </p>
            </div>
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
          <div className="overflow-x-auto pb-4">
            <div className="relative min-w-[700px] px-4">
              {/* Top row - even items */}
              <div className="flex justify-between h-20">
                {timeline.map((item, i) => (
                  <div key={item.year} className="flex flex-col items-center justify-end w-[100px]">
                    {i % 2 === 0 ? (
                      <div className="text-center">
                        <span className="text-primary font-bold text-base">{item.year}</span>
                        <p className="text-secondary font-medium text-xs mt-1">{item.title}</p>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              {/* Dots row */}
              <div className="relative flex justify-between py-3">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2" />
                {timeline.map((item) => (
                  <div key={item.year} className="w-[100px] flex justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-2 border-blue-50 shadow-sm z-10" />
                  </div>
                ))}
              </div>
              {/* Bottom row - odd items */}
              <div className="flex justify-between h-16">
                {timeline.map((item, i) => (
                  <div key={item.year} className="flex flex-col items-center justify-start w-[100px]">
                    {i % 2 !== 0 ? (
                      <div className="text-center">
                        <span className="text-primary font-bold text-base">{item.year}</span>
                        <p className="text-secondary font-medium text-xs mt-1">{item.title}</p>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Certifications"
            subtitle="Recognized standards that ensure quality and reliability"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'ISO 9001:2015', desc: 'Quality Management System certified, ensuring consistent quality in all processes.' },
              { title: 'IBR Certified', desc: 'Indian Boiler Regulations certification for pressure vessel and boiler component manufacturing.' },
              { title: 'MSME Registered', desc: 'Registered under Micro, Small and Medium Enterprises Development Act.' },
              { title: 'Factory License', desc: 'Licensed manufacturing facility compliant with all statutory requirements.' },
              { title: 'GST Registered', desc: 'Fully compliant with Goods and Services Tax regulations.' },
              { title: 'SSI Registered', desc: 'Small Scale Industries registration for government project eligibility.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all text-center sm:text-left">
                <div className="flex items-center gap-3 mb-2 justify-center sm:justify-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="text-primary" size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-secondary">{item.title}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20">
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
