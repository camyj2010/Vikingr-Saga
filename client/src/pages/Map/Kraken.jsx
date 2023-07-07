import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Kraken(props) {
  const { nodes, materials } = useGLTF("/static/kraken.glb");
  return (
    <group {...props} dispose={null} rotation={[0,2*Math.PI/3,0]}>
      <group position={[36.488, 26.991, 29.027]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[19, 3, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[3, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[3, -29, -41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[3, -45, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[3, -45, -41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[-13, 3, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-13, 3, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[-13, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-13, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-13, -29, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[-13, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[19, 3, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-13, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-13, -29, -41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-13, -45, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-13, -45, -41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-29, 3, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_25.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-29, 3, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_26.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[-29, -13, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_27.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-29, -13, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_28.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[-29, -13, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_29.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-29, -13, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[19, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_30.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[-29, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_31.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-29, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_32.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-29, -29, 23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_33.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[-29, -29, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_34.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-29, -29, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_35.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[-29, -29, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_36.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-29, -29, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_37.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[-29, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_38.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[-29, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_39.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-29, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[19, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_40.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-29, -29, -41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_41.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-45, 3, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_42.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-45, 3, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_43.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[-45, -13, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_44.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-45, -13, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_45.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[-45, -13, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_46.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-45, -13, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_47.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-45, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_48.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-45, -13, -41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_49.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-45, -29, 23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[19, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_50.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[-45, -29, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_51.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-45, -29, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_52.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-45, -29, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_53.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-45, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_54.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-45, -29, -41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[3, 3, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[3, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[3, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[3, -29, -25]}
        />
      </group>
      <group position={[-27.512, 26.991, 29.027]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[19, 3, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[19, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[19, -13, -41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[19, -29, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[19, -29, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14001.geometry}
          material={materials["terrain_atlas.terrain_blend"]}
          position={[19, -29, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[19, -29, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[19, -29, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[19, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[19, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[19, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[19, 3, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[19, -29, -41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[19, -45, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[3, 19, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[3, 3, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[3, 3, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_25001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[3, 3, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_26001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[3, 3, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_27001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[3, -13, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_28001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[3, -13, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_29001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[3, -13, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3001.geometry}
          material={materials["terrain_atlas.terrain_blend"]}
          position={[19, -13, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_30001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[3, -13, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_31001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[3, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_32001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[3, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_33001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[3, -29, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_34001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[3, -29, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_35001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[3, -29, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_36001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[3, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_37001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[3, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_38001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[3, -29, -41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_39001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[-13, 3, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[19, -13, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_40001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-13, 3, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_41001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[-13, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_42001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-13, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_43001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-13, -29, -41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_44001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-29, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_45001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-29, -13, -41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_46001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-29, -29, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_47001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-29, -29, -41]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[19, -13, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[19, -13, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[19, -13, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[19, -13, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[19, -13, -25]}
        />
      </group>
      <group position={[36.488, 26.991, -34.973]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-13, -29, 23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10002.geometry}
          material={materials["terrain_atlas.terrain_alpha.002"]}
          position={[-45, 19, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-45, 19, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-45, 19, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13002.geometry}
          material={materials["terrain_atlas.terrain_alpha.002"]}
          position={[-45, 3, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-45, 3, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15002.geometry}
          material={materials["terrain_atlas.terrain_alpha.002"]}
          position={[-45, 3, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-45, 3, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-45, -13, 23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18002.geometry}
          material={materials["terrain_atlas.terrain_alpha.002"]}
          position={[-45, -13, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-45, -13, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-13, -45, 23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20002.geometry}
          material={materials["terrain_atlas.terrain_alpha.002"]}
          position={[-45, -13, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-45, -29, 23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-45, -29, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3002.geometry}
          material={materials["terrain_atlas.terrain_alpha.002"]}
          position={[-29, 19, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4002.geometry}
          material={materials["terrain_atlas.terrain_alpha.002"]}
          position={[-29, 19, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-29, 19, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-29, 19, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-29, 3, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-29, -29, 23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-29, -45, 23]}
        />
      </group>
      <group position={[-27.512, 26.991, -34.973]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1003.geometry}
          material={materials["terrain_atlas.terrain_alpha.003"]}
          position={[19, 19, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10003.geometry}
          material={materials["terrain_atlas.terrain_alpha.003"]}
          position={[19, -13, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[19, -13, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12003.geometry}
          material={materials["terrain_atlas.terrain_alpha.003"]}
          position={[19, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[19, -13, -25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[19, -29, 23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[19, -29, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16003.geometry}
          material={materials["terrain_atlas.terrain_alpha.003"]}
          position={[19, -29, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[19, 19, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3003.geometry}
          material={materials["terrain_atlas.terrain_alpha.003"]}
          position={[19, 19, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[19, 19, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[19, 3, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6003.geometry}
          material={materials["terrain_atlas.terrain_alpha.003"]}
          position={[19, 3, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[19, 3, -9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8003.geometry}
          material={materials["terrain_atlas.terrain_alpha.003"]}
          position={[19, -13, 7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[19, -13, 7]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/kraken.glb");