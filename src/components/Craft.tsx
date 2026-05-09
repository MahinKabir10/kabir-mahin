import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle';
import { skillGroups, education } from '../data/content';

export function Craft() {
  return (
    <section id="craft" className="relative bg-black px-4 md:px-6 py-20 md:py-28">
      <div className="bg-noise absolute inset-0 opacity-[0.1] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <div className="mb-14 md:mb-20 text-center">
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6">
            The craft
          </p>
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Skills practiced like an instrument —', className: 'font-normal' },
              { text: 'quietly, daily.', className: 'italic font-serif' },
            ]}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto leading-[0.95]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {skillGroups.map((g, i) => (
            <SkillCard key={g.title} index={i} title={g.title} skills={g.skills} />
          ))}
        </div>

        <EducationBlock />
      </div>
    </section>
  );
}

function SkillCard({
  index,
  title,
  skills,
}: {
  index: number;
  title: string;
  skills: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl bg-[#0e0e0e] hover:bg-[#141414] transition-colors duration-500 border border-primary/10 p-6 sm:p-8 group"
    >
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary/50 mb-4">
        {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="text-xl sm:text-2xl text-primary font-normal mb-5">{title}</h3>
      <ul className="space-y-2">
        {skills.map((s) => (
          <li key={s} className="text-xs sm:text-sm text-gray-400 flex gap-3">
            <span className="text-primary/30 shrink-0">·</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function EducationBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="mt-10 md:mt-16 rounded-2xl bg-[#0a0a0a] border border-primary/10 p-8 sm:p-10 md:p-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-end"
    >
      <div className="md:col-span-2">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary/50 mb-3">
          Education
        </p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-primary font-normal mb-2">
          {education.degree}
        </h3>
        <p className="italic font-serif text-base sm:text-lg md:text-xl text-primary/80 mb-2">
          {education.school}
        </p>
        <p className="text-sm text-gray-400">{education.note}</p>
      </div>
      <div className="text-left md:text-right">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary/60 border border-primary/15 rounded-full px-4 py-2 inline-block">
          {education.period}
        </span>
      </div>
    </motion.div>
  );
}
