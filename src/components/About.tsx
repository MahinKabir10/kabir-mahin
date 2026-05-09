import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle';
import { ScrollReveal } from './animations/ScrollReveal';
import { about } from '../data/content';

export function About() {
  return (
    <section id="about" className="bg-black px-4 md:px-6 py-20 md:py-28">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-20 md:py-28 text-center">
        <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-8">
          {about.label}
        </p>

        <WordsPullUpMultiStyle
          segments={about.headlineSegments}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-12 md:mb-16"
        />

        <ScrollReveal
          text={about.body}
          className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto"
        />
      </div>
    </section>
  );
}
