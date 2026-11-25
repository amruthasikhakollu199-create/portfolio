import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lightbulb, Bot, Wrench, GitFork, Zap, CheckCircle2 } from 'lucide-react';

interface AgentNode {
  step: string;
  name: string;
  role: string;
  detail: string;
  icon: React.ElementType;
  techContext: string;
}

const PIPELINE_NODES: AgentNode[] = [
  {
    step: '01',
    name: 'YOU',
    role: 'INTENT & CONSTRAINTS',
    detail: 'The human origin: framing the core objective, establishing guardrails, and defining success criteria.',
    icon: User,
    techContext: 'System prompt injection & human-in-the-loop validation boundary'
  },
  {
    step: '02',
    name: 'IDEA',
    role: 'PROBLEM DECOMPOSITION',
    detail: 'Transforming fuzzy human goals into structured sub-hypotheses and a deterministic execution graph.',
    icon: Lightbulb,
    techContext: 'Hierarchical task planning & topological sorting of requirements'
  },
  {
    step: '03',
    name: 'AGENT',
    role: 'COGNITIVE ORCHESTRATION',
    detail: 'An autonomous reasoning loop that maintains memory, evaluates prior steps, and selects candidate plans.',
    icon: Bot,
    techContext: 'Stateful context window, reflection scratchpad & recursive prompt loops'
  },
  {
    step: '04',
    name: 'TOOLS',
    role: 'ENVIRONMENT INTERFACES',
    detail: 'Equipping the model with deterministic capabilities: APIs, code interpreters, scrapers, and vector stores.',
    icon: Wrench,
    techContext: 'Strict JSON-schema function calling & sandboxed subprocess runners'
  },
  {
    step: '05',
    name: 'DECISION',
    role: 'SELF-CRITIQUE & POLICIES',
    detail: 'Critically assessing tool outputs, catching schema violations or logic errors before committing mutations.',
    icon: GitFork,
    techContext: 'Invariant validation, error handling triggers & corrective backoff'
  },
  {
    step: '06',
    name: 'ACTION',
    role: 'AUTONOMOUS MUTATION',
    detail: 'Executing the verified change: generating code, writing database records, or sending coordinated signals.',
    icon: Zap,
    techContext: 'Side-effect execution under deterministic transaction safety'
  },
  {
    step: '07',
    name: 'RESULT',
    role: 'VERIFIED OUTCOME',
    detail: 'Not merely a wall of generated text, but a real, tested, and deliverable product artifact.',
    icon: CheckCircle2,
    techContext: 'Closed-loop feedback confirmation & metric benchmark reporting'
  }
];

export const AgentPipeline: React.FC<{ onHoverAction?: (isHovering: boolean) => void }> = ({
  onHoverAction
}) => {
  const [activeNode, setActiveNode] = useState<number>(2); // Default to AGENT node

  return (
    <section id="exploring" className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#D8CFC2]/60">
      {/* Header */}
      <div className="max-w-4xl mb-20 md:mb-28">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#25221E] mb-6"
        >
          TEACHING MACHINES
          <br />
          <span className="italic text-[#756D63]">TO DO THE WORK.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-serif italic text-xl md:text-2xl text-[#756D63] max-w-2xl font-light leading-relaxed"
        >
          "I'm exploring AI agents, tool use, automation and systems that don't just generate an answer, but actually get things done."
        </motion.p>
      </div>

      {/* Editorial Technical Diagram */}
      <div className="border border-[#D8CFC2] bg-[#E9E0D3]/30 p-6 md:p-12 relative overflow-hidden">
        {/* Subtle diagram grid guides */}
        <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

        {/* Horizontal Node Flow (Desktop) & Vertical Flow (Mobile) */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 relative">
            {PIPELINE_NODES.map((node, index) => {
              const isSelected = activeNode === index;
              const Icon = node.icon;

              return (
                <motion.div
                  key={node.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActiveNode(index)}
                  onMouseEnter={() => onHoverAction?.(true)}
                  onMouseLeave={() => onHoverAction?.(false)}
                  className={`p-4 md:p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full min-h-[160px] ${
                    isSelected
                      ? 'bg-[#25221E] text-[#F5F0E8] border-[#25221E] shadow-lg scale-[1.02]'
                      : 'bg-[#F5F0E8] text-[#25221E] border-[#D8CFC2] hover:border-[#B49772] hover:bg-[#FAF7F2]'
                  }`}
                >
                  <div>
                    {/* Step & Arrow */}
                    <div className="flex items-center justify-between mb-3 font-mono text-[10px] tracking-widest">
                      <span className={isSelected ? 'text-[#B49772]' : 'text-[#756D63]'}>
                        {node.step}
                      </span>
                      {index < PIPELINE_NODES.length - 1 && (
                        <span className={`hidden lg:inline ${isSelected ? 'text-[#B49772]' : 'text-[#D8CFC2]'}`}>
                          →
                        </span>
                      )}
                    </div>

                    {/* Icon */}
                    <div className="mb-3">
                      <Icon
                        size={18}
                        className={isSelected ? 'text-[#B49772]' : 'text-[#756D63]'}
                      />
                    </div>

                    {/* Node Name */}
                    <div className="font-serif text-lg font-normal tracking-wide uppercase mb-1">
                      {node.name}
                    </div>
                  </div>

                  {/* Sub-label */}
                  <div
                    className={`font-mono text-[9px] tracking-wider uppercase leading-tight ${
                      isSelected ? 'text-[#D8CFC2]' : 'text-[#756D63]'
                    }`}
                  >
                    {node.role}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Inspector Drawer for Selected Node */}
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 p-6 md:p-8 bg-[#F5F0E8] border border-[#D8CFC2] shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
          >
            <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#D8CFC2]/60 pb-4 md:pb-0 md:pr-6">
              <h3 className="font-serif text-2xl md:text-3xl text-[#25221E] tracking-tight">
                {PIPELINE_NODES[activeNode].name}
              </h3>
              <span className="font-mono text-xs text-[#756D63] tracking-wider uppercase block mt-1">
                {PIPELINE_NODES[activeNode].role}
              </span>
            </div>

            <div className="md:col-span-8 space-y-3">
              <p className="text-base text-[#25221E] font-light leading-relaxed">
                {PIPELINE_NODES[activeNode].detail}
              </p>
              <div className="flex items-center space-x-2 pt-2 text-xs font-mono text-[#756D63]">
                <span className="text-[#B49772]">ENGINEERING MECHANISM:</span>
                <span>{PIPELINE_NODES[activeNode].techContext}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
