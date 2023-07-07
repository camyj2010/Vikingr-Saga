import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Island4(props) {
  const { nodes, materials } = useGLTF("/static/ISLA4C.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-53.074, 23.714, -78.992]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1.geometry}
          material={materials["terrain_atlas.terrain_alpha.008"]}
          position={[31, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10.geometry}
          material={materials["terrain_atlas.terrain.008"]}
          position={[15, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11.geometry}
          material={materials["terrain_atlas.terrain_blend.002"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12.geometry}
          material={materials["terrain_atlas.terrain_alpha.008"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13.geometry}
          material={materials["terrain_atlas.terrain.008"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14.geometry}
          material={materials["terrain_atlas.terrain.008"]}
          position={[15, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15.geometry}
          material={materials["terrain_atlas.terrain_blend.002"]}
          position={[-1, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16.geometry}
          material={materials["terrain_atlas.terrain_alpha.008"]}
          position={[-1, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17.geometry}
          material={materials["terrain_atlas.terrain.008"]}
          position={[-1, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18.geometry}
          material={materials["terrain_atlas.terrain.008"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19.geometry}
          material={materials["terrain_atlas.terrain.008"]}
          position={[-1, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2.geometry}
          material={materials["terrain_atlas.terrain.008"]}
          position={[31, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20.geometry}
          material={materials["terrain_atlas.terrain.008"]}
          position={[-17, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21.geometry}
          material={materials["terrain_atlas.terrain.008"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3.geometry}
          material={materials["terrain_atlas.terrain_blend.002"]}
          position={[31, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4.geometry}
          material={materials["terrain_atlas.terrain_alpha.008"]}
          position={[31, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5.geometry}
          material={materials["terrain_atlas.terrain.008"]}
          position={[31, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6.geometry}
          material={materials["terrain_atlas.terrain.008"]}
          position={[31, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7.geometry}
          material={materials["terrain_atlas.terrain.008"]}
          position={[15, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8.geometry}
          material={materials["terrain_atlas.terrain.008"]}
          position={[15, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9.geometry}
          material={materials["terrain_atlas.terrain_alpha.008"]}
          position={[15, -29, 25]}
        />
      </group>
      <group position={[10.926, 23.714, -78.992]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1001.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[31, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10001.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[15, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11001.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-1, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12001.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-1, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13001.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[-1, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14001.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-1, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15001.geometry}
          material={materials["terrain_atlas.terrain_blend.003"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16001.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17001.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18001.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-1, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19001.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-1, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2001.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[31, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20001.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-17, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21001.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-17, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-17, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-17, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[-17, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_25.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-17, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_26.geometry}
          material={materials["terrain_atlas.terrain_blend.003"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_27.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_28.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_29.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[-17, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3001.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[31, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_30.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[-17, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_31.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-17, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_32.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_33.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_34.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-17, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_35.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-33, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_36.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-33, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_37.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-33, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_38.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[-33, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_39.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-33, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4001.geometry}
          material={materials["terrain_atlas.terrain_blend.003"]}
          position={[15, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_40.geometry}
          material={materials["terrain_atlas.terrain_blend.003"]}
          position={[-33, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_41.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[-33, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_42.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[-33, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_43.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-33, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_44.geometry}
          material={materials["terrain_atlas.terrain_blend.003"]}
          position={[-33, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_45.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[-33, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_46.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-33, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_47.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[-33, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_48.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[-33, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5001.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[15, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6001.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[15, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7001.geometry}
          material={materials["terrain_atlas.terrain_blend.003"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8001.geometry}
          material={materials["terrain_atlas.terrain_alpha.009"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9001.geometry}
          material={materials["terrain_atlas.terrain.009"]}
          position={[15, -29, 9]}
        />
      </group>
      <group position={[74.926, 23.714, -78.992]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1002.geometry}
          material={materials["terrain_atlas.terrain.010"]}
          position={[-17, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2002.geometry}
          material={materials["terrain_atlas.terrain_alpha.010"]}
          position={[-33, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3002.geometry}
          material={materials["terrain_atlas.terrain.010"]}
          position={[-33, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4002.geometry}
          material={materials["terrain_atlas.terrain.010"]}
          position={[-33, -29, 9]}
        />
      </group>
      <group position={[-53.074, 23.714, -14.992]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1003.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[31, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10002.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[31, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11002.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[31, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12002.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[15, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13002.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[15, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14002.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[15, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15002.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[15, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16002.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[15, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17002.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[15, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18002.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[15, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19002.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[15, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2003.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[31, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20002.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[15, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21002.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[15, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22001.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[15, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_25001.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[15, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_26001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[15, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_27001.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[15, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_28001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[15, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_29001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-1, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3003.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[31, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_30001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-1, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_31001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-1, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_32001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-1, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_33001.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[-1, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_34001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-1, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_35001.geometry}
          material={materials["terrain_atlas.terrain_blend.004"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_36001.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_37001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_38001.geometry}
          material={materials["terrain_atlas.terrain_blend.004"]}
          position={[-1, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_39001.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[-1, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4003.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[31, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_40001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-1, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_41001.geometry}
          material={materials["terrain_atlas.terrain_blend.004"]}
          position={[-1, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_42001.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[-1, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_43001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-1, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_44001.geometry}
          material={materials["terrain_atlas.terrain_blend.004"]}
          position={[-1, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_45001.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[-1, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_46001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-1, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_47001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-17, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_48001.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-17, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_49.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-17, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5002.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[31, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_50.geometry}
          material={materials["terrain_atlas.terrain_blend.004"]}
          position={[-17, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_51.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[-17, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_52.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-17, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_53.geometry}
          material={materials["terrain_atlas.terrain_blend.004"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_54.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_55.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_56.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[-17, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_57.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-17, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_58.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_59.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-17, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6002.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[31, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_60.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-33, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_61.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-33, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_62.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-33, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_63.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[-33, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_64.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-33, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_65.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[-33, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_66.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-33, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_67.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[-33, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7002.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[31, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8002.geometry}
          material={materials["terrain_atlas.terrain_alpha.011"]}
          position={[31, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9002.geometry}
          material={materials["terrain_atlas.terrain.011"]}
          position={[31, -29, -23]}
        />
      </group>
      <group position={[10.926, 23.714, -14.992]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1004.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[31, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10003.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[31, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11003.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[31, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12003.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[31, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13003.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[15, 19, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14003.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[15, 3, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15003.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[15, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16003.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[15, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17003.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[15, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18003.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[15, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19003.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[15, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2004.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[31, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20003.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[15, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21003.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[15, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22002.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[15, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23002.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[15, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24002.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_25002.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_26002.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[15, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_27002.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[15, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_28002.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[15, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_29002.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[15, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3004.geometry}
          material={materials["terrain_atlas.terrain_blend.005"]}
          position={[31, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_30002.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[15, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_31002.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[15, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_32002.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-1, 3, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_33002.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-1, 3, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_34002.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-1, 3, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_35002.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-1, 3, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_36002.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-1, 3, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_37002.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-1, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_38002.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-1, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_39002.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-1, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4004.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[31, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_40002.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-1, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_41002.geometry}
          material={materials["terrain_atlas.terrain_blend.005"]}
          position={[-1, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_42002.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-1, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_43002.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-1, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_44002.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-1, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_45002.geometry}
          material={materials["terrain_atlas.terrain_blend.005"]}
          position={[-1, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_46002.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-1, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_47002.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-1, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_48002.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-1, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_49001.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-1, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5003.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[31, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_50001.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_51001.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-1, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_52001.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-1, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_53001.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-1, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_54001.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-1, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_55001.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-1, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_56001.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-1, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_57001.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-17, 3, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_58001.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-17, 3, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_59001.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-17, 3, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6003.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[31, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_60001.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-17, 3, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_61001.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-17, 3, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_62001.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-17, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_63001.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-17, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_64001.geometry}
          material={materials["terrain_atlas.terrain_blend.005"]}
          position={[-17, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_65001.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-17, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_66001.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-17, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_67001.geometry}
          material={materials["terrain_atlas.terrain_blend.005"]}
          position={[-17, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_68.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-17, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_69.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-17, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7003.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[31, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_70.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-17, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_71.geometry}
          material={materials["terrain_atlas.terrain_blend.005"]}
          position={[-17, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_72.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-17, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_73.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-17, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_74.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-17, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_75.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-17, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_76.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_77.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-17, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_78.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_79.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8003.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[31, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_80.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-17, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_81.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-17, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_82.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-33, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_83.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-33, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_84.geometry}
          material={materials["terrain_atlas.terrain_blend.005"]}
          position={[-33, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_85.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-33, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_86.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-33, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_87.geometry}
          material={materials["terrain_atlas.terrain_blend.005"]}
          position={[-33, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_88.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-33, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_89.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-33, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9003.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[31, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_90.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-33, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_91.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-33, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_92.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-33, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_93.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-33, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_94.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-33, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_95.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-33, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_96.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-33, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_97.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-33, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_98.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
          position={[-33, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_99.geometry}
          material={materials["terrain_atlas.terrain.012"]}
          position={[-33, -29, -39]}
        />
      </group>
      <group position={[74.926, 23.714, -14.992]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1005.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-1, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10004.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-17, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11004.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-17, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12004.geometry}
          material={materials["terrain_atlas.terrain_alpha.013"]}
          position={[-17, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13004.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-17, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14004.geometry}
          material={materials["terrain_atlas.terrain_blend.006"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15004.geometry}
          material={materials["terrain_atlas.terrain_alpha.013"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16004.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17004.geometry}
          material={materials["terrain_atlas.terrain_blend.006"]}
          position={[-17, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18004.geometry}
          material={materials["terrain_atlas.terrain_alpha.013"]}
          position={[-17, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19004.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-17, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2005.geometry}
          material={materials["terrain_atlas.terrain_alpha.013"]}
          position={[-1, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20004.geometry}
          material={materials["terrain_atlas.terrain_alpha.013"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21004.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22003.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-17, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23003.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-33, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24003.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-33, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_25003.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-33, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_26003.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-33, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_27003.geometry}
          material={materials["terrain_atlas.terrain_blend.006"]}
          position={[-33, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_28003.geometry}
          material={materials["terrain_atlas.terrain_alpha.013"]}
          position={[-33, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_29003.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-33, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3005.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-1, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_30003.geometry}
          material={materials["terrain_atlas.terrain_alpha.013"]}
          position={[-33, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_31003.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-33, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_32003.geometry}
          material={materials["terrain_atlas.terrain_alpha.013"]}
          position={[-33, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_33003.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-33, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_34003.geometry}
          material={materials["terrain_atlas.terrain_alpha.013"]}
          position={[-33, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_35003.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-33, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_36003.geometry}
          material={materials["terrain_atlas.terrain_alpha.013"]}
          position={[-33, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_37003.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-33, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4005.geometry}
          material={materials["terrain_atlas.terrain_alpha.013"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5004.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6004.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-1, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7004.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-1, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8004.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-17, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9004.geometry}
          material={materials["terrain_atlas.terrain.013"]}
          position={[-17, -13, 9]}
        />
      </group>
      <group position={[-53.074, 23.714, 49.008]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1006.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[31, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10005.geometry}
          material={materials["terrain_atlas.terrain_blend.007"]}
          position={[31, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11005.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[31, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12005.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[31, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13005.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[31, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14005.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[31, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15005.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[31, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16005.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[15, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17005.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[15, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18005.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[15, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19005.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[15, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2006.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[31, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20005.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[15, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21005.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[15, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22004.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[15, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23004.geometry}
          material={materials["terrain_atlas.terrain_blend.007"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24004.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_25004.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_26004.geometry}
          material={materials["terrain_atlas.terrain_blend.007"]}
          position={[15, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_27004.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[15, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_28004.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[15, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_29004.geometry}
          material={materials["terrain_atlas.terrain_blend.007"]}
          position={[15, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3006.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[31, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_30004.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[15, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_31004.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[15, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_32004.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[15, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_33004.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[15, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_34004.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-1, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_35004.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-1, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_36004.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-1, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_37004.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-1, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_38003.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-1, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_39003.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4006.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[31, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_40003.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_41003.geometry}
          material={materials["terrain_atlas.terrain_blend.007"]}
          position={[-1, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_42003.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[-1, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_43003.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-1, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_44003.geometry}
          material={materials["terrain_atlas.terrain_blend.007"]}
          position={[-1, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_45003.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[-1, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_46003.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-1, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_47003.geometry}
          material={materials["terrain_atlas.terrain_blend.007"]}
          position={[-1, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_48003.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[-1, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_49002.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-1, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5005.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[31, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_50002.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-17, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_51002.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_52002.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-17, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_53002.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_54002.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_55002.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[-17, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_56002.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-17, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_57002.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[-33, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6005.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[31, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7005.geometry}
          material={materials["terrain_atlas.terrain_blend.007"]}
          position={[31, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8005.geometry}
          material={materials["terrain_atlas.terrain_alpha.014"]}
          position={[31, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9005.geometry}
          material={materials["terrain_atlas.terrain.014"]}
          position={[31, -29, 9]}
        />
      </group>
      <group position={[10.926, 23.714, 49.008]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1007.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[31, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10006.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[15, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11006.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[15, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12006.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[15, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13006.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[15, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14006.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[15, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15006.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[15, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16006.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[15, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17006.geometry}
          material={materials["terrain_atlas.terrain_blend.008"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18006.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19006.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[15, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2007.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[31, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20006.geometry}
          material={materials["terrain_atlas.terrain_blend.008"]}
          position={[15, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21006.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[15, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22005.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[15, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23005.geometry}
          material={materials["terrain_atlas.terrain_blend.008"]}
          position={[15, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24005.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[15, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_25005.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[15, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_26005.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[15, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_27005.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[15, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_28005.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-1, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_29005.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-1, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3007.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[31, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_30005.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-1, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_31005.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-1, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_32005.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-1, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_33005.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-1, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_34005.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-1, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_35005.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-1, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_36005.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-1, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_37005.geometry}
          material={materials["terrain_atlas.terrain_blend.008"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_38004.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_39004.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-1, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4007.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[31, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_40004.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-1, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_41004.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-1, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_42004.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-1, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_43004.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-1, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_44004.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-1, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_45004.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-17, -13, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_46004.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-17, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_47004.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-17, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_48004.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-17, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_49003.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-17, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5006.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[31, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_50003.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-17, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_51003.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-17, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_52003.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-17, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_53003.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-17, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_54003.geometry}
          material={materials["terrain_atlas.terrain_blend.008"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_55003.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_56003.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_57003.geometry}
          material={materials["terrain_atlas.terrain_blend.008"]}
          position={[-17, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_58002.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-17, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_59002.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-17, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6006.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[31, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_60002.geometry}
          material={materials["terrain_atlas.terrain_blend.008"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_61002.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_62002.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_63002.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-17, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_64002.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-33, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_65002.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-33, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_66002.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-33, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_67002.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-33, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_68001.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-33, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_69001.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-33, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7006.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[31, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_70001.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-33, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_71001.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-33, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_72001.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-33, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_73001.geometry}
          material={materials["terrain_atlas.terrain_blend.008"]}
          position={[-33, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_74001.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-33, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_75001.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-33, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_76001.geometry}
          material={materials["terrain_atlas.terrain_blend.008"]}
          position={[-33, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_77001.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-33, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_78001.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-33, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_79001.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[-33, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8006.geometry}
          material={materials["terrain_atlas.terrain_alpha.015"]}
          position={[31, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_80001.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-33, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_81001.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[-33, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9006.geometry}
          material={materials["terrain_atlas.terrain.015"]}
          position={[31, -29, -39]}
        />
      </group>
      <group position={[74.926, 23.714, 49.008]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1008.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-1, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10007.geometry}
          material={materials["terrain_atlas.terrain_blend.009"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11007.geometry}
          material={materials["terrain_atlas.terrain_alpha.016"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12007.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13007.geometry}
          material={materials["terrain_atlas.terrain_blend.009"]}
          position={[-17, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14007.geometry}
          material={materials["terrain_atlas.terrain_alpha.016"]}
          position={[-17, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15007.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-17, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16007.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-33, -13, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17007.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-33, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18007.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-33, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19007.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-33, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2008.geometry}
          material={materials["terrain_atlas.terrain_alpha.016"]}
          position={[-1, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20007.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-33, -29, 25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21007.geometry}
          material={materials["terrain_atlas.terrain_alpha.016"]}
          position={[-33, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22006.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-33, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23006.geometry}
          material={materials["terrain_atlas.terrain_alpha.016"]}
          position={[-33, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24006.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-33, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_25006.geometry}
          material={materials["terrain_atlas.terrain_alpha.016"]}
          position={[-33, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_26006.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-33, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_27006.geometry}
          material={materials["terrain_atlas.terrain_blend.009"]}
          position={[-33, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_28006.geometry}
          material={materials["terrain_atlas.terrain_alpha.016"]}
          position={[-33, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_29006.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-33, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3008.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-1, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4008.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-17, -13, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5007.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-17, -13, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6007.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-17, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7007.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-17, -29, 9]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8007.geometry}
          material={materials["terrain_atlas.terrain_alpha.016"]}
          position={[-17, -29, -7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9007.geometry}
          material={materials["terrain_atlas.terrain.016"]}
          position={[-17, -29, -7]}
        />
      </group>
      <group position={[-53.074, 23.714, 113.008]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1009.geometry}
          material={materials["terrain_atlas.terrain.017"]}
          position={[31, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2009.geometry}
          material={materials["terrain_atlas.terrain.017"]}
          position={[31, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3009.geometry}
          material={materials["terrain_atlas.terrain.017"]}
          position={[15, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4009.geometry}
          material={materials["terrain_atlas.terrain.017"]}
          position={[15, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5008.geometry}
          material={materials["terrain_atlas.terrain.017"]}
          position={[-1, -29, -39]}
        />
      </group>
      <group position={[10.926, 23.714, 113.008]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1010.geometry}
          material={materials["terrain_atlas.terrain.018"]}
          position={[31, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10008.geometry}
          material={materials["terrain_atlas.terrain.018"]}
          position={[-17, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11008.geometry}
          material={materials["terrain_atlas.terrain_alpha.017"]}
          position={[-17, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12008.geometry}
          material={materials["terrain_atlas.terrain.018"]}
          position={[-17, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13008.geometry}
          material={materials["terrain_atlas.terrain.018"]}
          position={[-33, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14008.geometry}
          material={materials["terrain_atlas.terrain_alpha.017"]}
          position={[-33, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15008.geometry}
          material={materials["terrain_atlas.terrain.018"]}
          position={[-33, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2010.geometry}
          material={materials["terrain_atlas.terrain.018"]}
          position={[15, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3010.geometry}
          material={materials["terrain_atlas.terrain.018"]}
          position={[15, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4010.geometry}
          material={materials["terrain_atlas.terrain.018"]}
          position={[-1, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5009.geometry}
          material={materials["terrain_atlas.terrain.018"]}
          position={[-1, -29, -23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6008.geometry}
          material={materials["terrain_atlas.terrain_alpha.017"]}
          position={[-1, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7008.geometry}
          material={materials["terrain_atlas.terrain.018"]}
          position={[-1, -29, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8008.geometry}
          material={materials["terrain_atlas.terrain.018"]}
          position={[-17, -13, -39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9008.geometry}
          material={materials["terrain_atlas.terrain_alpha.017"]}
          position={[-17, -29, -23]}
        />
      </group>
      <group position={[74.926, 23.714, 113.008]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1011.geometry}
          material={materials["terrain_atlas.terrain.019"]}
          position={[-33, -29, -39]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/ISLA4C.glb");