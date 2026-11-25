import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#D8CFC2]/70 py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#756D63] tracking-widest uppercase">
        <p className="font-serif text-lg text-[#25221E] font-normal tracking-tight normal-case">
          Built with curiosity.
        </p>
        <div>
          © 2026 AMRUTHA · ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};
