import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import type { Project } from '../data/projectsData';

interface NoteboardRedirectProps {
  project: Project | null;
  onClose: () => void;
}

export const NoteboardRedirect: React.FC<NoteboardRedirectProps> = ({ project, onClose }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!project) {
      setProgress(0);
      return;
    }

    setProgress(0);

    // Smoothly animate progress bar to 100% over 1.1s
    const startTime = Date.now();
    const duration = 1200; // ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        // Trigger redirection
        try {
          const opened = window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
          if (!opened || opened.closed || typeof opened.closed === 'undefined') {
            // Popup blocker might have blocked it, fallback to window.location if necessary or let user click
            window.location.assign(project.externalUrl);
          }
        } catch {
          window.location.assign(project.externalUrl);
        }

        // Close noteboard after small delay
        setTimeout(() => {
          onClose();
        }, 400);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Subtle cinematic backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#25221E]/50 backdrop-blur-sm"
        />

        {/* Tactile Editorial Noteboard */}
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.9, y: 25, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-[#FAF7F2] border-2 border-[#D8CFC2] shadow-2xl p-6 sm:p-10 z-10 text-[#25221E] overflow-hidden rounded-sm"
          style={{
            boxShadow: '0 25px 50px -12px rgba(37, 34, 30, 0.25), 0 0 0 1px rgba(216, 207, 194, 0.5)'
          }}
        >
          {/* Subtle paper grain & vintage edge styling */}
          <div className="absolute inset-0 paper-grain opacity-30 pointer-events-none mix-blend-multiply" />
          
          {/* Brass clip / tape pin header */}
          <div className="relative flex justify-center -mt-6 sm:-mt-8 mb-5 sm:mb-6">
            <div className="w-20 h-5 bg-[#E4D9CA] border-x border-b border-[#D8CFC2] shadow-inner transform -rotate-1 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B49772]/70" />
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-[#756D63] hover:text-[#25221E] hover:bg-[#E9E0D3] rounded transition-colors"
            aria-label="Cancel redirection"
          >
            <X size={18} />
          </button>

          {/* Noteboard Header Details */}
          <div className="flex items-center justify-between border-b border-[#D8CFC2]/70 pb-3 mb-6">
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-[#B49772] uppercase font-semibold">
              PROJECT NOTE // {project.number}
            </span>
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-[#756D63] uppercase">
              {project.category}
            </span>
          </div>

          {/* Project Name & Written Note */}
          <div className="mb-6 space-y-3">
            <div className="inline-block px-2.5 py-0.5 bg-[#E9E0D3]/60 border border-[#D8CFC2] font-mono text-[10px] text-[#756D63] tracking-widest uppercase mb-1">
              INITIALIZING DEPLOYMENT
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#25221E] font-normal tracking-tight leading-tight">
              {project.title}
            </h3>

            <p className="font-serif italic text-base sm:text-lg text-[#756D63] font-light leading-snug">
              "{project.tagline}"
            </p>
          </div>

          {/* Deployment Route Bar */}
          <div className="bg-[#E9E0D3]/50 border border-[#D8CFC2] p-4 rounded-sm space-y-3 mb-6">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#756D63]">
              <span className="flex items-center space-x-1.5 text-[#25221E] font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>ROUTING TO LIVE URL</span>
              </span>
              <span className="text-[#B49772] font-medium">{progress}%</span>
            </div>

            {/* Progress line */}
            <div className="h-1.5 bg-[#D8CFC2]/60 w-full rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#B49772]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <div className="flex items-center justify-between font-mono text-[10px] text-[#756D63] pt-1">
              <span className="truncate max-w-[280px] sm:max-w-[340px] text-[#25221E]/90 underline underline-offset-2">
                {project.externalUrl}
              </span>
              <ExternalLink size={12} className="text-[#B49772] shrink-0 ml-2" />
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={onClose}
              className="font-mono text-xs text-[#756D63] hover:text-[#25221E] transition-colors underline underline-offset-4"
            >
              Cancel
            </button>

            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#25221E] text-[#F5F0E8] font-mono text-xs tracking-wider uppercase hover:bg-[#3D3730] transition-colors shadow-sm"
            >
              <span>OPEN NOW</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
