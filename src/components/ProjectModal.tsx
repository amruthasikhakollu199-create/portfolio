import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { Project } from '../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onHoverAction?: (isHovering: boolean) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onHoverAction }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#25221E]/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#F5F0E8] border border-[#D8CFC2] shadow-2xl overflow-y-auto no-scrollbar z-10 p-6 md:p-12 text-[#25221E]"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between pb-6 border-b border-[#D8CFC2]/70 mb-8">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-sm tracking-widest text-[#B49772] font-semibold">
                PROJECT {project.number}
              </span>
              <span className="text-[#D8CFC2]">/</span>
              <span className="font-mono text-xs tracking-wider text-[#756D63] uppercase">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              onMouseEnter={() => onHoverAction?.(true)}
              onMouseLeave={() => onHoverAction?.(false)}
              className="p-2 text-[#756D63] hover:text-[#25221E] hover:bg-[#E9E0D3] rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
          </div>

          {/* Title & Tagline */}
          <div className="mb-10">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#25221E] mb-4">
              {project.title}
            </h2>
            <p className="font-serif italic text-xl md:text-2xl text-[#756D63] max-w-2xl leading-snug">
              "{project.tagline}"
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Left 7 cols: Problem, Solution, Architecture */}
            <div className="md:col-span-8 space-y-8">
              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#B49772] block mb-2">
                  THE PREMISE & PROBLEM
                </span>
                <p className="text-base text-[#25221E]/90 leading-relaxed font-light">
                  {project.problem}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#B49772] block mb-2">
                  THE ARCHITECTURAL SOLUTION
                </span>
                <p className="text-base text-[#25221E]/90 leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#25221E] block mb-3">
                  CORE SYSTEM HIGHLIGHTS
                </span>
                <div className="space-y-3">
                  {project.architectureHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-[#E9E0D3]/40 border border-[#D8CFC2]/60">
                      <CheckCircle2 size={16} className="text-[#B49772] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#25221E] font-light">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 cols: Spec Sheet */}
            <div className="md:col-span-4 bg-[#E9E0D3]/30 border border-[#D8CFC2]/70 p-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-5">
                <div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#756D63] block mb-1">
                    YEAR OF EXPLORATION
                  </span>
                  <span className="font-mono text-sm text-[#25221E]">{project.year}</span>
                </div>

                <div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#756D63] block mb-1">
                    STATUS
                  </span>
                  <span className="font-mono text-xs text-[#25221E] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
                    {project.status}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#756D63] block mb-2">
                    TECHNOLOGY STACK
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 bg-[#F5F0E8] border border-[#D8CFC2] text-[#25221E]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#D8CFC2]">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-[#25221E] text-[#F5F0E8] font-mono text-xs tracking-wider uppercase hover:bg-[#3D3730] transition-colors"
                >
                  <span>DISCUSS THIS BUILD</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-6 border-t border-[#D8CFC2]/70 flex justify-end text-[#756D63] font-mono text-xs">
            <button
              onClick={onClose}
              className="underline underline-offset-4 hover:text-[#25221E]"
            >
              CLOSE WINDOW
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
