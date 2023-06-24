import React, { useState } from 'react'
import './ModalLibros.css'
import cancel from '../img/cancel.svg'
import assasins from '../img/Assasins_creed.jpg'
import god_of_war from '../img/God_of_war.jpeg'
import skyrim from '../img/Skyrim.jpg'

export default function Modal({ show, change }) {


  return (
    <div className='Modal_component_container'>
      <div>
        <div className={show ? 'Modal_cotainer' : 'Modal_container_close'}>
          <button className='modal_close' onClick={() => change(!show)}><img className='icon_close_modal' src={cancel} /></button>
          <div className='Modal'>
            <h1 className='Modal_title'>Video juegos</h1>
            <hr />
            <div className='serie_container'>
              <div className='img_container_Modal'>
                <img className='img_series' src={assasins} />
              </div>
              {/* ------------------ ASSASINS CREED VALHALLA --------------------------*/}
              <div className='sinopsis'>
                <div className='sinopsis_title'>
                  <p>
                    ASSASINS CREED VALHALLA
                  </p>
                </div>
                <div>
                  Assassin's Creed Valhalla es una nueva entrega de la saga de aventura y acción histórica a cargo de Ubisoft Montreal y Ubisoft para PC, PlayStation 4, Xbox One, PlayStation 5, Xbox Series y Stadia ambientada en la era vikinga. Ponte en la piel de Eivor y lidera a tu clan desde los gélidos páramos de Noruega hasta un nuevo hogar en los exuberantes campos de la Inglaterra del siglo IX. Funda tu asentamiento, conquista esa tierra hostil cueste lo que cueste y gánate un lugar en el Valhalla. La Inglaterra de la era vikinga es una nación fracturada, plagada de ruines señores feudales y reinos en guerra, pero bajo ese caos yace una tierra rica e indómita que aguarda a que alguien la conquiste.
                </div>
              </div>
            </div>
            {/* ------------------ GOD OF WAR RAGNAROK --------------------------*/}

            <div className='serie_container'>
              <div className='sinopsis'>
                <div className='sinopsis_title'>
                  <p>
                    GOD OF WAR RAGNAROK

                  </p>
                </div>
                <div>
                Embárcate en un viaje épico e íntimo en el que Kratos y Atreus luchan por saber a qué aferrarse y qué dejar ir. Fimbulvetr ya está en camino. Kratos y Atreus deben viajar a cada uno de los nueve reinos en búsqueda de respuestas, mientras que las fuerzas asgardianas se preparan para una batalla profetizada que terminará con el mundo. En el camino explorarán paisajes increíbles y míticos, y se enfrentarán a aterradores enemigos en la forma de dioses nórdicos y monstruos. La amenaza del Ragnarök cada vez está más cerca. Kratos y Atreus deben elegir entre su propia seguridad y la seguridad de los reinos. LA SAGA NÓRDICA CONTINÚA Un futuro sin horizontes: Atreus busca conocimiento que lo ayude a entender la profecía de ""Loki"" y establecer su rol en Ragnarök. Instrumentos de guerra: el hacha Leviatán, las Espadas del Caos y el Escudo de guardián regresan junto con una amplia variedad de nuevas habilidades para Kratos y Atreus. Explora inmensos reinos: viaja a través de peligrosos e increíbles paisajes a la vez que te enfrentas a una variedad de criaturas enemigas, monstruos y dioses nórdicos mientras que Kratos y Atreus buscan respuestas.
                </div>
              </div>
              <div className='img_container_Modal'>
                <img className='img_series' src={god_of_war} />
              </div>
            </div>

            {/* ------------------ THE ELDER SCROLLS V : SKYRIM  --------------------------*/}

            <div className='serie_container'>
              <div className='img_container_Modal'>
                <img className='img_series' src={skyrim} />
              </div>
              <div className='sinopsis'>
                <div className='sinopsis_title'>
                  <p>
                    THE ELDER SCROLLS V : SKYRIM 

                  </p>
                </div>
                <div>
                Skyrim se sitúa dentro de la saga fantástica The Elder Scrolls, en su mundo inventado y su propia geografía pero, nadie puede negar que este quinto capítulo se inspiró en las costumbres vikingas y en la mitología nórdica. Skyrim es la zona norte del continente de Tamriel, y está habitada por los nórdicos (que vienene a ser los vikingos de The Elder Scrolls). Con su propia mitología y leyendas, si te gustan los vikingos, disfrutarás de Skyrim que, por otro lado, es un juegazo de rol lo mires por donde los mires.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


