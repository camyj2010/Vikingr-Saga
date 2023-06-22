import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "../Question_mark";

export default function VikingHouse(props) {
  const { nodes, materials } = useGLTF("/static/VikingHouse.glb");
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
        <Question_mark position={[7,0,0]} size={1} onClick={() => handleDetalle("Las granjas vikingas eran una parte central de la vida y la sociedad vikinga. Estas granjas solían incluir edificios como casas, graneros, establos y talleres. Las casas de los vikingos eran a menudo grandes y tenían varios compartimentos para diferentes propósitos.")}/>
        <Question_mark position={[-7,0,0]} size={1} onClick={() => handleDetalle("En algunas regiones donde la madera era escasa, los vikingos utilizaban turba, un tipo de combustible vegetal, para construir sus viviendas. La turba se convertía en ladrillos secándola al sol y luego se apilaba para crear muros.")} />
        <group scale={0.3} position = {[0,3,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_1.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-1, 3.5, -4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_2.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-1, 3.5, -20]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_3.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-1, -12.5, 12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_4.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-1, -12.5, -4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_5.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-1, -12.5, -20]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_6.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-1, -28.5, 12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_7.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-1, -28.5, -4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_8.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-1, -28.5, -4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_9.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-1, -28.5, -20]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_10.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-17, 3.5, -4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_11.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-17, 3.5, -20]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_12.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-17, -12.5, 12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_13.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-17, -12.5, -4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_14.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-17, -12.5, -20]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_15.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-17, -28.5, 12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_16.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-17, -28.5, -4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_17.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-17, -28.5, -4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_18.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-17, -28.5, -20]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_19.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-17, -28.5, -20]}
      />
      </group>
    </group>
  );
}

useGLTF.preload("/static/VikingHouse.glb");
