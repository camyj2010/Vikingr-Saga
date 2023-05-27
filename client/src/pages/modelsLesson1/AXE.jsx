import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";


export default function AXE(props) {
  const { nodes, materials } = useGLTF("/static/AXE.glb");
  const axeRef = useRef();
  const [pressed,setPressed] = useState(false);
  const [modelRotation, setModelRotation] = useState([0, 0, 0]);
  

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
    const { movementX, movementY } = event;

    // Calcular los ángulos de rotación basados en las coordenadas del mouse
    const rotationY = ((movementX / window.innerWidth) * Math.PI * 2)*10;
   // const rotationX = ((movementY / window.innerHeight) * Math.PI * 2)*10; 
    
    

    // Verificar si existe el atributo 'rotation' en axeRef
    if (axeRef.current.rotation) {
    // Si existe, actualizar las propiedades 'x' e 'y' de la rotación
    // axeRef.current.rotation.x = rotationX;
    setModelRotation((prevRotation) => [
        //prevRotation[0] + rotationX,
        0,
        prevRotation[1] + rotationY,
        0,
        ]);
    }
}
};

  return (
    <group ref={axeRef} {...props} dispose={null} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerMove={handlePointerMove} rotation={modelRotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_1.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[21, -7, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_2.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[21, -7, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_3.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[5, 9, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_4.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[5, 9, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_5.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[5, -7, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_6.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[5, -7, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_7.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, 9, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_8.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, 9, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_9.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, -7, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_10.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, -7, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_11.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, -23, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_12.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, -23, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_13.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-27, -23, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_14.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-27, -23, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_15.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-27, -39, -0.5]}
      />
    </group>
  );
}

useGLTF.preload("/static/AXE.glb");