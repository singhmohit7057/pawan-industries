import { clients } from '../data/clients';

export default function Clients() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              Our Clients
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
              Trusted by Industry Leaders
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
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
