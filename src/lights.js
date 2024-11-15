import * as THREE from 'three'

class Lights {

    constructor(){
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

        this.hemisphereLight = new THREE.HemisphereLight(0xaaaaff, 0x555555, 0.6);
        this.hemisphereLight.position.set(0, 10, 0); // Über der Szene positioniert

        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        this.directionalLight.position.set(5, 10, 5); 
        this.directionalLight.castShadow = true; 
        this.directionalLight.shadow.mapSize.width = 1024; 
        this.directionalLight.shadow.mapSize.height = 1024;

        this.pointLight = new THREE.PointLight(0xffddaa, 1, 50);
        this.pointLight.position.set(0, 5, 0); 
    }
}

export default Lights