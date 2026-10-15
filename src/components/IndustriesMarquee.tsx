import { memo, useRef } from 'react';
import {
  m,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { industries } from '../data/content';
import ScrambleText from './ui/ScrambleText';

const BASE_VELOCITY = -2.2;

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {industries.map((name, i) => (
        <span key={name} className="flex items-center">
          <span
            className={`px-6 sm:px-10 font-display font-medium text-4xl sm:text-6xl tracking-tighter whitespace-nowrap ${
              i % 2 === 0 ? 'text-text' : 'text-text-dim'
            }`}
          >
            {name}
          </span>
          <span aria-hidden="true" className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent rotate-45 shrink-0" />
        </span>
      ))}
    </div>
  );
}

function IndustriesMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduceMotion = useReducedMotion();

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (!inView || reduceMotion) return;
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    let moveBy = direction.current * BASE_VELOCITY * (delta / 1000);
    moveBy += moveBy * Math.abs(factor);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section id="rubros" aria-label="Rubros" className="relative border-y border-border py-10 sm:py-14 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 mb-8 sm:mb-10 flex items-center justify-between gap-6">
        <span className="eyebrow">
          <ScrambleText text="Soluciones por tipo de negocio" />
        </span>
        <span className="hidden sm:block font-mono text-xs text-text-dim">{industries.length} rubros</span>
      </div>

      <div ref={ref} className="fade-x">
        <p className="sr-only">{industries.join(', ')}</p>
        <m.div aria-hidden="true" className="flex w-max" style={{ x }}>
          <Track />
          <Track />
        </m.div>
      </div>
    </section>
  );
}

export default memo(IndustriesMarquee);
