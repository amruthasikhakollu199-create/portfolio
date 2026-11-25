import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { robotAudio } from '../utils/robotAudio';

export const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speechText =
    "Hi, I'm Amrutha Sikhakollu, an AI/ML student exploring the world of intelligent products and emerging technology. " +
    "I'm learning Machine Learning, Generative AI, LLMs, and AI Agents by building, experimenting, and breaking things along the way. " +
    "From Smart Notes to Urban Solar and Customer Segmentation, every project is another idea brought to life. " +
    "I'm still exploring, still learning, and always looking for the next thing worth building. " +
    "Curiosity starts it. Building takes it somewhere.";

  const speakAboutText = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 0.96;
    utterance.pitch = 1.05;

    // Try finding an English female or natural voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => v.lang.startsWith('en') && (v.name.includes('Female') || v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Zira'))
    ) || voices.find((v) => v.lang.startsWith('en'));

    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    robotAudio.playServoSound(320, 0.35);
    setTimeout(() => {
      robotAudio.playBlockSnapSound(1.2);
      speakAboutText();
    }, 450);
  };

  const handleClose = () => {
    stopSpeaking();
    robotAudio.playBlockSnapSound(0.8);
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  return (
    <section id="about" className="py-20 sm:py-28 md:py-40 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#D8CFC2]/60 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left Column: Editorial Heading */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] sm:leading-[1.08] tracking-tight text-[#25221E] mb-2 sm:mb-3">
              NOT AN EXPERT.
            </h2>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal italic leading-[1.1] sm:leading-[1.08] tracking-tight text-[#756D63]">
              JUST OBSESSED WITH LEARNING.
            </h2>
          </motion.div>
        </div>

        {/* Right Column: Interactive "KNOW MORE" button */}
        <div className="lg:col-span-4 flex flex-col justify-center items-center border-t lg:border-t-0 lg:border-l border-[#D8CFC2]/60 pt-6 lg:pt-0 lg:pl-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="w-full flex flex-col items-center justify-center p-6 sm:p-8 bg-[#E9E0D3]/30 border-2 border-dashed border-[#D8CFC2] rounded-3xl text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#25221E] text-[#F5F0E8] flex items-center justify-center shadow-md">
              <Sparkles size={22} className="text-[#B49772] animate-pulse" />
            </div>

            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#756D63] block">
                MEET THE BUILDER
              </span>
              <p className="font-serif italic text-sm sm:text-base text-[#25221E] mt-1">
                "Curiosity starts it. Building takes it somewhere."
              </p>
            </div>

            <button
              onClick={handleOpen}
              className="mt-2 px-7 py-3.5 bg-[#25221E] text-[#FAF7F2] font-mono text-xs tracking-widest uppercase rounded-full hover:bg-[#3D3730] transition-all hover:scale-105 shadow-md flex items-center space-x-2.5 active:scale-95 cursor-pointer"
            >
              <span>KNOW MORE</span>
              <span className="text-[#B49772]">✦</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Animated Robot Catching & Holding A Board Modal — Fully Mobile Scrollable */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-[#25221E]/60 backdrop-blur-sm"
            />

            {/* Robot + Board Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-2xl flex flex-col items-center my-auto py-4"
            >
              {/* Cute Animated Robot Catching / Holding from Top */}
              <div className="relative -mb-5 sm:-mb-6 z-20 flex flex-col items-center">
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 1.5, -1.5, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut'
                  }}
                >
                  <svg className="w-28 h-20 sm:w-[150px] sm:h-[110px]" viewBox="0 0 150 110" fill="none">
                    {/* Antenna with pulsing light */}
                    <line x1="75" y1="26" x2="75" y2="8" stroke="#25221E" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="75" cy="8" r="5" fill="#B49772" className="animate-ping" opacity="0.75" />
                    <circle cx="75" cy="8" r="4" fill="#B49772" stroke="#25221E" strokeWidth="2" />

                    {/* Cute Ears / Screws */}
                    <rect x="30" y="44" width="8" height="14" rx="3" fill="#B49772" stroke="#25221E" strokeWidth="2" />
                    <rect x="112" y="44" width="8" height="14" rx="3" fill="#B49772" stroke="#25221E" strokeWidth="2" />

                    {/* Robot Head (Rounded Screen) */}
                    <rect x="36" y="26" width="78" height="52" rx="16" fill="#FAF7F2" stroke="#25221E" strokeWidth="3" />
                    
                    {/* Visor Screen */}
                    <rect x="44" y="34" width="62" height="34" rx="10" fill="#25221E" />

                    {/* Cute Friendly Glowing Eyes */}
                    <motion.ellipse
                      cx="60"
                      cy="50"
                      rx="5"
                      ry="6.5"
                      fill="#B49772"
                      animate={{ scaleY: [1, 0.15, 1] }}
                      transition={{ repeat: Infinity, duration: 3.5, times: [0, 0.05, 0.1] }}
                    />
                    <motion.ellipse
                      cx="90"
                      cy="50"
                      rx="5"
                      ry="6.5"
                      fill="#B49772"
                      animate={{ scaleY: [1, 0.15, 1] }}
                      transition={{ repeat: Infinity, duration: 3.5, times: [0, 0.05, 0.1] }}
                    />

                    {/* Eye Sparkles */}
                    <circle cx="62" cy="48" r="1.5" fill="#FAF7F2" />
                    <circle cx="92" cy="48" r="1.5" fill="#FAF7F2" />

                    {/* Cute Smile / Voice Visualizer */}
                    {isSpeaking ? (
                      <path d="M68 59 Q75 64 82 59" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" />
                    ) : (
                      <circle cx="75" cy="58" r="1.8" fill="#B49772" />
                    )}

                    {/* Robot Hands/Claws Catching the Board Edge */}
                    <path d="M40 76 C40 88 48 96 55 96 C60 96 64 92 64 86" stroke="#25221E" strokeWidth="3.5" fill="#FAF7F2" strokeLinecap="round" />
                    <path d="M110 76 C110 88 102 96 95 96 C90 96 86 92 86 86" stroke="#25221E" strokeWidth="3.5" fill="#FAF7F2" strokeLinecap="round" />
                    <circle cx="55" cy="94" r="3.5" fill="#B49772" />
                    <circle cx="95" cy="94" r="3.5" fill="#B49772" />
                  </svg>
                </motion.div>
              </div>

              {/* The Held Board with the Content (Max height with scrolling for small phone screens) */}
              <div className="w-full max-h-[82vh] overflow-y-auto bg-[#FAF7F2] border-3 border-[#25221E] shadow-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 relative text-left">
                {/* Board Top Header / Controls */}
                <div className="flex items-center justify-between border-b border-[#D8CFC2] pb-3 sm:pb-4 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B49772]" />
                  </div>

                  <div className="flex items-center space-x-2">
                    {/* Read / Mute Audio Toggle */}
                    <button
                      onClick={isSpeaking ? stopSpeaking : speakAboutText}
                      className={`p-1.5 sm:p-2 rounded-full border transition-all flex items-center space-x-1.5 font-mono text-[10px] sm:text-[11px] ${
                        isSpeaking
                          ? 'bg-[#B49772] text-[#FAF7F2] border-[#B49772]'
                          : 'bg-[#E9E0D3]/50 text-[#25221E] border-[#D8CFC2] hover:bg-[#E9E0D3]'
                      }`}
                      title={isSpeaking ? 'Mute AI voice' : 'Read aloud with AI voice'}
                    >
                      {isSpeaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
                      <span>{isSpeaking ? 'MUTE' : 'LISTEN'}</span>
                    </button>

                    {/* Close Button */}
                    <button
                      onClick={handleClose}
                      className="p-1.5 sm:p-2 rounded-full bg-[#E9E0D3]/50 hover:bg-[#25221E] hover:text-[#FAF7F2] text-[#25221E] transition-colors"
                      title="Close"
                      aria-label="Close"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>

                {/* The Content On The Board */}
                <div className="space-y-3 sm:space-y-4 text-[#25221E] font-serif leading-relaxed text-sm sm:text-base md:text-lg">
                  <p>
                    Hi, I’m <strong className="font-semibold text-[#25221E]">Amrutha Sikhakollu</strong>, an AI/ML student exploring the world of intelligent products and emerging technology.
                  </p>
                  <p>
                    I’m learning <strong className="font-semibold text-[#25221E]">Machine Learning, Generative AI, LLMs, and AI Agents</strong> by building, experimenting, and breaking things along the way.
                  </p>
                  <p>
                    From <strong className="font-semibold text-[#25221E]">Smart Notes</strong> to <strong className="font-semibold text-[#25221E]">Urban Solar</strong> and <strong className="font-semibold text-[#25221E]">Customer Segmentation</strong>, every project is another idea brought to life.
                  </p>
                  <p className="text-[#756D63]">
                    I’m still exploring, still learning, and always looking for the next thing worth building.
                  </p>
                  
                  {/* Highlighted Quote at Bottom */}
                  <div className="pt-3 sm:pt-4 border-t border-[#D8CFC2] mt-4 sm:mt-6">
                    <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#B49772] font-semibold text-center">
                      “Curiosity starts it. Building takes it somewhere.”
                    </p>
                  </div>
                </div>

                {/* Board Hanging Pins / Corner Accents */}
                <div className="absolute top-3 left-3 w-2 h-2 rounded-full border border-[#25221E] bg-[#D8CFC2]" />
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full border border-[#25221E] bg-[#D8CFC2]" />
                <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full border border-[#25221E] bg-[#D8CFC2]" />
                <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full border border-[#25221E] bg-[#D8CFC2]" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
