import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeScene: string;
  onNavigate: (scene: string) => void;
  onHoverAction?: (isHovering: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeScene,
  onNavigate,
  onHoverAction,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', key: 'work' },
    { name: 'ABOUT', key: 'about' },
    { name: 'ACADEMICS', key: 'academics' },
    { name: 'CONTACT', key: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, key: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(key);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#F5F0E8]/90 backdrop-blur-md border-b border-[#D8CFC2]/60 shadow-[0_4px_20px_-10px_rgba(37,34,30,0.05)]'
            : 'py-5 lg:py-7 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            onMouseEnter={() => onHoverAction?.(true)}
            onMouseLeave={() => onHoverAction?.(false)}
            className="group flex items-center space-x-2.5 text-[#25221E] focus:outline-none cursor-pointer"
          >
            <span className="font-serif tracking-widest text-base sm:text-lg md:text-xl font-normal transition-colors duration-300 group-hover:text-[#B49772]">
              AMRUTHA
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#B49772]/60" />
            <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-[#756D63] uppercase">
              STUDENT / BUILDER
            </span>
          </a>

          {/* Desktop/Tablet Links: WORK, ABOUT, ACADEMICS, CONTACT */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = activeScene === link.key;
              return (
                <a
                  key={link.name}
                  href={`#${link.key}`}
                  onClick={(e) => handleLinkClick(e, link.key)}
                  onMouseEnter={() => onHoverAction?.(true)}
                  onMouseLeave={() => onHoverAction?.(false)}
                  className={`font-mono text-xs tracking-[0.2em] transition-colors duration-200 relative py-1 group cursor-pointer ${
                    isActive ? 'text-[#25221E] font-medium' : 'text-[#756D63] hover:text-[#25221E]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[#25221E] transition-all duration-300 ${
                      isActive ? 'w-full bg-[#B49772]' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Menu Trigger for split-screen / tablet / mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#25221E] p-2 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Drawer Menu for split-screen / mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[60px] z-30 bg-[#F5F0E8] border-b border-[#D8CFC2] px-6 py-8 flex flex-col justify-between lg:hidden shadow-xl"
          >
            <div className="space-y-5">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-[#D8CFC2]/40 pb-3.5">
                  <a
                    href={`#${link.key}`}
                    onClick={(e) => handleLinkClick(e, link.key)}
                    className={`font-serif text-2xl sm:text-3xl tracking-tight block transition-colors ${
                      activeScene === link.key ? 'text-[#B49772]' : 'text-[#25221E] hover:text-[#B49772]'
                    }`}
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#D8CFC2]/40">
              <p className="font-mono text-xs text-[#756D63] tracking-widest uppercase">
                AI / ML · PRODUCTS · EXPERIMENTS
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
