import { OrbitControls, Stars, useHelper, PerspectiveCamera, Center } from '@react-three/drei'
import Shader from './Shader'
import Island1 from '../Island1/Island1'
import { useRef, useState } from 'react'
import { useFrame, useThree  } from '@react-three/fiber'
import { DoubleSide, PlaneGeometry, PointLightHelper, Vector2 } from 'three'
import IconLecture1 from './Icon'
import { useNavigate } from 'react-router-dom'
import Leccion1 from '../../pages/Leccion1'
import QuestionMark from '../modelsLesson1/QuestionMark'
import Ship from './Ship.jsx'
import { Raycaster, Vector3 } from 'three';
import { BallCollider, CuboidCollider, Physics, RigidBody } from '@react-three/rapier'

export default function Experience() {
    const pointLightRef = useRef();
    useHelper(pointLightRef, PointLightHelper, 1)
    const sunRef = useRef();
    const cameraRef = useRef();
    const { scene } = useThree();
    const raycaster = new Raycaster();
    const mouse = new Vector2();
    const shipRef = useRef();
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
              targetPosition.current = new Vector3(point.x, shipRef.current.position.y, point.z);

            }
            // console.log('Coordenadas del clic:', point);
           
          }
    }

    useFrame(() => {
        if (shipRef.current) {
          if (targetPosition.current) {
            const currentPosition = shipRef.current.position;
            const targetXZ = new Vector3(targetPosition.current.x, currentPosition.y, targetPosition.current.z);
            const direction = targetXZ.clone().sub(currentPosition).normalize();
            const speed = 0.1;
            const distance = currentPosition.distanceTo(targetXZ);
      
            if (distance > 0.1) {
              const newPosition = currentPosition.clone().add(direction.multiplyScalar(speed));
            //   console.log(shipRef.current.position)
              shipRef.current.position.copy(newPosition);
              
            } else {
              // El barco ha llegado a la posición objetivo
              targetPosition.current = null;
            }

            const cuboidCollider = shipRef.current.getObjectByName('cuboidCollider');
            
            if (cuboidCollider) {
              cuboidCollider.position.copy(shipRef.current.position);
              cuboidCollider.updateMatrixWorld();
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
            
                <PerspectiveCamera ref={cameraRef} makeDefault position={[50,70, 200]} />
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
                 
                <RigidBody colliders='cuboid'>
                <mesh receiveShadow={true} castShadow>
                <Island1 /> 
                </mesh>
                </RigidBody>
                
                <RigidBody colliders={false} type='fixed'>  
                {/* <BallCollider ref={shipHitboxRef} /> */}
                <mesh ref={shipRef} position={[60,12,140]}>
                    <Ship />
                    <CuboidCollider args={[12,11,5]} name="cuboidCollider"/>
                </mesh>

                 </RigidBody>
                </Physics>  
                
                <mesh ref={sunRef} position={[4, 500, 4]}>
                    <sphereGeometry args={[50, 500, 100]} />
                    <meshBasicMaterial color={0xffff00} />
                    <pointLight ref={pointLightRef} castShadow={true} intensity={2} shadow-mapSize={[512, 512]} />
                </mesh>
                
                
            </group> 
        </>
    )
}
