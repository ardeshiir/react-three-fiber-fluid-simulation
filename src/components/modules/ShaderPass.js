import * as THREE from "three";

export default class ShaderPass{

    constructor(props,rootState){
        this.props = props;
        this.uniforms = this.props.material?.uniforms;
        this.rootState = rootState
    }

    init(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.Camera();

        if(this.uniforms){
            this.material = new THREE.RawShaderMaterial(this.props.material);
            this.geometry = new THREE.PlaneGeometry(2.0, 2.0);
            this.plane = new THREE.Mesh(this.geometry, this.material);
            this.scene.add(this.plane);
        }

    }

    update(){
        this.rootState.gl.setRenderTarget(this.props.output);
        this.rootState.gl.render(this.scene, this.camera);
        this.rootState.gl.setRenderTarget(null);
    }
}