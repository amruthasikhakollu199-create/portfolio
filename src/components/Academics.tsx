import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Power, GraduationCap, Award, Compass } from 'lucide-react';
import { robotAudio } from '../utils/robotAudio';

export const Academics: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [activeHoverBlock, setActiveHoverBlock] = useState<number | null>(null);
  const timerRef = useRef<number[]>([]);

  const startAssembly = () => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
    setStep(0);

    const t0 = window.setTimeout(() => { setStep(1); robotAudio.playServoSound(260, 0.4); }, 150);
    const t1 = window.setTimeout(() => { setStep(2); robotAudio.playBlockSnapSound(0.9); }, 600);
    const t2 = window.setTimeout(() => { setStep(3); robotAudio.playServoSound(340, 0.3); setTimeout(() => robotAudio.playBlockSnapSound(1.1), 220); }, 1100);
    const t3 = window.setTimeout(() => { setStep(4); robotAudio.playServoSound(400, 0.25); setTimeout(() => robotAudio.playBlockSnapSound(1.3), 200); }, 1600);
    const t4 = window.setTimeout(() => { setStep(5); robotAudio.playBlockSnapSound(0.7); robotAudio.playAssemblyCompleteSound(); }, 2100);
    const t5 = window.setTimeout(() => { setStep(6); }, 2600);

    timerRef.current = [t0, t1, t2, t3, t4, t5];
  };

  useEffect(() => {
    startAssembly();
    return () => { timerRef.current.forEach(clearTimeout); };
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] pt-16 sm:pt-20 pb-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto flex flex-col justify-start overflow-hidden">
      {/* Background Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #25221E 1px, transparent 1px),
            linear-gradient(to bottom, #25221E 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative w-full flex-grow flex flex-col items-center justify-start">
        {/* Central Assembled Structure */}
        <div className="w-full max-w-5xl relative z-10 flex flex-col items-center">
          
          {/* Header Block: Assembled Monumental ACADEMICS Block */}
          <div className="w-full mb-3 sm:mb-4 relative">
            <motion.div
              initial={{ y: -50, opacity: 0, scale: 0.96 }}
              animate={{
                y: step >= 5 ? 0 : -50,
                opacity: step >= 5 ? 1 : 0,
                scale: step >= 5 ? 1 : 0.96,
              }}
              transition={{ duration: 0.55, ease: [0.175, 0.885, 0.32, 1.25] }}
              className="bg-[#FAF7F2] border-2 border-[#25221E] shadow-lg p-4 sm:p-6 md:p-8 relative text-center rounded-2xl overflow-hidden"
            >
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#25221E] font-normal tracking-tight">
                ACADEMICS
              </h1>

              <p className="font-serif italic text-xs sm:text-sm md:text-base lg:text-lg text-[#756D63] mt-1 sm:mt-2 max-w-2xl mx-auto">
                "Groundwork in theory, driven by hands-on engineering."
              </p>
            </motion.div>
          </div>

          {/* Robot Arms (Hangers) — cleanly hidden on smaller split screens to avoid clumsy overlaps */}
          <div className="w-full relative h-10 sm:h-14 lg:h-20 pointer-events-none z-20 hidden sm:flex justify-between px-6 sm:px-14 lg:px-20 -my-1 sm:-my-2">
            {/* Robot Arm 1 (Left Crane) */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: step >= 1 ? (step >= 5 ? 0 : (step % 2 === 0 ? 6 : -3)) : -20,
                opacity: step >= 1 ? 1 : 0
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <svg className="w-20 h-14 lg:w-28 lg:h-20" viewBox="0 0 130 95" fill="none">
                <rect x="15" y="0" width="55" height="8" rx="2" fill="#25221E" />
                <circle cx="42" cy="8" r="3.5" fill="#B49772" />
                <path d="M42 8 L80 42" stroke="#25221E" strokeWidth="4" strokeLinecap="round" />
                <circle cx="80" cy="42" r="5.5" fill="#FAF7F2" stroke="#25221E" strokeWidth="2" />
                <circle cx="80" cy="42" r="2" fill="#B49772" />
                <path d="M80 42 L60 80" stroke="#25221E" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="56" y1="24" x2="72" y2="52" stroke="#B49772" strokeWidth="1.2" strokeDasharray="3 3" />
                <circle cx="60" cy="80" r="4" fill="#25221E" />
                <path d="M52 86 L60 80 L68 86" stroke="#25221E" strokeWidth="2.5" fill="none" />
                <path d="M50 86 L50 94 M70 86 L70 94" stroke="#B49772" strokeWidth="1.5" />
              </svg>
            </motion.div>

            {/* Robot Arm 2 (Right Crane) */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: step >= 1 ? (step >= 5 ? 0 : (step % 2 === 1 ? 6 : -3)) : -20,
                opacity: step >= 1 ? 1 : 0
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <svg className="w-20 h-14 lg:w-28 lg:h-20" viewBox="0 0 130 95" fill="none">
                <rect x="60" y="0" width="55" height="8" rx="2" fill="#25221E" />
                <circle cx="88" cy="8" r="3.5" fill="#B49772" />
                <path d="M88 8 L50 44" stroke="#25221E" strokeWidth="4" strokeLinecap="round" />
                <circle cx="50" cy="44" r="5.5" fill="#FAF7F2" stroke="#25221E" strokeWidth="2" />
                <circle cx="50" cy="44" r="2" fill="#B49772" />
                <path d="M50 44 L70 82" stroke="#25221E" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="70" cy="82" r="4" fill="#25221E" />
                <path d="M62 88 L70 82 L78 88" stroke="#25221E" strokeWidth="2.5" fill="none" />
                <path d="M60 88 L60 94 M80 88 L80 94" stroke="#B49772" strokeWidth="1.5" />
              </svg>
            </motion.div>
          </div>

          {/* 3 Building Blocks — uses responsive grid: 1 col on split/mobile screen, 3 cols on wide screen */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 relative z-10 pt-2">
            {/* BOX 1: Education / College (NRIIT) */}
            <div className="relative w-full rounded-2xl border-2 border-dashed border-[#D8CFC2] overflow-hidden bg-[#E9E0D3]/20 flex flex-col">
              {step < 2 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-xs text-[#756D63]/70 space-y-2.5 p-6 text-center min-h-[220px]">
                  <div className="w-7 h-7 border-2 border-t-[#B49772] border-r-transparent border-b-[#B49772] border-l-transparent rounded-full animate-spin" />
                  <span className="tracking-widest text-[11px]">NRIIT</span>
                </div>
              )}

              <motion.div
                initial={{ y: -220, scale: 0.85, opacity: 0, rotate: -3 }}
                animate={{
                  y: step >= 2 ? 0 : -220,
                  scale: step >= 2 ? 1 : 0.85,
                  opacity: step >= 2 ? 1 : 0,
                  rotate: step >= 2 ? 0 : -3,
                }}
                transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.25] }}
                onMouseEnter={() => setActiveHoverBlock(1)}
                onMouseLeave={() => setActiveHoverBlock(null)}
                className={`w-full min-h-[240px] sm:min-h-[260px] bg-[#FAF7F2] border-2 border-[#25221E] p-5 sm:p-6 flex flex-col justify-between shadow-lg transition-all duration-300 rounded-2xl ${
                  activeHoverBlock === 1 ? 'border-[#B49772] shadow-2xl -translate-y-1.5 bg-[#FFFDF9]' : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#25221E] font-normal leading-[1.2]">
                        NRIIT
                      </h3>
                      <p className="font-mono text-[11px] text-[#756D63] mt-0.5">
                        NRI Institute of Technology
                      </p>
                    </div>
                    <div className="shrink-0 p-1.5 bg-[#E9E0D3]/60 rounded-lg text-[#B49772] mt-0.5">
                      <GraduationCap size={18} />
                    </div>
                  </div>

                  {/* Line by line CGPA text */}
                  <div className="space-y-2 font-mono text-xs text-[#25221E] pt-2">
                    <div className="flex items-center justify-between py-1.5 border-b border-[#D8CFC2]/40">
                      <span className="text-[#756D63]">1st Year:</span>
                      <span className="font-semibold text-[#25221E] bg-[#E9E0D3]/60 px-2 py-0.5 rounded text-[11px]">8.6 CGPA</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-[#D8CFC2]/40">
                      <span className="text-[#756D63]">2nd Year:</span>
                      <span className="text-[#B49772] italic text-[11px]">Coming Soon</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-[#D8CFC2]/40">
                      <span className="text-[#756D63]">3rd Year:</span>
                      <span className="text-[#B49772] italic text-[11px]">Coming Soon</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-[#756D63]">4th Year:</span>
                      <span className="text-[#B49772] italic text-[11px]">Coming Soon</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* BOX 2: Participations (with Power Button Symbols) */}
            <div className="relative w-full rounded-2xl border-2 border-dashed border-[#D8CFC2] overflow-hidden bg-[#E9E0D3]/20 flex flex-col">
              {step < 3 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-xs text-[#756D63]/70 space-y-2.5 p-6 text-center min-h-[220px]">
                  <div className="w-7 h-7 border-2 border-t-[#B49772] border-r-transparent border-b-[#B49772] border-l-transparent rounded-full animate-spin" />
                  <span className="tracking-widest text-[11px]">PARTICIPATIONS</span>
                </div>
              )}

              <motion.div
                initial={{ y: -220, scale: 0.85, opacity: 0, rotate: 3 }}
                animate={{
                  y: step >= 3 ? 0 : -220,
                  scale: step >= 3 ? 1 : 0.85,
                  opacity: step >= 3 ? 1 : 0,
                  rotate: step >= 3 ? 0 : 3,
                }}
                transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.25] }}
                onMouseEnter={() => setActiveHoverBlock(2)}
                onMouseLeave={() => setActiveHoverBlock(null)}
                className={`w-full min-h-[240px] sm:min-h-[260px] bg-[#FAF7F2] border-2 border-[#25221E] p-5 sm:p-6 flex flex-col justify-between shadow-lg transition-all duration-300 rounded-2xl ${
                  activeHoverBlock === 2 ? 'border-[#B49772] shadow-2xl -translate-y-1.5 bg-[#FFFDF9]' : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#25221E] font-normal leading-[1.2]">
                      Participations
                    </h3>
                    <div className="shrink-0 p-1.5 bg-[#E9E0D3]/60 rounded-lg text-[#B49772] mt-0.5">
                      <Compass size={18} />
                    </div>
                  </div>

                  {/* List represented with power button symbols */}
                  <div className="space-y-3 font-mono text-xs text-[#25221E] pt-2">
                    <div className="flex items-start space-x-2.5 py-1.5 border-b border-[#D8CFC2]/40">
                      <Power size={14} className="text-[#B49772] shrink-0 mt-0.5 animate-pulse" />
                      <div>
                        <span className="font-semibold text-[#25221E]">Participated in 3 Hackathons</span>
                        <p className="text-[10px] text-[#756D63] font-sans mt-0.5">Collaborative sprints building rapid prototypes.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2.5 py-1.5">
                      <Power size={14} className="text-[#B49772] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#25221E]">Attended AI/ML Workshops</span>
                        <p className="text-[10px] text-[#756D63] font-sans mt-0.5">Deep dives into models, neural nets & agents.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* BOX 3: Certifications */}
            <div className="relative w-full rounded-2xl border-2 border-dashed border-[#D8CFC2] overflow-hidden bg-[#E9E0D3]/20 flex flex-col">
              {step < 4 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-xs text-[#756D63]/70 space-y-2.5 p-6 text-center min-h-[220px]">
                  <div className="w-7 h-7 border-2 border-t-[#B49772] border-r-transparent border-b-[#B49772] border-l-transparent rounded-full animate-spin" />
                  <span className="tracking-widest text-[11px]">CERTIFICATIONS</span>
                </div>
              )}

              <motion.div
                initial={{ y: -220, scale: 0.85, opacity: 0, rotate: -3 }}
                animate={{
                  y: step >= 4 ? 0 : -220,
                  scale: step >= 4 ? 1 : 0.85,
                  opacity: step >= 4 ? 1 : 0,
                  rotate: step >= 4 ? 0 : -3,
                }}
                transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.25] }}
                onMouseEnter={() => setActiveHoverBlock(3)}
                onMouseLeave={() => setActiveHoverBlock(null)}
                className={`w-full min-h-[240px] sm:min-h-[260px] bg-[#FAF7F2] border-2 border-[#25221E] p-5 sm:p-6 flex flex-col justify-between shadow-lg transition-all duration-300 rounded-2xl ${
                  activeHoverBlock === 3 ? 'border-[#B49772] shadow-2xl -translate-y-1.5 bg-[#FFFDF9]' : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#25221E] font-normal leading-[1.2]">
                      Certifications
                    </h3>
                    <div className="shrink-0 p-1.5 bg-[#E9E0D3]/60 rounded-lg text-[#B49772] mt-0.5">
                      <Award size={18} />
                    </div>
                  </div>

                  {/* Certifications list */}
                  <div className="space-y-2.5 font-mono text-xs text-[#25221E] pt-2">
                    <div className="flex items-center justify-between py-1.5 border-b border-[#D8CFC2]/40">
                      <span className="font-semibold text-[#25221E]">Python for Data Science</span>
                      <span className="text-[10px] text-[#B49772] uppercase">Certified</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-[#D8CFC2]/40">
                      <span className="font-semibold text-[#25221E]">Machine Learning Foundations</span>
                      <span className="text-[10px] text-[#B49772] uppercase">Certified</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="font-semibold text-[#25221E]">GenAI & Prompt Engineering</span>
                      <span className="text-[10px] text-[#B49772] uppercase">Certified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
