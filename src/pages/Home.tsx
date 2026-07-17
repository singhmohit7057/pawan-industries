import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  FolderKanban,
  Users,
  Layers,
  Shield,
  Clock,
  Wrench,
  Building,
  Award,
  Target,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { clients } from '../data/clients';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-8 sm:py-10 lg:py-14 lg:min-h-[calc(100vh-5rem)] lg:flex lg:items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">
                Trusted Since 1989
              </p>
              <h1 className="text-[34px] sm:text-[42px] lg:text-[50px] font-bold text-secondary leading-tight">
                Engineering Excellence Built Over{' '}
                <span className="text-primary">35+ Years</span>
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted leading-relaxed max-w-xl mx-auto">
                Delivering custom engineering, fabrication, machining, and industrial project
                solutions across multiple industries.
              </p>
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 justify-center">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                >
                  Explore Services <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-5 text-center">
                    <Wrench className="mx-auto text-primary mb-2" size={28} />
                    <p className="text-sm font-medium text-secondary">Design Engineering</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-5 text-center">
                    <Building className="mx-auto text-primary mb-2" size={28} />
                    <p className="text-sm font-medium text-secondary">Heavy Fabrication</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-5 text-center">
                    <Target className="mx-auto text-primary mb-2" size={28} />
                    <p className="text-sm font-medium text-secondary">Precision Machining</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-5 text-center">
                    <Award className="mx-auto text-primary mb-2" size={28} />
                    <p className="text-sm font-medium text-secondary">Project Execution</p>
                  </div>
                </div>
                <div className="mt-4 bg-primary/5 border border-primary/20 rounded-lg p-3 text-center">
                  <p className="text-primary font-semibold text-sm">
                    "From Design to Execution — Your One-Stop Engineering Solution"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: Calendar, value: '35+', label: 'Years Experience' },
              { icon: FolderKanban, value: '500+', label: 'Projects Delivered' },
              { icon: Users, value: '100+', label: 'Clients Served' },
              { icon: Layers, value: '6+', label: 'Industries' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-border"
              >
                <stat.icon className="mx-auto text-primary mb-2" size={24} />
                <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                <p className="text-xs text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive engineering solutions from concept to completion"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name={service.icon} size={20} className="text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-secondary">{service.title}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 lg:py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Us"
            subtitle="Trusted by leading companies across industries"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Calendar, title: '35+ Years Experience', desc: 'Decades of proven expertise in industrial engineering and fabrication.' },
              { icon: Layers, title: 'Design-to-Execution', desc: 'Complete lifecycle management from concept design to final delivery.' },
              { icon: Target, title: 'Precision Manufacturing', desc: 'State-of-the-art machining with tight tolerances and high accuracy.' },
              { icon: Building, title: 'In-house Infrastructure', desc: '2,500 sq.m. facility with fabrication and machining shops.' },
              { icon: Shield, title: 'Quality Commitment', desc: 'Rigorous quality control with continuous improvement philosophy.' },
              { icon: Clock, title: 'On-time Delivery', desc: 'Proven track record of meeting project deadlines consistently.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-secondary">{item.title}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Multi-industry expertise delivering specialized solutions"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.id}
                to={`/industries/${ind.id}`}
                className="border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name={ind.icon} size={20} className="text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-secondary">{ind.title}</h3>
                </div>
                <p className="text-xs text-muted">{ind.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View All Industries <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-10 lg:py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted By Industry Leaders"
            subtitle="Serving India's most respected companies"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="bg-white border border-border rounded-lg p-4 flex items-center justify-center h-20"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain"
                  />
                ) : (
                  <span className="text-sm font-medium text-secondary text-center">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 lg:py-12 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Let's Engineer Your Next Project</h2>
          <p className="mt-4 text-blue-100 text-lg">
            Get in touch with our team to discuss your engineering requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-white text-primary-dark px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Request Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
