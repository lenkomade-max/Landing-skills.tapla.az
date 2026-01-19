import React, { useEffect, useRef } from 'react';

export const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 140;
    let clickVortex = { x: 0, y: 0, active: false, radius: 0 };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.2 + 0.3;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.color = this.getColor(this.x, this.y);
      }

      getColor(x: number, y: number) {
        // Dynamic color based on position
        if (x < canvas.width * 0.3) return '161, 161, 170'; // Zinc
        if (x > canvas.width * 0.7) return '99, 102, 241'; // Indigo
        return '139, 92, 246'; // Violet
      }

      update() {
        if (clickVortex.active) {
          const dx = clickVortex.x - this.x;
          const dy = clickVortex.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const force = (clickVortex.radius - distance) / clickVortex.radius;

          if (distance < clickVortex.radius) {
            const angle = Math.atan2(dy, dx);
            // Swirl + Sucking effect
            this.speedX += Math.cos(angle + Math.PI / 1.5) * force * 1.2;
            this.speedY += Math.sin(angle + Math.PI / 1.5) * force * 1.2;
            this.speedX += dx * 0.005 * force;
            this.speedY += dy * 0.005 * force;
          }
        }

        this.x += this.speedX;
        this.y += this.speedY;

        // Apply friction
        this.speedX *= 0.97;
        this.speedY *= 0.97;

        // Boundary reset
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.15)'; // Trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      if (clickVortex.active) {
        clickVortex.radius += 12;
        if (clickVortex.radius > 800) clickVortex.active = false;
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseDown = (e: MouseEvent) => {
      clickVortex.x = e.clientX;
      clickVortex.y = e.clientY;
      clickVortex.active = true;
      clickVortex.radius = 0;
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousedown', handleMouseDown);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousedown', handleMouseDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};