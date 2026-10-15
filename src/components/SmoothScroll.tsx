import type { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';
import { useReducedMotion } from 'framer-motion';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        anchors: true,
        stopInertiaOnNavigate: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
