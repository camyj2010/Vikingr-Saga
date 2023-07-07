import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import QuestionMark from "./QuestionMark";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Question_mark from "../Question_mark";
import "../styles/Modelos.css"

export default function SkullPlusChest(props) {
  const { nodes, materials } = useGLTF("/static/SkullPlusChest.glb");
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
    <group {...props} dispose={null} position={[0,-5,0]}>
        <Question_mark position={[-15,-5,0]} size={4.5} onClick={() => handleDetalle("Los vikingos no solo atacaban sorpresivamente, también empleaban tácticas de asedio y sitiaban ciudades fortificadas")}/>
      <group position={[-26, 20, -20]}>
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
          geometry={nodes.node_10.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-11, -26, -15]}
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
      </group>
      <group position={[0, 25, 10]} rotation={[0, -0.39, 0]} scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-10, -47, -16.5]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/SkullPlusChest.glb");