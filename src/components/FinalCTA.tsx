import { m } from 'framer-motion';
import {
  ArrowUpRightIcon,
  CalendarBlankIcon,
  EnvelopeSimpleIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from '@phosphor-icons/react';
import { CALENDLY_URL, EMAIL, LINKEDIN_URL, WHATSAPP_URL } from '../data/contact';
import { fadeUp, staggerParent } from '../lib/motion';
import LineReveal from './ui/LineReveal';
import ScrambleText from './ui/ScrambleText';
import SpotlightCard from './ui/SpotlightCard';

export default function FinalCTA() {
  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SpotlightCard className="rounded-[2rem] sm:rounded-[2.5rem] border border-border bg-surface overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 grid-lines [mask-image:radial-gradient(ellipse_60%_80%_at_100%_100%,black,transparent)]"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-end px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div>
              <span className="eyebrow">
                <ScrambleText text="Hablemos" />
              </span>
              <LineReveal
                text="Contame sobre tu negocio y veamos cómo puedo ayudarte"
                className="mt-6 font-display font-semibold text-[2.25rem] sm:text-6xl xl:text-7xl leading-[1.02] tracking-tighter max-w-[16ch]"
              />
              <p className="mt-6 text-text-muted leading-relaxed max-w-[46ch]">
                Escribime directamente o agendá una reunión y te respondo a la brevedad.
              </p>
            </div>

            <m.div
              className="flex flex-col gap-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerParent(0.08, 0.2)}
            >
              <m.a
                variants={fadeUp}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-full bg-accent text-bg font-medium pl-6 pr-2 py-2 transition-transform active:scale-[0.98]"
              >
                <span className="flex items-center gap-3">
                  <WhatsappLogoIcon size={20} weight="regular" />
                  Escribime por WhatsApp
                </span>
                <span className="grid place-items-center w-11 h-11 rounded-full bg-bg text-accent transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRightIcon size={16} weight="bold" />
                </span>
              </m.a>

              <m.a
                variants={fadeUp}
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-full border border-border bg-bg/40 text-text font-medium pl-6 pr-2 py-2 hover:border-text-dim transition-colors active:scale-[0.98]"
              >
                <span className="flex items-center gap-3">
                  <CalendarBlankIcon size={20} weight="light" />
                  Agendar una reunión
                </span>
                <span className="grid place-items-center w-11 h-11 rounded-full border border-border transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRightIcon size={16} />
                </span>
              </m.a>

              <m.div
                variants={fadeUp}
                className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-text-muted"
              >
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-accent transition-colors">
                  <EnvelopeSimpleIcon size={15} weight="light" />
                  {EMAIL}
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <LinkedinLogoIcon size={15} weight="light" />
                  LinkedIn
                </a>
              </m.div>
            </m.div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
