import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "../Question_mark";

export default function flagsC(props) {
  const { nodes, materials } = useGLTF("/static/flagsC.glb");
  return (
    <group {...props} dispose={null}>
        <group scale={0.15} position={[-10,0,0]}>
      <group position={[50, 0, 0]} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-9, -29, 13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-25, 3, 13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[-25, -29, 13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-25, -29, 13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-25, -29, -3]}
        />
      </group>
      <group position={[50, 0, 47]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-9, -13, -2.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-9, -13, -18.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-9, -29, 13.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-9, -29, -2.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14001.geometry}
          material={materials["terrain_atlas.terrain_alpha.002"]}
          position={[-9, -29, -18.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-9, -29, -18.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-9, -29, -34.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-25, 3, -2.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-25, 3, -18.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-25, 3, -34.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-25, -13, -2.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-25, -13, -18.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-25, -13, -34.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-25, -29, 13.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24001.geometry}
          material={materials["terrain_atlas.terrain_alpha.002"]}
          position={[-25, -29, -2.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_25001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-25, -29, -2.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_26001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-25, -29, -18.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_27001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-25, -29, -34.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[7, -29, -2.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4002.geometry}
          material={materials["terrain_atlas.terrain_alpha.002"]}
          position={[7, -29, -18.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[7, -29, -18.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-9, 3, 13.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-9, 3, -2.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-9, 3, -18.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-9, -13, 13.5]}
        />
      </group>
      <group position={[0, 0, 47]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10002.geometry}
          material={materials["terrain_atlas.terrain_alpha.003"]}
          position={[9, -29, -34.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11002.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[9, -29, -34.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13002.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-7, -29, 13.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14002.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-7, -29, -2.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15002.geometry}
          material={materials["terrain_atlas.terrain_alpha.003"]}
          position={[-7, -29, -18.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16002.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-7, -29, -18.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17002.geometry}
          material={materials["terrain_atlas.terrain_alpha.003"]}
          position={[-7, -29, -34.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18002.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-7, -29, -34.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[9, 3, -34.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[9, -13, -34.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[9, -29, 13.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6002.geometry}
          material={materials["terrain_atlas.terrain_alpha.003"]}
          position={[9, -29, -2.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7002.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[9, -29, -2.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8002.geometry}
          material={materials["terrain_atlas.terrain_alpha.003"]}
          position={[9, -29, -18.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9002.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[9, -29, -18.5]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_1.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[9, 3, -3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_10.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[9, -29, -19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_11.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[9, -29, -35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_12.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[9, -29, -35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_13.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-7, 3, -3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_14.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-7, 3, -19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_15.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-7, -13, -19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_16.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-7, -13, -35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_17.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-7, -13, -35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_18.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-7, -29, 13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_19.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-7, -29, 13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_2.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[9, -13, -3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_20.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-7, -29, -3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_21.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-7, -29, -3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_22.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-7, -29, -19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_23.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-7, -29, -19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_24.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-7, -29, -35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_25.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-23, 3, -19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_26.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-23, 3, -35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_27.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-23, -13, -19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_28.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-23, -13, -35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_29.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-23, -29, 13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_3.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[9, -13, -19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_30.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-23, -29, -3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_31.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-23, -29, -3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_32.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-23, -29, -19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_33.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-23, -29, -35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_34.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-39, 3, -35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_35.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-39, -13, -35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_36.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-39, -29, -3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_37.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-39, -29, -19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_38.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-39, -29, -35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_4.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[9, -13, -35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_5.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[9, -13, -35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_6.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[9, -29, 13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_7.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[9, -29, 13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_8.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[9, -29, -3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_9.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[9, -29, -19]}
      />
    </group>
    </group>
  );
}

useGLTF.preload("/static/flagsC.glb");