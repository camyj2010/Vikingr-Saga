import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "../Question_mark";

export default function food(props) {
  const { nodes, materials } = useGLTF("/static/food.glb");
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
        <Question_mark size={0.5} position={[-2,2.5,3]} onClick={() => handleDetalle("Durante Þorrablót se beben bebidas especiales como brennivín, un aguardiente islandés destilado a base de patatas y con un alto contenido alcohólico. También se sirve mjöður (hidromiel), una bebida alcohólica hecha de miel fermentada. ")}/>
        <Question_mark size={0.5} position={[-2,2.5,4.5]} onClick={() => handleDetalle("Durante la festividad, se realizan cantos y bailes tradicionales islandeses. Los participantes cantan canciones conocidas como Þorrablótslög, que suelen tener letras humorísticas y celebran la cultura islandesa.")}/>
        <group scale={0.5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_1.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-5, -7, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_2.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-5, -7, -16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_3.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-5, -23, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_4.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-5, -23, -16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_5.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-21, -7, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_6.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-21, -7, -16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_7.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-21, -23, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_8.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-21, -23, -16]}
      />
    </group>
    </group>
  );
}

useGLTF.preload("/static/food.glb");