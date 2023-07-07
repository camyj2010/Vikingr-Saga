import React, { Suspense } from 'react'
import './styles/Leccion2.css'
import './styles/Leccion3.css'
import map from '../img/mapa-del-tesoro.png'
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import video from '../img/smoke.mp4'
import MONOLITH from './modelsLesson3/MONOLITH'
import Oseberg from './modelsLesson3/Oseberg'
import Drake from './modelsLesson3/Drake'
import VikingHouse from './modelsLesson3/VikingHouse'
import Aldea from './modelsLesson3/Aldea'


export default function Leccion3() {
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
                            <a href='#Masguerra' className='link'>Más que guerra</a>
                        </li>
                        <li>
                            <a href='#Arte' className='link'>Arte</a>
                        </li>
                        <li>
                            <a href='#Literatura' className='link'>Literatura</a>
                        </li>
                        <li>
                            <a href='#Arquitectura' className='link'> Arquitectura </a>
                        </li>
                    </ul>
                </nav>
                <div >
                    <a href='/Home'>
                        <img className='map_image_leccion1' src={map} />
                    </a>
                </div>


            </div>

            <div className='banner_container3'>
                    <p className='title_leccion3'>¿Guerreros y algo más?</p>
            </div>
            <div id='Masguerra' className='introduccion'>
                <div className='model_container'>
                    <div className='model_container_left' style={{ width: '70%' }}>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion1Left'>
                            Más que guerra
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                        Los vikingos no solo fueron guerreros, sino también artistas y arquitectos. 
                        Con su habilidad en la talla de madera, la orfebrería y la construcción de magníficos barcos y iglesias de madera, demostraron su destreza en diversas formas de expresión artística. 
                        Además, su tradición oral transmitía sagas épicas y poesía que enaltecían su cultura. 
                        Los vikingos fueron mucho más que guerreros, dejando un legado artístico perdurable.
                        </p>
                    </div>
                    <div className='model_container_right'>
                        <Suspense>
                            <Canvas camera={cameraSettings}>
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={true}
                                    minDistance={5} // Ajusta la distancia mínima de la cámara al objeto
                                    maxDistance={20} // Ajusta la distancia máxima de la cámara al objeto
                                />
                                <ambientLight />
                                <Aldea scale={0.2} position={[-5,-5,-5]}/>
                            </Canvas>
                        </Suspense>
                    </div>
                </div>
            </div>
            <div id='Arte'className='arte'>

                <div className='model_container'>
                    <div className='model_container_right'>

                        <Suspense>
                            <Canvas camera={cameraSettings}>
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={true}
                                    minDistance={5} // Ajusta la distancia mínima de la cámara al objeto
                                    maxDistance={20} // Ajusta la distancia máxima de la cámara al objeto
                                />
                                <ambientLight />
                                <MONOLITH rotation={[0,13*Math.PI/12,0]}/>
                            </Canvas>
                        </Suspense>
                    </div>
                    <div className='model_container_left' style={{ width: '70%' }}>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion2Right'>
                                El Arte
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                        La cultura vikinga produjo diversas obras de arte que reflejan la habilidad técnica y el estilo estético de ese período. 
                        Aunque muchos de los objetos vikingos se han perdido con el tiempo, aún se conservan algunas piezas notables.

                        </p><p className='Leccion1_text'>
                        Los vikingos eran hábiles metalúrgicos y producían objetos de metal ornamentados. 
                        El diseño de joyas vikingas, como brazaletes, anillos y collares, se caracterizaba por su estilo intrincado y detallado.
                        Los objetos de uso diario, como cucharas, cuchillos y hebillas, también eran cuidadosamente decorados con grabados y filigranas.
                        En adición, se encontraron monumentos de piedra en la región, como los famosos "piedras rúnicas". 
                        
                        </p>
                    </div>
                </div>

                <div className='model_container'>
                    <div className='model_container_right'>

                        <Suspense>
                            <Canvas camera={cameraSettings}>
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={true}
                                    minDistance={5} // Ajusta la distancia mínima de la cámara al objeto
                                    maxDistance={15} // Ajusta la distancia máxima de la cámara al objeto
                                />
                                <ambientLight />
                                <Oseberg rotation={[0,Math.PI/3,0]}/>
                            </Canvas>
                        </Suspense>
                    </div>
                    <div className='model_container_left' style={{ width: '70%' }}>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion2Right'>
                            Obras famosas 

                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion2_text'>
                            <ul>
                                <li> - Barco de Oseberg: Es un barco funerario vikingo del siglo IX que fue descubierto en Noruega. 
                                    El barco estaba ricamente decorado con tallas intrincadas en madera, que representaban figuras humanas, animales y motivos geométricos.</li>
                                <li> - Piedras Rúnicas de Jelling: Ubicadas en Dinamarca, estas dos piedras rúnicas del siglo X son consideradas un importante testimonio histórico y artístico de la época vikinga.
                                     </li>
                                <li> - Joyas vikingas: Los vikingos producían una variedad de joyas ornamentadas con metales preciosos y gemas. 
                                    Los brazaletes de plata y oro, anillos, broches y colgantes solían tener diseños intrincados con motivos animales y entrelazados, 
                                    como el famoso estilo "nudo vikingo".</li>
                                <li> - Relieves de estelas: Algunas estelas vikingas, como la Estela de Rök en Suecia, presentan relieves tallados que representan escenas mitológicas y figuras humanas. 
                                    Estas estelas servían como monumentos conmemorativos o marcadores de tumbas.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div id='Literatura'className='literatura'>
                <div className='model_container'>
                    <div className='model_container_left' style={{ width: '70%' }}>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion1Left'>
                                Literatura
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                        La civilización nórdica es rica en tradiciones literarias y cuenta con una amplia gama de obras importantes. 
                        Algunas de las características distintivas de la literatura nórdica incluyen un fuerte enfoque en la naturaleza, una conexión con la historia y las sagas antiguas,
                         y una exploración de temas como la identidad, el aislamiento y el conflicto interno. Algunos ejemplo de estas obras se encuentran,
                        La Edda Poética que  Compuesta en el siglo XIII, es una recopilación de poemas épicos y mitológicos que forman la base de la mitología nórdica.
                        Otro ejemplo es La saga de los Volsungos (Völsungasaga): Una de las sagas islandesas más conocidas, 
                        narra la historia de la familia Volsung y presenta elementos de la mitología nórdica
                        </p>
                    </div>
                    <div className='model_container_right'>
                        <Suspense>
                            <Canvas camera={cameraSettings}>
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={true}
                                    minDistance={5} // Ajusta la distancia mínima de la cámara al objeto
                                    maxDistance={20} // Ajusta la distancia máxima de la cámara al objeto
                                />
                                <ambientLight />
                                <Drake rotation={[0, 5*Math.PI/12, 0]}/>
                            </Canvas>
                        </Suspense>
                    </div>
                </div>
            </div>
            <div id='Arquitectura'className='arqui'>

                <div className='model_container'>
                    <div className='model_container_right'>

                        <Suspense>
                            <Canvas camera={cameraSettings}>
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={true}
                                    minDistance={10} // Ajusta la distancia mínima de la cámara al objeto
                                    maxDistance={20} // Ajusta la distancia máxima de la cámara al objeto
                                />
                                <ambientLight />
                                <VikingHouse  position={[1,-2,0]}/>
                            </Canvas>
                        </Suspense>
                    </div>
                    <div className='model_container_left'>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion2Right'>
                                Arquitectura y diseño 
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                        Se caracterizaban por la construcción de distintos tipos de estructuras y la producción de objetos tanto funcionales como decorativos.
                        La arquitectura y el diseño vikingo reflejaban la habilidad técnica y el estilo artístico de la época, 
                        además de mostrar una estrecha relación con la naturaleza y el entorno en el que vivían los vikingos.
                        </p><p className='Leccion1_text'>La arquitectura vikinga se basaba en construcciones de madera, 
                        como casas y granjas, debido a la escasez de piedra en la región. Las casas eran rectangulares y 
                        organizadas alrededor de un espacio central para actividades comunitarias.
                         Además, los vikingos eran expertos en tallados en madera, adornando objetos y muebles con diseños de figuras mitológicas y animales.
                        </p>
                    </div>
                </div>
            </div>
            <div className='incursion' >
                <div className='incursion_leccion1'>
                   <p className='quiz_btn' onClick={() => navigate('/Quiz_Arte')} >Incursion</p> 
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