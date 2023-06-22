import React, { useState } from 'react'
import './Modal.css'
import Card from './Card'
import img from '../img/vinland.jpg'
import cancel from '../img/cancel.svg'

export default function Modal({ show, change }) {


  return (
    <div className='Modal_component_container'>
      <div>
        <div className={show ? 'Modal_cotainer' : 'Modal_container_close'}>
          <button className='modal_close' onClick={() => change(!show)}><img className='icon_close_modal' src={cancel} /></button>
          <div className='Modal'>
            <h1 className='Modal_title'>Series</h1>
            <hr />
            <div className='serie_container'>
              <div className='img_container_Modal'>
                <img className='img_series' src={img} />
              </div>
              <div className='sinopsis'>
                <div className='sinopsis_title'>
                  <p>
                    Sinopsis

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
          </div>
        </div>
      </div>
    </div>
  )
}


