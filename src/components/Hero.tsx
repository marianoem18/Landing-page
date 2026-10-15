import { ArrowRightIcon } from '@phosphor-icons/react';
import LineReveal from './ui/LineReveal';
import ScrambleText from './ui/ScrambleText';
import LiveConsole from './hero/LiveConsole';

const enterDelay = (seconds: number) => ({ animationDelay: `${seconds}s` });

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center pt-28 pb-16 lg:pt-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-lines [mask-image:radial-gradient(ellipse_70%_60%_at_70%_40%,black,transparent)]"
      />

      <div className="relative w-full mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-16 items-center">
        <div>
          <div className="fade-up">
            <span className="eyebrow">
              <ScrambleText text="Automatización & IA para negocios" />
            </span>
          </div>

          <LineReveal
            as="h1"
            immediate
            delay={0.1}
            stagger={0.035}
            text="Ayudo a negocios a ahorrar tiempo y vender más con sistemas que hacen el trabajo pesado por ti."
            className="mt-7 font-display font-semibold text-[2.3rem] leading-[1.05] sm:text-5xl xl:text-[3.6rem] xl:leading-[1.03] tracking-tighter max-w-[19ch] text-text"
          />

          <p className="fade-up mt-7 text-base sm:text-lg text-text-muted max-w-[46ch] leading-relaxed" style={enterDelay(0.55)}>
            Menos planillas, menos tareas repetitivas, más tiempo para tu negocio.
          </p>

          <div className="fade-up mt-10 flex flex-col sm:flex-row gap-3" style={enterDelay(0.65)}>
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent text-bg font-medium text-[15px] pl-6 pr-5 py-3.5 transition-transform active:scale-[0.98]"
            >
              Escríbeme
              <ArrowRightIcon size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-border text-text font-medium text-[15px] px-6 py-3.5 hover:border-text-dim hover:bg-surface transition-colors active:scale-[0.98]"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="console-in" style={enterDelay(0.35)}>
          <LiveConsole />
        </div>
      </div>
    </section>
  );
}
