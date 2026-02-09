import React, { useRef, useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';

import imgClean from '../assets/TenisVansLimpo.png'; 
import imgDirty from '../assets/TenisVansSujo.png'; 

const CleaningGame = () => {
  const canvasRef = useRef(null);
  const waterCanvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isCleaning, setIsCleaning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dirtyImgObj, setDirtyImgObj] = useState(null);

  const [gameSize, setGameSize] = useState({ width: 800, height: 500 });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = Math.min(800, window.innerWidth - 40);
      const newHeight = newWidth * (500 / 800);
      setGameSize({ width: newWidth, height: newHeight });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = imgDirty;
    img.onload = () => setDirtyImgObj(img);
  }, []);

  useEffect(() => {
    if (dirtyImgObj && canvasRef.current) {
      resetGame();
    }
  }, [dirtyImgObj, gameSize]);

  useEffect(() => {
    const waterCanvas = waterCanvasRef.current;
    if (!waterCanvas) return;
    const ctx = waterCanvas.getContext('2d');
    
    waterCanvas.width = gameSize.width;
    waterCanvas.height = gameSize.height;

    let animationFrameId;
    let particles = [];

    const render = () => {
      ctx.clearRect(0, 0, waterCanvas.width, waterCanvas.height);
      
      particles.forEach((p, index) => {
        p.y += p.speedY; 
        p.x += p.speedX; 
        p.life -= 1;
        ctx.fillStyle = `rgba(173, 216, 230, ${p.life / 20})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        if (p.life <= 0) particles.splice(index, 1);
      });

      if (isCleaning && window.mousePos) {
        for(let i=0; i<3; i++) {
           particles.push({
             x: window.mousePos.x,
             y: window.mousePos.y,
             speedY: Math.random() * 4 + 2, 
             speedX: (Math.random() - 0.5) * 2, 
             size: Math.random() * 3 + 1,
             life: 20 
           });
        }
      }
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isCleaning, gameSize]);

  const handleMove = (e) => {
    if (!isCleaning) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = ((e.clientX || e.touches[0].clientX) - rect.left) * scaleX;
    const y = ((e.clientY || e.touches[0].clientY) - rect.top) * scaleY;
    
    window.mousePos = { x: (e.clientX || e.touches[0].clientX) - rect.left, y: (e.clientY || e.touches[0].clientY) - rect.top };

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 40 * (gameSize.width / 800), 0, Math.PI * 2); 
    ctx.fill();

    if(progress < 100) setProgress(prev => prev + 0.3);
  };

  const resetGame = () => {
    if (!canvasRef.current || !dirtyImgObj) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = gameSize.width;
    canvas.height = gameSize.height;
    
    ctx.globalCompositeOperation = 'source-over'; 
    ctx.drawImage(dirtyImgObj, 0, 0, gameSize.width, gameSize.height);
    
    setProgress(0);
  };

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '32px', marginBottom: '10px' }}>
        EXPERIMENTE O <span style={{ color: '#1CAAD9' }}>PODER DA LIMPEZA</span>
      </h2>
      <p style={{ color: '#666', marginBottom: '40px' }}>
        Arraste para remover a sujeira.
      </p>

      {/* Container do Jogo */}
      <div 
        ref={containerRef}
        style={{ 
          position: 'relative', 
          width: `${gameSize.width}px`,    
          height: `${gameSize.height}px`,  
          maxWidth: '100%', 
          margin: '0 auto',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
          cursor: 'url("https://cdn-icons-png.flaticon.com/32/2954/2954886.png") 16 16, auto', 
          touchAction: 'none',
          backgroundColor: '#f0f0f0'
        }}
        onMouseDown={() => setIsCleaning(true)}
        onMouseUp={() => setIsCleaning(false)}
        onMouseLeave={() => setIsCleaning(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsCleaning(true)}
        onTouchEnd={() => setIsCleaning(false)}
        onTouchMove={handleMove}
      >
        <div style={{ 
          position: 'absolute', inset: 0, 
          backgroundImage: `url(${imgClean})`, 
          backgroundSize: '100% 100%', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} />

        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, width: '100%', height: '100%' }} />
        <canvas ref={waterCanvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 20, pointerEvents: 'none', width: '100%', height: '100%' }} />
        
        <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(0,0,0,0.7)', padding: '8px 16px', borderRadius: '30px', color: '#fff', zIndex: 30, fontWeight: 'bold', fontSize: '14px', border: '1px solid rgba(255,255,255,0.2)' }}>
            {Math.min(100, Math.floor(progress))}% LIMPO
        </div>
      </div>

      <button 
        onClick={resetGame}
        style={{ 
          marginTop: '30px', 
          padding: '12px 30px', 
          background: '#000', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '30px', 
          cursor: 'pointer', 
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          fontWeight: 'bold',
          fontSize: '14px',
          fontFamily: 'Space Grotesk',
          letterSpacing: '1px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }}
      >
        <RefreshCw size={18} /> SUJAR NOVAMENTE
      </button>

    </section>
  );
};

export default CleaningGame;