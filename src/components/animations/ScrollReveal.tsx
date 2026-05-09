import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  text: string;
  className?: string;
};

export function ScrollReveal({ text, className = '' }: Props) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = Array.from(text);
  const total = chars.length;

  return (
    <p ref={containerRef} className={className}>
      {chars.map((c, i) => (
        <AnimatedLetter
          key={i}
          char={c}
          index={i}
          total={total}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}

function AnimatedLetter({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const charProgress = index / total;
  const opacity = useTransform(
    progress,
    [Math.max(0, charProgress - 0.1), Math.min(1, charProgress + 0.05)],
    [0.2, 1]
  );
  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
}
