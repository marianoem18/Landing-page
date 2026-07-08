import { serviceGroups } from '../data/content';
import Reveal from './Reveal';

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 sm:py-28 bg-surface/30 border-y border-border-soft">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Qué puedo hacer por tu negocio</span>
          <h2 className="mt-3 font-display font-semibold text-[1.75rem] sm:text-4xl tracking-tight max-w-xl">
            Servicios pensados para resolver, no para complicar
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {serviceGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-bg/60 p-6 sm:p-7 relative overflow-hidden group">
                <div className="pointer-events-none absolute -right-10 -top-10 w-40 h-40 rounded-full bg-blue/10 blur-3xl group-hover:bg-blue/20 transition-colors" />
                <div className="relative">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue/20 to-cyan/10 border border-border">
                    <g.icon size={18} strokeWidth={1.75} className="text-cyan" />
                  </span>
                  <h3 className="mt-5 font-display font-semibold text-lg">{g.title}</h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">{g.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono text-text-muted border border-border-soft rounded-full px-2.5 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
