import React from 'react';
import { motion } from 'framer-motion';

const MILESTONES = [
  {
    year: '2024',
    state: 'CURIOUS',
    description: 'First encounters with neural architectures, diving into foundational Python, prompt semantics, and the raw magic of generative transformers.',
    artifact: 'Notebooks, exploratory scripts & basic models'
  },
  {
    year: '2025',
    state: 'EXPERIMENTING',
    description: 'Deconstructing how RAG actually works under the hood. Building Smart Notes, experimenting with function calling, vector distances, and active recall mechanisms.',
    artifact: 'Smart Notes prototype & early agent pipelines'
  },
  {
    year: '2026',
    state: 'BUILDING',
    description: 'Developing PassionPath and exploring multi-agent tool execution. Teaching machines not just to provide static answers, but to execute multi-step workflows safely.',
    artifact: 'PassionPath & full-stack autonomous workflows'
  },
  {
    year: 'NEXT',
    state: 'UNKNOWN, FOR NOW.',
    description: 'Embracing the ambiguity of what comes after next-token prediction. Whatever emerges at the intersection of intelligence, human tools, and agency.',
    artifact: 'Unwritten branches & open questions'
  }
];

export const Journey: React.FC<{ onHoverAction?: (isHovering: boolean) => void }> = ({
  onHoverAction
}) => {
  return (
    <section className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#D8CFC2]/60">
      {/* Header */}
      <div className="max-w-4xl mb-20 md:mb-28">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#25221E] mb-6"
        >
          STILL BECOMING.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-serif italic text-xl md:text-2xl text-[#756D63] max-w-2xl font-light"
        >
          "No perfectly drawn roadmap. Just a trail of things worth learning."
        </motion.p>
      </div>

      {/* Understated Editorial Timeline */}
      <div className="border-t border-[#D8CFC2] divide-y divide-[#D8CFC2]/70">
        {MILESTONES.map((milestone) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => onHoverAction?.(true)}
            onMouseLeave={() => onHoverAction?.(false)}
            className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group hover:bg-[#E9E0D3]/20 px-2 md:px-4 transition-colors"
          >
            {/* Year Column */}
            <div className="md:col-span-3">
              <span className="font-mono text-2xl md:text-3xl font-light tracking-tight text-[#25221E] group-hover:text-[#B49772] transition-colors">
                {milestone.year}
              </span>
            </div>

            {/* State & Description Column */}
            <div className="md:col-span-6 space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#25221E] font-normal tracking-tight">
                {milestone.state}
              </h3>
              <p className="text-base text-[#756D63] font-light leading-relaxed max-w-xl">
                {milestone.description}
              </p>
            </div>

            {/* Artifact Footnote Column */}
            <div className="md:col-span-3 text-left md:text-right">
              <span className="block font-mono text-[10px] tracking-widest uppercase text-[#B49772] mb-1">
                EVIDENCE
              </span>
              <span className="font-mono text-xs text-[#25221E]/80">
                {milestone.artifact}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
