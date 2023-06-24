import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "../Question_mark";

export default function Drake(props) {
  const { nodes, materials } = useGLTF("/static/Drake.glb");
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
        <Question_mark position={[-1,2.5,0]} size={0.6} onClick={() => handleDetalle("La saga de los Volsungos está impregnada de mitología nórdica. Incluye la presencia de dioses como Odin y Loki, así como la aparición de criaturas fantásticas como el dragón Fafnir, que guarda un tesoro maldito. ")}/>
        <Question_mark position={[-1,-3,-6]} size={0.6} onClick={() => handleDetalle("La saga de los Volsungo explora temas como el destino, el honor y la venganza")}/>
        <Question_mark position={[-1,4,5.5]} size={0.6} onClick={() => handleDetalle("La saga de los Volsungos ha sido adaptada y reinterpretada en numerosas obras, como la ópera 'El anillo del nibelungo' de Richard Wagner y la novela 'leyenda de Sigurd y Gudrún' de J.R.R. Tolkien. ")}/>
        <group position={[-1, -5, 0]} scale={0.1} >
      <group position={[31.572, 56.222, -31.408]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[24, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[24, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[24, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[8, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[8, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[8, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[8, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[8, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[8, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[8, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[8, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[24, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[8, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[8, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-8, -39, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23.geometry}
          material={materials["entity_atlas.terrain_alpha"]}
          position={[-8, -39, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-8, -39, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_25.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-8, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_26.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-8, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_27.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-8, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_28.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-8, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_29.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-8, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[24, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_30.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-8, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_31.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-8, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_32.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-8, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_33.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-8, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_34.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-8, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_35.geometry}
          material={materials["entity_atlas.terrain_alpha"]}
          position={[-24, -23, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_36.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -23, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_37.geometry}
          material={materials["entity_atlas.terrain_alpha"]}
          position={[-24, -23, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_38.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -23, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_39.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -39, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[24, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_40.geometry}
          material={materials["entity_atlas.terrain_alpha"]}
          position={[-24, -39, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_41.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -39, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_42.geometry}
          material={materials["entity_atlas.terrain_alpha"]}
          position={[-24, -39, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_43.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -39, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_44.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_45.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_46.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_47.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_48.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_49.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5.geometry}
          material={materials["terrain_atlas.terrain_blend"]}
          position={[24, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_50.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_51.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_52.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_53.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-24, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_54.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, 9, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_55.geometry}
          material={materials["entity_atlas.terrain_alpha"]}
          position={[-40, -7, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_56.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -7, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_57.geometry}
          material={materials["entity_atlas.terrain_alpha"]}
          position={[-40, -7, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_58.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -7, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_59.geometry}
          material={materials["entity_atlas.terrain_alpha"]}
          position={[-40, -23, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[24, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_60.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -23, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_61.geometry}
          material={materials["entity_atlas.terrain_alpha"]}
          position={[-40, -23, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_62.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -23, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_63.geometry}
          material={materials["entity_atlas.terrain_alpha"]}
          position={[-40, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_64.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_65.geometry}
          material={materials["terrain_atlas.terrain_blend"]}
          position={[-40, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_66.geometry}
          material={materials["terrain_atlas.terrain_alpha"]}
          position={[-40, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_67.geometry}
          material={materials["entity_atlas.terrain_alpha"]}
          position={[-40, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_68.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_69.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -23, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[24, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_70.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -39, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_71.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -39, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_72.geometry}
          material={materials["entity_atlas.terrain_alpha"]}
          position={[-40, -39, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_73.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -39, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_74.geometry}
          material={materials["entity_atlas.terrain_alpha"]}
          position={[-40, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_75.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_76.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -39, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_77.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_78.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_79.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[24, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_80.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_81.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_82.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_83.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_84.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_85.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_86.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[-40, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9.geometry}
          material={materials["terrain_atlas.terrain"]}
          position={[24, -71, -11]}
        />
      </group>
      <group position={[-32.428, 56.222, -31.408]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -7, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10001.geometry}
          material={materials["terrain_atlas.terrain_alpha.001"]}
          position={[24, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11001.geometry}
          material={materials["entity_atlas.terrain_alpha.001"]}
          position={[24, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -23, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -39, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -39, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16001.geometry}
          material={materials["entity_atlas.terrain_alpha.001"]}
          position={[24, -39, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -39, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18001.geometry}
          material={materials["entity_atlas.terrain_alpha.001"]}
          position={[24, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -7, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -39, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_25001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_26001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_27001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_28001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_29001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3001.geometry}
          material={materials["entity_atlas.terrain_alpha.001"]}
          position={[24, -23, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_30001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_31001.geometry}
          material={materials["entity_atlas.terrain_alpha.001"]}
          position={[8, -23, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_32001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -23, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_33001.geometry}
          material={materials["entity_atlas.terrain_alpha.001"]}
          position={[8, -23, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_34001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -23, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_35001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -39, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_36001.geometry}
          material={materials["entity_atlas.terrain_alpha.001"]}
          position={[8, -39, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_37001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -39, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_38001.geometry}
          material={materials["entity_atlas.terrain_alpha.001"]}
          position={[8, -39, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_39001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -39, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -23, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_40001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_41001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_42001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_43001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_44001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_45001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_46001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_47001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_48001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_49001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[8, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5001.geometry}
          material={materials["entity_atlas.terrain_alpha.001"]}
          position={[24, -23, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_50001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-8, -39, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_51001.geometry}
          material={materials["entity_atlas.terrain_alpha.001"]}
          position={[-8, -39, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_52001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-8, -39, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_53001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-8, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_54001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-8, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_55001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-8, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_56001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-8, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_57001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-8, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_58001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-8, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_59001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-8, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -23, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_60001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-8, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_61001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-8, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_62001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-24, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_63001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-24, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_64001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-24, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_65001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-24, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_66001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-24, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_67001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-24, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_68001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-24, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_69001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[-24, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7001.geometry}
          material={materials["entity_atlas.terrain_alpha.001"]}
          position={[24, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8001.geometry}
          material={materials["terrain_atlas.terrain.001"]}
          position={[24, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9001.geometry}
          material={materials["terrain_atlas.terrain_blend.001"]}
          position={[24, -23, -27]}
        />
      </group>
      <group position={[31.572, 56.222, 32.592]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[24, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[24, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_100.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_101.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_102.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[24, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -7, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13002.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[8, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -39, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[24, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21002.geometry}
          material={materials["terrain_atlas.terrain_blend.002"]}
          position={[8, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_25002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_26002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_27002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_28002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[8, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_29002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-8, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[24, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_30002.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-8, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_31002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-8, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_32002.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-8, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_33002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-8, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_34002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-8, -39, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_35002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-8, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_36002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-8, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_37002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-8, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_38002.geometry}
          material={materials["terrain_atlas.terrain_blend.002"]}
          position={[-8, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_39002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-8, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4002.geometry}
          material={materials["terrain_atlas.terrain_blend.002"]}
          position={[24, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_40002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-8, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_41002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-8, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_42002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-8, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_43002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-8, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_44002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-8, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_45002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-8, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_46002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_47002.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-24, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_48002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_49002.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-24, -23, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[24, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_50002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -23, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_51002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -39, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_52002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_53002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -39, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_54002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_55002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_56002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_57002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_58002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_59002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[24, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_60002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_61002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_62002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_63002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-24, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_64002.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-40, 41, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_65002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, 41, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_66002.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-40, 41, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_67002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, 41, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_68002.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-40, 41, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_69002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, 41, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[24, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_70002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, 25, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_71002.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-40, 25, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_72002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, 25, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_73002.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-40, 9, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_74002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, 9, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_75002.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-40, 9, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_76002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, 9, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_77002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -7, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_78002.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-40, -7, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_79002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -7, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[24, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_80002.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-40, -7, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_81002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -7, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_82001.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-40, -7, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_83001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -7, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_84001.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-40, -7, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_85001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -7, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_86001.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -23, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_87.geometry}
          material={materials["entity_atlas.terrain_alpha.002"]}
          position={[-40, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_88.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_89.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9002.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[24, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_90.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -23, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_91.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -39, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_92.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_93.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_94.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_95.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_96.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_97.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_98.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_99.geometry}
          material={materials["terrain_atlas.terrain.002"]}
          position={[-40, -71, 5]}
        />
      </group>
      <group position={[-32.428, 56.634, 32.592]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, 41, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -7, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -23, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -23, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -39, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, 41, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_25003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_26003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_27003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_28003.geometry}
          material={materials["entity_atlas.terrain_alpha.003"]}
          position={[8, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_29003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, 25, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_30003.geometry}
          material={materials["entity_atlas.terrain_alpha.003"]}
          position={[8, -23, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_31003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -23, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_32003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -39, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_33003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_34003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -39, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_35003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_36003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_37003.geometry}
          material={materials["terrain_atlas.terrain_blend.003"]}
          position={[8, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_38003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_39003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, 9, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_40003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_41003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_42003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_43003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_44003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_45003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[8, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_46003.geometry}
          material={materials["entity_atlas.terrain_alpha.003"]}
          position={[-8, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_47003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-8, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_48003.geometry}
          material={materials["entity_atlas.terrain_alpha.003"]}
          position={[-8, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_49003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-8, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -7, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_50003.geometry}
          material={materials["entity_atlas.terrain_alpha.003"]}
          position={[-8, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_51003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-8, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_52003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-8, -39, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_53003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-8, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_54003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-8, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_55003.geometry}
          material={materials["terrain_atlas.terrain_blend.003"]}
          position={[-8, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_56003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-8, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_57003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-8, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_58003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-8, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_59003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-8, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6003.geometry}
          material={materials["entity_atlas.terrain_alpha.003"]}
          position={[24, -7, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_60003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-8, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_61003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-8, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_62003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-8, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_63003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-8, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_64003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -7, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_65003.geometry}
          material={materials["entity_atlas.terrain_alpha.003"]}
          position={[-24, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_66003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -23, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_67003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -23, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_68003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_69003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -39, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -7, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_70003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -55, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_71003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -55, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_72003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_73003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_74003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -55, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_75003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -71, 21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_76003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -71, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_77003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -71, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_78003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -71, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_79003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[-24, -71, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -7, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9003.geometry}
          material={materials["terrain_atlas.terrain.003"]}
          position={[24, -7, -27]}
        />
      </group>
      <group position={[-0.428, 120.222, 96.592]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1004.geometry}
          material={materials["terrain_atlas.terrain.004"]}
          position={[-8, -23, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2004.geometry}
          material={materials["terrain_atlas.terrain.004"]}
          position={[-8, -39, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3004.geometry}
          material={materials["terrain_atlas.terrain.004"]}
          position={[-8, -39, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4004.geometry}
          material={materials["terrain_atlas.terrain.004"]}
          position={[-8, -39, -43]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5004.geometry}
          material={materials["entity_atlas.terrain_alpha.004"]}
          position={[-8, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6004.geometry}
          material={materials["terrain_atlas.terrain.004"]}
          position={[-8, -55, -11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7004.geometry}
          material={materials["entity_atlas.terrain_alpha.004"]}
          position={[-8, -55, -27]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8004.geometry}
          material={materials["terrain_atlas.terrain.004"]}
          position={[-8, -55, -27]}
        />
      </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/Drake.glb");

