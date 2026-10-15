import { useEffect, useState, type MouseEvent } from 'react';
import { AnimatePresence, m, useMotionValueEvent, useScroll } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { ListIcon, XIcon, ArrowUpRightIcon } from '@phosphor-icons/react';
import { easeOutExpo, softSpring } from '../lib/motion';
import Monogram from './ui/Monogram';

const links = [
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'faq', label: 'Preguntas' },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    sections.forEach((s) => observer.observe(s));
    const hero = document.getElementById('inicio');
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = [...links.map((l) => l.id), 'contacto'];

export default function Nav() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const lenis = useLenis();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const next = y > 40;
    if (next !== compact) setCompact(next);
  });

  useEffect(() => {
    if (open) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, lenis]);

  const goTo = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) return;
      if (lenis) {
        lenis.start();
        lenis.scrollTo(target);
      } else {
        target.scrollIntoView();
      }
    });
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      <header className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <m.nav
          layout
          transition={softSpring}
          className={`pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-colors duration-500 ${
            compact ? 'bg-surface/85 py-1.5 pl-2 pr-1.5' : 'bg-surface/50 py-2 pl-3 pr-2'
          }`}
        >
          <a href="#inicio" className="flex items-center gap-2.5 pr-2">
            <Monogram />
            <span className="sr-only sm:not-sr-only font-display font-medium text-sm tracking-tight">Mariano González</span>
          </a>

          <span className="hidden md:block w-px h-5 bg-border mx-1" aria-hidden="true" />

          <ul className="hidden md:flex items-center">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.id} className="relative">
                  {isActive && (
                    <m.span
                      layoutId="nav-pill"
                      transition={softSpring}
                      className="absolute inset-0 rounded-full bg-white/[0.07] border border-white/10"
                    />
                  )}
                  <a
                    href={`#${l.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block px-4 py-2 text-sm transition-colors ${
                      isActive ? 'text-text' : 'text-text-muted hover:text-text'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contacto"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-accent text-bg text-sm font-medium pl-4 pr-3 py-2 ml-1 transition-transform active:scale-[0.97]"
          >
            Escríbeme
            <ArrowUpRightIcon size={14} weight="bold" />
          </a>

          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden ml-auto grid place-items-center w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 text-text"
          >
            {open ? <XIcon size={18} /> : <ListIcon size={18} />}
          </button>
        </m.nav>
      </header>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="md:hidden fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col justify-between px-6 pt-28 pb-10"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
          >
            <m.ul
              className="flex flex-col"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
            >
              {[...links, { id: 'contacto', label: 'Contacto' }].map((l, i) => (
                <li key={l.id} className="overflow-hidden border-b border-border-soft">
                  <m.a
                    href={`#${l.id}`}
                    onClick={(e) => goTo(e, l.id)}
                    variants={{ hidden: { y: '100%' }, show: { y: '0%', transition: { duration: 0.7, ease: easeOutExpo } } }}
                    className="flex items-baseline justify-between py-5 font-display text-4xl font-medium tracking-tighter"
                  >
                    {l.label}
                    <span className="font-mono text-xs text-text-dim pr-1">0{i + 1}</span>
                  </m.a>
                </li>
              ))}
            </m.ul>

            <m.a
              href="#contacto"
              onClick={(e) => goTo(e, 'contacto')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.6, ease: easeOutExpo } }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-bg font-medium py-4 active:scale-[0.98] transition-transform"
            >
              Escríbeme
              <ArrowUpRightIcon size={16} weight="bold" />
            </m.a>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
