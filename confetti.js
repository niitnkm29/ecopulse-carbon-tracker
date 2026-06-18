// Multi-Instance Canvas Confetti System for EcoPulse
window.triggerConfetti = function () {
  // Create a unique canvas instance for this trigger
  const canvas = document.createElement('canvas');
  canvas.className = 'ecopulse-confetti-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  // Set canvas size
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const colors = [
    '#10b981', // emerald-500
    '#34d399', // mint-400
    '#059669', // emerald-600
    '#6ee7b7', // mint-300
    '#fbbf24', // amber-400
    '#60a5fa', // blue-400
  ];

  const particles = [];
  const particleCount = 100;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 60,
      y: canvas.height + 20,
      radius: Math.random() * 5 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 16,
      vy: -Math.random() * 14 - 12,
      gravity: 0.35,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 12,
      opacity: 1,
    });
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let livingParticles = 0;

    particles.forEach((p) => {
      if (p.opacity <= 0) return;

      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      
      // Slow down horizontal velocity
      p.vx *= 0.98;

      // Fade out as they fall or cross threshold
      if (p.y > canvas.height - 150) {
        p.opacity -= 0.02;
      }

      if (p.opacity > 0) {
        livingParticles++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        
        // Draw diamond shape
        ctx.beginPath();
        ctx.moveTo(0, -p.radius);
        ctx.lineTo(p.radius / 1.5, 0);
        ctx.lineTo(0, p.radius);
        ctx.lineTo(-p.radius / 1.5, 0);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
      }
    });

    if (livingParticles > 0) {
      animationFrameId = requestAnimationFrame(update);
    } else {
      window.removeEventListener('resize', resizeCanvas);
      canvas.remove();
    }
  }

  update();
};
