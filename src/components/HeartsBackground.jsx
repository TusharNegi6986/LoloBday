import React, { useEffect, useRef } from 'react';

function HeartsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const hearts = [];
    const numberOfHearts = 80; // Fewer, larger hearts
    const colors = ['#FFC0CB', '#FF69B4', '#FF1493', '#FF007F']; // Shades of pink and red

    // Function to draw a heart shape
    function drawHeart(ctx, x, y, size, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y + size / 4);
      ctx.bezierCurveTo(x + size / 2, y - size / 2, x + size, y, x, y + size);
      ctx.bezierCurveTo(x - size, y, x - size / 2, y - size / 2, x, y + size / 4);
      ctx.closePath();
      ctx.fill();
    }

    function createHearts() {
      for (let i = 0; i < numberOfHearts; i++) {
        hearts.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight - canvasHeight, // Start above the screen
          size: Math.random() * 20 + 10, // Larger hearts
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 2 + 0.5, // Slower, more gentle fall
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 0.5 - 0.25 // Gentle rotation
        });
      }
    }

    let animationFrameId;

    function updateAndDrawHearts() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      hearts.forEach((heart, index) => {
        heart.y += heart.speed;
        heart.rotation += heart.rotationSpeed;

        // Reset heart when it goes off screen
        if (heart.y > canvasHeight) {
          hearts[index] = {
            ...heart,
            y: -heart.size, // Reset above screen
            x: Math.random() * canvasWidth,
            speed: Math.random() * 2 + 0.5,
          };
        }

        ctx.save();
        ctx.translate(heart.x, heart.y);
        ctx.rotate((heart.rotation * Math.PI) / 180);
        drawHeart(ctx, 0, 0, heart.size, heart.color);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(updateAndDrawHearts);
    }

    createHearts();
    updateAndDrawHearts();

    const handleResize = () => {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="hearts-canvas" />;
}

export default HeartsBackground;