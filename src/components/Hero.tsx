import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Navbar } from './Navbar';
import { WordsPullUp } from './animations/WordsPullUp';
import { hero, media, personal } from '../data/content';

export function Hero() {
  return (
    <section className="h-screen w-full p-4 md:p-6">
      <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black">
        <video
          src={media.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-6 left-6 md:top-10 md:left-10 z-20 text-[10px] sm:text-xs tracking-[0.2em] uppercase"
          style={{ color: 'rgba(225, 224, 204, 0.7)' }}
        >
          {personal.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-6 right-6 md:top-10 md:right-10 z-20 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-right"
          style={{ color: 'rgba(225, 224, 204, 0.7)' }}
        >
          Portfolio · 2026
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-14 pb-6 md:pb-8 lg:pb-10">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-8" style={{ color: '#E1E0CC' }}>
              <WordsPullUp
                text={personal.name}
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
                wordClassName=""
                showAsterisk
                asteriskClassName="text-primary/80"
              />
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 lg:gap-6 lg:pb-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
              >
                {hero.description}
              </motion.p>
              <motion.a
                href="#contact"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center justify-between gap-2 hover:gap-3 bg-primary text-black rounded-full pl-5 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 font-medium text-sm sm:text-base self-start transition-all duration-300"
              >
                <span>{hero.cta}</span>
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight size={16} className="text-primary" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
