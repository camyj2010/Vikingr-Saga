import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "../Question_mark";

export default function BEOWULF(props) {
  const { nodes, materials } = useGLTF("/static/BEOWULF.glb");
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
    <Question_mark position={[0,-5,-15]} size={4.5} onClick={() => handleDetalle("En el poema, Beowulf viaja desde su tierra natal, Geatland, hasta Dinamarca para ayudar al rey Hrothgar a enfrentarse al monstruo Grendel, que aterroriza a su pueblo en la sala de Heorot.")}/>
    <Question_mark position={[0,-5,20]} size={4.5} onClick={() => handleDetalle("El poema de Beowulf es considerado una de las obras literarias más importantes y antiguas de la literatura en lengua inglesa.")}/>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_1.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-5.5, 20.5, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_3.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-5.5, 20.5, -12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_5.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-5.5, 4.5, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_7.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-5.5, 4.5, -12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_9.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-5.5, -11.5, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_11.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-5.5, -11.5, -12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_13.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-5.5, -27.5, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_14.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-5.5, -27.5, -12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_15.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-21.5, -11.5, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_16.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-21.5, -11.5, -12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_17.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-21.5, -27.5, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_18.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-21.5, -27.5, -12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_2.geometry}
        material={materials["terrain_atlas.terrain_blend"]}
        position={[-5.5, 20.5, -12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_4.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-5.5, 4.5, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_6.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-5.5, 4.5, -12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_8.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-5.5, -11.5, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_10.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-5.5, -11.5, -12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_12.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-5.5, -27.5, 4]}
      />
    </group>
  );
}

useGLTF.preload("/static/BEOWULF.glb");