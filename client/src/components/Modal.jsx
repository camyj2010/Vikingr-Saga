import React, { useState } from 'react'
import './Modal.css'
import img from '../img/vinland.jpg'
import cancel from '../img/cancel.svg'
import vikings from '../img/vikings.jpg'
import kingdom from '../img/last_kingdom.jpg'
import hombre from '../img/hombre_norte.jpg'

export default function Modal({ show, change }) {


  return (
    <div className='Modal_component_container'>
      <div>
        <div className={show ? 'Modal_cotainer' : 'Modal_container_close'}>
          <button className='modal_close' onClick={() => change(!show)}><img className='icon_close_modal' src={cancel} /></button>
          <div className='Modal'>
            <h1 className='Modal_title'>Series & Peliculas</h1>
            <hr />
            <div className='serie_container'>
              <div className='img_container_Modal'>
                <img className='img_series' src={img} />
              </div>
              {/* ------------------ VINALAND SAGA --------------------------*/}
              <div className='sinopsis'>
                <div className='sinopsis_title'>
                  <p>
                    VINLAND SAGA
                  </p>
                </div>
                <div>
                  Desafiando las rígidas leyes vikingas y a pesar de ser un gran guerrero, Thors decide huir de la cruenta vida que
                  llevaba con su familia. Al ser descubierto, será perseguido durante su viaje marítimo por un mercenario de nombre
                  Askeladd, cayendo finalmente en una emboscada junto a su expedición. Ganará la batalla contra sus atacantes, aunque
                  a un alto precio: Thors dará su vida para que el resto de la tripulación, incluido su hijo Thorfinn, vivan.
                  <br />
                  <br />
                  Desde aquel instante Thorfinn jura vengarse. Sin embargo, será apresado por Askeladd y obligado a enrolarse en su barco.
                  Pero aún le quedará una esperanza. Según el código vikingo, Thorfinn tendrá derecho de retar a Askeladd a duelo si cumple
                  una serie de difíciles tareas, como sabotear o matar a generales enemigos, lo que lo les llevará a involucrarse incluso en la
                  guerra por la corona de Inglaterra.
                </div>
              </div>
            </div>
            {/* ------------------ VIKINGS --------------------------*/}

            <div className='serie_container'>
              <div className='sinopsis'>
                <div className='sinopsis_title'>
                  <p>
                    VIKINGS

                  </p>
                </div>
                <div>
                  Este nuevo drama histórico de History Channel está centrado en Ragnar Lothbrok, figura mítica que aseguraba que era el descendiente de Odín, el dios principal de la mitología nórdica.
                  <br />
                  <br />
                  En ella, Ragnar Lothbrok tiene un sueño, que es el de explorar nuevas civilizaciones surcando los mares. Gracias a la ayuda de su amigo bufón Floki, construyen nuevos navíos más rápidos y elegantes con los que poder dar forma a su mayor ilusión. En su aventura chocan con Earl Haraldson, Gabriel Byrne su principal enemigo, que sospecha de las expectativas de Lothbrok. La lucha entre ambos no se hace esperar.
                  <br />
                  <br />
                  Lothbrok consigue llegar a ser el mejor guerrero de la tribu vikinga mientras lucha por convertirse el rey de Dinamarca y gran parte de, lo que hoy es, Suecia. La serie resalta las batallas con mayor imaginación, haciendo más énfasis en los puntos de vista individuales, las estrategias y astucias de los personajes.
                </div>
              </div>
              <div className='img_container_Modal'>
                <img className='img_series' src={vikings} />
              </div>
            </div>

            {/* ------------------ LAST KINGDOM --------------------------*/}

            <div className='serie_container'>
              <div className='img_container_Modal'>
                <img className='img_series' src={kingdom} />
              </div>
              <div className='sinopsis'>
                <div className='sinopsis_title'>
                  <p>
                    THE LAST KINGDOM

                  </p>
                </div>
                <div>
                  Este nuevo drama histórico de History Channel está centrado en Ragnar Lothbrok, figura mítica que aseguraba que era el descendiente de Odín, el dios principal de la mitología nórdica.
                  <br />
                  <br />
                  En ella, Ragnar Lothbrok tiene un sueño, que es el de explorar nuevas civilizaciones surcando los mares. Gracias a la ayuda de su amigo bufón Floki, construyen nuevos navíos más rápidos y elegantes con los que poder dar forma a su mayor ilusión. En su aventura chocan con Earl Haraldson, Gabriel Byrne su principal enemigo, que sospecha de las expectativas de Lothbrok. La lucha entre ambos no se hace esperar.
                  <br />
                  <br />
                  Lothbrok consigue llegar a ser el mejor guerrero de la tribu vikinga mientras lucha por convertirse el rey de Dinamarca y gran parte de, lo que hoy es, Suecia. La serie resalta las batallas con mayor imaginación, haciendo más énfasis en los puntos de vista individuales, las estrategias y astucias de los personajes.
                </div>
              </div>
            </div>
             {/* ------------------ HOMBRE DEL NORTE --------------------------*/}

             <div className='serie_container'>
              <div className='sinopsis'>
                <div className='sinopsis_title'>
                  <p>
                    EL HOMBRE DEL NORTE

                  </p>
                </div>
                <div>
                El joven príncipe Amleth está a punto de convertirse en hombre cuando su tío asesina brutalmente a su padre y rapta a su madre. El niño consigue huir de la isla en una barca, pero jura venganza. Dos décadas después, Amleth se ha convertido en un guerrero berseker o ulfhednar, dedicado al pillaje de pueblos eslavos, pero una vidente le recuerda su promesa: vengar a su padre, salva a su madre y matar a su tío. Amleth regresa a Islandia en un barco de esclavos y se infiltra en la granja de su tío con la ayuda de Olga, una esclava, para cumplir su promesa.
                </div>
              </div>
              <div className='img_container_Modal'>
                <img className='img_series' src={hombre} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


