
import React, { useEffect, useState } from 'react';
import { useUserContext } from './UserProvider';
import { getUserInfo } from './api/Handleapi';
import { Loader } from '@react-three/drei';
import './styles/Hut.css';
import tv from '../img/tv.png'
import libros from '../img/libros.png'
import play from '../img/play.png'
import map from '../img/mapa-del-tesoro.png';
import leccion1 from '../img/Icon.png'
import leccion2 from '../img/Icon2.png'
import leccion3 from '../img/Icon3.png'
import Modal from '../components/Modal'
import ModalLibros from '../components/Modal_libros'
import ModalJuegos from '../components/Modal_Videojuegos'
import { useNavigate } from 'react-router-dom';


export default function Hut() {
    const navigate = useNavigate()
    const { user } = useUserContext();
    const [userInfo, setUserInfo] = useState(null);
    const [popUp, setPopUP] = useState(false)
    const [popUpLibros, setPopUpLibros] = useState(false)
    const [popUpJuegos, setPopUpJuegos] = useState(false)

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                if (user !== null) {
                    const userInfo = await getUserInfo(String(user));
                    setUserInfo(userInfo);
                    console.log(userInfo)
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserInfo();
    }, [user]);

    // Check if userInfo is null before accessing its properties
    if (userInfo === null) {
        return <Loader />; // Display a loader or any other loading indicator
    }

    // Access the userInfo properties once it is available
    console.log(userInfo.email);

    return (
        <div className='hut_ambient'>
            <div className='return_btn_hut'>
                <img onClick={() => navigate('/Home')} className='return_btn_image_hut' src={map} />
            </div>
            <div className='hut_displa_container'>
                <div className='stats_hut'>
                    <p className='Hut_text'>{userInfo?.nickname}</p>
                    <div className='progress_bar_container'>
                        <progress className='progress_bar' value={userInfo?.progress} max={100}></progress>
                        <span className='progress_text'>{userInfo?.progress}%</span>
                    </div>
                    <div className='lecciones_container_hut'>
                        <div className='lecciones_title'>
                            <p>Lecciones completadas</p>
                        </div>
                        <div className='lecciones_completadas_hut'>
                            {userInfo.lesson1 ? <img className='leccion_icon_hut' src={leccion1} /> : ''}
                            {userInfo.lesson2 ? <img className='leccion_icon_hut' src={leccion2} /> : ''}
                            {userInfo.lesson3 ? <img className='leccion_icon_hut' src={leccion3} /> : ''}
                            
                        </div>


                    </div>
                </div>
                <div className='avatar_hut'>
                    {/* ***** Aqui va el avatar ***** */}
                </div>
                <div className='recomendations_hut'>
                    <p className='recomendations_titile_hut'>Recomendaciones</p>
                    <button onClick={() => setPopUP(!popUp)} className='btn_recomendation_hut'><img className='icon_close_modal' src={play} /></button>
                    <button onClick={() => setPopUpLibros(!popUpLibros)} className='btn_recomendation_hut'><img className='icon_close_modal' src={libros} /></button>
                    <button onClick={() => setPopUpJuegos(!popUpJuegos)} className='btn_recomendation_hut'><img className='icon_close_modal' src={tv} /></button>
                </div>
                {popUp ? <Modal show={popUp} change={setPopUP} /> : ''}
                {popUpLibros ? <ModalLibros show={popUpLibros} change={setPopUpLibros} /> : ''}
                {popUpJuegos ? <ModalJuegos show={popUpJuegos} change={setPopUpJuegos} /> : ''}
            </div>
        </div>
    );
}
