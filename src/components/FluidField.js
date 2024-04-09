import React, {useEffect, useRef} from 'react';
import {useFrame, useThree} from "@react-three/fiber";
import face_vert from "./glsl/face.vert";
import color_frag from "./glsl/color.frag";

import Simulation from "./modules/Simulation";
import * as THREE from "three";
import Mouse from "./modules/Mouse";

const FluidField = () => {
    const ref = useRef()
    const rootState = useThree()
    const simulationRef = useRef(new Simulation(rootState))
    useFrame(({ gl, scene, camera }) => {
        Mouse.update()
        simulationRef?.current?.update()

        gl.autoClear = false
        gl.setRenderTarget(null);
        gl.render(scene, camera);

    }, 1)


    useEffect(()=>{
        Mouse.init();
    },[])

    return (
        <mesh
            ref={ref}
        >
            <planeGeometry isBufferGeometry={true} args={[2, 2]}/>
            <rawShaderMaterial uniforms={{
                velocity: {value: (simulationRef.current).fbos.vel_0.texture},
                boundarySpace: {
                    value: new THREE.Vector2()
                }
              }
            } vertexShader={face_vert} fragmentShader={color_frag}/>
        </mesh>
    )
};

export default FluidField;