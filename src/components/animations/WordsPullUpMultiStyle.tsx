import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Segment = { text: string; className?: string };

type Props = {
  segments: Segment[];
  className?: string;
  delay?: number;
  stagger?: number;
  align?: 'center' | 'left';
};

export function WordsPullUpMultiStyle({
  segments,
  className = '',
  delay = 0,
  stagger = 0.07,
  align = 'center',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const items: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(' ').forEach((w) => items.push({ word: w, className: seg.className }));
  });

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap ${align === 'center' ? 'justify-center' : 'justify-start'} ${className}`}
    >
      {items.map((it, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.05em] mr-[0.22em] last:mr-0">
          <motion.span
            className={`inline-block ${it.className ?? ''}`}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {it.word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
