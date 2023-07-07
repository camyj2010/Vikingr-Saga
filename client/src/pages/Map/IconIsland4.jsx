import {  useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import icon4 from '../../img/Icon4.png'
import icon4G from '../../img/Icon4Gray.png'
import { useEffect, useState, useRef} from 'react';
import { useUserContext } from '../UserProvider';
import { getUserInfo } from '../api/Handleapi';
import * as THREE from 'three'
import { DoubleSide } from 'three';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Island1 from '../Island1/Island1';

export default function introLecture3() {
    const { user } = useUserContext();
    console.log(user);
    const [iconS, seticonS] = useState(icon4);
    const [userInfo, setUserInfo] = useState(null);
    const colorMap = useLoader(TextureLoader, iconS)
    const coin = useRef(null)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                if (user !== null) {
                    const userInfo = await getUserInfo(String(user));
                    setUserInfo(userInfo);
                    if (userInfo.lesson4==true){
                        seticonS(icon4G)
                        }    
                    else{
                        seticonS(icon4)
                    }

                    console.log(userInfo);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserInfo();
    }, [user]);

    useFrame((state, delta)=>{
        if(coin.current.position.y < 45){
            coin.current.position.y += 8 * delta   
            coin.current.rotation.z += 8 * delta          
        }
        
        if(coin.current.rotation.x > (- Math.PI * 0.5)){
            coin.current.rotation.z += 1 * delta
        }
    })

    return (
        <mesh ref={coin} scale={8} rotation={[Math.PI * 0.5,  0, 0] } position={[200, 60, 380 ]} onClick={() => navigate('/Leccion4')}
    >
            <cylinderGeometry args={[1, 1, 0.1, 64, 1]} />
            <meshStandardMaterial side={DoubleSide} map={colorMap}/>
        </mesh>
    )
}
