import { Analytics } from '@vercel/analytics/react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Initiatives } from './components/Initiatives';
import { Craft } from './components/Craft';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <main className="bg-black text-primary min-h-screen">
      <Hero />
      <About />
      <Journey />
      <Initiatives />
      <Craft />
      <Contact />
      <Analytics />
    </main>
  );
}
