import React, {useEffect, useState } from 'react';
import '../styles/Quiz1.css';
import { useUserContext } from '../UserProvider';
import { checkLesson1Progress } from '../api/Handleapi';
import hacha from '../../img/incursion.png';
import flag from '../../img/white-flag.png';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useNavigate } from 'react-router-dom';
import soundFile from '../../sounds/LessonSong.mp3';
import Sound from 'react-sound';

const questions = [
  {
    question: '1. La palabra vikingo, proviene de la palabra "vikingr" y significa',
    options: [
      { id: 'A', answer: 'Cazador' },
      { id: 'B', answer: 'Angel' },
      { id: 'C', answer: 'Demonio' },
      { id: 'D', answer: 'Pirata' }
    ]
  },
  {
    question: '2. Antes de ser guerreros y saqueadores, a qué se dedicaban los denominados vikingos?',
    options: [
      { id: 'A', answer: 'Cazadores' },
      { id: 'B', answer: 'Granjeros' },
      { id: 'C', answer: 'Académicos' },
      { id: 'D', answer: 'Artesanos' }
    ]
  },
  {
    question: '3. ¿Qué velocidad podían alcanzar los barcos vikingos?',
    options: [
      { id: 'A', answer: '30 nudos' },
      { id: 'B', answer: '25 nudos' },
      { id: 'C', answer: '15 nudos' },
      { id: 'D', answer: '10 nudos' }
    ]
  }
];

export default function Quiz_1() {
  const { user } = useUserContext();
  console.log(user);

  

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [res, setRes] = useState(null);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    console.log(answer);
    if (answer === 'Pirata' || answer === 'Granjeros' || answer === '15 nudos') {
      Swal.fire({
        title: 'Brindas honor a los dioses',
        icon: 'success',
        iconColor: '#fff',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: "#49C6E5",
        background: '#49C6E5',
        customClass: {
          title: 'mi-titulo_succes',
          confirmButton: 'custom-confirm-button'
        },
        preConfirm: () => {
          if (answer === '15 nudos') {

              const userInfo = checkLesson1Progress(String(user));
              console.log("Done")
    
            navigate('/Home');
          } else if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }
        }
      });
    } else {
      Swal.fire({
        title: 'No lograste detener el Ragnarok',
        icon: 'error',
        iconColor: '#FE3D3D',
        showCancelButton: true,
        cancelButtonText: 'Reintentar',
        cancelButtonColor: '#830615',
        confirmButtonText: 'Retirada',
        confirmButtonColor: "#830615",
        background: '#830615',
        customClass: {
          title: 'mi-titulo_fail',
          confirmButton: 'custom-confirm-button',
          cancelButton: 'custom-confirm-button'
        },
        allowOutsideClick: false,
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
          // Función que se ejecutará al hacer clic en el botón "Cancelar"
          // Coloca aquí la lógica que deseas ejecutar
          window.location.reload();
        } else if (result.isConfirmed) {
          // Función que se ejecutará al hacer clic en el botón "Retirada"
          // Coloca aquí la lógica que deseas ejecutar
          console.log('Se hizo clic en el botón "Retirada"');
          navigate('/Home');
        }
      });
    }
  
    setRes(answer); // Actualizar el estado con la respuesta seleccionada
  };

  return (
    <div className='container_quizVikingos'>
      <Sound
                        url={soundFile}
                        playStatus={Sound.status.PLAYING}
                        playFromPosition={0}
                        loop={true}
                        volume={5}
                      />
      <div>
        <li>
          <a href='/Home' className='btn_huir'>
            Huir
            <img className='flag_image' src={flag} alt='Flag' />
          </a>
        </li>
      </div>
      <div className='container_title_quizVikingos'>
        <img className='hacha_quizVikingos' src={hacha} alt='Hacha' />
        <p>Primera incursión</p>
      </div>

      <div className='contenedor_preguntas_quizvikingos'>
        <div className='pregunta_quizVikingos'>
          <p>{currentQuestion.question}</p>
        </div>
        <div className='respuestas_quizVikingos'>
          <div className='columna1'>
            <ul className='col1_respuestas_quizVikingos'>
              {currentQuestion.options.slice(0, 2).map(option => (
                <li className='opcion' key={option.id} onClick={() => handleAnswer(option.answer)}>
                  {option.answer}
                </li>
              ))}
            </ul>
          </div>
          <div className='columna2'>
            <ul className='col1_respuestas_quizVikingos'>
              {currentQuestion.options.slice(2).map(option => (
                <li className='opcion' key={option.id} onClick={() => handleAnswer(option.answer)}>
                  {option.answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
