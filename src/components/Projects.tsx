import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, m, useInView, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { projects, type Project } from '../data/projects';
import Reveal from './Reveal';
import LineReveal from './ui/LineReveal';
import ScrambleText from './ui/ScrambleText';
import ProjectFrame from './projects/ProjectFrame';
import ProjectLightbox from './projects/ProjectLightbox';

const AUTOPLAY_MS = 5000;
const pad = (n: number) => String(n).padStart(2, '0');

type View = { project: number; image: number };

function MobileGallery({ project, onOpen }: { project: Project; onOpen: (image: number) => void }) {
  return (
    <div className="lg:hidden -mx-5 sm:-mx-8 px-5 sm:px-8 flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar">
      {project.images.map((img, i) => (
        <button
          key={img.src}
          type="button"
          onClick={() => onOpen(i)}
          className="w-[86%] sm:w-[70%] shrink-0 snap-center rounded-2xl border border-border bg-surface overflow-hidden active:scale-[0.99] transition-transform"
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            decoding="async"
            className="w-full aspect-[1916/861] object-cover object-top"
          />
          <span className="block px-3 py-2.5 text-left font-mono text-[10px] text-text-muted truncate border-t border-border">
            {img.frameLabel}
          </span>
        </button>
      ))}
    </div>
  );
}

function ProjectBlock({
  project,
  index,
  total,
  onActive,
  onOpen,
}: {
  project: Project;
  index: number;
  total: number;
  onActive: (index: number) => void;
  onOpen: (image: number) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <article ref={ref} className="lg:min-h-[85vh] flex flex-col justify-center gap-8 py-4 lg:py-16 lg:pl-12">
      <MobileGallery project={project} onOpen={onOpen} />

      <Reveal>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-text-dim tabular-nums">
            {pad(index + 1)} / {pad(total)}
          </span>
          {project.badge && (
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-dim border border-accent/30 text-accent font-mono text-[11px] uppercase tracking-wider px-2.5 py-1">
              <span className="breathe w-1.5 h-1.5 rounded-full bg-accent" />
              <ScrambleText text={project.badge} />
            </span>
          )}
        </div>

        <h3 className="mt-5 font-display font-semibold text-2xl sm:text-[2rem] leading-[1.1] tracking-tight max-w-[24ch]">
          {project.title}
        </h3>
        <p className="mt-4 text-[15px] text-text-muted leading-relaxed max-w-[58ch]">{project.description}</p>

        <ul className="mt-8 border-t border-border divide-y divide-border-soft">
          {project.highlights.map((h) => (
            <li key={h.text} className="flex items-start gap-4 py-3.5">
              <h.icon size={18} weight="light" className="text-accent shrink-0 mt-0.5" />
              <span className="text-sm text-text-muted leading-snug">{h.text}</span>
            </li>
          ))}
        </ul>

        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border text-text font-medium text-sm pl-5 pr-4 py-2.5 hover:border-accent/50 hover:text-accent transition-colors active:scale-[0.98]"
          >
            {project.link.label}
            <ArrowUpRightIcon size={14} />
          </a>
        )}
      </Reveal>
    </article>
  );
}

export default function Projects() {
  const [view, setView] = useState<View>({ project: 0, image: 0 });
  const [lightbox, setLightbox] = useState<View | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const listInView = useInView(listRef, { margin: '-20% 0px' });
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start center', 'end center'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const handleActive = useCallback((index: number) => {
    setView((v) => (v.project === index ? v : { project: index, image: 0 }));
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const changeLightboxImage = useCallback(
    (image: number) => setLightbox((l) => (l ? { ...l, image } : l)),
    [],
  );

  useEffect(() => {
    if (!listInView || reduceMotion || lightbox) return;
    const count = projects[view.project].images.length;
    if (count < 2) return;
    const id = window.setTimeout(
      () => setView((v) => ({ ...v, image: (v.image + 1) % count })),
      AUTOPLAY_MS,
    );
    return () => window.clearTimeout(id);
  }, [view, listInView, reduceMotion, lightbox]);

  const active = projects[view.project];

  return (
    <section id="proyectos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-16 items-end">
          <div>
            <span className="eyebrow">
              <ScrambleText text="Proyectos reales" />
            </span>
            <LineReveal
              text="Esto no son demos: son sistemas vendidos y en uso"
              className="mt-5 font-display font-semibold text-[2rem] sm:text-5xl leading-[1.05] tracking-tighter max-w-[18ch]"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="text-text-muted leading-relaxed max-w-[52ch] lg:ml-auto">
              Sistemas de gestión que desarrollé para negocios reales — gimnasios, una barbería y un taller electromecánico — que hoy se usan todos los días.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16">
          <div ref={listRef} className="relative flex flex-col gap-20 lg:gap-0">
            <div aria-hidden="true" className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-border">
              <m.div style={{ scaleY: progress }} className="origin-top h-full w-full bg-accent" />
            </div>
            {projects.map((project, i) => (
              <ProjectBlock
                key={project.id}
                project={project}
                index={i}
                total={projects.length}
                onActive={handleActive}
                onOpen={(image) => setLightbox({ project: i, image })}
              />
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <ProjectFrame
                project={active}
                projectIndex={view.project}
                total={projects.length}
                imageIndex={view.image}
                onSelectImage={(image) => setView((v) => ({ ...v, image }))}
                onOpen={() => setLightbox(view)}
              />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <ProjectLightbox
            project={projects[lightbox.project]}
            imageIndex={lightbox.image}
            onChange={changeLightboxImage}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
