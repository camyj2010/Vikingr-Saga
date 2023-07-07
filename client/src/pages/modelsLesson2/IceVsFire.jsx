import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Question_mark from "../Question_mark";

export default function IceVsFire(props) {
  const { nodes, materials } = useGLTF("/static/IceVsFireC.glb");
  const handleDetalle = (detalle) => {
    Swal.fire({
      title: detalle,
      icon: 'info',
      showConfirmButton: false,
      background: '#fff',
      customClass: {
        title: 'mi-titulo',
      },
    })
  }
  return (
    <group {...props} dispose={null}>
       <Question_mark position={[-4.5,2.6,-3.5]} size={0.7} onClick={() => handleDetalle("Según la mitología nórdica, los dioses crearon a los primeros seres humanos, Ask y Embla, a partir de troncos de árbol. Odin les otorgó vida, Vili les dio el entendimiento y Ve les dio los sentidos.")}/>
       <Question_mark position={[-0.2,1.5,-1]} size={0.4} onClick={() => handleDetalle("Uno de los elementos más destacados de la creación nórdica es el Árbol del Mundo, conocido como Yggdrasil. Lo encuentras en la isla de esta lección.")}/>
       <Question_mark position={[4.3,3,3.5]} size={0.7} onClick={() => handleDetalle("Para proteger el mundo de los gigantes, los dioses construyeron una fortaleza llamada Asgard en el cielo. Allí residían y gobernaban sobre los diferentes reinos de la creación.")}/>
       {/* <Question_mark position={[-4.5,1,3.5]} size={0.7} onClick={() => handleDetalle("Según la mitología nórdica, los dioses crearon a los primeros seres humanos, Ask y Embla, a partir de troncos de árbol. Odin les otorgó vida, Vili les dio el entendimiento y Ve les dio los sentidos.")}/>
       <Question_mark position={[-0.2,1.5,-1]} size={0.4} onClick={() => handleDetalle("Uno de los elementos más destacados de la creación nórdica es el Árbol del Mundo, conocido como Yggdrasil. Lo encuentras en la isla de esta lección.")}/>
       <Question_mark position={[4.3,1.5,-3.5]} size={0.7} onClick={() => handleDetalle("Para proteger el mundo de los gigantes, los dioses construyeron una fortaleza llamada Asgard en el cielo. Allí residían y gobernaban sobre los diferentes reinos de la creación.")}/> */}
      <group scale={0.03}>
      <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016.geometry}
            material={materials["terrain_atlas.terrain.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_1.geometry}
            material={materials["terrain_atlas.terrain.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_2.geometry}
            material={materials["terrain_atlas.terrain.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_3.geometry}
            material={materials["terrain_atlas.terrain_blend.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_4.geometry}
            material={materials["terrain_atlas.terrain_blend.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_5.geometry}
            material={materials["terrain_atlas.terrain.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_6.geometry}
            material={materials["terrain_atlas.terrain.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_7.geometry}
            material={materials["terrain_atlas.terrain_blend.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_8.geometry}
            material={materials["terrain_atlas.terrain.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_9.geometry}
            material={materials["terrain_atlas.terrain_blend.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_10.geometry}
            material={materials["terrain_atlas.terrain.010"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_11.geometry}
            material={materials["terrain_atlas.terrain_blend.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_12.geometry}
            material={materials["terrain_atlas.terrain.011"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_13.geometry}
            material={materials["terrain_atlas.terrain_blend.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_14.geometry}
            material={materials["terrain_atlas.terrain.012"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_15.geometry}
            material={materials["terrain_atlas.terrain_blend.010"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_16.geometry}
            material={materials["terrain_atlas.terrain.013"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_17.geometry}
            material={materials["terrain_atlas.terrain_blend.011"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_18.geometry}
            material={materials["terrain_atlas.terrain.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_19.geometry}
            material={materials["terrain_atlas.terrain_blend.012"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_20.geometry}
            material={materials["terrain_atlas.terrain.015"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_21.geometry}
            material={materials["terrain_atlas.terrain_blend.013"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_22.geometry}
            material={materials["terrain_atlas.terrain.017"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_23.geometry}
            material={materials["terrain_atlas.terrain_blend.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_24.geometry}
            material={materials["terrain_atlas.terrain.018"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_25.geometry}
            material={materials["terrain_atlas.terrain_alpha.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_26.geometry}
            material={materials["terrain_atlas.terrain.019"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_27.geometry}
            material={materials["terrain_atlas.terrain.020"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_28.geometry}
            material={materials["terrain_atlas.terrain.021"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_29.geometry}
            material={materials["terrain_atlas.terrain.022"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_30.geometry}
            material={materials["terrain_atlas.terrain.023"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mesh_12016_31.geometry}
            material={materials["terrain_atlas.terrain.024"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/IceVsFire.glb");