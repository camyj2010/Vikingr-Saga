import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


export default function Island1(props) {
  const { nodes, materials } = useGLTF('/static/ISLA1C.glb');
  return (
    <group {...props} dispose={null}>
      <group position={[80, 0, 64]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_1.geometry}
          material={materials["terrain_atlas.terrain_alpha.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_2.geometry}
          material={materials["terrain_atlas.terrain.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_3.geometry}
          material={materials["terrain_atlas.terrain.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_4.geometry}
          material={materials["terrain_atlas.terrain_alpha.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_5.geometry}
          material={materials["terrain_atlas.terrain_blend.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_6.geometry}
          material={materials["terrain_atlas.terrain_alpha.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_7.geometry}
          material={materials["terrain_atlas.terrain.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_8.geometry}
          material={materials["terrain_atlas.terrain.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_9.geometry}
          material={materials["terrain_atlas.terrain_alpha.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_10.geometry}
          material={materials["terrain_atlas.terrain.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_11.geometry}
          material={materials["terrain_atlas.terrain_alpha.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_12.geometry}
          material={materials["terrain_atlas.terrain_alpha.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_13.geometry}
          material={materials["terrain_atlas.terrain.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_14.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_15.geometry}
          material={materials["terrain_atlas.terrain_alpha.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_16.geometry}
          material={materials["terrain_atlas.terrain.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_17.geometry}
          material={materials["terrain_atlas.terrain.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_18.geometry}
          material={materials["terrain_atlas.terrain.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_19.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_20.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_21.geometry}
          material={materials["terrain_atlas.terrain.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_22.geometry}
          material={materials["terrain_atlas.terrain_alpha.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_23.geometry}
          material={materials["terrain_atlas.terrain.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_24.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_25.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_26.geometry}
          material={materials["terrain_atlas.terrain.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_27.geometry}
          material={materials["terrain_atlas.terrain.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_28.geometry}
          material={materials["terrain_atlas.terrain_alpha.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_29.geometry}
          material={materials["terrain_atlas.terrain_alpha.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_30.geometry}
          material={materials["terrain_atlas.terrain.038"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/static/ISLA1.glb');


