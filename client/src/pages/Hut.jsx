import { React, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Experience from './Map/Experience'
import { Loader } from '@react-three/drei'
import './styles/Hut.css'
import map from '../img/mapa-del-tesoro.png';
import hut from '../img/mini_hut.png';
import Modal from '../components/Modal'


export default function Hut() {

    const [series, setSeries] = useState(false)


    return (
        <div className='hut_ambient'>
            <div>
                <a href='/Home'>
                    <img className='map_image_hut' src={map} />
                </a>
            </div>
                <div className='Recomendations_hut'>
                    <button onClick={() => setSeries(!series)}>Series</button>
                    {series ? <Modal show={series} change={setSeries} /> : ''}
                </div>
        </div>
    )
}