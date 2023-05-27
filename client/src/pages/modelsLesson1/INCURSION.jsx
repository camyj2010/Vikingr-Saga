import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import QuestionMark from "./QuestionMark";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import "../styles/Modelos.css"

export default function INCURSION(props) {
  const { nodes, materials } = useGLTF("/static/Incursion.glb");
  const skullRef = useRef();
  const [pressed,setPressed] = useState(false);
  const [modelRotation, setModelRotation] = useState([0, 0, 0]);
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
    <group ref={skullRef} {...props} dispose={null} >
     
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_1.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[6, 1, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_2.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[6, 1, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_3.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[6, -15, 15.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_4.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[6, -15, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_5.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[6, -15, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_6.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[6, -31, 15.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_7.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[6, -31, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_8.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[6, -31, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_9.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[6, -47, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_10.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-10, 17, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_11.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-10, 17, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_12.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-10, 1, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_13.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-10, 1, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_14.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-10, -15, 15.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_15.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-10, -15, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_16.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-10, -15, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_17.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-10, -31, 15.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_18.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-10, -31, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_19.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-10, -31, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_20.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-10, -47, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_21.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-26, 33, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_22.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-26, 17, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_23.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-26, 17, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_24.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-26, 1, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_25.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-26, -15, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_26.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-26, -15, -16.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_27.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-26, -31, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_28.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-26, -31, -16.5]}
      />
    </group>
  );
}
useGLTF.preload("/static//Incursion.glb");