import {React, useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Experience from './Map/Experience'
import  {Loader} from '@react-three/drei'
import './styles/Home.css'
import flag from '../img/Salida1.png';
import hut from '../img/mini_hut.png';
import info from '../img/info.png';
import Swal from 'sweetalert2/dist/sweetalert2.js'


export default function Home() {
    const scene = useRef();
    const cameraSettings = {
        fov: 45,
        near: 0.3,
        far: 10000,
        position: [-130, 100, 120], // Ajusta la posición de la cámara
        rotation: [0, 0, 0], // Ajusta la rotación de la cámara
    }
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
        <div className='world'>
            <div className='model_container_home'>
                
                <a href='/' className='btn_singoff'>
                    <img className='signoff_image' src={flag} alt='Flag' />
                    Cerrar Sesión
                </a>
                <a  className='btn_info' onClick={() => handleDetalle("Aqui podras elegir a que leccion deseas ingresar dandole click a al boton arriba de cada isla. Si deseas ir a tu perfil puedes darle click en la cabaña al lado derecho de tu pantalla")}>
                    <img className='info_image' src={info} />
                </a>
                <a href='/Hut' className='btn_hut'>
                    <img className='hut_image' src={hut} />
                </a>
            </div>
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