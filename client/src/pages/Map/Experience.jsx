import { OrbitControls, Stars, useHelper, PerspectiveCamera, Center, Sphere, Environment } from '@react-three/drei'
import Shader from './Shader'
import Island1 from '../Island1/Island1'
import Island2 from '../Island2/Island2'
import { useRef, useState, useMemo, useEffect } from 'react'
import { useFrame, useThree, useLoader  } from '@react-three/fiber'
import { DoubleSide, Euler, PlaneGeometry, PointLightHelper, Vector2 ,Raycaster, Vector3, MathUtils, Object3D, BoxGeometry } from 'three'
import IconLecture1 from './Icon'
import IconLecture2 from './IconIsland2'
import IconLecture3 from './IconIsland3'
import IconLecture4 from './IconIsland4'
import { useNavigate } from 'react-router-dom'
import Leccion1 from '../../pages/Leccion1'
import QuestionMark from '../modelsLesson1/QuestionMark'
import Ship from './Ship.jsx'
import { BallCollider, CuboidCollider, Physics, RigidBody , useRapier } from '@react-three/rapier'
import TheMDFShip from './TheMDFShip'
import Island3 from '../Island3/Island3'
import soundFile from '../../sounds/OceanSound.mp3';
import Sound from 'react-sound';
import Island4 from '../Island4/Island4'
import Kraken from './Kraken'


export default function Experience() {
    const pointLightRef = useRef();
    useHelper(pointLightRef, PointLightHelper, 1)
    // const sunRef = useRef();
    const cameraRef = useRef();
    const { scene } = useThree();
    const raycaster = new Raycaster();
    const mouse = new Vector2();
    const shipRef = useRef();
    const shipMeshRef = useRef();
    const targetPosition = useRef(null);
    const hdrTextre = 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/8k/kloofendal_38d_partly_cloudy_8k.hdr'

  
    


    const ShipMovementHandler = (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
    
        // Configura el raycaster y realiza la intersección con la escena
        raycaster.setFromCamera(mouse, cameraRef.current);
        const intersects = raycaster.intersectObjects(scene.children, true);
        
        const groundIntersects = intersects.filter((obj) => obj.object.userData.isGround);
        if (groundIntersects.length > 0) {
            const intersection = groundIntersects[0];
            const point = intersection.point;
            if (shipRef.current) {
              targetPosition.current = new Vector3(point.x, -2, point.z);
            }
            // console.log('Coordenadas del clic:', point);
           
          }
    }


    useFrame(() => {

        if (shipRef.current && shipMeshRef.current) {
          if (targetPosition.current) {
            const currentPosition = new Vector3(shipRef.current.translation().x, -2, shipRef.current.translation().z)
            const targetXZ = new Vector3(targetPosition.current.x, currentPosition.y, targetPosition.current.z);
            const direction = targetXZ.clone().sub(currentPosition).normalize();
            const speed = 0.4;
            const distance = currentPosition.distanceTo(targetXZ);
            if (distance > 0.1) {
              const newPosition = currentPosition.clone().add(direction.multiplyScalar(speed));
            
              shipMeshRef.current.position.copy(newPosition)
              shipRef.current.setTranslation({x: newPosition.x , y: -2 , z: newPosition.z})
              const cameraPosition = shipMeshRef.current.position.clone();
              const cameraOffset = new Vector3(-130, 170, 120); // Ajusta los valores según tus necesidades
              cameraPosition.add(cameraOffset);
              cameraRef.current.position.copy(cameraPosition);
              cameraRef.current.lookAt(shipMeshRef.current.position);
              
              //shipMeshRef.current.lookAt(targetXZ)
              const targetRotation = new Euler(0, -(Math.atan2(direction.z,direction.x) + (Math.PI * 2)), 0);
              shipMeshRef.current.rotation.y = MathUtils.lerp(
                shipMeshRef.current.rotation.y,
                targetRotation.y, 
                0.01 
              );
            } else {
              // El barco ha llegado a laa posición objetivo
              targetPosition.current = null;
            }      
          }
        }
      });
  
    // const animate = (time) => {
    //     const speed = 0.5; 
    //     const radius = 1000;
    //     const x = Math.cos(time * speed) * radius;
    //     const y = Math.sin(time * speed) * radius;
    //     sunRef.current.rotation.x += 0.01; // Rotación en el eje x
    //     sunRef.current.rotation.y += 0.01; // Rotación en el eje y
    //     sunRef.current.position.set(x, y, 0);
    // };

    // useFrame(({ clock }) => animate(clock.elapsedTime));
    
    return (
        <>
            <group>
            
                <PerspectiveCamera ref={cameraRef} makeDefault position={[-100, 170, 350]}/>
                <OrbitControls
                    camera={cameraRef.current}
                    maxPolarAngle={Math.PI / 2} // Limita el movimiento hacia arriba y hacia abajo
                    enablePan={false}
                    enabled={false}
                    enableRotate ={false}
                    enableZoom = {false}
                />
                {/* <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />*/}
                    {/* <Sound
                        url={soundFile}
                        playStatus={Sound.status.PLAYING}
                        playFromPosition={0}
                        loop={true}
                        volume={10}
                      /> */}

                <ambientLight intensity={0.7} />  
                
                {/* <Stars radius={50} depth={10} count={5000} factor={4} saturation={0} fade speed={1} /> */}
                <mesh onClick={(event) => ShipMovementHandler(event)} position={[0,-10,0]}>
                {/* <Environment files={hdrTextre} ground={{ height: -170, radius: 8000, scale: 600 }} /> */}

                <Shader /> 
   
                </mesh>
                <IconLecture1 />  
                <IconLecture2 /> 
                <IconLecture3 />
                <IconLecture4 />
                 
                <Physics
                 debug={false} 
                 gravity={[0,0,0]}
                >  
                
                <RigidBody colliders={false} position={[0,-9,0]}  mass={99999999} kinematic={true} type={'fixed'}>
                <mesh receiveShadow={true} castShadow>
                <Island1 /> 
                <CuboidCollider args={[82,15,47]} position={[82,10,49]}/>
                </mesh>
                </RigidBody>

                <RigidBody colliders={false} position={[-150,70,-200]}  mass={99999999} kinematic={true} rotation={[0,Math.PI/3,0]} type={'fixed'}>
                <mesh receiveShadow={true} castShadow>
                <Island2 /> 
                <CuboidCollider args={[60,10,55]} position={[-60,-70,40]}/>
                </mesh>
                </RigidBody>

                <RigidBody colliders={false} position={[0,-9,-400]}  mass={99999999} kinematic={true} type={'fixed'}>
                <mesh receiveShadow={true} castShadow>
                <Island3 /> 
                <CuboidCollider args={[180,15,85]} position={[180,10,120]}/>
                <CuboidCollider args={[30,15,40]} position={[250,10,245]}/>
                </mesh>
                </RigidBody>

                <RigidBody colliders={false} position={[200,-9,380]}  mass={99999999} kinematic={true} type={'fixed'}>
                <mesh receiveShadow={true} castShadow>
                <Island4 /> 
                <CuboidCollider args={[70,15,90]} position={[0,0,12]}/>
                </mesh>
                </RigidBody>


                <RigidBody colliders={false} position={[-90,-9,300]}  mass={99999999} kinematic={true} type={'fixed'}>
                <mesh receiveShadow={true} castShadow>
                <Kraken /> 
                <CuboidCollider args={[40,40,40]} />
                </mesh>
                </RigidBody>

                {/**Hitbox del barco */}
                <RigidBody colliders={false} ref={shipRef} mass={0.01} position={[60,-2,140]} kinematic={true}>  
                <CuboidCollider args={[11,11,11]} name="cuboidCollider"/>
                 </RigidBody>
                </Physics>
      {/* Hago un parentesis y recordatorio, hay una hitbox que esta siempre en la misma posicion del barco pero el modelo del barco
      no esta dentro del RigidBody porque si lo ponia ahi el modelo desaparecia al cabo de unos segundos, cosa que habra que solucionar 
      luego*/ }
                {/** el barco */}
                <mesh ref={shipMeshRef} position={[60,-2,140]} >

                  {/* <Ship /> */}
                  <TheMDFShip /> 
                  {/* <Prueba/> */}
                </mesh>  
                

                {/* <mesh ref={sunRef} position={[4, 500, 4]}>
                    <sphereGeometry args={[50, 500, 100]} />
                    <meshBasicMaterial color={0xffff00} />
                    <pointLight ref={pointLightRef} castShadow={true} intensity={0.5} shadow-mapSize={[512, 512]} />
                </mesh> */}
                
                
            </group> 
        </>
    )
}
