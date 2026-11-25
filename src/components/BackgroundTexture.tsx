import React from 'react';

export const BackgroundTexture: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Paper grain simulation */}
      <div className="absolute inset-0 paper-grain opacity-40 mix-blend-multiply" />
      
      {/* Soft warm radial gradients for depth */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(233, 224, 211, 0.7) 0%, rgba(245, 240, 232, 0) 70%)'
        }}
      />
      <div 
        className="absolute top-[45%] -right-[15%] w-[50vw] h-[50vw] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201, 181, 150, 0.4) 0%, rgba(245, 240, 232, 0) 70%)'
        }}
      />
      <div 
        className="absolute bottom-[5%] left-[5%] w-[45vw] h-[45vw] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(233, 224, 211, 0.6) 0%, rgba(245, 240, 232, 0) 70%)'
        }}
      />

      {/* Editorial margin guide lines */}
      <div className="max-w-7xl mx-auto h-full border-x border-[#D8CFC2]/20 relative">
        <div className="absolute top-0 bottom-0 left-1/4 border-r border-[#D8CFC2]/10 hidden xl:block" />
        <div className="absolute top-0 bottom-0 left-3/4 border-r border-[#D8CFC2]/10 hidden xl:block" />
      </div>
    </div>
  );
};
