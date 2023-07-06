import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "../Question_mark";

export default function Fiordo(props) {
  const { nodes, materials } = useGLTF("/static/Fiordo.glb");
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
        <Question_mark size={0.5} position={[6,-3,2]} onClick={() => handleDetalle("Muchas palabras utilizadas en estos idiomas tienen raíces en el antiguo idioma nórdico. ")}/>
        <Question_mark size={0.5} position={[0,0,0]} onClick={() => handleDetalle("Estas palabras incluyen términos relacionados con la naturaleza, como montañas, ríos y árboles, así como palabras relacionadas con la navegación, la guerra y la vida cotidiana de los vikingos. ")}/>
        <Question_mark size={0.5} position={[-5,3,-1.5]} onClick={() => handleDetalle("La palabra 'fjord' significa fiordo ")}/>
      <group scale={0.1}>
        <group >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004.geometry}
            material={materials["terrain_atlas.terrain_blend.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_1.geometry}
            material={materials["terrain_atlas.terrain"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_2.geometry}
            material={materials["terrain_atlas.terrain_blend"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_3.geometry}
            material={materials["terrain_atlas.terrain_alpha"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_4.geometry}
            material={materials["terrain_atlas.terrain_alpha.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_5.geometry}
            material={materials["terrain_atlas.terrain.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_6.geometry}
            material={materials["terrain_atlas.terrain_blend.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_7.geometry}
            material={materials["terrain_atlas.terrain.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_8.geometry}
            material={materials["terrain_atlas.terrain_blend.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_9.geometry}
            material={materials["terrain_atlas.terrain_alpha.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_10.geometry}
            material={materials["terrain_atlas.terrain.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_11.geometry}
            material={materials["terrain_atlas.terrain_alpha.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_12.geometry}
            material={materials["terrain_atlas.terrain_blend.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_13.geometry}
            material={materials["terrain_atlas.terrain.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_14.geometry}
            material={materials["terrain_atlas.terrain_alpha.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_15.geometry}
            material={materials["terrain_atlas.terrain.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_16.geometry}
            material={materials["terrain_atlas.terrain_blend.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_17.geometry}
            material={materials["terrain_atlas.terrain_alpha.005"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/Fiordo.glb");