import { useState, type PointerEvent } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { PlusIcon } from '@phosphor-icons/react';
import { serviceGroups, type ServiceGroup } from '../data/content';
import { easeOutExpo, softSpring } from '../lib/motion';
import LineReveal from './ui/LineReveal';
import ScrambleText from './ui/ScrambleText';

function ServiceRow({
  group,
  index,
  isOpen,
  onToggle,
  onHover,
}: {
  group: ServiceGroup;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  onHover: (open: boolean) => void;
}) {
  const panelId = `service-panel-${index}`;
  const fromMouse = (handler: () => void) => (event: PointerEvent) => {
    if (event.pointerType === 'mouse') handler();
  };

  return (
    <li
      className="relative border-t border-border"
      onPointerEnter={fromMouse(() => onHover(true))}
      onPointerLeave={fromMouse(() => onHover(false))}
    >
      <m.span
        aria-hidden="true"
        className="absolute left-0 right-0 -top-px h-px bg-accent origin-left"
        initial={false}
        animate={{ scaleX: isOpen ? 1 : 0 }}
        transition={{ duration: 0.7, ease: easeOutExpo }}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full grid grid-cols-[2.75rem_1fr_auto] md:grid-cols-[5rem_1.1fr_1fr_auto] items-baseline gap-x-4 md:gap-x-8 py-7 sm:py-9 text-left"
      >
        <span
          className={`font-mono text-sm tabular-nums transition-colors duration-300 ${
            isOpen ? 'text-accent' : 'text-text-dim'
          }`}
        >
          <ScrambleText text={String(index + 1).padStart(2, '0')} delay={index * 80} />
        </span>
        <m.span
          animate={{ x: isOpen ? 8 : 0 }}
          transition={softSpring}
          className="font-display font-medium text-[1.65rem] sm:text-4xl leading-[1.1] tracking-tighter"
        >
          {group.title}
        </m.span>
        <span className="hidden md:block text-[15px] text-text-muted leading-relaxed max-w-[44ch]">
          {group.description}
        </span>
        <m.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={softSpring}
          className={`self-center grid place-items-center w-9 h-9 rounded-full border transition-colors duration-300 ${
            isOpen ? 'border-accent/50 text-accent' : 'border-border text-text-muted'
          }`}
        >
          <PlusIcon size={14} />
        </m.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            className="overflow-hidden"
          >
            <div className="pb-8 sm:pb-10 pl-[calc(2.75rem+1rem)] md:pl-[calc(5rem+2rem)]">
              <p className="md:hidden mb-5 text-[15px] text-text-muted leading-relaxed">{group.description}</p>
              <m.ul
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
              >
                {group.items.map((item) => (
                  <m.li
                    key={item}
                    variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: softSpring } }}
                    className="font-mono text-xs text-text border border-border rounded-full px-3 py-1.5 bg-surface"
                  >
                    {item}
                  </m.li>
                ))}
              </m.ul>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <span className="eyebrow">
          <ScrambleText text="Qué puedo hacer por tu negocio" />
        </span>
        <LineReveal
          text="Servicios pensados para resolver, no para complicar"
          className="mt-5 font-display font-semibold text-[2rem] sm:text-5xl leading-[1.05] tracking-tighter max-w-[20ch]"
        />

        <ul className="mt-14 sm:mt-20 border-b border-border">
          {serviceGroups.map((g, i) => (
            <ServiceRow
              key={g.title}
              group={g}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
              onHover={(open) => setOpenIndex((cur) => (open ? i : cur === i ? null : cur))}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
