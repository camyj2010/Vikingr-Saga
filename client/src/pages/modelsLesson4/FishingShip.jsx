import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "../Question_mark";

export default function FishingShip(props) {
  const { nodes, materials } = useGLTF("/static/FishingShip.glb");
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
        <group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_1.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-0.5, 3.5, -6.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_2.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-0.5, 3.5, -6.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_3.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-0.5, -12.5, -6.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_4.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-0.5, -12.5, -6.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_5.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-0.5, -12.5, -6.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_6.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-16.5, 3.5, -6.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_7.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-16.5, -12.5, -6.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_8.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-16.5, -12.5, -6.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_9.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-16.5, -12.5, -6.5]}
      />
      </group>
    </group>
  );
}

useGLTF.preload("/static/FishingShip.glb");