import Monogram from './ui/Monogram';

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Monogram />
          <div>
            <p className="font-display font-medium text-sm">Mariano González</p>
            <p className="text-xs text-text-dim mt-0.5 max-w-md">
              Técnico Universitario en Programación especializado en Automatización e Inteligencia Artificial para negocios.
            </p>
          </div>
        </div>
        <p className="font-mono text-[11px] text-text-dim">
          © {new Date().getFullYear()} · Hecho en Tucumán, Argentina
        </p>
      </div>
    </footer>
  );
}
