import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Ship(props) {
  const { nodes, materials } = useGLTF("/static/Ship1.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_1.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[1, 2.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_2.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[1, 2.5, -15.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_4.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[1, -13.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_6.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[1, -13.5, -15.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_8.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-15, 2.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_10.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-15, 2.5, -15.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_12.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-15, -13.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_14.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-15, -13.5, -15.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_3.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[1, -13.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_5.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[1, -13.5, -15.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_7.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-15, 2.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_9.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-15, 2.5, -15.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_11.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-15, -13.5, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_13.geometry}
        material={materials["terrain_atlas.terrain_alpha"]}
        position={[-15, -13.5, -15.5]}
      />
    </group>
  );
}

useGLTF.preload("/static/Ship1.glb");