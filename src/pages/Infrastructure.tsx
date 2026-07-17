import { fabricationShop, machiningShop } from '../data/infrastructure';
import { Wrench, Cog } from 'lucide-react';

export default function Infrastructure() {
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
              Infrastructure
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              In-House Manufacturing Capabilities
            </h1>
            <p className="mt-3 text-blue-100 sm:text-lg leading-relaxed">
              Our state-of-the-art 2,500 sq.m. facility is equipped with advanced fabrication and
              machining equipment distributed across three dedicated bays.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fabrication Shop */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Wrench className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary">Fabrication Shop</h2>
                <p className="text-sm text-muted">Heavy & light fabrication capabilities</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fabricationShop.map((item) => (
                <div
                  key={item.name}
                  className="bg-white border border-border rounded-xl p-5 hover:border-primary/30 transition-colors text-center sm:text-left"
                >
                  <h4 className="font-semibold text-secondary text-sm mb-2">{item.name}</h4>
                  <p className="text-xs text-muted leading-relaxed">{item.specs}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Machining Shop */}
          <div>
            <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Cog className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary">Machining Shop</h2>
                <p className="text-sm text-muted">Precision machining equipment</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {machiningShop.map((item) => (
                <div
                  key={item.name}
                  className="bg-white border border-border rounded-xl p-5 hover:border-primary/30 transition-colors text-center sm:text-left"
                >
                  <h4 className="font-semibold text-secondary text-sm mb-2">{item.name}</h4>
                  <p className="text-xs text-muted leading-relaxed">{item.specs}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
