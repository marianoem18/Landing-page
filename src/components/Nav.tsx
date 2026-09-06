import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#rubros', label: 'Rubros' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#faq', label: 'Preguntas' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const closeAnd = (fn?: () => void) => {
    setOpen(false);
    fn?.();
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 font-display font-semibold text-[15px] tracking-tight">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-gradient-to-br from-blue to-cyan/60 text-bg">
            <Zap size={14} strokeWidth={2.5} />
          </span>
          Mariano González
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-muted hover:text-text transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-full bg-text text-bg text-sm font-medium px-4 py-2 hover:bg-cyan transition-colors"
        >
          Escríbeme
        </a>

        <button
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-lg border border-border text-text"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-bg/95 backdrop-blur-md border-b border-border"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => closeAnd()}
                  className="py-3 text-[15px] text-text-muted border-b border-border-soft last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => closeAnd()}
                className="mt-4 text-center rounded-full bg-text text-bg text-sm font-medium px-4 py-3"
              >
                Escríbeme
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
