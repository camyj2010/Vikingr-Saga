import {React, useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Experience from './Map/Experience'
import  {Loader} from '@react-three/drei'
import './styles/Home.css'
import flag from '../img/Salida1.png';


export default function Home() {
    const scene = useRef();
    const cameraSettings = {
        fov: 45,
        near: 0.3,
        far: 10000,
        position: [-130, 100, 120], // Ajusta la posición de la cámara
        rotation: [0, 0, 0], // Ajusta la rotación de la cámara
    }
    
      

    return (
        <div className='world'>
            <a href='/' className='btn_singoff'>
            
            <img className='signoff_image' src={flag} alt='Flag' />
            Cerrar Sesion
            </a>
            <Canvas
                shadows={true}
                camera={cameraSettings}
            >
                <Suspense>
                    <Experience />
                </Suspense>
            </Canvas>
            <Loader/>
        </div>
    )
}