import type { Transition, Variants } from 'framer-motion';

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const spring: Transition = { type: 'spring', stiffness: 100, damping: 20 };

export const softSpring: Transition = { type: 'spring', stiffness: 260, damping: 30 };

export const staggerParent = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};