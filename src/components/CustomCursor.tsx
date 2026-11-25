import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export interface CursorContextType {
  cursorText: string;
  cursorVariant: 'default' | 'project' | 'button' | 'hidden';
  setCursor: (variant: 'default' | 'project' | 'button' | 'hidden', text?: string) => void;
}

export const CursorContext = React.createContext<CursorContextType>({
  cursorText: '',
  cursorVariant: 'default',
  setCursor: () => {},
});

export const CustomCursor: React.FC<{
  cursorVariant: 'default' | 'project' | 'button' | 'hidden';
  cursorText: string;
}> = ({ cursorVariant, cursorText }) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports touch only
    const checkTouch = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    setIsTouchDevice(checkTouch());

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible || cursorVariant === 'hidden') {
    return null;
  }

  const variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      width: 10,
      height: 10,
      backgroundColor: '#25221E',
      transition: { type: 'spring' as const, damping: 30, stiffness: 350, mass: 0.1 }
    },
    button: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      width: 36,
      height: 36,
      backgroundColor: 'rgba(180, 151, 114, 0.25)',
      border: '1px solid #B49772',
      transition: { type: 'spring' as const, damping: 25, stiffness: 300, mass: 0.15 }
    },
    project: {
      x: mousePosition.x - 42,
      y: mousePosition.y - 42,
      width: 84,
      height: 84,
      backgroundColor: '#25221E',
      transition: { type: 'spring' as const, damping: 22, stiffness: 220, mass: 0.2 }
    }
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none text-center"
        animate={cursorVariant}
        variants={variants}
      >
        {cursorVariant === 'project' && (
          <span className="font-mono text-[10px] tracking-widest text-[#F5F0E8] font-medium uppercase select-none px-1">
            {cursorText || 'VIEW ↗'}
          </span>
        )}
      </motion.div>
    </div>
  );
};
