import { motion } from 'framer-motion';

type Node = { x: number; y: number; r: number };
type Edge = { from: number; to: number; delay: number; duration: number };

const nodes: Node[] = [
  { x: 60, y: 90, r: 3 },
  { x: 180, y: 40, r: 4 },
  { x: 300, y: 110, r: 3 },
  { x: 230, y: 220, r: 5 },
  { x: 400, y: 60, r: 3 },
  { x: 420, y: 200, r: 4 },
  { x: 110, y: 220, r: 3 },
  { x: 340, y: 280, r: 3 },
  { x: 500, y: 140, r: 4 },
  { x: 20, y: 160, r: 2.5 },
];

const edges: Edge[] = [
  { from: 0, to: 1, delay: 0, duration: 3.2 },
  { from: 1, to: 2, delay: 0.6, duration: 2.8 },
  { from: 2, to: 3, delay: 1.1, duration: 3.4 },
  { from: 1, to: 4, delay: 0.3, duration: 3.6 },
  { from: 4, to: 5, delay: 1.4, duration: 2.6 },
  { from: 3, to: 5, delay: 0.8, duration: 3.1 },
  { from: 0, to: 6, delay: 1.7, duration: 2.9 },
  { from: 6, to: 3, delay: 0.4, duration: 3.3 },
  { from: 3, to: 7, delay: 1.2, duration: 3.0 },
  { from: 5, to: 8, delay: 0.5, duration: 2.7 },
  { from: 0, to: 9, delay: 1.9, duration: 2.4 },
];

/**
 * Signature visual motif: a quiet network of nodes and pulses,
 * standing in for "automation" without literal robot imagery.
 * Used in the hero and echoed faintly elsewhere as a brand signature.
 */
export default function SignalNetwork({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 320"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3d5afe" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4fd1ff" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="nodeGlow">
          <stop offset="0%" stopColor="#4fd1ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4fd1ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {edges.map((e, i) => {
        const a = nodes[e.from];
        const b = nodes[e.to];
        return (
          <g key={i}>
            <line
              x1={a.x} y1={a.y} x2={b.x} y2={b.y}
              stroke="url(#lineGrad)" strokeWidth="1"
            />
            <motion.circle
              r="2.2"
              fill="#4fd1ff"
              initial={{ opacity: 0 }}
              animate={{
                cx: [a.x, b.x],
                cy: [a.y, b.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: e.duration,
                delay: e.delay,
                repeat: Infinity,
                repeatDelay: 1.4,
                ease: 'easeInOut',
              }}
            />
          </g>
        );
      })}

      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r + 10} fill="url(#nodeGlow)" opacity="0.35" />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="#e8f4ff"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 2.6 + (i % 4) * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.15,
            }}
          />
        </g>
      ))}
    </svg>
  );
}
