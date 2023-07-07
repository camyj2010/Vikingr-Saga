import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "../Question_mark";

export default function RAGNAROK(props) {
  const { nodes, materials } = useGLTF("/static/RAGNAROKC.glb");
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
      <Question_mark position={[0,5.6,4]} size={0.5} onClick={() => handleDetalle("Aunque el Ragnarök representa el fin del mundo, también se considera un ciclo de renovación y transformación. Después de la destrucción, se espera que un nuevo mundo emerja y los sobrevivientes reconstruyan una sociedad mejor.")}/>
      <Question_mark position={[5,2,0]} size={0.5} onClick={() => handleDetalle("Los dioses principales, como Odin, Thor y Loki, están destinados a morir en el Ragnarök.")}/>
      <group scale={0.0006}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_1.geometry}
          material={materials["terrain_atlas.terrain.080"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_2.geometry}
          material={materials["terrain_atlas.terrain_blend.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_3.geometry}
          material={materials["terrain_atlas.terrain_blend.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_4.geometry}
          material={materials["terrain_atlas.terrain_blend.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_5.geometry}
          material={materials["terrain_atlas.terrain.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_6.geometry}
          material={materials["terrain_atlas.terrain_blend.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_7.geometry}
          material={materials["terrain_atlas.terrain.082"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_8.geometry}
          material={materials["terrain_atlas.terrain_blend.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_9.geometry}
          material={materials["terrain_atlas.terrain.083"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_10.geometry}
          material={materials["terrain_atlas.terrain_blend.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_11.geometry}
          material={materials["terrain_atlas.terrain_blend.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_12.geometry}
          material={materials["terrain_atlas.terrain_blend.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_13.geometry}
          material={materials["terrain_atlas.terrain.084"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_14.geometry}
          material={materials["terrain_atlas.terrain_blend.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_15.geometry}
          material={materials["terrain_atlas.terrain.085"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_16.geometry}
          material={materials["terrain_atlas.terrain_blend.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_17.geometry}
          material={materials["terrain_atlas.terrain.086"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_18.geometry}
          material={materials["terrain_atlas.terrain_blend.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_19.geometry}
          material={materials["terrain_atlas.terrain.087"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_20.geometry}
          material={materials["terrain_atlas.terrain_blend.045"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0003_21.geometry}
          material={materials["terrain_atlas.terrain.088"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/RAGNAROK.glb");