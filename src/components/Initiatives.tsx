import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle';
import { initiatives, media } from '../data/content';

export function Initiatives() {
  return (
    <section
      id="initiatives"
      className="relative min-h-screen bg-black px-4 md:px-6 py-20 md:py-28"
    >
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-14 md:mb-20 text-center">
          <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6">
            Initiatives
          </p>
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Studio-grade workflows for visionary creators.', className: '' },
            ]}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-primary max-w-4xl mx-auto"
          />
          <div className="mt-3">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Built for steady minds. Powered by curiosity.', className: '' },
              ]}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-500"
              delay={0.4}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-3 sm:gap-2 md:gap-1">
          <VideoCard />
          {initiatives.map((it, i) => (
            <FeatureCard key={i} index={i + 1} icon={media.icons[i]} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden h-[380px] md:h-[420px] lg:h-full bg-[#212121]"
    >
      <video
        src={media.initiativesVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-xs uppercase tracking-[0.25em] text-primary/60 mb-3">My canvas</p>
        <h3
          className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight"
          style={{ color: '#E1E0CC' }}
        >
          Your creative canvas.
        </h3>
      </div>
    </motion.div>
  );
}

type FeatureProps = {
  index: number;
  icon: string;
  n: string;
  title: string;
  blurb: string;
  points: string[];
  accent: string;
};

function FeatureCard({ index, icon, n, title, blurb, points, accent }: FeatureProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl bg-[#212121] h-[380px] md:h-[420px] lg:h-full p-6 sm:p-7 flex flex-col group"
    >
      <img
        src={icon}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover mb-5"
        loading="lazy"
      />
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary/50 mb-2">
        {accent}
      </p>
      <h3
        className="text-xl sm:text-2xl font-normal mb-3 flex items-baseline gap-2"
        style={{ color: '#E1E0CC' }}
      >
        <span>{title}</span>
        <span className="text-[10px] sm:text-xs text-primary/40">{n}</span>
      </h3>
      <p className="text-xs sm:text-sm text-gray-400 mb-5 leading-relaxed">{blurb}</p>
      <ul className="space-y-2.5 mb-6">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
            <Check size={14} className="text-primary mt-[0.2em] shrink-0" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="mt-auto inline-flex items-center gap-2 text-primary text-xs sm:text-sm hover:gap-3 transition-all duration-300"
      >
        <span>Learn more</span>
        <ArrowRight size={14} className="-rotate-45" />
      </a>
    </motion.div>
  );
}
