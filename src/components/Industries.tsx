import { industries } from '../data/content';
import Reveal from './Reveal';

export default function Industries() {
  return (
    <section id="rubros" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Soluciones por tipo de negocio</span>
          <h2 className="mt-3 font-display font-semibold text-[1.75rem] sm:text-4xl tracking-tight max-w-xl">
            Sea cual sea tu rubro, hay una automatización esperando
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 5) * 0.05}>
              <div className="h-full rounded-xl border border-border bg-surface/40 p-4 sm:p-5 hover:border-cyan/40 hover:bg-surface transition-colors">
                <ind.icon size={18} strokeWidth={1.75} className="text-blue" />
                <h3 className="mt-3 font-medium text-sm">{ind.name}</h3>
                <p className="mt-1.5 text-xs text-text-muted leading-snug">{ind.example}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
