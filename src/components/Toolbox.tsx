import React from 'react';
import { motion } from 'framer-motion';

const TECHNOLOGIES = [
  { name: 'Python', category: 'Core Logic & Deep Learning', idx: '01' },
  { name: 'AI / ML', category: 'Foundations & Model Architectures', idx: '02' },
  { name: 'Generative AI', category: 'Latent Spaces & Multimodal Diffusion', idx: '03' },
  { name: 'LLMs', category: 'Prompt Engineering & Fine-tuning', idx: '04' },
  { name: 'AI Agents', category: 'Autonomous Tool Use & Multi-Agent Loops', idx: '05' },
  { name: 'RAG', category: 'Hybrid Vector Retrieval & Embeddings', idx: '06' },
  { name: 'React', category: 'Interactive Component Systems', idx: '07' },
  { name: 'TypeScript', category: 'Strict Type Systems & Contracts', idx: '08' },
  { name: 'Vite', category: 'High-Velocity Build Tooling', idx: '09' },
  { name: 'Tailwind', category: 'Fluid Editorial Layouts', idx: '10' },
  { name: 'Supabase', category: 'Postgres & Vector Store Backends', idx: '11' },
  { name: 'SQL', category: 'Relational Queries & Performance', idx: '12' },
  { name: 'Automation', category: 'Orchestration & Workflow Pipelines', idx: '13' },
];

const UNLEARNED_THINGS = [
  'Diffusion models from scratch',
  'Quantizing LLMs on bare-metal edge silicon',
  'Multi-agent Byzantine consensus protocols',
  'Neuromorphic computing architectures',
  'Whatever research preprint drops next week'
];

export const Toolbox: React.FC<{ onHoverAction?: (isHovering: boolean) => void }> = ({
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
          CURRENTLY DOWN
          <br />
          <span className="italic text-[#756D63]">THE RABBIT HOLE.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-serif italic text-xl md:text-2xl text-[#756D63] max-w-2xl font-light"
        >
          "The things I reach for when an idea needs somewhere to live."
        </motion.p>
      </div>

      {/* Technologies as Editorial Typography */}
      <div className="border-t border-[#D8CFC2]/80 divide-y divide-[#D8CFC2]/60">
        {TECHNOLOGIES.map((tech) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => onHoverAction?.(true)}
            onMouseLeave={() => onHoverAction?.(false)}
            className="group py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between transition-colors duration-300 hover:bg-[#E9E0D3]/30 px-2 md:px-4"
          >
            <div className="flex items-baseline space-x-4 md:space-x-8">
              <span className="font-mono text-xs text-[#B49772] tracking-widest">
                {tech.idx}
              </span>
              <span className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#25221E] group-hover:italic group-hover:translate-x-2 transition-all duration-300 font-normal">
                {tech.name}
              </span>
            </div>

            <div className="mt-2 md:mt-0 font-mono text-xs tracking-wider text-[#756D63] uppercase">
              {tech.category}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Playful & Sophisticated: Things I Haven't Learned Yet */}
      <div className="mt-24 p-8 md:p-12 bg-[#E9E0D3]/40 border border-[#D8CFC2]">
        <div className="pb-6 mb-8 border-b border-[#D8CFC2]/80">
          <h3 className="font-serif text-2xl md:text-3xl text-[#25221E] font-normal">
            NEW THINGS I HAVEN'T LEARNED YET
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {UNLEARNED_THINGS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#F5F0E8] border border-[#D8CFC2]/70 flex items-center space-x-3 group hover:border-[#25221E] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B49772] group-hover:bg-[#25221E] transition-colors" />
              <span className="font-serif italic text-base md:text-lg text-[#25221E]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
