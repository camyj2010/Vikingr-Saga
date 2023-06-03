import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "./Question_mark";
import QuestionMark from "./QuestionMark";


export default function VIKING(props, canvas) {
  const { nodes, materials } = useGLTF("/static/Viking.glb");
  const vikingRef = useRef();
  const [pressed, setPressed] = useState(false);
  const [modelRotation, setModelRotation] = useState([0, 0, 0]);

  const handleDetalle = (detalle) => {
    Swal.fire({
      title: detalle,
      icon: 'info',
      showConfirmButton: false,
      background: '#fff',
      customClass: {
        title: 'mi-titulo',
      },
    })
  }

  return (
    <group ref={vikingRef} {...props} dispose={null} scale={0.27} >
      <Question_mark position={[-15, 10, -15]} size={3}
        onClick={ () => handleDetalle('La palabra vikingo tiene origen en la palabra “vikingr”, que significa “pirata”, es decir, “ladrones en el mar”')}

      />
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