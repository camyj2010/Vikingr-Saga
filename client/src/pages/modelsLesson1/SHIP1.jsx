import React, { useRef, useEffect, useState  } from "react";
import { useGLTF } from "@react-three/drei";
import QuestionMark from "./QuestionMark";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Question_mark from "../Question_mark";


export default function SHIP1(props, canvas) {
  const { nodes, materials } = useGLTF("/static/Ship1.glb");
  const shipRef = useRef();
  const [pressed,setPressed] = useState(false);
  const [modelRotation, setModelRotation] = useState([0, 0, 0]);
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
    <group  ref={shipRef} {...props} dispose={null} scale={0.57}>
      <Question_mark scale = {0.2}position={[-3,-5,0]}size={1} onClick={() => handleDetalle("Utilizaban una técnica llamada construcción de clinker que consistía en solapar tablones de madera en lugar de unirlos con clavos, lo que hacía que los barcos fueran más flexibles y resistentes.")}/>
      <Question_mark scale = {0.3} position={[14,2,0]}size={1} onClick={() => handleDetalle("Eran embarcaciones de alto rendimiento con un casco poco profundo y estrecho, lo que les permitía navegar tanto en aguas abiertas como en ríos poco profundos.")}/>
      <Question_mark scale = {0.2} position={[-10,-8,-4]}size={1} onClick={() => handleDetalle("Los barcos vikingos variaban en tamaño, desde pequeñas embarcaciones de guerra hasta barcos más grandes utilizados para transportar mercancías y colonizar nuevas tierras.")}/>
      <Question_mark scale = {0.1} position={[-11,2.5,0]}size={1}  onClick={() => handleDetalle("Los barcos vikingos no solo navegaban en el mar, sino también en ríos y aguas costeras poco profundas. Lo que facilitaba los ataques sorpresas.")}/>
      <Question_mark scale = {0.2}position={[9,-7,4]}size={1}  onClick={() => handleDetalle("Alcanzaban 15 nudos (aproximadamente 28 kilómetros por hora), lo cual era muy rápido para la época")}/>
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