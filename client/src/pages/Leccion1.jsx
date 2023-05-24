import React from 'react'
import './styles/Leccion1.css'
import Banner from '../img/Banner_leccion1.png'
import map from '../img/treasure-map.png'
import incursion from '../img/incursion.png'
import { useNavigate } from 'react-router-dom';

export default function Leccion1() {
    const navigate = useNavigate();
    return (
        <div className='contenedor_Leccion1'>
            <nav className='navbar_leccion1'>
                <ul className='links_leccion1'>
                    <li>
                        <a href='#hisotira' className='link'>Historia</a>
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
                <div className='map_leccion1'>
                    <a href='/Home'>
                        <img className='map_image_leccion1' src={map} />
                    </a>
                </div>
            </nav>

            <div className='banner_container'>
                <img className='banner_image_leccion1' src={Banner} />
                <p className='title_leccion1'>Vikingos</p>
            </div>
            <div id='hisotira'>
                <div className='leccion1Left'>
                    Vikingos
                </div>
                <p className='Leccion1_text'>Los vikingos fueron un grupo de guerreros y marinos pertenecientes a un conjunto de pueblos originarios de Escandinavia, en el norte de Europa.
                    Estos se hicieron conocidos por sus viajes de exploración marítima y por sus incursiones y saqueos en gran parte de Europa,
                    entre los siglos VIII a XI. </p>
            </div>
            <div id='origen'>
                <div className='leccion1Right'>
                    El Origen
                </div>
                <p className='Leccion1_text'>
                    Los vikingos fueron un grupo de navegantes y guerreros escandinavos que surgieron alrededor del siglo VIII. Originarios de países como Noruega,
                    Suecia y Dinamarca, se lanzaron a expediciones marítimas en busca de riquezas y tierras. Su transición de granjas a saqueos se debe a factores
                    como la superpoblación, la falta de tierras fértiles y la búsqueda de oportunidades económicas y políticas en otros territorios. Los vikingos
                    veían en los ataques a poblaciones costeras una forma de obtener botines y esclavos, asegurando así su supervivencia y ascenso social.
                    Datos curiosos
                </p>
            </div>
            <div id='incursiones'>
                <div className='leccion1Left'>
                    Las incursiones
                </div>
                <p className='Leccion1_text'>
                    Las incursiones vikingas fueron expediciones marítimas y saqueos realizados por los vikingos entre los siglos VIII y XI. Utilizando barcos rápidos,
                    atacaron regiones de Europa, desde las Islas Británicas hasta el este de Europa. Motivados por la superpoblación, la falta de tierras y la búsqueda
                    de riquezas, saquearon y capturaron esclavos. Estas incursiones generaron miedo y desestabilización, pero también llevaron a la fundación de asentamientos
                    vikingos permanentes en algunas áreas.

                </p>
            </div>
            <div id='barcos'>
                <div className='leccion1Right'>
                    Barcos Vikingos
                </div>
                <p className='Leccion1_text'>
                    Los barcos vikingos, como los drakkars, eran embarcaciones rápidas y ligeras.
                    Con cascos estrechos y largos, y proas y popas elevadas, podían navegar en aguas poco profundas y ríos.
                    Impulsados por velas y remos, los vikingos realizaban incursiones sorpresivas a velocidades de hasta 15 nudos,
                    saqueando y comerciando a lo largo de Europa. La importancia de estos barcos radicaba en su capacidad para explorar,
                    atacar y establecer rutas comerciales a larga distancia.
                </p>
            </div>
            <div className='incursion'>
                <div className='incursion_leccion1'>
                    Las incursiones
                </div>
                <img className='incursion_button' src={incursion} />
            </div>
        </div>
    )
}
