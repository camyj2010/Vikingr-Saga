import React, { useState } from 'react';
import './Modal_Avatar.css';
import Avatar from '../avatar/Avatar';
import { useUserContext } from '../pages/UserProvider';
import { changeAvatar} from '../pages/api/Handleapi';
import cancel from '../img/cancel.svg';
import { Canvas } from '@react-three/fiber';
import { Loader, OrbitControls } from '@react-three/drei';

export default function Modal({ show, change, selectAvatar, setSelectAvatar }) {
  const { user } = useUserContext();
  console.log( user)
  const [selectedModel, setSelectedModel] = useState(null);
  // console.log(selectedModel)
  const [scaleModel, setScaleModel] = useState(1);

  
  const handleSelect = (user, model) => {
    setSelectAvatar(model)
    changeAvatar(user, model)
    change(!show)
  }

  const handleAvatarClick = (modelType) => {
    setSelectedModel(modelType);
    // setSelectAvatar(modelType)
    setScaleModel(modelType === selectedModel ? 1 : 1.1);
    
  };

  return (
    <div className='Modal_component_container'>
      <div>
        <div className={show ? 'Modal_cotainer' : 'Modal_container_close'}>
          <button className='modal_close' onClick={() => change(!show)}>
            <img className='icon_close_modal' src={cancel} />
          </button>
          <div className='Modal'>
            <h1 className='Modal_title'>Escoge tu avatar</h1>
            <hr />
            <div className='avatar_container'>
              <Canvas className={selectedModel== "man" ? 'canvasAvatar_selected' : 'canvasAvatar' } 
              id="canvas" 
              camera={[0, 0, 0]}
              onClick={() => handleAvatarClick("man")}
              >
                <ambientLight intensity={0.5} />
                <OrbitControls
                  position={[0, 2, 5.4]}
                  target={[0, 0, 3.4]}
                  enableZoom={false}
                  enablePan={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                  minAzimuthAngle={Math.PI / -4}
                  maxAzimuthAngle={Math.PI / 4}
                />
                <directionalLight position={[10, 10, 5]} intensity={0.5} />
                <Avatar
                  type="man"
                  urlAvatar={"/avatars/man.glb"}
                  position={[0, -1, 3.4]}
                  rotation={[0, Math.PI / 8, 0]}
                  // scale={selectedModel === "man" ? 1.1 : 1}
                />
              </Canvas>
              <Canvas className={selectedModel== "woman" ? 'canvasAvatar_selected' : 'canvasAvatar' } 
              id="canvas" 
              camera={[0, 0, 0]}
              onClick={() => handleAvatarClick("woman")}
              >
                <ambientLight intensity={0.5} />
                <OrbitControls
                  position={[0, 2, 5.4]}
                  target={[0, 0, 3.4]}
                  enableZoom={false}
                  enablePan={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                  minAzimuthAngle={Math.PI / -4}
                  maxAzimuthAngle={Math.PI / 4}
                />
                <directionalLight position={[10, 10, 5]} intensity={0.5} />
                <Avatar
                  type="woman"
                  urlAvatar={"/avatars/woman.glb"}
                  position={[0, -1, 3.4]}
                  rotation={[0, Math.PI / 8, 0]}
                  // scale={selectedModel === "woman" ? 1.1 : 1}
                />
              </Canvas>
              <Canvas className={selectedModel== "woman2" ? 'canvasAvatar_selected' : 'canvasAvatar' }
              id="canvas" 
              camera={[0, 0, 0]}
              onClick={() => handleAvatarClick("woman2")}
              >
                <ambientLight intensity={0.5} />
                <OrbitControls
                  position={[0, 2, 5.4]}
                  target={[0, 0, 3.4]}
                  enableZoom={false}
                  enablePan={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                  minAzimuthAngle={Math.PI / -4}
                  maxAzimuthAngle={Math.PI / 4}
                />
                <directionalLight position={[10, 10, 5]} intensity={0.5} />
                <Avatar
                  type="woman2"
                  urlAvatar={"/avatars/woman2.glb"}
                  position={[0, -1, 3.4]}
                  rotation={[0, Math.PI / 8, 0]}
                  // scale={selectedModel === "woman2" ? 1.1 : 1}
                />
              </Canvas>
              <Canvas className={selectedModel== "man2" ? 'canvasAvatar_selected' : 'canvasAvatar' }
              id="canvas" 
              camera={[0, 0, 0]}
              onClick={() => handleAvatarClick("man2")}
              >
                <ambientLight intensity={0.5} />
                <OrbitControls
                  position={[0, 2, 5.4]}
                  target={[0, 0, 3.4]}
                  enableZoom={false}
                  enablePan={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                  minAzimuthAngle={Math.PI / -4}
                  maxAzimuthAngle={Math.PI / 4}
                />
                <directionalLight position={[10, 10, 5]} intensity={0.5} />
                <Avatar
                  type="man2"
                  urlAvatar={"/avatars/man2.glb"}
                  position={[0, -1, 3.4]}
                  rotation={[0, Math.PI / 8, 0]}
                  // scale={selectedModel === "man2" ? 1.1 : 1}
                />
              </Canvas>
            </div>
            <div className='select_container'>
            <button onClick={() => handleSelect(user, selectedModel)} className='btn_select_avatar' >Guargar</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
