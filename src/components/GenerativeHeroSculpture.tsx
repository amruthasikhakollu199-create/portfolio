import React, { useEffect, useRef } from 'react';

export const GenerativeHeroSculpture: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 500;
      height = canvas.height = canvas.parentElement?.clientHeight || 500;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;

    // Organic kinetic curves with subtle nodes
    const render = () => {
      time += 0.004;
      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.48;
      const baseRadius = Math.min(width, height) * 0.28;

      // Draw subtle orbital rings
      ctx.save();
      ctx.strokeStyle = 'rgba(216, 207, 194, 0.45)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, baseRadius * 1.35, baseRadius * 0.75, Math.PI / 6 + time * 0.05, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Soft generative layered curves
      const layers = 5;
      for (let l = 0; l < layers; l++) {
        const offset = (l * Math.PI) / layers;
        const currentRadius = baseRadius * (0.8 + l * 0.12);

        ctx.beginPath();
        // Alternating warm caramel and beige strokes
        ctx.strokeStyle = l % 2 === 0 ? 'rgba(180, 151, 114, 0.35)' : 'rgba(117, 109, 99, 0.25)';
        ctx.lineWidth = l === 2 ? 1.5 : 0.85;

        const points: { x: number; y: number }[] = [];
        const steps = 60;

        for (let i = 0; i <= steps; i++) {
          const theta = (i / steps) * Math.PI * 2;
          const noise =
            Math.sin(theta * 3 + time + offset) * 18 +
            Math.cos(theta * 2 - time * 0.8) * 14;

          const r = currentRadius + noise;
          const x = centerX + Math.cos(theta) * r;
          const y = centerY + Math.sin(theta) * (r * 0.72) + Math.sin(theta * 2 + time) * 10;
          points.push({ x, y });
        }

        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.closePath();
        ctx.stroke();

        // Subtle geometric markers along the ring
        const markerIdx = Math.floor(((time * 20 + l * 12) % steps));
        const p = points[markerIdx] || points[0];
        ctx.fillStyle = l === 1 ? '#B49772' : '#25221E';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Thin tangent crosshairs
        if (l === 1 || l === 3) {
          ctx.strokeStyle = 'rgba(180, 151, 114, 0.4)';
          ctx.beginPath();
          ctx.moveTo(p.x - 6, p.y);
          ctx.lineTo(p.x + 6, p.y);
          ctx.moveTo(p.x, p.y - 6);
          ctx.lineTo(p.x, p.y + 6);
          ctx.stroke();
        }
      }

      // Technical core mark
      ctx.fillStyle = 'rgba(37, 34, 30, 0.7)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] md:h-[500px] lg:h-[580px] flex items-center justify-center select-none pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
