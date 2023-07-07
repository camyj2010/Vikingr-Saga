import React, { useState } from 'react';
import '../styles/Quiz1.css';
import { useUserContext } from '../UserProvider';
import { checkLesson4Progress } from '../api/Handleapi';
import hacha from '../../img/incursion.png';
import flag from '../../img/white-flag.png';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useNavigate } from 'react-router-dom';
import soundFile from '../../sounds/LessonSong.mp3';
import Sound from 'react-sound';
import Music_slider from '../../components/Music_slider';

const questions = [
  {
    question: '1. ¿Cuáles son los países vikingos?',
    options: [
      { id: 'A', answer: 'Suecia, Noruega, Dinamarca, Finlandia e Islandia' },
      { id: 'B', answer: 'Noruega, Suecia, Alemania, Reino Unido y Francia ' },
      { id: 'C', answer: 'Noruega, Dinamarca, Rusia, Islandia y Finlandia' },
      { id: 'D', answer: 'Suecia, Noruega, Dinamarca ' }
    ]
  },
  {
    question: '2. ¿Cuál es una influencia lingüística dejada por los vikingos en los idiomas escandinavos modernos? ',
    options: [
      { id: 'A', answer: 'Palabras relacionadas con la naturaleza, navegación y vida cotidiana' },
      { id: 'B', answer: 'Términos relacionados con la gastronomía y la moda ' },
      { id: 'C', answer: 'Expresiones relacionadas con la arquitectura y el arte' },
      { id: 'D', answer: 'Palabras relacionadas con la familia' }
    ]
  },
  {
    question: '3. ¿Cuál es una festividad típica de Islandia que honra al dios Thor?',
    options: [
      { id: 'A', answer: 'Þdferfsd' },
      { id: 'B', answer: 'Yule (Jól)' },
      { id: 'C', answer: 'Midsommar (Solsticio de Verano)' },
      { id: 'D', answer: 'Þorrablót' },
    ]
  }
];

export default function Quiz_3() {
  const { user } = useUserContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [res, setRes] = useState(null);
  const navigate = useNavigate();
  const [music, setMusic] = useState(10)

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    console.log(answer);
    if (answer === 'Suecia, Noruega, Dinamarca, Finlandia e Islandia' || answer === 'Palabras relacionadas con la naturaleza, navegación y vida cotidiana' || answer === 'Þorrablót') {
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
          if (answer === 'Þorrablót') {
            const userInfo = checkLesson4Progress(String(user));
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
        // playFromPosition={17}
        loop={true}
        volume={music}
      />
      <div className='nav_quiz'>
      <Music_slider volume={music} setVolume={setMusic} />
        <li className='Huir_link'>
          <a href='/Home' className='btn_huir'>
            Huir
            {/* <img className='flag_image' src={flag} alt='Flag' /> */}
          </a>
        </li>
      </div>
      <div className='container_title_quizVikingos'>
        <img className='hacha_quizVikingos' src={hacha} alt='Hacha' />
        <p>Cuarta incursión</p>
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
