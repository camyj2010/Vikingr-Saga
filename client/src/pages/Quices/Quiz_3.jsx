import React, { useState } from 'react';
import '../styles/Quiz1.css';
import { useUserContext } from '../UserProvider';
import { checkLesson3Progress } from '../api/Handleapi';
import hacha from '../../img/incursion.png';
import flag from '../../img/white-flag.png';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useNavigate } from 'react-router-dom';
import soundFile from '../../sounds/LessonSong.mp3';
import Sound from 'react-sound';

const questions = [
  {
    question: '1. ¿Cuál de las siguientes obras vikingas fue descubierta en una granja en Noruega y se cree que fue utilizada como una tumba?',
    options: [
      { id: 'A', answer: ' Barco de Oseberg' },
      { id: 'B', answer: 'Piedras Rúnicas de Jelling ' },
      { id: 'C', answer: 'Joyas vikingas' },
      { id: 'D', answer: 'Tumba de Jelling ' }
    ]
  },
  {
    question: '2. ¿Cuál de las siguientes sagas nórdicas ha sido adaptada en una ópera de Richard Wagner y en una novela de J.R.R. Tolkien?',
    options: [
      { id: 'A', answer: 'La Edad Poética' },
      { id: 'B', answer: ' La saga de los Volsungos ' },
      { id: 'C', answer: ' Völsungasaga ' },
      { id: 'D', answer: 'Sagas del Oseberg' }
    ]
  },
  {
    question: '3. ¿Cuál era el tipo de construcción utilizado en la arquitectura vikinga debido a la escasez de piedra en la región?',
    options: [
      { id: 'A', answer: 'Casas de adobe' },
      { id: 'B', answer: 'Casas de piedra tallada ' },
      { id: 'C', answer: 'Casas de madera ' },
      { id: 'D', answer: 'Casas de samboya' },
    ]
  }
];

export default function Quiz_3() {
  const { user } = useUserContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [res, setRes] = useState(null);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    console.log(answer);
    if (answer === ' Barco de Oseberg' || answer === ' La saga de los Volsungos ' || answer === 'Casas de madera ') {
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
          if (answer === 'Casas de madera ') {
            const userInfo = checkLesson3Progress(String(user));
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
        <p>Tercera incursión</p>
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
