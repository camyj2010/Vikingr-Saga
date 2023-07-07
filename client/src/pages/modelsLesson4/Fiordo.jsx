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
      <group scale={0.1} >
        <group >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004.geometry}
            material={materials["terrain_atlas.terrain_blend.046"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_1.geometry}
            material={materials["terrain_atlas.terrain.089"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_2.geometry}
            material={materials["terrain_atlas.terrain_blend.047"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_3.geometry}
            material={materials["terrain_atlas.terrain_alpha.066"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_4.geometry}
            material={materials["terrain_atlas.terrain_alpha.067"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_5.geometry}
            material={materials["terrain_atlas.terrain.090"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_6.geometry}
            material={materials["terrain_atlas.terrain_blend.048"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_7.geometry}
            material={materials["terrain_atlas.terrain.091"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_8.geometry}
            material={materials["terrain_atlas.terrain_blend.049"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_9.geometry}
            material={materials["terrain_atlas.terrain_alpha.068"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_10.geometry}
            material={materials["terrain_atlas.terrain.092"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_11.geometry}
            material={materials["terrain_atlas.terrain_alpha.069"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_12.geometry}
            material={materials["terrain_atlas.terrain_blend.050"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_13.geometry}
            material={materials["terrain_atlas.terrain.093"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_14.geometry}
            material={materials["terrain_atlas.terrain_alpha.070"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_15.geometry}
            material={materials["terrain_atlas.terrain.094"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_16.geometry}
            material={materials["terrain_atlas.terrain_blend.051"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_96004_17.geometry}
            material={materials["terrain_atlas.terrain_alpha.071"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/Fiordo.glb");