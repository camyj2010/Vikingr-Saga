import React, { useEffect, useState } from 'react';
import { useUserContext } from './UserProvider';
import { getUserInfo } from './api/Handleapi';
import { Loader } from '@react-three/drei';
import './styles/Hut.css';
import map from '../img/mapa-del-tesoro.png';

export default function Hut() {
  const { user } = useUserContext();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (user !== null) {
          const userInfo = await getUserInfo(String(user));
          setUserInfo(userInfo);
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
      <a href='/Home'>
        <img className='map_image_hut' src={map} alt='Map' />
      </a>
      <p className='Hut_text'>{userInfo?.nickname}</p>
      
      <div className='progress_bar_container'>
        <progress className='progress_bar' value={userInfo?.progress} max={100}></progress>
        <span className='progress_text'>{userInfo?.progress}%</span>
      </div>
    </div>
  );
}
