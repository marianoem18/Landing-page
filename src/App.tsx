import { Analytics } from '@vercel/analytics/react';
import { LazyMotion, MotionConfig, domMax } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import GrainOverlay from './components/ui/GrainOverlay';
import Nav from './components/Nav';
import Hero from './components/Hero';
import IndustriesMarquee from './components/IndustriesMarquee';
import Projects from './components/Projects';
import Services from './components/Services';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">
        <SmoothScroll>
          <div className="min-h-[100dvh] bg-bg text-text">
            <Nav />
            <main>
              <Hero />
              <IndustriesMarquee />
              <Projects />
              <Services />
              <FAQ />
              <FinalCTA />
            </main>
            <Footer />
          </div>
          <GrainOverlay />
          <Analytics />
        </SmoothScroll>
      </MotionConfig>
    </LazyMotion>
  );
}
