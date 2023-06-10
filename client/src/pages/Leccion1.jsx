import React, { Suspense } from 'react'
import './styles/Leccion1.css'
import Banner from '../img/BG_leccion1.jpg'
import map from '../img/mapa-del-tesoro.png'
import incursion from '../img/incursion.png'
import { useNavigate } from 'react-router-dom';
import AXE from './modelsLesson1/AXE'
import CHEST from './modelsLesson1/CHEST'
import SHIP1 from './modelsLesson1/SHIP1'
import RASTRILLO from './modelsLesson1/RASTRILLO'
import INCURSION from './modelsLesson1/INCURSION'
import VIKING from './modelsLesson1/VIKING'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import AxePlusRastrillo from './modelsLesson1/AxePlusRastrillo'
import SkullPlusChest from './modelsLesson1/SkullPlusChest'
import video from '../img/smoke.mp4'

export default function Leccion1() {
    const navigate = useNavigate();
    const cameraSettings = {
        fov: 45,
        near: 0.1,
        far: 300,
        position: [0, 0, 20], // Ajusta la posición inicial de la cámara
        rotation: [0, 0, 0], // Ajusta la rotación de la cámara
    };

    return (
        <div className='contenedor_Leccion1'>
            <div className='navbar_leccion1'>
                <nav>
                    <ul className='links_leccion1'>
                        <li>
                            <a href='#historia' className='link'>Historia</a>
                        </li>
                        <li>
                            <a href='#origen' className='link'>Origen</a>
                        </li>
                        <li>
                            <a href='#incursiones' className='link'>incursiones</a>
                        </li>
                        <li>
                            <a href='#barcos' className='link'> Barcos vikingos</a>
                        </li>
                    </ul>
                </nav>
                <div >
                    <a href='/Home'>
                        <img className='map_image_leccion1' src={map} />
                    </a>
                </div>


            </div>

            <div className='banner_container'>
                <img className='banner_image_leccion1' src={Banner} />
                <p className='title_leccion1'>Vikingos</p>
            </div>
            <div id='historia' className='historia'>
                <div className='model_container'>
                    <div className='model_container_left' style={{ width: '70%' }}>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion1Left'>
                                Vikingos
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                            Los vikingos fueron un grupo de guerreros y marinos pertenecientes a un conjunto de pueblos originarios de Escandinavia,
                            en el norte de Europa. Estos se hicieron conocidos por sus viajes de exploración marítima y por sus incursiones y saqueos
                            en gran parte de Europa, entre los siglos VIII a XI.
                        </p>
                    </div>
                    <div className='model_container_right' style={{ width: '30%' }}>
                        <Suspense>
                            <Canvas camera={cameraSettings}>
                                <OrbitControls

                                    enableZoom={false}
                                    enablePan={false}
                                    minDistance={5}
                                    maxDistance={15}
                                />
                                <ambientLight />
                                <VIKING scale={1} rotation={[0, Math.PI / 2, 0]} />
                            </Canvas>
                        </Suspense>
                    </div>
                </div>
            </div>
            <div id='origen' className='origen'>

                <div className='model_container'>
                    <div className='model_container_right'>
                        <Suspense>
                            <Canvas camera={cameraSettings}>
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    minDistance={5} // Ajusta la distancia mínima de la cámara al objeto
                                    maxDistance={20} // Ajusta la distancia máxima de la cámara al objeto
                                />
                                <ambientLight />
                                <AxePlusRastrillo scale={0.13}
                                //  rotationX={Math.PI / 2} 
                                />
                            </Canvas>
                        </Suspense>
                    </div>
                    <div className='model_container_left'>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion1Left' >
                                Origenes
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                            Los vikingos fueron un grupo de navegantes y guerreros escandinavos que surgieron alrededor del siglo VIII. Originarios de países como Noruega,
                            Suecia y Dinamarca, se lanzaron a expediciones marítimas en busca de riquezas y tierras. Su transición de granjas a saqueos se debe a factores
                            como la superpoblación, la falta de tierras fértiles y la búsqueda de oportunidades económicas y políticas en otros territorios. Los vikingos
                            veían en los ataques a poblaciones costeras una forma de obtener botines y esclavos, asegurando así su supervivencia y ascenso social.
                            Datos curiosos
                        </p>
                    </div>
                </div>
            </div>
            <div id='incursiones' className='barcos'>
                <div className='model_container'>
                    <div className='model_container_left'>
                        <div style={{ position: 'relative' }}>
                        <div className='leccion1Left' >
                                Las Incursiones
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                            Las incursiones vikingas fueron expediciones marítimas y saqueos realizados por los vikingos entre los siglos VIII y XI. Utilizando barcos rápidos,
                            atacaron regiones de Europa, desde las Islas Británicas hasta el este de Europa. Motivados por la superpoblación, la falta de tierras y la búsqueda
                            de riquezas, saquearon y capturaron esclavos. Estas incursiones generaron miedo y desestabilización, pero también llevaron a la fundación de asentamientos
                            vikingos permanentes en algunas áreas.
                        </p>
                    </div>
                    <div className='model_container_right'>
                        <Suspense>
                            <Canvas camera={cameraSettings}>
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    minDistance={5} // Ajusta la distancia mínima de la cámara al objeto
                                    maxDistance={20} // Ajusta la distancia máxima de la cámara al objeto
                                />
                                <ambientLight />
                                <SkullPlusChest scale={0.2} rotation={[0, Math.PI, 0]} />
                            </Canvas>
                        </Suspense>
                    </div>
                </div>
            </div>
            <div id='barcos' className='barcos_vikingos'>
                <div className='model_container'>
                    <div className='model_container_right'>
                        <Suspense>
                            <Canvas camera={cameraSettings}>
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    minDistance={5} // Ajusta la distancia mínima de la cámara al objeto
                                    maxDistance={20} // Ajusta la distancia máxima de la cámara al objeto
                                />
                                <ambientLight />
                                <SHIP1 scale={1.2} />
                            </Canvas>
                        </Suspense>
                    </div>
                    <div className='model_container_left'>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion1Left' >
                                Barcos Vikingos
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                            Los barcos vikingos, como los drakkars, eran embarcaciones rápidas y ligeras.
                            Con cascos estrechos y largos, y proas y popas elevadas, podían navegar en aguas poco profundas y ríos.

                            Impulsados por velas y remos, los vikingos realizaban incursiones sorpresivas a velocidades de hasta 15 nudos,
                            saqueando y comerciando a lo largo de Europa. La importancia de estos barcos radicaba en su capacidad para explorar,
                            atacar y establecer rutas comerciales a larga distancia.
                        </p>
                    </div>
                </div>
            </div>
            <div className='incursion' >
                <div className='incursion_leccion1'>
                   <p className='quiz_btn' onClick={() => navigate('/Quiz_Vikingos')} >Incursion</p> 
                </div>
                <video autoPlay loop muted className="video-de-fondo">
                    <source src={video} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                {/* <img className='incursion_button' src={incursion} /> */}
            </div>
        </div>
    )
}