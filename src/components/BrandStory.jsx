import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrandStory = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // A imagem de fundo vai mover de -20% para 20% conforme o scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="brand" ref={ref} style={{ position: 'relative', height: '80vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Imagem de Fundo Parallax */}
      <motion.div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY, // Aplica o movimento
          zIndex: -1
        }}
      />
      {/* Máscara escura */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 0 }} />

      {/* Conteúdo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ 
          maxWidth: '800px', 
          margin: '20px', 
          padding: '60px',
          background: 'rgba(255, 255, 255, 0.1)', // Efeito vidro
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '30px',
          color: '#fff',
          textAlign: 'center',
          zIndex: 1
        }}
      >
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '32px', marginBottom: '20px' }}>A EXPERIÊNCIA <span style={{color: '#1CAAD9'}}>NEW SHOES</span></h2>
        <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '40px', fontWeight: '300' }}>
          Idealizada por profissionais com mais de <strong style={{color: '#1CAAD9'}}>17 anos de experiência</strong> em Franchising. 
          Não somos apenas uma lavanderia, somos um laboratório de renovação para o seu estilo. 
          Tecnologia, cuidado e paixão em cada detalhe.
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: '#1CAAD9', borderColor: '#1CAAD9' }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            padding: '15px 40px', 
            border: '2px solid #fff', 
            backgroundColor: 'transparent', 
            color: '#fff', 
            borderRadius: '50px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            letterSpacing: '1px'
          }}
        >
          CONHEÇA NOSSA HISTÓRIA
        </motion.button>
      </motion.div>
    </section>
  );
};

export default BrandStory;