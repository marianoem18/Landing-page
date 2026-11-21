import { ArrowRightIcon } from '@phosphor-icons/react';
import { clients } from '../data/content';
import LineReveal from './ui/LineReveal';
import LiveConsole from './hero/LiveConsole';

const enterDelay = (seconds: number) => ({ animationDelay: `${seconds}s` });

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center pt-32 pb-20 lg:pt-36 overflow-hidden">
      <div aria-hidden="true" className="aura absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg"
      />

      <div className="relative w-full mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-16 items-center">
        <div>
          <LineReveal
            as="h1"
            immediate
            delay={0.1}
            stagger={0.035}
            dimFrom={9}
            text="Ayudo a negocios a ahorrar tiempo y vender más con sistemas que hacen el trabajo pesado por ti."
            className="font-display font-semibold text-[2.4rem] leading-[1.04] sm:text-[3.25rem] xl:text-[4rem] xl:leading-[1.02] tracking-display max-w-[18ch] text-text"
          />

          <p className="fade-up mt-7 text-base sm:text-lg text-text-muted max-w-[44ch] leading-relaxed" style={enterDelay(0.55)}>
            Menos planillas, menos tareas repetitivas, más tiempo para tu negocio.
          </p>

          <div className="fade-up mt-10 flex flex-col sm:flex-row gap-3" style={enterDelay(0.65)}>
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent text-bg font-medium text-[15px] pl-6 pr-5 py-3.5 shadow-[0_10px_30px_-12px_rgb(169_139_255/0.7)] hover:bg-accent-strong transition-[background-color,transform] active:scale-[0.98]"
            >
              Escríbeme
              <ArrowRightIcon size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-full border border-border text-text font-medium text-[15px] px-6 py-3.5 hover:border-text-dim hover:bg-surface transition-colors active:scale-[0.98]"
            >
              Ver proyectos
            </a>
          </div>

          <div className="fade-up mt-14 pt-6 border-t border-border max-w-[560px]" style={enterDelay(0.8)}>
            <p className="text-sm text-text-dim">Negocios que ya trabajan con mis sistemas</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {clients.map((name) => (
                <li key={name} className="font-display font-medium text-[15px] text-text-muted tracking-tight">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="console-in" style={enterDelay(0.35)}>
          <LiveConsole />
        </div>
      </div>
    </section>
  );
}
