import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Users2, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

const stack = ['React', 'Node.js', 'Express', 'SQLite', 'JWT', 'Railway'];

const highlights = [
  { icon: Zap, text: 'Check-in por DNI en segundos, sin planillas ni personal extra' },
  { icon: Users2, text: 'Gestión de socios, pagos y vencimientos en un solo panel' },
  { icon: ShieldCheck, text: 'Accesos por rol: administrador y empleado' },
];

function BrowserFrame({ src, alt, delay }: { src: string; alt: string; delay: number }) {
  return (
    <Reveal delay={delay} y={24}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="rounded-2xl border border-border bg-surface/60 overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border-soft bg-bg/40">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs font-mono text-text-dim truncate">https://gimnasio-demo-phi.vercel.app</span>
        </div>
        <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-20 sm:py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 right-0 w-[560px] h-[560px] rounded-full opacity-[0.14] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #3d5afe, transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Proyectos reales</span>
          <h2 className="mt-3 font-display font-semibold text-[1.75rem] sm:text-4xl tracking-tight max-w-xl">
            Esto no es una demo: es un sistema vendido y en uso
          </h2>
          <p className="mt-4 text-text-muted max-w-lg leading-relaxed">
            LalyGym es un sistema de gestión que desarrollé para un gimnasio real, hoy en producción.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <BrowserFrame src="/projects/lalygym-checkin.png" alt="Pantalla de check-in por DNI de LalyGym" delay={0} />
          <BrowserFrame src="/projects/lalygym-socios.png" alt="Panel de gestión de socios de LalyGym (datos anonimizados)" delay={0.1} />
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="max-w-lg">
                <h3 className="font-display font-semibold text-lg">LalyGym — Sistema de gestión para gimnasios</h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  Check-in rápido, control de socios y pagos, backups automáticos y roles de acceso, todo en un panel simple pensado para el día a día del gimnasio.
                </p>
              </div>
              <a
                href="https://gimnasio-demo-phi.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full border border-border text-text font-medium text-sm px-5 py-3 hover:border-text-dim hover:bg-bg transition-colors"
              >
                Ver sitio
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border-soft">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-start gap-3">
                  <span className="grid place-items-center w-8 h-8 rounded-lg bg-cyan/10 border border-cyan/20 shrink-0">
                    <h.icon size={14} strokeWidth={1.75} className="text-cyan" />
                  </span>
                  <p className="text-sm text-text-muted leading-snug">{h.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono text-text-muted border border-border-soft rounded-full px-2.5 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
