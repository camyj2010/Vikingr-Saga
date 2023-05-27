import React, { useRef, useEffect, useState} from "react";
import { useGLTF } from "@react-three/drei";


export default function CHEST(props) {
  const { nodes, materials } = useGLTF("/static/CHEST.glb");
  const chestRef = useRef();
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
    
    

    // Verificar si existe el atributo 'rotation' en chestRef
    if (chestRef.current.rotation) {
    // Si existe, actualizar las propiedades 'x' e 'y' de la rotación
    // chestRef.current.rotation.x = rotationX;
    setModelRotation((prevRotation) => [
        0,
        prevRotation[1] + rotationY,
        0,
        ]);
    }
}
};
  
  return (
    <group ref={chestRef} {...props} dispose={null} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerMove={handlePointerMove} rotation={modelRotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_1.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[5, -10, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_2.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[5, -10, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_3.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[5, -26, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_4.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[5, -26, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_5.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, 6, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_6.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, 6, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_7.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, -10, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_8.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, -10, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_9.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, -26, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_10.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, -26, -15]}
      />
    </group>
  );
}

useGLTF.preload("/static/CHEST.glb");