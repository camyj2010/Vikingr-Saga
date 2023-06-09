import React, { useState } from 'react';
import '../styles/Quiz1.css';
import hacha from '../../img/incursion.png';
import flag from '../../img/white-flag.png';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: '1. ¿Según la mitología nórdica, ¿cómo se creó el mundo?',
    options: [
      { id: 'A', answer: 'A partir del choque entre el fuego y el hielo' },
      { id: 'B', answer: 'Por la voluntad de los dioses nórdicos' },
      { id: 'C', answer: 'A través del nacimiento de gigantes de hielo' },
      { id: 'D', answer: 'Mediante la transformación de seres humanos' }
    ]
  },
  {
    question: '2.¿Cuál de los siguientes dioses nórdicos es conocido como el dios supremo y gobernante de Asgard?',
    options: [
      { id: 'A', answer: 'Freya' },
      { id: 'B', answer: 'Loki' },
      { id: 'C', answer: 'Thor' },
      { id: 'D', answer: 'Odin' }
    ]
  },
  {
    question: '3. ¿Qué evento marca el fin del mundo en la mitología nórdica?',
    options: [
      { id: 'A', answer: 'La batalla entre los dioses y los gigantes de hielo' },
      { id: 'B', answer: 'El surgimiento del Árbol del Mundo' },
      { id: 'C', answer: 'La creación de Ask y Embla, los primeros seres humanos' },
      { id: 'D', answer: 'El sacrificio de Odin en el pozo de Mimir' }
    ]
  }
];

export default function Quiz_1() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [res, setRes] = useState(null);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    console.log(answer);
    if (answer === 'A partir del choque entre el fuego y el hielo' || answer === 'Odin' || answer === 'La batalla entre los dioses y los gigantes de hielo') {
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
          if (answer === 'La batalla entre los dioses y los gigantes de hielo') {
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
        <p>Segunda incursión</p>
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
