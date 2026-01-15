import { ReactLenis } from 'lenis/react';
import { Navigation } from './components/Navigation';
import { ProgressBar } from './components/ProgressBar';

import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SystemDesign } from './components/SystemDesign';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import CustomCursor from "./components/CustomCursor";
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <ReactLenis root>
      <div className="bg-primary text-txt-primary overflow-x-hidden">
        <CustomCursor />
        <Navigation />
        <ProgressBar />

        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <SystemDesign />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ReactLenis>
  );
}

export default App;
