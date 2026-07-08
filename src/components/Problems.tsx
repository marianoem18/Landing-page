import { ArrowRight } from 'lucide-react';
import { problems } from '../data/content';
import Reveal from './Reveal';

export default function Problems() {
  return (
    <section id="problemas" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Situaciones frecuentes</span>
          <h2 className="mt-3 font-display font-semibold text-[1.75rem] sm:text-4xl tracking-tight max-w-xl">
            ¿Te sentís identificado con alguno de estos problemas?
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <Reveal key={p.problem} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-surface/50 p-6 hover:border-border-soft hover:bg-surface transition-colors">
                <p.icon size={20} strokeWidth={1.75} className="text-violet" />
                <p className="mt-4 text-[15px] font-medium text-text leading-snug">
                  {p.problem}
                </p>
                <div className="mt-4 flex items-start gap-2 pt-4 border-t border-border-soft">
                  <ArrowRight size={15} className="text-cyan mt-0.5 shrink-0" />
                  <p className="text-sm text-text-muted leading-relaxed">{p.solution}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
