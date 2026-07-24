import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, CalendarClock, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

function LinkedinIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="3.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M7.5 10v6.2M7.5 7.6v.01M11.5 16.2V10M11.5 12.6c0-1.5 1-2.6 2.4-2.6 1.4 0 2.1 1 2.1 2.7v3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const WHATSAPP_NUMBER = '5493815866682'; // reemplazar por el número real
const EMAIL = 'marianoemgonzalez1@gmail.com'; // reemplazar por el email real
const LINKEDIN_URL = 'https://www.linkedin.com/in/mariano-gonz%C3%A1lez-709288237/';
const CALENDLY_URL = 'https://calendly.com/marianoemgonzalez1/30min';

const channels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Respuesta rápida',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Ver perfil profesional',
    href: LINKEDIN_URL,
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hola Mariano, soy ${name || '(nombre)'}${
      business ? ` de ${business}` : ''
    }. ${message || 'Quiero automatizar mi negocio, ¿hablamos?'}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contacto" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Hablemos</span>
          <h2 className="mt-3 font-display font-semibold text-[1.75rem] sm:text-4xl tracking-tight max-w-xl">
            Contame sobre tu negocio y veamos qué podemos automatizar
          </h2>
          <p className="mt-4 text-text-muted max-w-lg leading-relaxed">
            Escribime directamente o dejá tus datos y te respondo a la brevedad.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <Reveal className="lg:col-span-3" delay={0.05}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 space-y-5"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="¿Cómo te llamás?"
                  required
                  className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm placeholder:text-text-dim focus:border-cyan/50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="business" className="text-sm font-medium">
                  Negocio
                </label>
                <input
                  id="business"
                  type="text"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  placeholder="Nombre de tu negocio o rubro"
                  className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm placeholder:text-text-dim focus:border-cyan/50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Contame qué te gustaría automatizar
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Ej: quiero automatizar los turnos y recordatorios por WhatsApp"
                  className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm placeholder:text-text-dim focus:border-cyan/50 transition-colors resize-none"
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue to-cyan text-bg font-medium text-[15px] px-6 py-3.5 hover:shadow-[0_0_30px_-8px_rgba(79,209,255,0.6)] transition-shadow"
              >
                Enviar por WhatsApp
                <ArrowRight size={16} />
              </motion.button>
            </form>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="h-full flex flex-col gap-4">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-surface/40 p-5 hover:border-cyan/40 hover:bg-surface transition-colors"
                >
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-bg border border-border shrink-0">
                    <c.icon size={18} strokeWidth={1.75} className="text-cyan" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{c.label}</p>
                    <p className="text-xs text-text-muted truncate">{c.value}</p>
                  </div>
                </a>
              ))}

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-auto flex items-center gap-4 rounded-2xl border border-violet/30 bg-violet/5 p-5 hover:bg-violet/10 transition-colors"
              >
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-violet/15 border border-violet/30 shrink-0">
                  <CalendarClock size={18} strokeWidth={1.75} className="text-violet" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium">Agendar una reunión</p>
                  <p className="text-xs text-text-muted">Elegí el día y horario que prefieras</p>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
