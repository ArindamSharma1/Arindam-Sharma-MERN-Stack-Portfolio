import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navigation } from './components/Navigation';
import { ProgressBar } from './components/ProgressBar';
import { SideContact } from './components/SideContact';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SystemDesign } from './components/SystemDesign';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import CustomCursor from "./components/CustomCursor";
// import { ScrollToTop } from './components/ScrollToTop';
// import ThemeToggle from './components/ThemeToggle'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (

    <div className="bg-white text-slate-900 overflow-x-hidden">
      {/* <ThemeToggle /> */}
      <CustomCursor />
      <Navigation />
      <ProgressBar />
      <SideContact />

      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <SystemDesign />
      <Contact />
      <Footer />
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default App;
