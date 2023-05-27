import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import baseColor from '../../img/BaseColorQ.png'
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import {  useFrame, useLoader } from '@react-three/fiber'

export default function QuestionMark(props) {
  const { nodes, materials } = useGLTF("/static/QuestionMark.glb");
  const questionRef = useRef();
  
  useFrame((state, delta)=>{
    if(questionRef.current){
        questionRef.current.rotation.y += 2 * delta     
    }
  }
)
  return (
    <group {...props} dispose={null} rotation={[0,Math.PI,0]} ref={questionRef}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-16.22, 79.1, -47.2]} scale={109.42}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.question_mark__0.geometry}
              material={materials["Scene_-_Root"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/QuestionMark.glb");