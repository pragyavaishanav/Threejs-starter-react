import * as THREE from 'three';

export class ThreeApp{
    constructor(container){

        this.container = container;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.01, 1000);
        this.camera.position.y = 10; 
        this.camera.position.z = 30;

        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        
       
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.container.appendChild(this.renderer.domElement);
        window.addEventListener("resize", this.resize.bind(this), false)
        this.start()
    }
    start(){
        this.scene.add(new THREE.HemisphereLight(0xffffff, 0xeeeeee, 0.1));
        this.scene.add(new THREE.PointLight(0xffffff,0.5))
        const grid = new THREE.GridHelper(200, 50, 0xb1948c, 0x000000);
        
        this.scene.add(grid)
        this.animate();
        this.resize()
    }
    animate(){
        requestAnimationFrame(this.animate.bind(this))
        this.renderer.render(this.scene, this.camera);
    }
    resize() {
        const canvas = this.renderer.domElement;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(
        window.innerWidth , window.innerHeight
        );
        this.renderer.setPixelRatio(window.devicePixelRatio);

    }

}