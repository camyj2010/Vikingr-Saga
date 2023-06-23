import React, { useState } from 'react'
import './ModalLibros.css'
import Libro_hombre_norte from '../img/Libro_hombre_norte.jpg'
import Libro_vikingos_guerra from '../img/Libro_vikingos_guerra.jpg'
import Libro_barco_muertos from '../img/Libro_barco_muertos.jpg'
import cancel from '../img/cancel.svg'

export default function Modal({ show, change }) {


  return (
    <div className='Modal_component_container'>
      <div>
        <div className={show ? 'Modal_cotainer' : 'Modal_container_close'}>
          <button className='modal_close' onClick={() => change(!show)}><img className='icon_close_modal' src={cancel} /></button>
          <div className='Modal'>
            <h1 className='Modal_title'>Libros</h1>
            <hr />
            <div className='serie_container'>
              <div className='img_container_Modal'>
                <img className='img_series_libros' src={Libro_hombre_norte} />
              </div>
              {/* ------------------ LOS HOMBRES DEL NORTE --------------------------*/}
              <div className='sinopsis'>
                <div className='sinopsis_title'>
                  <p>
                    LOS HOMBRES DEL NORTE
                  </p>
                </div>
                <div>
                  La naturaleza de la actividad vikinga: sus causas, sus efectos y su declive
                  Una historia de los vikingos alejada de mitos y leyendas. La narración más completa sobre su expansión geográfica; de Terranova a Bagdad, de Rusia a Francia o España. La sociedad violenta y depredadora de la Escandinavia de la Era Oscura tuvo un impacto único en la historia de la Europa medieval. Desde la seguridad del frío norte, los guerreros, exploradores y comerciantes nórdicos saquearon, comerciaron y se establecieron en múltiples áreas de Europa, Asia y del norte del Atlántico desde finales del siglo VIII hasta mediados del siglo XI, desde los orígenes en la prehistoria pagana a su transformación entre los europeos cristianos. Los hombres del Norte narra toda su historia, centrándose en aquellos lugares donde ocurrieron eventos clave. Estos episodios son fascinantes en sí mismos, pero también arrojan luz sobre la naturaleza de la actividad vikinga: sus causas, sus efectos y la razón de su declive. John Haywood se centra en el trabajo de los arqueólogos y sus aportaciones así como en fuentes literarias como las sagas nórdicas para crear una narración histórica de largo alcance, una visión renovadora que supera mitos y leyendas.
                </div>
              </div>
            </div>
            {/* ------------------ VIKINGOS EN GUERRA --------------------------*/}

            <div className='serie_container'>
              <div className='sinopsis'>
                <div className='sinopsis_title'>
                  <p>
                    VIKINGOS EN GUERRA

                  </p>
                </div>
                <div>
                  Entre los siglos IX y XI, prácticamente ninguna costa de Europa occidental se vio libre del azote de los hombres del norte, que, en incursiones mortíferas, desembarcan para saquear y volverse a la mar tan rápido como habían llegado…Vikingos en guerra narra todas las campañas y expediciones vikingas, minuciosamente cartografiadas, y dedica un amplio capítulo a los ataques contra la península ibérica. Pero, además, este libro ofrece una suntuosa imagen de cómo los vikingos llevaron a cabo sus conquistas: armas, tecnología, tácticas ofensivas y defensivas, tradiciones y valores militares, fortificaciones o barcos son descritos con detalle y recreados con una plétora de fotografías e ilustraciones. Las credenciales de sus autores avalan que afirmemos que estamos ante la obra definitiva sobre el tema: Kim Hjardar, doctor en cultura vikinga y medieval, es, además, el presidente de la más antigua asociación de reconstrucción histórica vikinga de Noruega; Vegard Vike es conservador en el Museo de Historia Cultural de Oslo y experto en armamento vikingo. Vikingos en guerra aborda una época fundamental y fascinante de la historia europea, violenta y caótica, sí, pero donde está el germen de países como Inglaterra y Rusia.
                </div>
              </div>
              <div className='img_container_Modal'>
                <img className='img_series_libros' src={Libro_vikingos_guerra} />
              </div>
            </div>

            {/* ------------------ EL BARCO DE LOS MUERTOS --------------------------*/}

            <div className='serie_container'>
              <div className='img_container_Modal'>
                <img className='img_series_libros' src={Libro_barco_muertos} />
              </div>
              <div className='sinopsis'>
                <div className='sinopsis_title'>
                  <p>
                    EL BARCO DE LOS MUERTOS

                  </p>
                </div>
                <div>
                La mayor amenaza para asgard está a punto de hacerse realidad y magnus chase tiene que embarcarse en el viaje más peligroso de su vida. sin embargo, esta vez tendrá una ayuda inesperada.   Magnus Chase ha pasado de ser un adolescente sin techo a vivir en el Hotel Valhalla y convertirse en uno de los guerreros de Odín. Como digno hijo de Frey, el dios del verano, la fertilidad y la salud, a Magnus no le gustan las guerras y las batallas, pero sus amigos son fuertes y un poco cabezaduras, así que juntos han conseguido derrotar a Grimwolf y luchar contra gigantes para hacerse con el martillo de Thor. Ahora, Magnus y sus compañeros tienen que partir hacia las fronteras más lejanas de Jotunheim y Niflheim para enfrentarse a la mayor amenaza de Asgard. ¿Conseguirán completar su peligroso viaje con éxito o ha llegado, al fin, el temido Ragnarok?
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}


