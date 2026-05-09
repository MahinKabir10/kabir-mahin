import { motion } from 'framer-motion';
import { nav } from '../data/content';

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-1/2 -translate-x-1/2 z-30"
    >
      <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
        <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
          {nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[10px] sm:text-xs md:text-sm tracking-wide transition-colors duration-300"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
