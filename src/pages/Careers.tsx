import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Briefcase, Send } from 'lucide-react';

const openings = [
  {
    title: 'CNC Machine Operator',
    department: 'Machining',
    location: 'Kalol, Gujarat',
    type: 'Full-time',
    description: 'Operate and maintain CNC lathes and milling machines for precision component manufacturing.',
  },
  {
    title: 'Welder / Fabricator',
    department: 'Fabrication',
    location: 'Kalol, Gujarat',
    type: 'Full-time',
    description: 'Perform MIG/TIG/Arc welding on structural steel and process equipment as per engineering drawings.',
  },
  {
    title: 'Design Engineer',
    department: 'Engineering',
    location: 'Kalol, Gujarat',
    type: 'Full-time',
    description: 'Create detailed engineering drawings and 3D models using AutoCAD/SolidWorks for industrial projects.',
  },
  {
    title: 'Project Coordinator',
    department: 'Projects',
    location: 'Kalol, Gujarat',
    type: 'Full-time',
    description: 'Coordinate project timelines, vendor communication, and on-site execution for turnkey industrial projects.',
  },
];

const benefits = [
  { title: 'Growth Opportunities', desc: 'Learn and grow with hands-on experience across diverse industrial projects.' },
  { title: 'Stable Career', desc: '35+ years of consistent growth — a reliable workplace for long-term careers.' },
  { title: 'Skilled Team', desc: 'Work alongside experienced engineers and technicians in a collaborative environment.' },
  { title: 'Industry Exposure', desc: 'Gain experience across glass, ceramic, railway, chemical, and more industries.' },
];

export default function Careers() {
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
              Careers
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Build Your Career With Us
            </h1>
            <p className="mt-3 text-blue-100 sm:text-lg leading-relaxed">
              Join a team with 35+ years of engineering excellence. We're always looking for
              skilled professionals who are passionate about precision manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary text-center mb-10">Why Work With Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item) => (
              <div key={item.title} className="bg-white border border-border rounded-xl p-6 text-center">
                <h3 className="font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary text-center mb-4">Open Positions</h2>
          <p className="text-muted text-center mb-10">Current opportunities at Pawan Industries</p>
          <div className="grid md:grid-cols-2 gap-6">
            {openings.map((job) => (
              <div key={job.title} className="bg-white border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">{job.title}</h3>
                    <span className="text-primary text-sm font-medium">{job.department}</span>
                  </div>
                </div>
                <p className="text-sm text-muted mt-3">{job.description}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                  <span className="flex items-center gap-1"><Briefcase size={14} /> {job.department}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Send className="mx-auto text-primary mb-4" size={36} />
          <h2 className="text-3xl font-bold text-secondary">Interested in Joining?</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Send your resume to our team. Even if you don't see a matching position above,
            we're always open to connecting with talented professionals.
          </p>
          <a
            href="mailto:careers@pawanindustries.com"
            className="inline-flex items-center gap-2 mt-6 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Send Your Resume <ArrowRight size={18} />
          </a>
          <p className="mt-4 text-sm text-muted">
            Or reach out via our{' '}
            <Link to="/contact" className="text-primary hover:underline">contact page</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
