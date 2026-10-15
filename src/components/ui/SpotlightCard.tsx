import type { PointerEvent, ReactNode } from 'react';
import { m, useMotionTemplate, useMotionValue } from 'framer-motion';

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

const ringMask = {
  padding: 1,
  WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
  WebkitMaskComposite: 'xor',
  mask: 'linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)',
} as const;

export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const ring = useMotionTemplate`radial-gradient(380px circle at ${x}px ${y}px, rgb(198 244 50 / 0.55), transparent 45%)`;
  const wash = useMotionTemplate`radial-gradient(640px circle at ${x}px ${y}px, rgb(198 244 50 / 0.05), transparent 45%)`;

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  const handleLeave = () => {
    x.set(-1000);
    y.set(-1000);
  };

  return (
    <div onPointerMove={handleMove} onPointerLeave={handleLeave} className={`relative ${className}`}>
      <m.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[inherit] z-10"
        style={{ background: ring, ...ringMask }}
      />
      <m.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: wash }}
      />
      {children}
    </div>
  );
}
