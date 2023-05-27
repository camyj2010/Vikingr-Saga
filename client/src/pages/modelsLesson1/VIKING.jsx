import React, { useRef, useEffect, useState} from "react";
import { useGLTF } from "@react-three/drei";

export default function VIKING(props, canvas) {
  const { nodes, materials } = useGLTF("/static/Viking.glb");
  const vikingRef = useRef();
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
    const rotationX = (movementY / window.innerHeight) * Math.PI * 2; 
    
    

    // Verificar si existe el atributo 'rotation' en vikingRef
    if (vikingRef.current.rotation) {
    // Si existe, actualizar las propiedades 'x' e 'y' de la rotación
    // vikingRef.current.rotation.x = rotationX;
    setModelRotation((prevRotation) => [
        0,
        prevRotation[1] + rotationY,
        0,
        ]);
    }
}
};

  return (
    <group ref={vikingRef} {...props} dispose={null} scale={0.2} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerMove={handlePointerMove} rotation={modelRotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_1.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[0.5, 12, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_2.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[0.5, 12, -16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_3.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[0.5, -4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_4.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[0.5, -4, -16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_5.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[0.5, -20, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_6.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[0.5, -20, -16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_7.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[0.5, -36, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_8.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[0.5, -36, -16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_9.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-15.5, 12, -16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_10.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-15.5, -4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_11.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-15.5, -4, -16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_12.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-15.5, -20, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_13.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-15.5, -20, -16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_14.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-15.5, -36, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_15.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-15.5, -36, -16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_16.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-31.5, -4, -16]}
      />
    </group>
  );
}

useGLTF.preload("/static/Viking.glb");