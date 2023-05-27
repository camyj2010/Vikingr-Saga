import React, { useRef, useEffect, useState} from "react";
import { useGLTF } from "@react-three/drei";
import QuestionMark from "./QuestionMark";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import "../styles/Modelos.css"

export default function CHEST(props) {
  const { nodes, materials } = useGLTF("/static/CHEST.glb");
  const chestRef = useRef();
  const [pressed,setPressed] = useState(false);
  const [modelRotation, setModelRotation] = useState([0, 0, 0]);
  const handleDetalle = (detalle) => {
    Swal.fire({
      title: detalle,
      icon: 'info',
      showConfirmButton: false,
      background: '#1D2F6F',
      customClass: {
        title: 'mi-titulo',
      },
    })
  }
  return (
    <group ref={chestRef} {...props} dispose={null} >
       <QuestionMark position={[8,-5,24]} onClick={() => handleDetalle("Los vikingos no solo atacaban sorpresivamente, también empleaban tácticas de asedio y sitiaban ciudades fortificadas")}/>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_1.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[5, -10, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_2.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[5, -10, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_3.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[5, -26, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_4.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[5, -26, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_5.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, 6, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_6.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, 6, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_7.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, -10, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_8.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, -10, -15]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_9.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, -26, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_10.geometry}
        material={materials["terrain_atlas.terrain"]}
        position={[-11, -26, -15]}
      />
    </group>
  );
}

useGLTF.preload("/static/CHEST.glb");