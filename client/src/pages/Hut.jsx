import {React, useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Experience from './Map/Experience'
import  {Loader} from '@react-three/drei'
import './styles/Hut.css'
import map from '../img/mapa-del-tesoro.png';
import hut from '../img/mini_hut.png';


export default function Hut() {
      

    return (
        <div className='hut_ambient'>
            <a href='/Home'>
                <img className='map_image_hut' src={map} />
            </a>
           
        </div>
    )
}