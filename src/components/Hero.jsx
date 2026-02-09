import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Shoe3D } from './Shoe3D';
import FoamTransition from './FoamTransition';

const Hero = () => {
  return (
    <section style={{ 
      height: '100vh', 
      width: '100%',
      backgroundColor: '#f5f5f5', 
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px' // Espaço para o menu não ficar em cima do tênis
    }}>
      
      {/* Ajustei a câmera: fov menor (30) reduz a distorção, position z=8 afasta a câmera */}
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 30, position: [0, 0, 8] }}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        {/* Diminui MUITO a escala. Se ainda ficar grande, diminua para 0.3 */}
        <Shoe3D scale={0.5} position={[0, -0.5, 0]} /> 
      </Canvas>

      {/* Título de fundo ajustado para não brigar com o tênis */}
      <h1 style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '12vw', // Diminui um pouco
        fontWeight: '900',
        color: 'rgba(0,0,0,0.04)', 
        zIndex: 0,
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        fontFamily: 'Inter, sans-serif'
      }}>
        NEW SHOES
      </h1>

      <FoamTransition />

    </section>
  );
};

export default Hero;