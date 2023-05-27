import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import QuestionMark from "./QuestionMark";
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default function RASTRILLO(props) {
  const { nodes, materials } = useGLTF("/static/RASTRILLO.glb");
  const rastrilloRef = useRef();
  const [pressed,setPressed] = useState(false);
  const [modelRotation, setModelRotation] = useState([5*Math.PI/12, Math.PI/3, 0]);
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
    <group ref={rastrilloRef} {...props} dispose={null} >

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