import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Experience from './Map/Experience'
import './styles/Home.css'

export default function Home() {

    const cameraSettings = {
        fov: 45,
        near: 0.3,
        far: 10000,
        position: [-130, 100, 120], // Ajusta la posición de la cámara
        rotation: [0, 0, 0], // Ajusta la rotación de la cámara
    }

    return (
        <div className='world'>

            <Canvas
                camera={cameraSettings}
            >
                <Suspense>
                    <Experience />
                </Suspense>
            </Canvas>
        </div>
    )
}
