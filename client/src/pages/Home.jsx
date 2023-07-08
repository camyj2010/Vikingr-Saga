import { React, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Experience from './Map/Experience'
import { Loader } from '@react-three/drei'
import './styles/Home.css'
import flag from '../img/Salida1.png';
import hut from '../img/mini_hut.png';
import info from '../img/info.png';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useUserContext } from './UserProvider';
import Music_slider from '../components/Music_slider';
import Sound from 'react-sound';
import soundFile from '../sounds/OceanSound.mp3';
import { useNavigate } from 'react-router-dom';
import icon_salir from '../img/salir.png'

export default function Home() {
    const { user } = useUserContext()
    const [music, setMusic] = useState(10)
    const navigate = useNavigate();
    console.log(user)
    const scene = useRef();
    const cameraSettings = {
        fov: 45,
        near: 0.3,
        far: 100,
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
            <Sound
                url={soundFile}
                playStatus={Sound.status.PLAYING}
                // playFromPosition={0}
                loop={true}
                volume={music}
            />
            <div className='model_container_home'>
                <div className='btn_singoff' onClick={() => navigate('/')}>
                    {/* <img className='signoff_image' src={flag} alt='Flag' /> */}
                    <div className='btn_signoff_text'>
                        <img className='salir_btn' src={icon_salir} />
                        <p className='salir_text'>
                            Cerrar Sesión
                        </p>

                    </div>
                </div>
                <div className='options_home'>

                    <div className='sound_home'>
                        <Music_slider volume={music} setVolume={setMusic} />
                    </div>
                    <div className='btn_info'>
                        <img
                            className='info_image'
                            src={info}
                            onClick={() => handleDetalle("- Aquí podrás elegir a que lección deseas ingresar, cada isla es una lección. Puedes moverte por el mundo con el barco dándole click a el agua. \n \n - Ingresas a la lección dándole click a al botón arriba de cada isla. \n \n - Si deseas ir a tu perfil puedes darle click en la cabaña al lado derecho de tu pantalla.")}
                        />
                    </div>
               
                        <img onClick={() => navigate('/Hut')} className='hut_image' src={hut} />
                  
                </div>
            </div>
            <Canvas
                shadows={true}
                camera={cameraSettings}
            >
                <Suspense>
                    <Experience />
                </Suspense>
            </Canvas>
            <Loader />
        </div>
    )
}