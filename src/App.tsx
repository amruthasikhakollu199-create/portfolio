import { useState, useEffect } from 'react';
import { AnimatePresence, useReducedMotion } from 'framer-motion';
import { BackgroundTexture } from './components/BackgroundTexture';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { SceneWrapper } from './components/SceneWrapper';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Academics } from './components/Academics';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const SCENES_ORDER = ['home', 'work', 'projects', 'about', 'academics', 'contact'];

export function App() {
  const shouldReduceMotion = useReducedMotion();
  
  // Initialize scene from URL hash
  const [activeScene, setActiveScene] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash === 'projects' || hash === 'work') return 'work';
    return hash && SCENES_ORDER.includes(hash) ? hash : 'home';
  });

  // Custom Cursor state
  const [cursorVariant, setCursorVariant] = useState<'default' | 'project' | 'button' | 'hidden'>('default');
  const [cursorText, setCursorText] = useState('');

  const handleButtonHover = (isHovering: boolean) => {
    setCursorVariant(isHovering ? 'button' : 'default');
    setCursorText('');
  };

  const handleProjectHover = (isHovering: boolean, text?: string) => {
    if (isHovering) {
      setCursorVariant('project');
      setCursorText(text || 'VIEW ↗');
    } else {
      setCursorVariant('default');
      setCursorText('');
    }
  };

  // Immediate, seamless scene redirection & navigation
  const navigateToScene = (scene: string) => {
    const target = scene === 'projects' ? 'work' : scene;
    if (target === activeScene) return;

    if (window.location.hash !== `#${target}`) {
      window.history.pushState({ scene: target }, '', `#${target}`);
    }

    setActiveScene(target);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Listen to browser Back/Forward (popstate and hashchange)
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const normalized = (hash === 'projects' || hash === 'work') ? 'work' : hash;
      const nextScene = normalized && SCENES_ORDER.includes(normalized) ? normalized : 'home';
      if (nextScene !== activeScene) {
        setActiveScene(nextScene);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, [activeScene]);

  return (
    <div className="relative min-h-screen bg-[#F5F0E8] text-[#25221E] selection:bg-[#B49772]/20 selection:text-[#25221E] cursor-default flex flex-col justify-between">
      {/* Tactile paper texture & subtle radial gradients */}
      <BackgroundTexture />

      {/* Editorial Custom Cursor (desktop only) */}
      <CustomCursor cursorVariant={cursorVariant} cursorText={cursorText} />

      {/* Minimal Floating Navigation */}
      <Navigation
        activeScene={activeScene}
        onNavigate={navigateToScene}
        onHoverAction={handleButtonHover}
      />

      {/* Main Scene Presentation with Framer Motion AnimatePresence */}
      <main className="relative z-10 flex-grow pt-8">
        <AnimatePresence mode="wait">
          {activeScene === 'home' && (
            <SceneWrapper key="scene-home" sceneKey="home" reducedMotion={shouldReduceMotion || false}>
              <Hero onNavigate={navigateToScene} />
            </SceneWrapper>
          )}

          {activeScene === 'work' && (
            <SceneWrapper key="scene-work" sceneKey="work" reducedMotion={shouldReduceMotion || false}>
              <Projects onHoverAction={handleProjectHover} />
            </SceneWrapper>
          )}

          {activeScene === 'about' && (
            <SceneWrapper key="scene-about" sceneKey="about" reducedMotion={shouldReduceMotion || false}>
              <About />
            </SceneWrapper>
          )}

          {activeScene === 'academics' && (
            <SceneWrapper key="scene-academics" sceneKey="academics" reducedMotion={shouldReduceMotion || false}>
              <Academics />
            </SceneWrapper>
          )}

          {activeScene === 'contact' && (
            <SceneWrapper key="scene-contact" sceneKey="contact" reducedMotion={shouldReduceMotion || false}>
              <Contact onHoverAction={handleButtonHover} />
            </SceneWrapper>
          )}
        </AnimatePresence>
      </main>

      {/* Minimalist Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
