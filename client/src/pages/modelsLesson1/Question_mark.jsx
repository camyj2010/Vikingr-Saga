import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { DoubleSide, Vector3 } from 'three';
import icon from '../../img/question.png';

/**
 * Componente Question_mark
 * Renderiza un marcador de pregunta en 3D.
 *
 * Props:
 *   - size: Tamaño del marcador de pregunta (número).
 */
export default function Question_mark(props) {
  const { size } = props;

  // Carga la textura del icono de pregunta
  const colorMap = useLoader(TextureLoader, icon);

  // Referencia al objeto 3D del marcador de pregunta
  const coin = useRef(null);

  // Escala objetivo del marcador de pregunta
  const targetScale = useRef(new Vector3(size, size, size));

  // Manejador de eventos cuando el cursor se coloca sobre el marcador de pregunta
  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer';
    targetScale.current.set(size * 1.2, size * 1.2, size * 1.2);
  };

  // Manejador de eventos cuando el cursor sale del marcador de pregunta
  const handlePointerLeave = () => {
    document.body.style.cursor = 'auto';
    targetScale.current.set(size, size, size);
  };

  // Función de actualización en cada frame de la escena
  useFrame((state, delta) => {
    if (coin.current.rotation.x > -Math.PI * 0.5) {
      coin.current.rotation.y += 1 * delta;
    }

    // Transición suave del tamaño del marcador de pregunta
    coin.current.scale.lerp(targetScale.current, 0.1);
  });

  // Renderización del componente
  return (
    <group {...props} dispose={null} ref={coin} rotation={[0, 0, 3 * Math.PI / 2]}>
      <mesh
        onPointerOver={handlePointerOver}
        onPointerLeave={handlePointerLeave}
      >
        <cylinderGeometry args={[1, 1, 0.1, 64, 1]} />
        <meshStandardMaterial side={DoubleSide} map={colorMap} />
      </mesh>
    </group>
  );
}
