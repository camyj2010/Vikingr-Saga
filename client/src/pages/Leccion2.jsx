import React, { Suspense } from 'react'
import './styles/Leccion2.css'
import { useUserContext } from './UserProvider';
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
import BEOWULF from './modelsLesson2/BEOWULF';
import RAGNAROK from './modelsLesson2/RAGNAROK';
import IceVsFire from './modelsLesson2/IceVsFire';
import ThorO from './modelsLesson2/ThorO';
import Odin from './modelsLesson2/Odin';
export default function Leccion1() {
    const { user } = useUserContext();
    console.log(user);
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
                            <a href='#laCreacion' className='link'>La Creación</a>
                        </li>
                        <li>
                            <a href='#losDioses' className='link'>Los Dioses</a>
                        </li>
                        <li>
                            <a href='#beowulf' className='link'>Beowulf</a>
                        </li>
                        <li>
                            <a href='#ragnarok ' className='link'> Ragnarök </a>
                        </li>
                    </ul>
                </nav>
                <div >
                    <a href='/Home'>
                        <img className='map_image_leccion1' src={map} />
                    </a>
                </div>


            </div>

            <div className='banner_container2'>
                    <p className='title_leccion2'>Mitologia Nordica</p>
            </div>
            <div id='laCreacion' className='creacion'>
                <div className='model_container'>
                    <div className='model_container_left' style={{ width: '70%' }}>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion1Left'>
                                La Creacion
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                            Según la mitología nórdica, el mundo se creó a partir del choque entre el fuego y el hielo. En el principio había dos regiones: Muspelheim, el reino del fuego, y Niflheim, el reino del hielo. Del choque entre ambos surgió un vasto abismo llamado Ginnungagap.
                        </p><p className='Leccion1_text'>
                            Dentro de este abismo, el calor de Muspelheim y el frío de Niflheim se encontraron, creando el primer ser vivo, Ymir, un gigante de hielo. A medida que Ymir sudaba, nacieron otros gigantes de su cuerpo.
                            Del Ginnungagap también emergió Audhumla, una vaca primordial que se alimentaba del hielo. Mientras lamía el hielo, reveló a Buri, el primer dios nórdico, quien tuvo un hijo llamado Bor.
                        </p><p className='Leccion1_text'>
                            Bor se casó con la giganta Bestla y juntos tuvieron tres hijos: Odin, Vili y Ve. Estos dioses se levantaron contra Ymir y lo mataron. Con su cuerpo crearon el mundo conocido como Midgard, la Tierra, y utilizaron su cráneo para formar el cielo, su sangre para los mares y su carne para la tierra. Así, la creación del mundo según la mitología nórdica tuvo lugar a partir de esta serie de eventos cósmicos y la intervención de los dioses.

                        </p>
                    </div>
                    <div className='model_container_right'>
                        <Suspense>
                            <Canvas camera={cameraSettings}>
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={true}
                                    minDistance={5} // Ajusta la distancia mínima de la cámara al objeto
                                    maxDistance={10} // Ajusta la distancia máxima de la cámara al objeto
                                />
                                <ambientLight />
                                <IceVsFire rotation={[Math.PI/6,13*Math.PI/12,0]}/>
                            </Canvas>
                        </Suspense>
                    </div>
                </div>
            </div>
            <div id='losDioses'className='dioses'>

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
                                <Odin rotation={[0,Math.PI/2,0]}/>
                            </Canvas>
                        </Suspense>
                    </div>
                    <div className='model_container_left' style={{ width: '70%' }}>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion2Right'>
                                ¿Quienes eran los dioses?
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion2_text'>
                            Los dioses nórdicos eran una amplia pantheon de deidades veneradas en la mitología nórdica, que era la creencia religiosa de los pueblos escandinavos y germanos durante la Era Vikinga y la Edad Media. Algunos de los principales dioses nórdicos incluyen:
                        </p>
                        <ul className='Leccion2_text'>
                            <li> -  Odin: Dios supremo, gobernante de Asgard, dios de la guerra, la sabiduría y la poesía.</li>
                            <li> -  Freya: Diosa del amor, la fertilidad y la magia.</li>
                            <li> -  Loki: Dios astuto y travieso, conocido por su habilidad para cambiar de forma.</li>
                            <li> -  Frigg: Diosa del matrimonio y la maternidad, esposa de Odin.</li>
                        </ul>
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
                                <ThorO rotation={[0,Math.PI/2,0]}/>
                            </Canvas>
                        </Suspense>
                    </div>
                    <div className='model_container_left' style={{ width: '70%' }}>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion2Right'>
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion2_text'>
                            <ul>
                                <li> - Thor: Dios del trueno, el rayo y la fuerza. Hijo de Odin.</li>
                                <li> - Balder: Dios de la luz, la belleza y la bondad.</li>
                                <li> - Frey: Dios de la fertilidad, la prosperidad y el buen tiempo.</li>
                                <li> - Tyr: Dios de la guerra y la justicia.</li>
                                <li> - Heimdal: Guardián de los dioses, protector de Bifrost (el puente del arcoíris) y con habilidades sobrehumanas.</li>
                                <li> - Njord: Dios del mar y la navegación.</li>
                                <li> - Skadi: Diosa de la caza, el invierno y las montañas.</li>
                                <li> - Hel: Diosa de los muertos y gobernante del reino de los muertos, Helheim.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div id='beowulf'className='leyenda'>
                <div className='model_container'>
                    <div className='model_container_left' style={{ width: '70%' }}>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion1Left'>
                                La leyenda de Beowulf
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                            El poema nórdico de Beowulf es una antigua epopeya escandinava que narra la historia del héroe homónimo.
                            Compuesto en el siglo VIII, el poema tiene lugar en Dinamarca y Suecia, y sigue las hazañas de Beowulf mientras se enfrenta a monstruos y dragones para proteger a su pueblo.
                            Beowulf es un líder valiente que se convierte en rey y encarna virtudes como la lealtad y el honor.
                        </p><p className='Leccion1_text'>El poema fusiona elementos históricos y mitológicos, y refleja tanto la cultura pagana como la creciente influencia cristiana. Transmitido oralmente durante mucho tiempo, fue finalmente registrado por escribas medievales.
                            Beowulf es considerado uno de los tesoros literarios más antiguos en inglés y proporciona una visión fascinante de la era vikinga y el folclore germánico.
                            Es un testimonio duradero del poder de la poesía para preservar la memoria colectiva de una civilización.
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
                                <BEOWULF scale={0.2} rotation={[0, Math.PI/2, 0]} />
                            </Canvas>
                        </Suspense>
                    </div>
                </div>
            </div>
            <div id='ragnarok'className='ragnarok'>

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
                                <RAGNAROK rotation={[0,-Math.PI/2,0]} position={[3,-2,0]}/>
                            </Canvas>
                        </Suspense>
                    </div>
                    <div className='model_container_left'>
                        <div style={{ position: 'relative' }}>
                            <div className='leccion2Right'>
                                La leyenda del Ragnarök
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '20%', borderBottom: '3px solid white' }}></div>
                        </div>
                        <p className='Leccion1_text'>
                            El Ragnarök es el apocalipsis en la mitología nórdica, una batalla cósmica que marca el fin del mundo y el renacimiento de un nuevo ciclo.
                            Los dioses se enfrentan a sus enemigos, como los gigantes de hielo y las fuerzas del caos.
                            Fenrir, el lobo gigante, se libera y lucha contra Odín, quien muere en el combate.
                            El monstruoso serpiente marina, Jormungandr, emerge del océano y lucha contra Thor, resultando en la muerte de ambos.
                        </p><p className='Leccion1_text'>Los dioses y los héroes valientes se enfrentan a una derrota inevitable, y el mundo es consumido por el fuego y las inundaciones.
                            Sin embargo, de las cenizas surge un nuevo mundo, con un nuevo sol y nuevas deidades.
                            El Ragnarök representa la idea de que incluso los dioses son mortales y que el ciclo de la vida y la muerte es inevitable.
                        </p>
                    </div>
                </div>
            </div>
            <div className='incursion' >
                <div className='incursion_leccion1'>
                   <p className='quiz_btn' onClick={() => navigate('/Quiz_Mitologia')} >Incursion</p> 
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