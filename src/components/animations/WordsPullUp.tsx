import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  showAsterisk?: boolean;
  asteriskClassName?: string;
};

export function WordsPullUp({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.08,
  showAsterisk = false,
  asteriskClassName = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const words = text.split(' ');

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.05em] mr-[0.22em] last:mr-0">
            <motion.span
              className={`inline-block relative ${wordClassName}`}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {showAsterisk && isLast && (
                <span
                  className={`absolute top-[0.65em] -right-[0.3em] text-[0.31em] ${asteriskClassName}`}
                  aria-hidden
                >
                  *
                </span>
              )}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}
