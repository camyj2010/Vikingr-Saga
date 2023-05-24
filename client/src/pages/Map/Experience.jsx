import { OrbitControls, Stars, useHelper } from '@react-three/drei'
import Shader from './Shader'
import Island1 from '../Island1/Island1'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { PointLightHelper } from 'three'
//import Sun from './Sun'

export default function Experience() {
    const pointLightRef = useRef();
    useHelper(pointLightRef, PointLightHelper,1)
    const sunRef = useRef();
    const animate = (time) => {
        const speed = 0.01; 
        const radius = 400;
        const x = Math.cos(time * speed) * radius;
        const y = Math.sin(time * speed) * radius;
        sunRef.current.rotation.x += 0.01; // Rotación en el eje x
        sunRef.current.rotation.y += 0.01; // Rotación en el eje y
        sunRef.current.position.set(x, y, 0);
      };
      useFrame(({ clock }) => animate(clock.elapsedTime));
    return <>
        <group position={[-60,0,-50]}>
        <OrbitControls makeDefault />
        {/* <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />*/}
        <ambientLight intensity={0.3} /> 
        {/* <Stars radius={50} depth={10} count={5000} factor={4} saturation={0} fade speed={1} /> */}
        <Shader/>
        <Island1 position={[0,20,0]}/>
        {/*The sun*/}
        <mesh ref={sunRef} position={[ 4, 500 , 4]}>
        <sphereGeometry args={[50, 100, 100]} />
        <meshBasicMaterial color={0xffff00} />
        <pointLight ref= {pointLightRef} castShadow = {true} intensity={1.5} shadow-mapSize={ [ 512, 512 ] }/>
        </mesh>
        </group> 
        
    </>
}







