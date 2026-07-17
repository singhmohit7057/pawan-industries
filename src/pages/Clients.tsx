import { clients } from '../data/clients';

export default function Clients() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark to-primary h-[200px] sm:h-[240px] lg:h-[280px] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary-light rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-blue-200 font-semibold text-sm tracking-wide uppercase mb-3">
              Our Clients
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Trusted by Industry Leaders
            </h1>
            <p className="mt-3 text-blue-100 sm:text-lg leading-relaxed">
              We are proud to serve some of India's and the world's most respected industrial
              companies across diverse sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {clients.map((client) => (
              <div
                key={client.name}
                className="bg-white border border-border rounded-xl p-4 flex items-center justify-center h-28 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold text-secondary text-center leading-tight">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
