import { motion } from 'framer-motion';
import { ideas } from '../data/content';
import Reveal from './Reveal';

export default function Ideas() {
  return (
    <section id="ideas" className="relative py-20 sm:py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.15] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Ideas para automatizar tu negocio</span>
          <h2 className="mt-3 font-display font-semibold text-[1.75rem] sm:text-4xl tracking-tight max-w-xl">
            Cosas concretas que ya podés automatizar hoy
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {ideas.map((idea, i) => (
            <Reveal key={idea.title} delay={(i % 6) * 0.05} y={12}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="h-full rounded-2xl border border-border bg-surface/50 p-5 flex flex-col gap-3 hover:border-violet/40 hover:shadow-[0_0_24px_-10px_rgba(139,92,246,0.5)] transition-[border-color,box-shadow]"
              >
                <span className="grid place-items-center w-9 h-9 rounded-lg bg-violet/10 border border-violet/20">
                  <idea.icon size={16} strokeWidth={1.75} className="text-violet" />
                </span>
                <span className="text-sm font-medium leading-snug">{idea.title}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
