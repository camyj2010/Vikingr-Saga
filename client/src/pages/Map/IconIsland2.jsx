import {  useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import icon2 from '../../img/Icon2.png'
import { useRef } from 'react';
import * as THREE from 'three'
import { DoubleSide } from 'three';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Island1 from '../Island1/Island1';

export default function introLecture2() {
    const colorMap = useLoader(TextureLoader, icon2)
    const coin = useRef(null)
    const navigate = useNavigate()
    

    useFrame((state, delta)=>{
        if(coin.current.position.y < 45){
            coin.current.position.y += 8 * delta   
            coin.current.rotation.z += 8 * delta          
        }
        
        if(coin.current.rotation.x > (- Math.PI * 0.5)){
            coin.current.rotation.z += 1 * delta
        }
    })

    return (
        <mesh ref={coin} scale={8} rotation={[Math.PI * 0.5,  0, 0] } position={[-140, 90, -150]} onClick={() => navigate('/Leccion2')}
    >
            <cylinderGeometry args={[1, 1, 0.1, 64, 1]} />
            <meshStandardMaterial side={DoubleSide} map={colorMap}/>
        </mesh>
    )
}
