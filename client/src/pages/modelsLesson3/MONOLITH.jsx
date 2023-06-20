import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "../Question_mark";

export default function MONOLITH(props) {
  const { nodes, materials } = useGLTF("/static/MONOLITH.glb");
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
        <Question_mark position={[5,0,4]} size={1.5} onClick={() => handleDetalle("Estas piedras estaban grabadas con inscripciones rúnicas, que a menudo eran conmemorativas o relacionadas con eventos históricos.")}/>
        <group scale={0.09}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_101.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-1.968, -14.339, -5.433]}
      />
      </group>
    </group>
  );
}

useGLTF.preload("/static/MONOLITH.glb");