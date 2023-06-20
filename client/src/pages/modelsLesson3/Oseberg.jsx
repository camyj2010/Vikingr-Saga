import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "../Question_mark";

export default function Oseberg(props) {
  const { nodes, materials } = useGLTF("/static/Oseberg.glb");
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
        <group scale={0.35}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_1.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[7.5, -7.5, 1.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_2.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[7.5, -7.5, -14.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_3.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[7.5, -23.5, 1.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_4.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[7.5, -23.5, -14.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_5.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-8.5, 8.5, -14.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_6.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-8.5, -7.5, 1.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_7.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-8.5, -7.5, -14.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_8.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-8.5, -23.5, 1.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_9.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-8.5, -23.5, -14.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_10.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-24.5, -7.5, 1.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_11.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-24.5, -7.5, -14.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_12.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-24.5, -23.5, 1.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_13.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-24.5, -23.5, -14.5]}
      />
      </group>
    </group>
  );
}

useGLTF.preload("/static/Oseberg.glb");