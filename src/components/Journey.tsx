import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle';
import { journey } from '../data/content';

export function Journey() {
  return (
    <section id="journey" className="relative bg-black px-4 md:px-6 py-20 md:py-28">
      <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14 md:mb-20">
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6">
            The journey
          </p>
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Eight years of practice,', className: 'font-normal' },
              { text: 'shaped on three continents.', className: 'italic font-serif' },
            ]}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto leading-[0.95]"
          />
        </div>

        <div className="relative pl-6 md:pl-10 border-l border-primary/15">
          {journey.map((item, i) => (
            <JourneyCard key={i} index={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  index: number;
  period: string;
  role: string;
  company: string;
  impact: string;
  bullets: string[];
  tags: string[];
};

function JourneyCard({ index, period, role, company, impact, bullets, tags }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mb-10 md:mb-14 last:mb-0 group"
    >
      <span className="absolute -left-[31px] md:-left-[45px] top-2 w-3 h-3 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-500" />
      <div className="rounded-2xl border border-primary/10 bg-[#0a0a0a] hover:bg-[#101010] transition-colors duration-500 p-6 sm:p-8 md:p-10 glow-ring">
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl text-primary font-normal">{role}</h3>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary/50">
            {period}
          </span>
        </div>
        <p className="italic font-serif text-base sm:text-lg md:text-xl text-primary/80 mb-4">
          {company}
        </p>
        <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-3xl">{impact}</p>
        <ul className="space-y-2 mb-6">
          {bullets.map((b, i) => (
            <li key={i} className="text-xs sm:text-sm text-gray-400 flex gap-3">
              <span className="text-primary/40 mt-[0.4em] shrink-0">—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary/60 border border-primary/15 rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
