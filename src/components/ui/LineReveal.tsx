import { m } from 'framer-motion';
import { easeOutExpo, staggerParent } from '../../lib/motion';

const tags = { h1: m.h1, h2: m.h2, p: m.p };

type LineRevealProps = {
  text: string;
  as?: keyof typeof tags;
  className?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
  /** Words from this index on are set in the muted text color. */
  dimFrom?: number;
};

const word = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.9, ease: easeOutExpo } },
};

const wordMask = 'inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]';

export default function LineReveal({
  text,
  as = 'h2',
  className = '',
  delay = 0,
  stagger = 0.04,
  immediate = false,
  dimFrom,
}: LineRevealProps) {
  const words = text.split(' ');
  const tone = (i: number) => (dimFrom !== undefined && i >= dimFrom ? 'text-text-muted' : '');

  if (immediate) {
    const Tag = as;
    return (
      <Tag className={className}>
        <span className="sr-only">{text}</span>
        {words.map((w, i) => (
          <span key={`${w}-${i}`} aria-hidden="true">
            <span className={wordMask}>
              <span className={`inline-block word-rise ${tone(i)}`} style={{ animationDelay: `${delay + i * stagger}s` }}>
                {w}
              </span>
            </span>
            {i < words.length - 1 && ' '}
          </span>
        ))}
      </Tag>
    );
  }

  const Tag = tags[as] as typeof m.h2;

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerParent(stagger, delay)}
    >
      <span className="sr-only">{text}</span>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} aria-hidden="true">
          <span className={wordMask}>
            <m.span className={`inline-block ${tone(i)}`} variants={word}>
              {w}
            </m.span>
          </span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  );
}
