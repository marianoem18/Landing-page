import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { PlusIcon } from '@phosphor-icons/react';
import { faqs } from '../data/content';
import { easeOutExpo, softSpring } from '../lib/motion';
import LineReveal from './ui/LineReveal';
import ScrambleText from './ui/ScrambleText';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
        <div>
          <div className="lg:sticky lg:top-32">
            <span className="eyebrow">
              <ScrambleText text="Preguntas frecuentes" />
            </span>
            <LineReveal
              text="Lo que más me preguntan"
              className="mt-5 font-display font-semibold text-[2rem] sm:text-5xl leading-[1.05] tracking-tighter max-w-[14ch]"
            />
          </div>
        </div>

        <ul className="border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            return (
              <li key={f.question} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="group w-full grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-6 text-left"
                >
                  <span
                    className={`font-mono text-xs tabular-nums transition-colors ${
                      isOpen ? 'text-accent' : 'text-text-dim'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`font-medium text-base sm:text-lg tracking-tight transition-colors ${
                      isOpen ? 'text-text' : 'text-text-muted group-hover:text-text'
                    }`}
                  >
                    {f.question}
                  </span>
                  <m.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={softSpring}
                    className={`grid place-items-center w-8 h-8 rounded-full border transition-colors ${
                      isOpen ? 'border-accent/50 text-accent' : 'border-border text-text-muted'
                    }`}
                  >
                    <PlusIcon size={13} />
                  </m.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: easeOutExpo }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pl-[calc(2.5rem+1rem)] pr-12 text-[15px] text-text-muted leading-relaxed max-w-[62ch]">
                        {f.answer}
                      </p>
                    </m.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
