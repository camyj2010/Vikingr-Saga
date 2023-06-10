import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "../Question_mark";

export default function RAGNAROK(props) {
  const { nodes, materials } = useGLTF("/static/RAGNAROK.glb");
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
      <Question_mark position={[5,8,4]} size={0.5} onClick={() => handleDetalle("Aunque el Ragnarök representa el fin del mundo, también se considera un ciclo de renovación y transformación. Después de la destrucción, se espera que un nuevo mundo emerja y los sobrevivientes reconstruyan una sociedad mejor.")}/>
      <Question_mark position={[3,4,8]} size={0.5} onClick={() => handleDetalle("Los dioses principales, como Odin, Thor y Loki, están destinados a morir en el Ragnarök.")}/>
      <group scale={0.0005}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials["terrain_atlas.terrain"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials["terrain_atlas.terrain_blend"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={materials["terrain_atlas.terrain_blend"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={materials["terrain_atlas.terrain_blend.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_4.geometry}
          material={materials["terrain_atlas.terrain.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_5.geometry}
          material={materials["terrain_atlas.terrain_blend.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_6.geometry}
          material={materials["terrain_atlas.terrain.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_7.geometry}
          material={materials["terrain_atlas.terrain_blend.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_8.geometry}
          material={materials["terrain_atlas.terrain.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_9.geometry}
          material={materials["terrain_atlas.terrain_blend.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_10.geometry}
          material={materials["terrain_atlas.terrain_blend.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_11.geometry}
          material={materials["terrain_atlas.terrain_blend.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_12.geometry}
          material={materials["terrain_atlas.terrain.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_13.geometry}
          material={materials["terrain_atlas.terrain_blend.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_14.geometry}
          material={materials["terrain_atlas.terrain.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_15.geometry}
          material={materials["terrain_atlas.terrain_blend.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_16.geometry}
          material={materials["terrain_atlas.terrain.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_17.geometry}
          material={materials["terrain_atlas.terrain_blend.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_18.geometry}
          material={materials["terrain_atlas.terrain.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_19.geometry}
          material={materials["terrain_atlas.terrain_blend.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_20.geometry}
          material={materials["terrain_atlas.terrain.008"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/RAGNAROK.glb");