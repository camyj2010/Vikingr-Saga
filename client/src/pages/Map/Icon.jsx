import {  useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import icon from '../../img/Icon.png'
import { useRef } from 'react';
import * as THREE from 'three'
import { DoubleSide } from 'three';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default function introLecture() {
    const colorMap = useLoader(TextureLoader, icon)
    const coin = useRef(null)
    const navigate = useNavigate(   )

    

    useFrame((state, delta)=>{
        if(coin.current.position.y < 40){
            coin.current.position.y += 20 * delta   
            coin.current.rotation.x += 2 * delta          
        }

        if(coin.current.rotation.x > (- Math.PI * 0.5)){
            coin.current.rotation.x += 2 * delta
            coin.current.rotation.y += 10 * delta  
            //console.log(coin.current.rotation.y) 
        }
    })

    return (
        <mesh ref={coin} scale={10} rotation={[- Math.PI * 0.5,  Math.PI * 0.5, 0] } position={[70, -10, 50]} onClick={() => navigate('/Leccion1')}
    >
            <cylinderGeometry args={[1, 1, 0.1, 64, 1]} />
            <meshStandardMaterial side={DoubleSide} map={colorMap}/>
        </mesh>
    )
}
