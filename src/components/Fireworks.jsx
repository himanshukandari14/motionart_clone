// src/Fireworks.js
import React, { useEffect, useRef } from 'react';
import { random } from 'canvas-sketch-util';

const Fireworks = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createParticles = (x, y) => {
      const particleCount = 10;
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x,
          y,
          alpha: 1,
          angle: random.range(0, Math.PI * 2),
          speed: random.range(1, 5),
          color: `hsl(${random.range(0, 360)}, 100%, 50%)`,
        });
      }
    };

    const updateParticles = () => {
      particles.current.forEach((p, index) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.alpha -= 0.02;
        if (p.alpha <= 0) {
          particles.current.splice(index, 1);
        }
      });
    };

    const drawParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p) => {
        context.globalAlpha = p.alpha;
        context.fillStyle = p.color;
        context.beginPath();
        context.arc(p.x, p.y, 3, 0, Math.PI * 2);
        context.fill();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      createParticles(e.clientX, e.clientY);
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default Fireworks;
