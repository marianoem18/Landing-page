import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border-soft py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-gradient-to-br from-blue to-cyan/60 text-bg">
            <Zap size={14} strokeWidth={2.5} />
          </span>
          <div>
            <p className="font-display font-medium text-sm">Mariano González</p>
            <p className="text-xs text-text-dim mt-0.5 max-w-sm">
              Técnico Universitario en Programación especializado en Automatización e Inteligencia Artificial para negocios.
            </p>
          </div>
        </div>
        <p className="text-xs text-text-dim">
          © {new Date().getFullYear()} · Hecho en Tucumán, Argentina
        </p>
      </div>
    </footer>
  );
}
