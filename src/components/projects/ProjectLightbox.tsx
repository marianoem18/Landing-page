import { useEffect, useEffectEvent } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { CaretLeftIcon, CaretRightIcon, XIcon } from '@phosphor-icons/react';
import type { Project } from '../../data/projects';
import { easeOutExpo } from '../../lib/motion';

type ProjectLightboxProps = {
  project: Project;
  imageIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

export default function ProjectLightbox({ project, imageIndex, onChange, onClose }: ProjectLightboxProps) {
  const lenis = useLenis();
  const count = project.images.length;
  const image = project.images[imageIndex];
  const prev = () => onChange((imageIndex - 1 + count) % count);
  const next = () => onChange((imageIndex + 1) % count);

  useEffect(() => {
    lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
      lenis?.start();
    };
  }, [lenis]);

  const onKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === 'Escape') onClose();
    if (count < 2) return;
    if (event.key === 'ArrowLeft') prev();
    if (event.key === 'ArrowRight') next();
  });

  useEffect(() => {
    const handler = (event: KeyboardEvent) => onKeyDown(event);
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <m.div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <button
        type="button"
        aria-label="Cerrar imagen"
        onClick={onClose}
        className="absolute inset-0 bg-bg/90 backdrop-blur-md"
      />

      <m.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 10 }}
        transition={{ duration: 0.4, ease: easeOutExpo }}
        className="relative z-10 w-full max-w-6xl max-h-[90vh] rounded-[1.5rem] border border-white/10 bg-surface overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
      >
        <div className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b border-border">
          <span className="font-mono text-[11px] text-text-dim tabular-nums shrink-0">
            {imageIndex + 1}/{count}
          </span>
          <span className="flex-1 min-w-0 truncate font-mono text-xs text-text-muted">{image.frameLabel}</span>
          {count > 1 && (
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prev}
                aria-label="Captura anterior"
                className="grid place-items-center w-9 h-9 rounded-full border border-border text-text hover:border-text-dim transition-colors active:scale-95"
              >
                <CaretLeftIcon size={15} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Captura siguiente"
                className="grid place-items-center w-9 h-9 rounded-full border border-border text-text hover:border-text-dim transition-colors active:scale-95"
              >
                <CaretRightIcon size={15} />
              </button>
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="grid place-items-center w-9 h-9 rounded-full bg-accent text-bg active:scale-95 transition-transform"
          >
            <XIcon size={15} weight="bold" />
          </button>
        </div>
        <div data-lenis-prevent className="relative overflow-auto max-h-[calc(90vh-3.75rem)] bg-bg">
          <AnimatePresence mode="wait" initial={false}>
            <m.img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto block"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3, ease: easeOutExpo }}
            />
          </AnimatePresence>
        </div>
      </m.div>
    </m.div>
  );
}
