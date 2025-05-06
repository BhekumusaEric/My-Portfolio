import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const StarfieldAnimation = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Star properties
    const stars = [];
    const starCount = 200;
    const maxDepth = 1000;
    
    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * maxDepth,
        color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${Math.random() * 0.5 + 0.5})`
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(18, 18, 18, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Update and draw stars
      for (let i = 0; i < starCount; i++) {
        const star = stars[i];
        
        // Move star closer to viewer
        star.z -= 0.5;
        
        // Reset star if it's too close
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width - centerX;
          star.y = Math.random() * canvas.height - centerY;
          star.z = maxDepth;
        }
        
        // Calculate star position based on perspective
        const scale = maxDepth / (maxDepth + star.z);
        const x = centerX + star.x * scale;
        const y = centerY + star.y * scale;
        
        // Calculate star size based on distance
        const radius = scale * 1.5;
        
        // Draw star
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = star.color;
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return <Canvas ref={canvasRef} />;
};

export default StarfieldAnimation;
