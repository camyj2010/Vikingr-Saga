import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";


export default function RASTRILLO(props) {
  const { nodes, materials } = useGLTF("/static/RASTRILLO.glb");
  const rastrilloRef = useRef();
  const [pressed,setPressed] = useState(false);
  const [modelRotation, setModelRotation] = useState([5*Math.PI/12, Math.PI/3, 0]);


  useEffect(() => {
    const handlePointerUpOutsideModel = () => {
      setPressed(false);
    };
  
    document.addEventListener("pointerup", handlePointerUpOutsideModel);
  
    return () => {
      document.removeEventListener("pointerup", handlePointerUpOutsideModel);
    };
  }, []);

  const handlePointerDown = () => {
    setPressed(true);
  };
  
  const handlePointerUp = () => {
    setPressed(false);
  };
  
 
const handlePointerMove = (event) => {
if(pressed){
    const { movementX, movementY, movementZ } = event;

    // Calcular los ángulos de rotación basados en las coordenadas del mouse
    const rotationY = ((movementX / window.innerWidth) * Math.PI * 2)*10;
    const rotationX = ((movementY / window.innerHeight) * Math.PI * 2)*10; 
    
    

    // Verificar si existe el atributo 'rotation' en rastrilloRef
    if (rastrilloRef.current.rotation) {
    // Si existe, actualizar las propiedades 'x' e 'y' de la rotación
    // rastrilloRef.current.rotation.x = rotationX;
    setModelRotation((prevRotation) => [
        prevRotation[0] + rotationX,
        //prevRotation[1] + rotationY,
        Math.PI/3,
        0,
        ]);
        //console.log(modelRotation)
    }
}
};  
  
  return (
    <group ref={rastrilloRef} {...props} dispose={null} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerMove={handlePointerMove} rotation={modelRotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_1.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[10.5, -3, 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_2.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[10.5, -3, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_3.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[10.5, -3, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_4.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[10.5, -19, 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_5.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[10.5, -19, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_6.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[10.5, -19, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_7.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-5.5, -3, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_8.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-21.5, -3, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_9.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-37.5, -3, -7]}
      />
    </group>
  );
}

useGLTF.preload("/static/RASTRILLO.glb");