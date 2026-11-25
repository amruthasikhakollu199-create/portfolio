import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, FastForward, Cpu } from 'lucide-react';
import { robotAudio } from '../utils/robotAudio';

interface RobotWorkBuilderProps {
  onComplete: () => void;
}

export const RobotWorkBuilder: React.FC<RobotWorkBuilderProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const timerRef = useRef<number[]>([]);

  useEffect(() => {
    // Schedule assembly choreography with synthesized audio
    const t0 = setTimeout(() => {
      setStep(1); // Grid initialization & arm deployment
      robotAudio.playServoSound(260, 0.4);
    }, 150);

    const t1 = setTimeout(() => {
      setStep(2); // Arm 1 drops Block 01
      robotAudio.playBlockSnapSound(0.9);
    }, 600);

    const t2 = setTimeout(() => {
      setStep(3); // Arm 2 drops Block 02
      robotAudio.playServoSound(340, 0.3);
      setTimeout(() => robotAudio.playBlockSnapSound(1.1), 220);
    }, 1100);

    const t3 = setTimeout(() => {
      setStep(4); // Arm 1 drops Block 03
      robotAudio.playServoSound(400, 0.25);
      setTimeout(() => robotAudio.playBlockSnapSound(1.3), 200);
    }, 1600);

    const t4 = setTimeout(() => {
      setStep(5); // Overhead gantry locks Monumental WORK Header
      robotAudio.playBlockSnapSound(0.7);
      robotAudio.playAssemblyCompleteSound();
    }, 2100);

    const t5 = setTimeout(() => {
      setStep(6); // Final transition
      setTimeout(onComplete, 400);
    }, 2800);

    timerRef.current = [t0, t1, t2, t3, t4, t5];

    return () => {
      timerRef.current.forEach(clearTimeout);
    };
  }, [onComplete]);

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    robotAudio.setMuted(next);
  };

  const handleSkip = () => {
    timerRef.current.forEach(clearTimeout);
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#F5F0E8] overflow-hidden flex flex-col justify-between selection:bg-transparent">
      {/* Background Architectural Blueprint Grid */}
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
      <div className="absolute inset-0 paper-grain opacity-35 mix-blend-multiply pointer-events-none" />

      {/* Top HUD Controls */}
      <header className="relative z-30 px-6 sm:px-12 py-6 flex items-center justify-between border-b border-[#D8CFC2]/70">
        <div className="flex items-center space-x-3 text-[#25221E]">
          <Cpu size={16} className="text-[#B49772] animate-spin" style={{ animationDuration: '6s' }} />
          <span className="font-mono text-xs tracking-[0.25em] uppercase font-semibold">
            ROBOTIC_CONSTRUCTOR // WORK_PAGE_ASSEMBLY
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#B49772] animate-ping" />
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSound}
            className="flex items-center space-x-2 font-mono text-xs text-[#756D63] hover:text-[#25221E] px-3 py-1.5 border border-[#D8CFC2] hover:border-[#25221E] transition-colors"
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-[#B49772]" />}
            <span className="text-[11px] tracking-wider">{isMuted ? 'SOUND OFF' : 'AUDIO ACTIVE'}</span>
          </button>

          <button
            onClick={handleSkip}
            className="flex items-center space-x-1.5 font-mono text-xs tracking-wider text-[#25221E] hover:text-[#B49772] px-3 py-1.5 border border-[#25221E] hover:border-[#B49772] transition-colors"
          >
            <span>SKIP</span>
            <FastForward size={13} />
          </button>
        </div>
      </header>

      {/* Main Assembly Bay Canvas */}
      <main className="relative flex-grow flex items-center justify-center px-4 sm:px-8 py-4">
        
        {/* Robot Arm 1 (Left Articulated Constructor) */}
        <motion.div
          initial={{ y: -120, x: -80, opacity: 0 }}
          animate={{
            y: step >= 1 ? (step >= 5 ? -140 : (step % 2 === 0 ? 10 : -30)) : -120,
            x: step >= 1 ? (step >= 5 ? -100 : 0) : -80,
            opacity: step >= 1 ? 1 : 0
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-4 sm:left-12 pointer-events-none z-20 hidden md:block"
        >
          <svg width="180" height="280" viewBox="0 0 180 280" fill="none" className="text-[#25221E]">
            {/* Top Ceiling Mount */}
            <rect x="30" y="0" width="80" height="16" fill="#25221E" />
            <circle cx="70" cy="16" r="6" fill="#B49772" />
            
            {/* Upper Arm Segment */}
            <motion.path
              d="M70 16 L120 110"
              stroke="#25221E"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Elbow Joint */}
            <circle cx="120" cy="110" r="10" fill="#FAF7F2" stroke="#25221E" strokeWidth="4" />
            <circle cx="120" cy="110" r="4" fill="#B49772" />

            {/* Forearm Segment */}
            <motion.path
              d="M120 110 L85 200"
              stroke="#25221E"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Hydraulic Piston */}
            <line x1="85" y1="65" x2="110" y2="135" stroke="#B49772" strokeWidth="2" strokeDasharray="3 3" />

            {/* Wrist & Electromagnetic Gripper */}
            <circle cx="85" cy="200" r="7" fill="#25221E" />
            <path d="M70 210 L85 200 L100 210" stroke="#25221E" strokeWidth="4" fill="none" />
            <path d="M68 210 L68 230 M102 210 L102 230" stroke="#B49772" strokeWidth="3" />
            {/* Laser Beam Guide */}
            {step < 5 && (
              <line x1="85" y1="205" x2="85" y2="270" stroke="#B49772" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.8" />
            )}
          </svg>
        </motion.div>

        {/* Robot Arm 2 (Right Laser Gantry Constructor) */}
        <motion.div
          initial={{ y: -120, x: 80, opacity: 0 }}
          animate={{
            y: step >= 1 ? (step >= 5 ? -140 : (step % 2 === 1 ? 20 : -20)) : -120,
            x: step >= 1 ? (step >= 5 ? 100 : 0) : 80,
            opacity: step >= 1 ? 1 : 0
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 right-4 sm:right-12 pointer-events-none z-20 hidden md:block"
        >
          <svg width="180" height="280" viewBox="0 0 180 280" fill="none" className="text-[#25221E]">
            {/* Top Mount */}
            <rect x="70" y="0" width="80" height="16" fill="#25221E" />
            <circle cx="110" cy="16" r="6" fill="#B49772" />

            {/* Arm Segment 1 */}
            <motion.path
              d="M110 16 L60 115"
              stroke="#25221E"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle cx="60" cy="115" r="10" fill="#FAF7F2" stroke="#25221E" strokeWidth="4" />
            <circle cx="60" cy="115" r="4" fill="#B49772" />

            {/* Arm Segment 2 */}
            <motion.path
              d="M60 115 L95 205"
              stroke="#25221E"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Claw */}
            <circle cx="95" cy="205" r="7" fill="#25221E" />
            <path d="M80 215 L95 205 L110 215" stroke="#25221E" strokeWidth="4" fill="none" />
            <path d="M78 215 L78 235 M112 215 L112 235" stroke="#B49772" strokeWidth="3" />
            {step < 5 && (
              <line x1="95" y1="210" x2="95" y2="275" stroke="#B49772" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.8" />
            )}
          </svg>
        </motion.div>

        {/* Central Building Blocks Modular Assembly Target */}
        <div className="w-full max-w-4xl relative z-10 flex flex-col items-center">
          
          {/* TOP MONUMENTAL HEADER BLOCK: WORK (Locked by Overhead Drone/Gantry) */}
          <div className="w-full mb-8 relative">
            <motion.div
              initial={{ y: -80, opacity: 0, scale: 0.88 }}
              animate={{
                y: step >= 5 ? 0 : -80,
                opacity: step >= 5 ? 1 : 0,
                scale: step >= 5 ? 1 : 0.88,
              }}
              transition={{ duration: 0.55, ease: [0.175, 0.885, 0.32, 1.275] }}
              className="bg-[#FAF7F2] border-2 border-[#25221E] shadow-xl p-6 sm:p-8 relative text-center rounded-sm"
            >
              {/* Corner Locking Brackets */}
              <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#B49772]" />
              <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#B49772]" />
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#B49772]" />
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#B49772]" />

              <div className="inline-block px-3 py-0.5 bg-[#E9E0D3] text-[#756D63] font-mono text-[10px] tracking-widest uppercase mb-2">
                CORE MODULE // SECTION 01
              </div>

              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#25221E] font-normal tracking-tight">
                WORK
              </h2>

              <p className="font-serif italic text-lg sm:text-xl text-[#756D63] mt-2">
                "Questions that turned into code. Code that turned into working products."
              </p>

              {/* Laser weld line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: step >= 5 ? '100%' : '0%' }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="h-[2px] bg-[#B49772] mx-auto mt-4"
              />
            </motion.div>
          </div>

          {/* PROJECT BUILDING BLOCKS (Dropped & Snapped in by Robots 1, 2, 3) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Block 01: Smart Notes */}
            <div className="relative min-h-[170px] border-2 border-dashed border-[#D8CFC2] p-1 flex items-center justify-center">
              <span className="font-mono text-[10px] text-[#D8CFC2] uppercase">
                {step < 2 ? 'SLOT_01: AWAITING BLOCK...' : ''}
              </span>

              <motion.div
                initial={{ y: -180, scale: 0.8, opacity: 0, rotate: -4 }}
                animate={{
                  y: step >= 2 ? 0 : -180,
                  scale: step >= 2 ? 1 : 0.8,
                  opacity: step >= 2 ? 1 : 0,
                  rotate: step >= 2 ? 0 : -4,
                }}
                transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.25] }}
                className="absolute inset-0 bg-[#E9E0D3] border-2 border-[#25221E] p-4 flex flex-col justify-between shadow-md"
              >
                {/* Construction clamp indicator */}
                <div className="flex items-center justify-between border-b border-[#D8CFC2] pb-1.5 font-mono text-[9px] text-[#756D63]">
                  <span className="text-[#B49772] font-semibold">BLOCK_01 // ASSEMBLED</span>
                  <span>SLOT_LOCKED</span>
                </div>

                <div>
                  <span className="font-serif text-2xl text-[#B49772]">01</span>
                  <h4 className="font-serif text-lg text-[#25221E] font-medium leading-tight">
                    Smart Notes Summarizer
                  </h4>
                  <p className="font-mono text-[10px] text-[#756D63] mt-1">
                    AI / NLP / PRODUCT
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#25221E] pt-2 border-t border-[#D8CFC2]">
                  <span>VERCEL_DEPLOYMENT</span>
                  <span className="text-emerald-700">● READY</span>
                </div>
              </motion.div>
            </div>

            {/* Block 02: Urban Solar Project */}
            <div className="relative min-h-[170px] border-2 border-dashed border-[#D8CFC2] p-1 flex items-center justify-center">
              <span className="font-mono text-[10px] text-[#D8CFC2] uppercase">
                {step < 3 ? 'SLOT_02: AWAITING BLOCK...' : ''}
              </span>

              <motion.div
                initial={{ y: -180, scale: 0.8, opacity: 0, rotate: 3 }}
                animate={{
                  y: step >= 3 ? 0 : -180,
                  scale: step >= 3 ? 1 : 0.8,
                  opacity: step >= 3 ? 1 : 0,
                  rotate: step >= 3 ? 0 : 3,
                }}
                transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.25] }}
                className="absolute inset-0 bg-[#E4D9CA] border-2 border-[#25221E] p-4 flex flex-col justify-between shadow-md"
              >
                <div className="flex items-center justify-between border-b border-[#D8CFC2] pb-1.5 font-mono text-[9px] text-[#756D63]">
                  <span className="text-[#B49772] font-semibold">BLOCK_02 // ASSEMBLED</span>
                  <span>SLOT_LOCKED</span>
                </div>

                <div>
                  <span className="font-serif text-2xl text-[#B49772]">02</span>
                  <h4 className="font-serif text-lg text-[#25221E] font-medium leading-tight">
                    Urban Solar Project
                  </h4>
                  <p className="font-mono text-[10px] text-[#756D63] mt-1">
                    GEOSPATIAL / CLEAN TECH
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#25221E] pt-2 border-t border-[#D8CFC2]">
                  <span>VERCEL_DEPLOYMENT</span>
                  <span className="text-emerald-700">● READY</span>
                </div>
              </motion.div>
            </div>

            {/* Block 03: Customer Segment K-Means */}
            <div className="relative min-h-[170px] border-2 border-dashed border-[#D8CFC2] p-1 flex items-center justify-center">
              <span className="font-mono text-[10px] text-[#D8CFC2] uppercase">
                {step < 4 ? 'SLOT_03: AWAITING BLOCK...' : ''}
              </span>

              <motion.div
                initial={{ y: -180, scale: 0.8, opacity: 0, rotate: -2 }}
                animate={{
                  y: step >= 4 ? 0 : -180,
                  scale: step >= 4 ? 1 : 0.8,
                  opacity: step >= 4 ? 1 : 0,
                  rotate: step >= 4 ? 0 : -2,
                }}
                transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.25] }}
                className="absolute inset-0 bg-[#E9E0D3] border-2 border-[#25221E] p-4 flex flex-col justify-between shadow-md"
              >
                <div className="flex items-center justify-between border-b border-[#D8CFC2] pb-1.5 font-mono text-[9px] text-[#756D63]">
                  <span className="text-[#B49772] font-semibold">BLOCK_03 // ASSEMBLED</span>
                  <span>SLOT_LOCKED</span>
                </div>

                <div>
                  <span className="font-serif text-2xl text-[#B49772]">03</span>
                  <h4 className="font-serif text-lg text-[#25221E] font-medium leading-tight">
                    Customer Segment K-Means
                  </h4>
                  <p className="font-mono text-[10px] text-[#756D63] mt-1">
                    UNSUPERVISED ML / CLUSTERING
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#25221E] pt-2 border-t border-[#D8CFC2]">
                  <span>VERCEL_DEPLOYMENT</span>
                  <span className="text-emerald-700">● READY</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Construction Telemetry Footer */}
      <footer className="relative z-30 px-6 sm:px-12 py-5 border-t border-[#D8CFC2]/70 bg-[#F5F0E8]/90 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[#756D63]">
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B49772] animate-pulse" />
          <span>
            {step === 0 && 'INITIALIZING ROBOTIC GANTRY...'}
            {step === 1 && 'DEPLOYING ARTICULATED CONSTRUCTOR ARMS...'}
            {step === 2 && 'LOCKING BLOCK 01 [SMART NOTES] INTO GRID MATRIX...'}
            {step === 3 && 'ROBOT 2 SLOTTING BLOCK 02 [URBAN SOLAR]...'}
            {step === 4 && 'ROBOT 1 SLOTTING BLOCK 03 [K-MEANS CLUSTERING]...'}
            {step === 5 && 'OVERHEAD CRANE LOCKING [WORK] HEADER BLOCK...'}
            {step >= 6 && 'STRUCTURE BUILT // LAUNCHING WORK PAGE →'}
          </span>
        </div>

        {/* Dynamic Construction Progress Bar */}
        <div className="flex items-center space-x-3 w-full sm:w-64">
          <div className="flex-grow h-1.5 bg-[#D8CFC2] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#25221E]"
              initial={{ width: '0%' }}
              animate={{
                width: step === 0 ? '5%' : step === 1 ? '20%' : step === 2 ? '45%' : step === 3 ? '68%' : step === 4 ? '88%' : '100%'
              }}
              transition={{ duration: 0.35 }}
            />
          </div>
          <span className="text-[11px] text-[#25221E] font-medium shrink-0">
            {step >= 5 ? '100%' : `${Math.min(95, step * 22)}%`}
          </span>
        </div>
      </footer>
    </div>
  );
};
