import { m } from 'framer-motion';
import type { ReactNode } from 'react';
import { easeOutExpo } from '../lib/motion';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, y = 18, className = '' }: RevealProps) {
  return (
    <m.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: easeOutExpo }}
      className={className}
    >
      {children}
    </m.div>
  );
}
