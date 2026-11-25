import React from 'react';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
  return (
    <section className="min-h-screen py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-between border-t border-[#D8CFC2]/60 relative">

      {/* Enormous Fullscreen Typography Statement */}
      <div className="my-auto py-16 md:py-24 space-y-4 md:space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal leading-[0.98] tracking-tighter text-[#25221E]">
            I DON'T WANT TO
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal italic leading-[0.98] tracking-tighter text-[#756D63]">
            JUST LEARN TECHNOLOGY.
          </h2>
        </motion.div>

        {/* The Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6 md:pt-10"
        >
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal leading-[0.98] tracking-tighter text-[#25221E] underline decoration-[#B49772] decoration-1 underline-offset-8">
            I WANT TO BUILD WITH IT.
          </h2>
        </motion.div>
      </div>

      {/* Supporting line & Technical Metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="pt-8 border-t border-[#D8CFC2]/60"
      >
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#25221E] font-light max-w-4xl">
          "Every new technology is another material to experiment with."
        </p>
      </motion.div>
    </section>
  );
};
