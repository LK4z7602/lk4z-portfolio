import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
};

export const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let lastFrameTime = 0;
    const fps = 30;
    const frameTime = 1000 / fps;
    const fadeRadius = 150;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener("mousemove", handleMouseMove, { passive: true });

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let particles: Particle[] = [];

    // Reduzir partículas em telas pequenas
    const particleCount = Math.floor(
      (canvas.width * canvas.height) / (window.innerWidth < 768 ? 15000 : 9000)
    );

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.6) * 0.4,
        vy: (Math.random() - 0.6) * 0.4,
        size: Math.random() * 1.5 + 0.6,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    const drawGrid = () => {
      const gridSize = 60;
      const segmentSize = 12;

      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += segmentSize) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let opacity = 0.05;

          if (dist < fadeRadius) {
            opacity = 0.25 * (1 - dist / fadeRadius);
          }

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + segmentSize);
          ctx.strokeStyle = `rgba(255,106,0,${opacity})`;
          ctx.stroke();
        }
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        for (let x = 0; x < canvas.width; x += segmentSize) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let opacity = 0.03;

          if (dist < fadeRadius) {
            opacity = 0.15 * (1 - dist / fadeRadius);
          }

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + segmentSize, y);
          ctx.strokeStyle = `rgba(255,106,0,${opacity})`;
          ctx.stroke();
        }
      }
    };

    const animate = (currentTime: number) => {
      if (currentTime - lastFrameTime < frameTime) {
        requestAnimationFrame(animate);
        return;
      }

      lastFrameTime = currentTime;

      ctx.fillStyle = "#0b0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();

      particles.forEach((p) => {
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        p.x += p.vx;
        p.y += p.vy;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 106, 0, ${p.opacity})`;
        ctx.fill();
      });

      const maxDistance = 100;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const opacity = 0.9 - dist / maxDistance;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255,106,0,${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0" style={{ zIndex: 0 }} />
  );
};
