import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import QuestionMark from "./QuestionMark";
import Question_mark from "./Question_mark";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import "../styles/Modelos.css"

export default function AxePlusRastrillo(props) {
  const { nodes, materials } = useGLTF("/static/AxePlusRastrillo.glb");
  const handleDetalle = (detalle) => {
    Swal.fire({
      title: detalle,
      icon: 'info',
      showConfirmButton: false,
      background: '#1D2F6F',
      customClass: {
        title: 'mi-titulo',
      },
    })
  }
  return (
    <group {...props} dispose={null}>
        <Question_mark position={[-10,-20,0]}  size={4} onClick={() => handleDetalle("Los vikingos no solo eran guerreros y saqueadores, sino que también fueron hábiles comerciantes")}/>
      <group position={[-36.72, -0.54, -17.29]} rotation={[-0.28, 0.26, 0.09]}>
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
      </group>
      <group position={[22.99, -10.65, 0.99]} rotation={[-1.08, 0.39, 2.13]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-37.5, -3, -7]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/AxePlusRastrillo.glb");