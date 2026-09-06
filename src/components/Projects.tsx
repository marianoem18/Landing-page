import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRight, Zap, Users2, ShieldCheck,
  Dumbbell, Wallet, BarChart3, DatabaseBackup, KeyRound,
  Car, Boxes, Receipt,
} from 'lucide-react';
import Reveal from './Reveal';
import demoAlpha from '../assets/demo-alpha.png';
import demoAlpha1 from '../assets/demo-alpha1.png';
import demoStrong from '../assets/demo-strong.png';
import demoMecanica from '../assets/demo-mecanica.png';
import demoMecanica1 from '../assets/demo-mecanica1.png';

type Highlight = { icon: LucideIcon; text: string };

type ProjectImage = { src: string; alt: string; frameLabel: string };

type Project = {
  id: string;
  title: string;
  badge?: string;
  description: string;
  images: ProjectImage[];
  highlights: Highlight[];
  stack: string[];
  link?: { href: string; label: string };
};

const projects: Project[] = [
  {
    id: 'lalygym',
    title: 'LalyGym — Sistema de gestión para gimnasios',
    description:
      'Check-in rápido, control de socios y pagos, backups automáticos y roles de acceso, todo en un panel simple pensado para el día a día del gimnasio.',
    images: [
      {
        src: '/projects/lalygym-checkin.png',
        alt: 'Pantalla de check-in por DNI de LalyGym',
        frameLabel: 'https://gimnasio-demo-phi.vercel.app',
      },
      {
        src: '/projects/lalygym-socios.png',
        alt: 'Panel de gestión de socios de LalyGym (datos anonimizados)',
        frameLabel: 'https://gimnasio-demo-phi.vercel.app',
      },
    ],
    highlights: [
      { icon: Zap, text: 'Check-in por DNI en segundos, sin planillas ni personal extra' },
      { icon: Users2, text: 'Gestión de socios, pagos y vencimientos en un solo panel' },
      { icon: ShieldCheck, text: 'Accesos por rol: administrador y empleado' },
    ],
    stack: ['React', 'Node.js', 'Express', 'SQLite', 'JWT', 'Railway'],
    link: { href: 'https://gimnasio-demo-phi.vercel.app', label: 'Ver sitio' },
  },
  {
    id: 'gimnasios',
    title: 'Gestión integral para gimnasios',
    badge: '2 sistemas en producción',
    description:
      'La evolución del sistema de LalyGym, muchísimo más completa, hoy funcionando en dos gimnasios reales: AlphaGym y Strong Gym Boutique. Monorepo con frontend en React + Vite + Tailwind y API en Node.js + Express sobre SQLite, con autenticación JWT y roles admin / empleado. En producción con frontend en Vercel y backend en Railway.',
    images: [
      {
        src: demoAlpha,
        alt: 'Pantalla de check-in por DNI de AlphaGym',
        frameLabel: 'AlphaGym — check-in por DNI',
      },
      {
        src: demoAlpha1,
        alt: 'Panel de caja diaria de AlphaGym con totales en vivo',
        frameLabel: 'AlphaGym — caja diaria',
      },
      {
        src: demoStrong,
        alt: 'Pantalla de check-in por DNI de Strong Gym Boutique',
        frameLabel: 'Strong Gym Boutique — check-in',
      },
    ],
    highlights: [
      { icon: Zap, text: 'Check-in por DNI y ficha completa de cada socio' },
      { icon: Dumbbell, text: 'Planes y membresías, con deudas y vencimientos al día' },
      { icon: Wallet, text: 'Cobros de gym y kiosco, con cuenta corriente por socio' },
      { icon: BarChart3, text: 'Caja diaria con egresos y reportes para el administrador' },
      { icon: DatabaseBackup, text: 'Cierre de caja y backup automático diario, con copia off-site en buckets R2' },
      { icon: KeyRound, text: 'Permisos por rol y migración de datos desde el sistema anterior' },
    ],
    stack: ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'SQLite', 'JWT', 'Vercel', 'Railway', 'R2'],
  },
  {
    id: 'electromecanica',
    title: 'ElectroMecánica — Sistema de gestión para taller',
    badge: 'En producción',
    description:
      'Sistema a medida para un taller electromecánico donde el trabajo es el eje: ingreso del vehículo, orden de trabajo, avance de estados, presupuesto y entrega con recibo e impacto en caja, todo en una sola operación. Desarrollado con React, Node.js + Express y SQLite, con autenticación JWT.',
    images: [
      {
        src: demoMecanica1,
        alt: 'Pantalla de ingreso de vehículos de ElectroMecánica, con búsqueda por patente o cliente',
        frameLabel: 'ElectroMecánica — ingreso de vehículos',
      },
      {
        src: demoMecanica,
        alt: 'Detalle de una orden de trabajo de ElectroMecánica con recibo emitido',
        frameLabel: 'ElectroMecánica — orden de trabajo',
      },
    ],
    highlights: [
      { icon: Car, text: 'Clientes y vehículos con historial de trabajos y presupuestos' },
      { icon: Boxes, text: 'Stock por movimientos y gestión de proveedores' },
      { icon: Receipt, text: 'Cierre diario de caja y roles de dueño y empleado' },
    ],
    stack: ['React', 'Node.js', 'Express', 'SQLite', 'JWT'],
  },
];

function BrowserFrame({ src, alt, frameLabel, delay }: { src: string; alt: string; frameLabel: string; delay: number }) {
  return (
    <Reveal delay={delay} y={24}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="rounded-2xl border border-border bg-surface/60 overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border-soft bg-bg/40">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs font-mono text-text-dim truncate">{frameLabel}</span>
        </div>
        <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
      </motion.div>
    </Reveal>
  );
}

function ProjectBlock({ project }: { project: Project }) {
  const imageCols = project.images.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';
  const highlightCols = project.highlights.length > 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-3';

  return (
    <div>
      <div className={`grid grid-cols-1 ${imageCols} gap-6 sm:gap-8`}>
        {project.images.map((img, i) => (
          <BrowserFrame key={img.src} src={img.src} alt={img.alt} frameLabel={img.frameLabel} delay={i * 0.1} />
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-8 rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display font-semibold text-lg">{project.title}</h3>
                {project.badge && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/10 border border-cyan/25 text-cyan text-xs font-mono px-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">{project.description}</p>
            </div>
            {project.link && (
              <a
                href={project.link.href}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full border border-border text-text font-medium text-sm px-5 py-3 hover:border-text-dim hover:bg-bg transition-colors"
              >
                {project.link.label}
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>

          <div className={`mt-6 grid grid-cols-1 ${highlightCols} gap-4 pt-6 border-t border-border-soft`}>
            {project.highlights.map((h) => (
              <div key={h.text} className="flex items-start gap-3">
                <span className="grid place-items-center w-8 h-8 rounded-lg bg-cyan/10 border border-cyan/20 shrink-0">
                  <h.icon size={14} strokeWidth={1.75} className="text-cyan" />
                </span>
                <p className="text-sm text-text-muted leading-snug">{h.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-xs font-mono text-text-muted border border-border-soft rounded-full px-2.5 py-1"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-20 sm:py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 right-0 w-[560px] h-[560px] rounded-full opacity-[0.14] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #3d5afe, transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Proyectos reales</span>
          <h2 className="mt-3 font-display font-semibold text-[1.75rem] sm:text-4xl tracking-tight max-w-xl">
            Esto no son demos: son sistemas vendidos y en uso
          </h2>
          <p className="mt-4 text-text-muted max-w-lg leading-relaxed">
            Sistemas de gestión que desarrollé para negocios reales — gimnasios y un taller electromecánico — hoy funcionando en producción todos los días.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-16 sm:gap-20">
          {projects.map((project) => (
            <ProjectBlock key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
