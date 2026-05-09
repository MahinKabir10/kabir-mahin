import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle';
import { ContactForm } from './ContactForm';
import { contact, personal } from '../data/content';

export function Contact() {
  return (
    <section id="contact" className="relative bg-black px-4 md:px-6 py-20 md:py-32">
      <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />
      <div className="relative bg-[#101010] rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-20 md:py-28">
        <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-8 text-center">
          Closing scene
        </p>

        <WordsPullUpMultiStyle
          segments={contact.headline}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] mb-10 md:mb-14"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center text-sm sm:text-base text-gray-400 mb-12"
        >
          {contact.body}
        </motion.p>

        <div className="flex flex-col items-center gap-10">
          <ContactForm />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 w-full max-w-4xl">
            <ContactCard icon={<Mail size={16} />} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
            <ContactCard icon={<Phone size={16} />} label="Phone" value={personal.phone} href={`tel:${personal.phone.replace(/\s/g, '')}`} />
            <ContactCard icon={<MapPin size={16} />} label="Location" value={personal.location} />
            <ContactCard icon={<Linkedin size={16} />} label="LinkedIn" value="mahin-kabir" href={personal.linkedin} />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="rounded-xl border border-primary/10 bg-[#0a0a0a] hover:bg-[#141414] hover:border-primary/30 transition-all duration-500 px-5 py-4 h-full group">
      <div className="flex items-center gap-2 text-primary/50 text-[10px] uppercase tracking-[0.25em] mb-2">
        <span className="text-primary/70">{icon}</span>
        <span>{label}</span>
      </div>
      <p className="text-primary text-sm sm:text-base group-hover:translate-x-0.5 transition-transform duration-500 break-all">
        {value}
      </p>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Footer() {
  return (
    <div className="relative max-w-6xl mx-auto mt-12 pt-8 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary/40">
      <span>© {new Date().getFullYear()} Kabir Mahin · Brisbane</span>
      <span>Composed with intention</span>
    </div>
  );
}
