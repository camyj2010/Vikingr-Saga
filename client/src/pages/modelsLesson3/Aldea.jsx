import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "../Question_mark";

export default function Aldea(props) {
  const { nodes, materials } = useGLTF("static/Aldea.glb");
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
        <Question_mark position={[45,7,10]} size={5} onClick={() => handleDetalle("Los vikingos también construían barcos funerarios llamados 'barcos de entierro' para honrar a los miembros prominentes de su sociedad. Estos barcos eran enterrados en tierra firme o incluso en el mar, junto con objetos valiosos y a menudo se realizaban rituales funerarios alrededor de ellos.")}/>
        <group position={[-0.343, 2.77, 3.222]} scale={0.015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_1.geometry}
          material={materials["terrain_atlas.terrain_blend"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_2.geometry}
          material={materials["terrain_atlas.terrain_alpha.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_3.geometry}
          material={materials["terrain_atlas.terrain.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_4.geometry}
          material={materials["terrain_atlas.terrain_alpha.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_5.geometry}
          material={materials["terrain_atlas.terrain.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_6.geometry}
          material={materials["terrain_atlas.terrain.012"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Aldea.glb");