export default function Monogram({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`grid place-items-center w-8 h-8 rounded-full bg-accent text-bg font-mono text-[11px] font-semibold tracking-tight ${className}`}
    >
      MG
    </span>
  );
}
