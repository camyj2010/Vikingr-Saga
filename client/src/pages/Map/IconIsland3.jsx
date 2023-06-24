import {  useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import icon3 from '../../img/Icon3.png'
import { useRef } from 'react';
import * as THREE from 'three'
import { DoubleSide } from 'three';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Island1 from '../Island1/Island1';

export default function introLecture3() {
    const colorMap = useLoader(TextureLoader, icon3)
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
        <mesh ref={coin} scale={8} rotation={[Math.PI * 0.5,  0, 0] } position={[180, 100, -270 ]} onClick={() => navigate('/Leccion3')}
    >
            <cylinderGeometry args={[1, 1, 0.1, 64, 1]} />
            <meshStandardMaterial side={DoubleSide} map={colorMap}/>
        </mesh>
    )
}
