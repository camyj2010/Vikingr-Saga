import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "../Question_mark";

export default function ThorO(props) {
  const { nodes, materials } = useGLTF("/static/ThorO.glb");
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
    <group {...props} dispose={null}>
      <group position={[6.5, -4, -15]} scale={0.5}>
        <group position={[-0.5, 6, -4]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_0002.geometry}
            material={materials["terrain_atlas.terrain.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_0002_1.geometry}
            material={materials["terrain_atlas.terrain"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_0002_2.geometry}
            material={materials["terrain_atlas.terrain.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/ThorO.glb");