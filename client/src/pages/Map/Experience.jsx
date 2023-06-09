import { OrbitControls, Stars, useHelper, PerspectiveCamera } from '@react-three/drei'
import Shader from './Shader'
import Island1 from '../Island1/Island1'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { PointLightHelper } from 'three'
import IconLecture1 from './Icon'
import IconLecture2 from './IconIsland2'
import { useNavigate } from 'react-router-dom'
import Leccion1 from '../../pages/Leccion1'
import QuestionMark from '../modelsLesson1/QuestionMark'

export default function Experience() {
    const pointLightRef = useRef();
    useHelper(pointLightRef, PointLightHelper, 1)
    const sunRef = useRef();
    const cameraRef = useRef();
  
    const animate = (time) => {
        const speed = 0.5; 
        const radius = 1000;
        const x = Math.cos(time * speed) * radius;
        const y = Math.sin(time * speed) * radius;
        sunRef.current.rotation.x += 0.01; // Rotación en el eje x
        sunRef.current.rotation.y += 0.01; // Rotación en el eje y
        sunRef.current.position.set(x, y, 0);
    };

    useFrame(({ clock }) => animate(clock.elapsedTime));
    
    return (
        <>
            <group position={[-60, 0, -50]}>
                <PerspectiveCamera ref={cameraRef} makeDefault position={[50,5, 180]} />
                <OrbitControls
                    camera={cameraRef.current}
                    maxPolarAngle={Math.PI / 2} // Limita el movimiento hacia arriba y hacia abajo
                />
                {/* <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />*/}
                <ambientLight intensity={1} />  
                {/* <Stars radius={50} depth={10} count={5000} factor={4} saturation={0} fade speed={1} /> */}
                <Shader /> 
                <IconLecture1 />  
                <IconLecture2 />     
                <Island1 position={[30, 20, -30]} /> 
                <mesh ref={sunRef} position={[4, 500, 4]}>
                    <sphereGeometry args={[50, 500, 100]} />
                    <meshBasicMaterial color={0xffff00} />
                    <pointLight ref={pointLightRef} castShadow={true} intensity={2} shadow-mapSize={[512, 512]} />
                </mesh>
                {/* <QuestionMark scale={10}/> */}
            </group> 
        </>
    )
}
