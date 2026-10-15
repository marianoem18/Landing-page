import { useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&/<>_';

type ScrambleTextProps = {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
};

export default function ScrambleText({ text, className = '', duration = 900, delay = 0 }: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || reduceMotion) return;

    let raf = 0;
    let start = 0;

    const tick = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start - delay;
      if (elapsed >= 0) {
        const progress = Math.min(elapsed / duration, 1);
        const revealed = Math.floor(progress * text.length);
        let out = '';
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          out += i < revealed || char === ' ' ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        el.textContent = out;
        if (progress >= 1) return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.textContent = text;
    };
  }, [inView, reduceMotion, text, duration, delay]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden="true">
        {text}
      </span>
    </span>
  );
}
