import face_vert from "../glsl/sim/face.vert.js";
import divergence_frag from "../glsl/sim/divergence.frag.js";

import ShaderPass from "./ShaderPass";

export default class Divergence extends ShaderPass{
    constructor(simProps,rootState){
        super({
            material: {
                vertexShader: face_vert,
                fragmentShader: divergence_frag,
                uniforms: {
                    boundarySpace: {
                        value: simProps.boundarySpace
                    },
                    velocity: {
                        value: simProps.src.texture
                    },
                    px: {
                        value: simProps.cellScale
                    },
                    dt: {
                        value: simProps.dt
                    }
                }
            },
            output: simProps.dst
        },rootState)

        this.init();
    }

    update({ vel }){
        this.uniforms.velocity.value = vel.texture;
        super.update();
    }
}