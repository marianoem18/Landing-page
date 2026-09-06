import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import SignalNetwork from './SignalNetwork';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Ambient gradient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full opacity-25 blur-[110px]"
        style={{ background: 'radial-gradient(circle, #3d5afe, transparent 65%)' }}
      />
      <div className="absolute inset-0 noise opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          <span className="eyebrow">Automatización &amp; IA para negocios</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold text-[2.15rem] leading-[1.14] sm:text-4xl sm:leading-[1.15] lg:text-[3.4rem] lg:leading-[1.15] max-w-4xl text-gradient tracking-tight"
        >
          Menos planillas, menos tareas repetitivas, más tiempo para tu negocio.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg text-text-muted max-w-xl leading-relaxed"
        >
          Desarrollo sistemas de gestión, turnos online, asistentes que responden por vos y páginas web. Tecnología a medida con Inteligencia Artificial, explicada en simple.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue to-cyan text-bg font-medium text-[15px] px-6 py-3.5 shadow-[0_0_30px_-8px_rgba(79,209,255,0.55)] hover:shadow-[0_0_38px_-6px_rgba(79,209,255,0.75)] transition-shadow"
          >
            Solicitar una reunión
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border text-text font-medium text-[15px] px-6 py-3.5 hover:border-text-dim hover:bg-surface transition-colors"
          >
            Ver servicios
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 sm:mt-16 w-full"
        >
          <SignalNetwork className="w-full h-auto max-w-2xl mx-auto opacity-90" />
        </motion.div>
      </div>

      <motion.a
        href="#servicios"
        aria-label="Ir a la siguiente sección"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
        className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 text-text-dim"
      >
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
}
