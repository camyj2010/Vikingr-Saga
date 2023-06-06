import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function TheMDFShip(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/static/TheMDFShip.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() =>
    {
        actions.node_12Action.play()
    }, [])
    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="root">
            <group name="node_12" position={[-15, -13.5, 0.5]}>
              <mesh
                name="mesh_11"
                castShadow
                receiveShadow
                geometry={nodes.mesh_11.geometry}
                material={materials["terrain_atlas.terrain"]}
              />
              <mesh
                name="mesh_11_1"
                castShadow
                receiveShadow
                geometry={nodes.mesh_11_1.geometry}
                material={materials["terrain_atlas.terrain_alpha"]}
              />
            </group>
          </group>
        </group>
      </group>
    );
  }

useGLTF.preload("/static/TheMDFShip.glb");