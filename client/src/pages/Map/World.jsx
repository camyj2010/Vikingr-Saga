import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { StrictMode } from 'react'
import { Suspense } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    fov: 45,
    near: 0.3,
    far: 10000,
    position: [-130, 100, 120], // Ajusta la posición de la cámara
    rotation: [0, 0, 0], // Ajusta la rotación de la cámara
}

root.render(
    <div className='world'>
        <StrictMode>
            <Canvas
                camera={cameraSettings}
            >
                <Suspense>
                    <Experience />
                </Suspense>
            </Canvas>
        </StrictMode>
    </div>
)