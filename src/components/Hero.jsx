import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PresentationControls } from '@react-three/drei'; // Importamos o PresentationControls
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
      paddingTop: '140px' 
    }}>
      
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 30, position: [0, 0, 8] }}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        {/* PresentationControls: Permite interação manual 
            - global={false}: O usuário precisa passar o mouse na área do canvas/tênis
            - snap={true}: O PULO DO GATO. Faz voltar para a posição original ao soltar.
            - speed={1.5}: Velocidade da rotação manual.
            - zoom={0.8}: Permite um leve zoom in/out se quiser (ou tire essa prop para travar).
            - polar/azimuth: Limita o quanto pode girar para não virar de cabeça para baixo totalmente.
        */}
        <PresentationControls 
          global={false} 
          snap={true} 
          speed={1.5} 
          zoom={1} 
          rotation={[0, 0, 0]} 
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 2, Math.PI / 2]} 
        >
            <Shoe3D scale={0.6} position={[0, -0.5, 0]} /> 
        </PresentationControls>

      </Canvas>

      {/* Título de Fundo */}
      <h1 style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '12vw',
        fontWeight: '900',
        color: 'rgba(0,0,0,0.04)', 
        zIndex: 0,
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        fontFamily: 'Space Grotesk, sans-serif'
      }}>
        NEW SHOES
      </h1>

      <FoamTransition />

    </section>
  );
};

export default Hero;