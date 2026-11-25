import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';

export const Contact: React.FC<{ onHoverAction?: (isHovering: boolean) => void }> = ({
  onHoverAction
}) => {
  const [message, setMessage] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'amruthasikhakollu199@gmail.com';
  const githubUrl = 'https://github.com/amruthasikhakollu199-create';
  const gmailWebComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

  const handleStartSomething = (e: React.FormEvent) => {
    e.preventDefault();
    const mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      emailAddress
    )}&su=${encodeURIComponent('Building Something Together')}&body=${encodeURIComponent(
      `From: ${senderEmail}\n\nIdea / Problem:\n${message}`
    )}`;
    window.open(mailUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-40 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[#D8CFC2]/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Column: Heading & Editorial Invitation */}
        <div className="lg:col-span-7">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] sm:leading-[1.08] tracking-tight text-[#25221E] mb-4 sm:mb-6"
          >
            WHAT SHOULD WE
            <br />
            <span className="italic text-[#756D63]">BUILD NEXT?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#756D63] max-w-xl font-light mb-8 sm:mb-12"
          >
            "Got an idea, a weird problem, or something you've been wondering about?"
          </motion.p>

          {/* Direct Channels */}
          <div className="pt-6 border-t border-[#D8CFC2]/70 font-mono text-xs">
            <span className="block text-[10px] tracking-widest uppercase text-[#756D63] mb-4">
              CHANNELS & REPOSITORIES
            </span>
            <div className="flex flex-wrap gap-6 sm:gap-8 text-[#25221E]">
              {/* GitHub Link */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => onHoverAction?.(true)}
                onMouseLeave={() => onHoverAction?.(false)}
                className="group flex items-center space-x-2 hover:text-[#B49772] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span className="tracking-widest uppercase">GitHub</span>
                <ArrowUpRight size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* G-mail Link (Directly opens Gmail Web Compose tab) */}
              <a
                href={gmailWebComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(gmailWebComposeUrl, '_blank', 'noopener,noreferrer');
                }}
                onMouseEnter={() => onHoverAction?.(true)}
                onMouseLeave={() => onHoverAction?.(false)}
                className="group flex items-center space-x-2 hover:text-[#B49772] transition-colors cursor-pointer"
              >
                <Mail size={16} />
                <span className="tracking-widest uppercase">G-Mail</span>
                <ArrowUpRight size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Message Transmitter */}
        <div className="lg:col-span-5 bg-[#E9E0D3]/35 border border-[#D8CFC2] p-5 sm:p-7 md:p-8 flex flex-col justify-between rounded-xl">
          <div>
            <form onSubmit={handleStartSomething} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#756D63] mb-1.5">
                  YOUR EMAIL OR HANDLE
                </label>
                <input
                  type="text"
                  required
                  placeholder="collaborator@domain.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full bg-[#F5F0E8] border border-[#D8CFC2] px-3.5 sm:px-4 py-2.5 text-sm font-mono text-[#25221E] focus:outline-none focus:border-[#25221E] placeholder:text-[#9E9589]"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#756D63] mb-1.5">
                  THE IDEA, WEIRD PROBLEM, OR EXPERIMENT
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me what you're trying to figure out or build..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#F5F0E8] border border-[#D8CFC2] px-3.5 sm:px-4 py-3 text-sm font-mono text-[#25221E] focus:outline-none focus:border-[#25221E] placeholder:text-[#9E9589] resize-none"
                />
              </div>

              <button
                type="submit"
                onMouseEnter={() => onHoverAction?.(true)}
                onMouseLeave={() => onHoverAction?.(false)}
                className="w-full py-3.5 sm:py-4 px-6 bg-[#25221E] text-[#F5F0E8] font-mono text-xs tracking-widest uppercase hover:bg-[#3D3730] transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>START SOMETHING ↗</span>
              </button>

              {submitted && (
                <p className="font-mono text-xs text-emerald-800 text-center animate-pulse">
                  Draft generated & launching Gmail compose...
                </p>
              )}
            </form>
          </div>

          <div className="pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-[#D8CFC2]/70 font-mono text-[10px] text-[#756D63] text-center tracking-widest uppercase">
            OPEN TO RESEARCH COLLABORATIONS & LAB EXPERIMENTS
          </div>
        </div>
      </div>
    </section>
  );
};
