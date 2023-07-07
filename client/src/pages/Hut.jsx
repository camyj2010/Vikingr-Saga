import React, { useEffect, useState, useRef } from 'react';
import { useUserContext } from './UserProvider';
import { getUserInfo, changeImage } from './api/Handleapi';
import { Loader, OrbitControls } from '@react-three/drei';
import './styles/Hut.css';
import tv from '../img/tv.png'
import libros from '../img/libros.png'
import play from '../img/play.png'
import ava from '../img/alter.png'
import map from '../img/mapa-del-tesoro.png';
import leccion1 from '../img/Icon.png'
import leccion2 from '../img/Icon2.png'
import leccion3 from '../img/Icon3.png'
import Modal from '../components/Modal'
import ModalLibros from '../components/Modal_libros'
import ModalJuegos from '../components/Modal_Videojuegos'
import ModalAvatar from '../components/Modal_Avatar'
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Avatar from '../avatar/Avatar';
import axios from 'axios';

const cloudniary_URL = 'https://api.cloudinary.com/v1_1/proyectogca/image/upload';

const cloudinary_upload_preset = 'sk5zjw47';


export default function Hut() {
    const imageRef = useRef(null);
    const navigate = useNavigate()
    const { user } = useUserContext();
    const [userInfo, setUserInfo] = useState(null);
    const [popUp, setPopUP] = useState(false)
    const [popUpLibros, setPopUpLibros] = useState(false)
    const [popUpJuegos, setPopUpJuegos] = useState(false)
    const [popUpAvatar, setPopUpAvatar] = useState(false)
    const [selectAvatar, setSelectAvatar] = useState(null)
    const [avatarChanged, setAvatarChanged] = useState(false);
    const [uploadedFile, setUploadedFile] = useState("Cambiar Imagen");

    console.log(selectAvatar)

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

    useEffect(() => {
        if (avatarChanged) {
            const fetchUserInfo = async () => {
                try {
                    if (user !== null) {
                        const userInfo = await getUserInfo(String(user));
                        setUserInfo(userInfo);
                        setAvatarChanged(false);
                        console.log(userInfo)
                    }
                } catch (error) {
                    console.error(error);
                }
            };

            fetchUserInfo();
        }
    }, [avatarChanged]);

    // Check if userInfo is null before accessing its properties
    if (userInfo === null) {
        return <Loader />; // Display a loader or any other loading indicator
    }
    // Actualiza la foto de perfil del usuario
    const handleUploadFile = async (e) => {
        const file = e.target.files[0];
        setUploadedFile(file.name);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', cloudinary_upload_preset);

        try {
            const res = await axios.post(cloudniary_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const image = res.data.url;
            changeImage(user, image);
            imageRef.current.src = image;
        } catch (err) {
            console.log(err);
        }


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
                    {/* <div className="image_container">
        <div className="w-[300px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img ref={imageRef} src={'https://app.cdnstabletransit.net/images/avatar-whiteback.png'} alt="Foto de perfil" />
  </div>
  <div className>
    <label htmlFor="img-uploader" className="hidden">
    </label>
    <input
      onChange={(e) => handleUploadFile(e)}
      className="hidden"
      id="img-uploader"
      type="file"
    />
    <span className="uploaded_file_label">{uploadedFile}</span>
  </div>
</div>  */}
                    <div className="image_container">
                        <label className="custom_upload_button" htmlFor="img-uploader">
                            <div className="custom_upload_button">
                                <img ref={imageRef} src={userInfo?.image} alt="Foto de perfil" />
                            </div>
                        </label>
                        <label htmlFor="img-uploader" className="custom_upload_button">
                            <button className="custom_upload_button2" id="img-uploader">Subir imagen</button>
                            <input onChange={(e) => handleUploadFile(e)} className="custom_upload_button" id="img-uploader" type="file" />
                        </label>
                    </div>


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
                            {userInfo.lesson1 == false && userInfo.lesson2 == false && userInfo.lesson3 == false ? <p className='cero_lecciones'>0/4</p> : ''}
                            {userInfo.lesson1 ? <img className='leccion_icon_hut' src={leccion1} /> : ''}
                            {userInfo.lesson2 ? <img className='leccion_icon_hut' src={leccion2} /> : ''}
                            {userInfo.lesson3 ? <img className='leccion_icon_hut' src={leccion3} /> : ''}
                        </div>
                    </div>
                </div>
                <div className='middle'>
                    <button className='avatar_button' onClick={() => setPopUpAvatar(!popUpAvatar)}> <img src={ava} /><p>Cambiar avatar</p></button>
                    <div className='avatar_hut'>
                        <Canvas className='canvasAvatar_hut' id="canvas" camera={[0, 0, 0]} >
                            <ambientLight intensity={0.5} />
                            <OrbitControls
                                position={[0, 2, 5.4]}
                                target={[0, 0, 3.4]}
                                enableZoom={false}
                                enablePan={false}
                                maxPolarAngle={Math.PI / 2}
                                minPolarAngle={Math.PI / 2}
                                minAzimuthAngle={Math.PI / -4}
                                maxAzimuthAngle={Math.PI / 4} />
                            <directionalLight position={[10, 10, 5]} intensity={0.5} />

                            <Avatar type={userInfo?.avatar} urlAvatar={selectAvatar == null ? "/avatars/" + userInfo?.avatar + ".glb" : "/avatars/" + selectAvatar + ".glb"} position={[0, -1, 3.4]} rotation={[0, Math.PI / 8, 0]} scale={1} />
                        </Canvas>
                        {/* <button onClick={() => setPopUpAvatar(!popUpAvatar)} className="avatar_button">
                        <img className='icon_close_modal' src={ava} />
                        <p>Cambio de avatar</p>
                    </button> */}
                    </div>
                </div>
                <div className='recomendations_hut'>
                    <p className='recomendations_titile_hut'>Recomendaciones</p>
                    <button onClick={() => setPopUP(!popUp)} className='btn_recomendation_hut'><img className='icon_close_modal' src={play} /></button>
                    <button onClick={() => setPopUpLibros(!popUpLibros)} className='btn_recomendation_hut'><img className='icon_close_modal' src={libros} /></button>
                    <button onClick={() => setPopUpJuegos(!popUpJuegos)} className='btn_recomendation_hut'><img className='icon_close_modal' src={tv} /></button>
                </div>
                {popUpAvatar ? <ModalAvatar show={popUpAvatar} setSelectAvatar={setSelectAvatar} change={setPopUpAvatar} setAvatarChanged={setAvatarChanged} /> : ''}
                {popUp ? <Modal show={popUp} change={setPopUP} /> : ''}
                {popUpLibros ? <ModalLibros show={popUpLibros} change={setPopUpLibros} /> : ''}
                {popUpJuegos ? <ModalJuegos show={popUpJuegos} change={setPopUpJuegos} /> : ''}
            </div>
            <Loader />
        </div>
    );
}
