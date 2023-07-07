import React, { Suspense } from 'react'
import './styles/Leccion2.css'
import './styles/Leccion4.css'
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
import hut from '../img/mini_hut.png';
import Fiordo from './modelsLesson4/Fiordo';
import FishingShip from './modelsLesson4/FishingShip';
import Midsommar from './modelsLesson4/Midsommar';
import FlagsC from './modelsLesson4/FlagsC';
import Food from './modelsLesson4/Food';

export default function Leccion4() {
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
                            <a href='#paises' className='link'>Países</a>
                        </li>
                        <li>
                            <a href='#linguistica' className='link'>Lengua</a>
                        </li>
                        <li>
                            <a href='#religioso' className='link'>Religión</a>
                        </li>
                        <li>
                            <a href='#festividades' className='link'>festividades</a>
                        </li>
                        <li>
                            <a href='#maritimo' className='link'> Legado del mar </a>
                        </li>
                    </ul>
                </nav>
                <div className='options_leecion4'>

                        <img className='map_image_leccion1' src={map} onClick={() => navigate('/Home')}/>
                        <img className='hut_image_leccion1' src={hut} onClick={() => navigate('/Hut')} />
                </div>


            </div>

            <div className='banner_container4'>
                    <p className='title_leccion4'>Legado de los vikingos</p>
            </div>
            <div id='paises' className='introduccion'>
                <div className='model_container'>
                    <div className='model_container_left' style={{ width: '70%' }}>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion1Left'>
                            Los países vikingos
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                        Se conocen como países vikingos a los cinco países nórdicos, esto es, a Suecia, Noruega, Dinamarca, 
                        Finlandia e Islandia, aunque Noruega es el país que más se ha relacionado siempre con los vikingos.
                        Los cinco países tienen muchas características en común, principalmente unas señas de identidad y 
                        unos valores compartidos que hacen que los lazos entre ellos sean muy fuertes, tanto a nivel cultural como histórico.

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
                                <FlagsC/>
                            </Canvas>
                        </Suspense>
                    </div>
                </div>
            </div>
            <div id='linguistica'className='arte'>

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
                                <Fiordo rotation={[Math.PI/20,19*Math.PI/12,0]}/>
                            </Canvas>
                        </Suspense>
                    </div>
                    <div className='model_container_left' style={{ width: '70%' }}>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion2Right'>
                                 Herencia Linguística
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                        Los vikingos dejaron una influencia lingüística significativa en los idiomas escandinavos modernos, 
                        como el noruego, sueco, danés e islandés. El antiguo idioma nórdico, hablado por los vikingos, 
                        ha dejado huellas en estos idiomas, con muchas palabras y estructuras gramaticales que tienen raíces en el nórdico
                        antiguo. Esta influencia lingüística conecta históricamente a los vikingos con los países escandinavos actuales,
                        y se pueden encontrar similitudes en términos naturales, de navegación, guerra y vida cotidiana.
                        Es importante destacar que si bien los idiomas escandinavos modernos comparten una base común en el antiguo idioma nórdico,
                        han evolucionado de manera diferente a lo largo del tiempo y presentan variaciones regionales.
                        Sin embargo, la influencia del nórdico antiguo en estos idiomas proporciona un vínculo histórico y cultural entre los vikingos y los habitantes de los países escandinavos en la actualidad.
                        
                        </p>
                    </div>
                </div>
            </div>
            <div id='religioso'className='religion'>
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
                                <Food rotation={[0,Math.PI/3,0]}/>
                            </Canvas>
                        </Suspense>
                    </div>
                    <div className='model_container_left' style={{ width: '70%' }}>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion2Right'>
                            Legado Religioso 

                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion2_text'>
                            <ul>
                                <li> La religión vikinga, basada en una cosmovisión mitológica, también ha dejado su influencia en los países escandinavos. Los dioses y diosas vikingos,
                                     como Odín, Thor y Freya, aún se encuentran presentes en la cultura y las festividades tradicionales de la región. 
                                     Además, los rituales y creencias asociadas con la religión vikinga siguen siendo recordados y apreciados.</li>
                                <li> Festividades
                                     </li>
                                <li> - Þorrablót: Esta festividad, típica de Islandia, honra al dios nórdico Þór (Thor).
                                    Es una celebración para dar gracias por la abundancia de alimentos y para honrar a los antepasados.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div id='festividades'className='literatura'>
                <div className='model_container'>
                    <div className='model_container_left' style={{ width: '70%' }}>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion1Left'>
                                 Otras festividades
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                        <ul>
                                <li> - Yule (Jól): Esta festividad corresponde a la celebración del solsticio de invierno y 
                                    tiene sus raíces en las antiguas tradiciones nórdicas. Durante el Yule, se realizaban rituales 
                                    y se encendían hogueras para dar la bienvenida al renacimiento del sol y celebrar el comienzo de un nuevo ciclo.</li>
                            
                                <li> - Midsommar (Solsticio de Verano): Esta festividad se celebra en el solsticio de verano, en junio, 
                                    y está relacionada con antiguos rituales paganos. Durante Midsommar, las personas se reúnen alrededor 
                                    de un poste adornado con flores y cintas, bailan y cantan canciones tradicionales. 
                                    Es una celebración alegre que marca la llegada del verano y la fertilidad de la naturaleza.</li>
                            </ul>
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
                                <Midsommar rotation={[0,Math.PI/2,0]}/>
                            </Canvas>
                        </Suspense>
                    </div>
                </div>
            </div>
            <div id='maritimo'className='arqui'>

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
                                <FishingShip />
                            </Canvas>
                        </Suspense>
                    </div>
                    <div className='model_container_left'>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion2Right'>
                            Legado del Mar

                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                        La destreza y el conocimiento de los vikingos en la navegación tuvieron un impacto duradero en la tradición 
                        marítima de los países escandinavos. A lo largo de los siglos, la relación de estos países con el mar ha sido
                        profunda y significativa, y se puede rastrear hasta la era vikinga. La navegación se convirtió en una parte 
                        esencial de la vida y la cultura de los pueblos escandinavos, y la construcción de barcos se convirtió en un
                        arte transmitido de generación en generación.

                        Incluso en la actualidad, la tradición marítima vikinga perdura en los países escandinavos. 
                        La navegación recreativa, los deportes acuáticos y la pesca continúan siendo prácticas comunes 
                        y apreciadas. Además, los barcos vikingos han dejado una marca en la iconografía y el simbolismo 
                        de la región, con su imagen prominente en banderas, escudos e incluso en festivales náuticos.
                        </p>
                    </div>
                </div>
            </div>
            <div className='incursion' >
                <div className='incursion_leccion1'>
                   <p className='quiz_btn' onClick={() => navigate('/Quiz_Legado')} >Incursion</p> 
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