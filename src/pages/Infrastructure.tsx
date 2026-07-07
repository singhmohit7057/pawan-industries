import { fabricationShop, machiningShop } from '../data/infrastructure';
import { Wrench, Cog } from 'lucide-react';

export default function Infrastructure() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              Infrastructure
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary">
              In-House Manufacturing Capabilities
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
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
