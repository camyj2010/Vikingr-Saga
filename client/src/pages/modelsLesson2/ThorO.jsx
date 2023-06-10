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
        <Question_mark position={[0,2.6,-6]} size={0.7} onClick={() => handleDetalle("Siempre lleva su poderoso martillo, Mjolnir, que es capaz de controlar el clima y regresar a su mano después de ser arrojado.")}/>
        <Question_mark position={[0,2.6,6]} size={0.7} onClick={() => handleDetalle("A pesar de su apariencia ruda, Thor también es conocido por su buen humor y apetito voraz. Es famoso por su amor por la cerveza y la comida abundante.")}/>
        <Question_mark position={[4,0,0]} size={0.7} onClick={() => handleDetalle("Es representado como un guerrero fuerte y valiente, con cabello rojo y barba.")}/>
      <group  scale={0.3}>
        <group >
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