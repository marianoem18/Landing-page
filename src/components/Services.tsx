import { m } from 'framer-motion';
import { serviceGroups, type ServiceGroup } from '../data/content';
import { easeOutExpo } from '../lib/motion';
import LineReveal from './ui/LineReveal';
import Reveal from './Reveal';

function ServiceRow({ group, index }: { group: ServiceGroup; index: number }) {
  return (
    <m.li
      className="group relative border-t border-border"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: easeOutExpo }}
    >
      <span
        aria-hidden="true"
        className="absolute left-0 right-0 -top-px h-px bg-accent origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
      />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-x-10 gap-y-4 py-8 sm:py-10">
        <h3 className="font-display font-medium text-[1.65rem] sm:text-4xl leading-[1.1] tracking-display transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:translate-x-2">
          {group.title}
        </h3>
        <div>
          <p className="text-[15px] sm:text-base text-text-muted leading-relaxed max-w-[48ch]">{group.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="text-[13px] text-text-muted border border-border rounded-full px-3 py-1 bg-surface/60 transition-colors group-hover:border-accent/25 group-hover:text-text"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </m.li>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-6 lg:gap-10 items-end">
          <LineReveal
            text="Servicios pensados para resolver, no para complicar"
            className="font-display font-semibold text-[2rem] sm:text-5xl leading-[1.05] tracking-display max-w-[16ch]"
          />
          <Reveal delay={0.15}>
            <p className="text-text-muted leading-relaxed max-w-[48ch]">
              Desde automatizar una tarea puntual hasta un sistema completo para tu negocio. Empezamos por lo que más tiempo te hace perder hoy.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 sm:mt-20 border-b border-border">
          {serviceGroups.map((g, i) => (
            <ServiceRow key={g.title} group={g} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
