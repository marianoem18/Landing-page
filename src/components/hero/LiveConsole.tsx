import { memo, useEffect, useRef, useState } from 'react';
import { AnimatePresence, m, useInView, useReducedMotion } from 'framer-motion';
import { CheckIcon } from '@phosphor-icons/react';
import { easeOutExpo, softSpring } from '../../lib/motion';

type Blueprint = {
  industry: string;
  modules: string[];
};

const BLUEPRINTS: Blueprint[] = [
  {
    industry: 'Gimnasio',
    modules: ['Socios y check-in por DNI', 'Cuotas y vencimientos', 'Recordatorios por WhatsApp', 'Caja diaria', 'Reportes de asistencia'],
  },
  {
    industry: 'Barbería',
    modules: ['Turnos online', 'Comisiones por barbero', 'Recordatorios por WhatsApp', 'Caja diaria', 'Reportes semanales'],
  },
  {
    industry: 'Taller',
    modules: ['Ingreso de vehículos', 'Órdenes de trabajo', 'Presupuestos', 'Aviso al cliente por WhatsApp', 'Historial por vehículo'],
  },
  {
    industry: 'Comercio',
    modules: ['Stock e inventario', 'Ventas y caja', 'Pedidos por WhatsApp', 'Proveedores', 'Reportes de ventas'],
  },
];

const STEP_MS = 1100;
const HOLD_STEPS = 3;

type Status = 'done' | 'running' | 'pending';

function ModuleStatus({ status }: { status: Status }) {
  if (status === 'done') {
    return (
      <m.span
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={softSpring}
        className="grid place-items-center w-5 h-5 rounded-md bg-accent text-bg shrink-0"
      >
        <CheckIcon size={12} weight="bold" />
      </m.span>
    );
  }
  if (status === 'running') {
    return (
      <span className="grid place-items-center w-5 h-5 shrink-0">
        <span className="w-3.5 h-3.5 rounded-full border-2 border-accent/25 border-t-accent animate-spin" />
      </span>
    );
  }
  return <span className="w-5 h-5 rounded-md border border-border shrink-0" />;
}

function LiveConsole() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-10% 0px' });
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState({ blueprintIndex: 0, step: 0 });

  const { blueprintIndex } = progress;
  const blueprint = BLUEPRINTS[blueprintIndex];
  const total = blueprint.modules.length;
  const step = reduceMotion ? total : progress.step;
  const done = Math.min(step, total);
  const ready = done === total;

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const id = window.setInterval(() => {
      setProgress((current) => {
        if (current.step < BLUEPRINTS[current.blueprintIndex].modules.length + HOLD_STEPS) {
          return { ...current, step: current.step + 1 };
        }
        return { blueprintIndex: (current.blueprintIndex + 1) % BLUEPRINTS.length, step: 0 };
      });
    }, STEP_MS);

    return () => window.clearInterval(id);
  }, [inView, reduceMotion]);

  const stats = [
    { label: 'Rubro', value: blueprint.industry, key: blueprint.industry },
    { label: 'Módulos', value: `${done}/${total}`, key: `${blueprint.industry}-${done}` },
    { label: 'Estado', value: ready ? 'Listo' : 'Armando', key: ready ? 'ready' : 'building', accent: ready },
  ];

  return (
    <div
      ref={ref}
      className="relative rounded-[1.75rem] border border-white/10 bg-surface/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_40px_80px_-40px_rgba(0,0,0,0.9)] overflow-hidden"
    >
      <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2.5 font-mono text-xs text-text-muted">
          <span className="breathe w-2 h-2 rounded-full bg-accent" />
          nuevo-sistema
        </div>
        <span className="font-mono text-[11px] text-text-muted tabular-nums">
          rubro {String(blueprintIndex + 1).padStart(2, '0')}/{String(BLUEPRINTS.length).padStart(2, '0')}
        </span>
      </div>

      <dl className="grid grid-cols-3 divide-x divide-border border-b border-border">
        {stats.map((s) => (
          <div key={s.label} className="px-4 sm:px-6 py-4 sm:py-5 min-w-0">
            <dt className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-text-muted">{s.label}</dt>
            <dd className="relative mt-2 h-6 sm:h-7 overflow-hidden font-mono text-base sm:text-xl tabular-nums">
              <AnimatePresence initial={false} mode="popLayout">
                <m.span
                  key={s.key}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.45, ease: easeOutExpo }}
                  className={`block truncate ${s.accent ? 'text-accent' : 'text-text'}`}
                >
                  {s.value}
                </m.span>
              </AnimatePresence>
            </dd>
          </div>
        ))}
      </dl>

      <div className="relative px-3 sm:px-4 py-3 min-h-[232px] sm:min-h-[256px]">
        <AnimatePresence initial={false} mode="wait">
          <m.ul
            key={blueprint.industry}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            aria-label={`Módulos para ${blueprint.industry}`}
          >
            {blueprint.modules.map((name, i) => {
              const status: Status = i < done ? 'done' : i === step ? 'running' : 'pending';
              return (
                <li
                  key={name}
                  className={`flex items-center gap-3 sm:gap-4 rounded-2xl px-3 sm:px-4 py-3 transition-colors duration-500 ${
                    status === 'running' ? 'bg-white/[0.04]' : ''
                  }`}
                >
                  <ModuleStatus status={status} />
                  <span
                    className={`text-sm truncate transition-colors duration-500 ${
                      status === 'pending' ? 'text-text-muted' : 'text-text'
                    }`}
                  >
                    {name}
                  </span>
                </li>
              );
            })}
          </m.ul>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-4 px-5 sm:px-6 py-3.5 border-t border-border font-mono text-[11px] text-text-muted">
        <span className="shrink-0">progreso</span>
        <div className="relative h-1 flex-1 rounded-full bg-border overflow-hidden">
          <m.div
            className="absolute inset-0 origin-left rounded-full bg-accent"
            initial={false}
            animate={{ scaleX: done / total }}
            transition={softSpring}
          />
        </div>
        <span className={`shrink-0 tabular-nums w-9 text-right ${ready ? 'text-accent' : ''}`}>
          {Math.round((done / total) * 100)}%
        </span>
      </div>
    </div>
  );
}

export default memo(LiveConsole);
