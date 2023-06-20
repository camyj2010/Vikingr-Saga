import {React, useRef, useContext,useEffect} from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Experience from './Map/Experience'
import  {Loader} from '@react-three/drei'
import './styles/Hut.css'
import map from '../img/mapa-del-tesoro.png';
import hut from '../img/mini_hut.png';
import { useUserContext } from './UserProvider';
import { getUserInfo } from './api/Handleapi';


export default function Hut() {
    const { user } = useUserContext();
  
    const fetchUserInfo = async () => {
      try {
        if (user !== null) {
          const userInfo = await getUserInfo(String(user));
          console.log(userInfo);
          // Realiza las operaciones necesarias con la información del usuario obtenida
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchUserInfo();
    }, [user]);
  
    return (
      <div className='hut_ambient'>
        <a href='/Home'>
          <img className='map_image_hut' src={map} alt='Map' />
        </a>
      </div>
    );
  }