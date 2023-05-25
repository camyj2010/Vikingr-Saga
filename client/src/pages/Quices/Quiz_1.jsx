import React, { useState } from 'react'
import '../styles/Quiz1.css'
import hacha from '../../img/incursion.png'
import flag from '../../img/white-flag.png'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useNavigate } from 'react-router-dom';


export default function Quiz_1() {
    const [res, setRes] = useState(null)
    const navigate = useNavigate();
    console.log(res)

    if (res == null){
        NaN
    }
    else if (res == 'pirata') {
        Swal.fire({
            title: 'Brindas honor a los dioses',
            icon: 'success',
            iconColor : '#fff',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: "#49C6E5",
            background : '#49C6E5',
            customClass: {
                title: 'mi-titulo_succes',
                confirmButton: 'custom-confirm-button'
            },
            
        });
    
    }
    else if (res == 'Granjeros') {
        Swal.fire({
            title: 'Brindas honor a los dioses',
            icon: 'success',
            iconColor : '#fff',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: "#49C6E5",
            background : '#49C6E5',
            customClass: {
                title: 'mi-titulo_succes',
                confirmButton: 'custom-confirm-button'
            },
            
        });
    }
    else if (res == '15 nudos') {
        Swal.fire({
            title: 'Brindas honor a los dioses, haz terminado con exito la batalla',
            icon: 'success',
            iconColor : '#fff',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: "#49C6E5",
            background : '#49C6E5',
            customClass: {
                title: 'mi-titulo_succes',
                confirmButton: 'custom-confirm-button'
            },
            
        });
    }
    else{
        Swal.fire({
            title: 'no lograste detener el ragnarok',
            icon: 'error',
            iconColor : '#FE3D3D',
            showCancelButton: true,
            cancelButtonText: 'Reitentar',
            cancelButtonColor: '#830615',
            confirmButtonText: 'Aceptar',
            confirmButtonText: 'Retirada',
            confirmButtonColor: "#830615",
            background : '#830615',
            customClass: {
                title: 'mi-titulo_fail',
                confirmButton: 'custom-confirm-button',
                cancelButton: 'custom-confirm-button'
            },
            preConfirm: () => {
                navigate('/Home')
              },
            preCancel: () => {
                window.location.reload();
              }
            
        });
    }

    if(res==null) return (
        <div className='container_quizVikingos'>
            <div>
                <li>  <a href='/Home' className='btn_huir'>Huir<img className='flag_image' src={flag} /></a> </li>
            </div>
            <div className='container_title_quizVikingos'>
                <img className='hacha_quizVikingos' src={hacha} />
                <p>Primera incursion</p>
            </div>

            <div className='contenedor_preguntas_quizvikingos'>
                <div className='pregunta_quizVikingos'>
                    <p>1. La palabra vikingo, proviene de la palabra “vikingr” y significa</p>
                </div>
                <div className='respuestas_quizVikingos'>
                    <div className='columna1'>
                        <ul>
                            <li className='opcion' onClick={() => setRes('cazador')}>A. Cazador</li>
                            <li className='opcion' onClick={() => setRes('Angel')}>B. Angel</li>
                        </ul>
                    </div>
                    <div className='columna2'>
                        <ul>
                            <li className='opcion' onClick={() => setRes('Demonio')}>C. Demonio</li>
                            <li className='opcion' onClick={() => setRes('pirata')}>D. pirata</li>
                        </ul>
                    </div>
                </div>
                <button className='btn_quizVikingos'>Atacar</button>
            </div>


        </div>
    )
    if(res=='pirata')
        return(
            <div className='container_quizVikingos'>
            <div>
                <li>  <a href='/Home' className='btn_huir'>Huir<img className='flag_image' src={flag} /></a> </li>
            </div>
            <div className='container_title_quizVikingos'>
                <img className='hacha_quizVikingos' src={hacha} />
                <p>Primera incursion</p>
            </div>

            <div className='contenedor_preguntas_quizvikingos'>
                <div className='pregunta_quizVikingos'>
                    <p>2. Antes de ser guerreros y saqueadores, a que se dedicaban los denominados vikingos?</p>
                </div>
                <div className='respuestas_quizVikingos'>
                    <div className='columna1'>
                        <ul>
                            <li className='opcion' onClick={() => setRes('Cazadores')}>A. Cazadores</li>
                            <li className='opcion' onClick={() => setRes('Granjeros')}>B. Granjeros</li>
                        </ul>
                    </div>
                    <div className='columna2'>
                        <ul>
                            <li className='opcion' onClick={() => setRes('Académicos')}>C. Académicos</li>
                            <li className='opcion' onClick={() => setRes('Artesanos')}>D. Artesanos</li>
                        </ul>
                    </div>
                </div>
                <button className='btn_quizVikingos'>Atacar</button>
            </div>


        </div>
        )
    if(res=='Granjeros')
        return(
            <div className='container_quizVikingos'>
            <div>
                <li>  <a href='/Home' className='btn_huir'>Huir<img className='flag_image' src={flag} /></a> </li>
            </div>
            <div className='container_title_quizVikingos'>
                <img className='hacha_quizVikingos' src={hacha} />
                <p>Primera incursion</p>
            </div>

            <div className='contenedor_preguntas_quizvikingos'>
                <div className='pregunta_quizVikingos'>
                    <p>3.¿Qué velocidad podían alcanzar los barcos vikingos?</p>
                </div>
                <div className='respuestas_quizVikingos'>
                    <div className='columna1'>
                        <ul>
                            <li className='opcion' onClick={() => setRes('30 nudos')}>A. 30 nudos</li>
                            <li className='opcion' onClick={() => setRes('25 nudos')}>B. 25 nudos</li>
                        </ul>
                    </div>
                    <div className='columna2'>
                        <ul>
                            <li className='opcion' onClick={() => setRes('15 nudos')}>C. 15 nudos</li>
                            <li className='opcion' onClick={() => setRes('10 nudos')}>D. 10 nudos</li>
                        </ul>
                    </div>
                </div>
                <button className='btn_quizVikingos'>Atacar</button>
            </div>


        </div>
        )
}
