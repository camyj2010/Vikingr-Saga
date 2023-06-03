import { OrbitControls, Stars, useHelper, PerspectiveCamera, Center } from '@react-three/drei'
import Shader from './Shader'
import Island1 from '../Island1/Island1'
import { useRef, useState } from 'react'
import { useFrame, useThree  } from '@react-three/fiber'
import { DoubleSide, Euler, PlaneGeometry, PointLightHelper, Vector2 ,Raycaster, Vector3, MathUtils, Object3D, BoxGeometry } from 'three'
import IconLecture1 from './Icon'
import { useNavigate } from 'react-router-dom'
import Leccion1 from '../../pages/Leccion1'
import QuestionMark from '../modelsLesson1/QuestionMark'
import Ship from './Ship.jsx'
import { BallCollider, CuboidCollider, Physics, RigidBody , useRapier } from '@react-three/rapier'



export default function Experience() {
    const pointLightRef = useRef();
    useHelper(pointLightRef, PointLightHelper, 1)
    const sunRef = useRef();
    const cameraRef = useRef();
    const { scene } = useThree();
    const raycaster = new Raycaster();
    const mouse = new Vector2();
    const shipRef = useRef();
    const shipMeshRef = useRef();
    const targetPosition = useRef(null);


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
              targetPosition.current = new Vector3(point.x, shipRef.current.translation().y, point.z);
            }
            // console.log('Coordenadas del clic:', point);
           
          }
    }


    useFrame(() => {

        if (shipRef.current && shipMeshRef.current) {
          if (targetPosition.current) {
            const currentPosition = new Vector3(shipRef.current.translation().x, shipRef.current.translation().y, shipRef.current.translation().z)
            const targetXZ = new Vector3(targetPosition.current.x, currentPosition.y, targetPosition.current.z);
            const direction = targetXZ.clone().sub(currentPosition).normalize();
            const speed = 0.1;
            const distance = currentPosition.distanceTo(targetXZ);
            if (distance > 0.1) {
              const newPosition = currentPosition.clone().add(direction.multiplyScalar(speed));
            
              shipMeshRef.current.position.copy(newPosition)
              shipRef.current.setTranslation({x: newPosition.x , y: currentPosition.y , z: newPosition.z})
              
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
  
    const animate = (time) => {
        const speed = 0.5; 
        const radius = 1000;
        const x = Math.cos(time * speed) * radius;
        const y = Math.sin(time * speed) * radius;
        sunRef.current.rotation.x += 0.01; // Rotación en el eje x
        sunRef.current.rotation.y += 0.01; // Rotación en el eje y
        sunRef.current.position.set(x, y, 0);
    };

    useFrame(({ clock }) => animate(clock.elapsedTime));
    
    return (
        <>
            <group>
            
                <PerspectiveCamera ref={cameraRef} makeDefault position={[60,100, 400]} />
                <OrbitControls
                    camera={cameraRef.current}
                    maxPolarAngle={Math.PI / 2} // Limita el movimiento hacia arriba y hacia abajo
                    // enablePan={false}
                    enabled={true}
                    // enableRotate ={false}
                    // enableZoom = {false}
                />
                {/* <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />*/}
                <ambientLight intensity={1} />  
                
                {/* <Stars radius={50} depth={10} count={5000} factor={4} saturation={0} fade speed={1} /> */}
                <mesh onClick={(event) => ShipMovementHandler(event)} position={[0,-10,0]}>
                <Shader /> 
                </mesh>
                
                <IconLecture1 />   
                <Physics
                debug={true} 
                 gravity={[0,0,0]}
                >  
                 
                <RigidBody colliders={false} position={[0,-9,0]}  mass={9999999} kinematic={true}>
                <mesh receiveShadow={true} castShadow>
                <Island1 /> 
                <CuboidCollider args={[82,15,47]} position={[82,10,49]}/>
                </mesh>
                </RigidBody>

                {/**Hitbox del barco */}
                <RigidBody colliders={false} ref={shipRef} mass={0.01} position={[60,5,140]} kinematic={true}>  
                <CuboidCollider args={[12,11,5]} name="cuboidCollider"/>
                 </RigidBody>
                </Physics>
      {/* Hago un parentesis y recordatorio, hay una hitbox que esta siempre en la misma posicion del barco pero el modelo del barco
      no esta dentro del RigidBody porque si lo ponia ahi el modelo desaparecia al cabo de unos segundos, cosa que habra que solucionar 
      luego*/ }
                {/** el barco */}
                <mesh ref={shipMeshRef} position={[60,5,140]}>

                    <Ship />
                    
                </mesh>  
                
                <mesh ref={sunRef} position={[4, 500, 4]}>
                    <sphereGeometry args={[50, 500, 100]} />
                    <meshBasicMaterial color={0xffff00} />
                    <pointLight ref={pointLightRef} castShadow={true} intensity={2} shadow-mapSize={[512, 512]} />
                </mesh>
                
                
            </group> 
        </>
    )
}
