import { AnimatePresence, m } from 'framer-motion';
import { ArrowsOutIcon } from '@phosphor-icons/react';
import type { Project } from '../../data/projects';
import { easeOutExpo, softSpring } from '../../lib/motion';
import SpotlightCard from '../ui/SpotlightCard';

const pad = (n: number) => String(n).padStart(2, '0');

type ProjectFrameProps = {
  project: Project;
  projectIndex: number;
  total: number;
  imageIndex: number;
  onSelectImage: (index: number) => void;
  onOpen: () => void;
};

export default function ProjectFrame({
  project,
  projectIndex,
  total,
  imageIndex,
  onSelectImage,
  onOpen,
}: ProjectFrameProps) {
  const image = project.images[imageIndex];

  return (
    <SpotlightCard className="rounded-[1.75rem] border border-border bg-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_40px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-4 px-5 py-3.5 border-b border-border">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-border" />
          <span className="w-2 h-2 rounded-full bg-border" />
          <span className="w-2 h-2 rounded-full bg-border" />
        </span>
        <span className="relative flex-1 min-w-0 h-7 rounded-full bg-bg/70 border border-border-soft px-3 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <m.span
              key={image.frameLabel}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeOutExpo }}
              className="absolute inset-x-3 inset-y-0 flex items-center font-mono text-[11px] text-text-muted"
            >
              <span className="truncate">{image.frameLabel}</span>
            </m.span>
          </AnimatePresence>
        </span>
        <span className="font-mono text-[11px] text-text-dim tabular-nums shrink-0">
          {pad(projectIndex + 1)} / {pad(total)}
        </span>
      </div>

      <button
        type="button"
        onClick={onOpen}
        aria-label={`Ampliar: ${image.alt}`}
        className="group relative block w-full aspect-[1916/861] overflow-hidden bg-bg cursor-zoom-in"
      >
        <AnimatePresence initial={false}>
          <m.img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top"
            initial={{ clipPath: 'inset(100% 0% 0% 0%)', scale: 1.08, zIndex: 2 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1, zIndex: 2 }}
            exit={{ zIndex: 1, opacity: 0.35, transition: { duration: 0.9 } }}
            transition={{ duration: 0.9, ease: easeOutExpo }}
          />
        </AnimatePresence>
        <span className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-bg/80 backdrop-blur border border-white/10 px-3 py-1.5 font-mono text-[11px] text-text opacity-0 translate-y-1 transition-[opacity,translate] duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <ArrowsOutIcon size={13} />
          Ampliar
        </span>
      </button>

      <div className="flex items-center justify-between gap-4 px-5 py-4 border-t border-border">
        <div className="flex items-center gap-2" role="tablist" aria-label="Capturas del proyecto">
          {project.images.map((img, i) => {
            const isActive = i === imageIndex;
            return (
              <button
                key={img.src}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={img.alt}
                onClick={() => onSelectImage(i)}
                className="relative w-16 aspect-[16/9] rounded-md overflow-hidden"
              >
                <img
                  src={img.src}
                  alt=""
                  loading="lazy"
                  className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                />
                {isActive && (
                  <m.span
                    layoutId="frame-thumb"
                    transition={softSpring}
                    className="absolute inset-0 rounded-md ring-1 ring-inset ring-accent"
                  />
                )}
              </button>
            );
          })}
        </div>
        <span className="font-mono text-[11px] text-text-dim tabular-nums">
          captura {imageIndex + 1}/{project.images.length}
        </span>
      </div>
    </SpotlightCard>
  );
}
