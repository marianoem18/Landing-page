import { processSteps } from '../data/content';
import Reveal from './Reveal';

export default function Process() {
  return (
    <section id="proceso" className="relative py-20 sm:py-28 bg-surface/30 border-y border-border-soft">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Cómo trabajamos</span>
          <h2 className="mt-3 font-display font-semibold text-[1.75rem] sm:text-4xl tracking-tight max-w-xl">
            Un proceso simple, de principio a fin
          </h2>
        </Reveal>

        <div className="mt-14 relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative flex lg:flex-col gap-4 lg:gap-0">
                  <div className="relative shrink-0">
                    <span className="grid place-items-center w-12 h-12 rounded-full bg-bg border border-border relative z-10">
                      <step.icon size={18} strokeWidth={1.75} className="text-cyan" />
                    </span>
                  </div>
                  <div className="lg:mt-4">
                    <span className="font-mono text-xs text-text-dim">0{i + 1}</span>
                    <h3 className="mt-1 font-display font-medium text-[15px]">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-text-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
