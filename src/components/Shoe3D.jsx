import React, { useRef, useLayoutEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Shoe3D(props) {
  const { scene } = useGLTF('/unused_blue_vans_shoe.glb');
  const ref = useRef();
  
  // Controle para a animação de entrada
  // Começamos com escala 0 para ele "nascer"
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    if (ref.current) {
      // Posicionamento inicial
      ref.current.rotation.x = 0; 
      ref.current.rotation.y = -Math.PI / 2;
      
      // Marca como carregado para iniciar a animação
      setTimeout(() => setLoaded(true), 100);
    }
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    // 1. ROTAÇÃO COM SCROLL (A que já tínhamos)
    const scrollY = window.scrollY;
    const rotationSpeed = scrollY * 0.002;
    ref.current.rotation.y = -Math.PI / 2 + rotationSpeed; 

    // 2. LEVITAÇÃO (NOVO!)
    // Faz o tênis flutuar levemente para cima e para baixo (senoide)
    // O Math.sin cria uma onda suave baseada no tempo
    const floatHeight = Math.sin(state.clock.elapsedTime) * 0.1; 
    ref.current.position.y = (props.position ? props.position[1] : -0.5) + floatHeight;

    // 3. ANIMAÇÃO DE ENTRADA SUAVE (NOVO!)
    // Se já carregou, fazemos a escala ir do tamanho atual até o tamanho alvo (props.scale)
    const targetScale = loaded ? (props.scale || 1) : 0;
    
    // Lerp = Linear Interpolation (Move suavemente do ponto A ao B)
    // 0.1 é a velocidade da suavização
    ref.current.scale.x = THREE.MathUtils.lerp(ref.current.scale.x, targetScale, 0.1);
    ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, targetScale, 0.1);
    ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, targetScale, 0.1);
  });
  
  return (
    <primitive 
      ref={ref}
      object={scene} 
      {...props} 
      // Forçamos a escala inicial ser 0 para o efeito funcionar
      scale={0} 
    />
  );
}

useGLTF.preload('/unused_blue_vans_shoe.glb');