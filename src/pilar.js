import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

//todo rotation als variable und andere bilder aufhängen
class Pilar{
    constructor(scene, positionX, positionZ){
        this.scene = scene
        this.pilar
        this.isLoaded = false
        this.loadPilar(positionX, positionZ)
    }

    animate(){
        //console.log("animiert frame")

        
    }

    loadPilar(positionX, positionZ = 0){
        const loader = new GLTFLoader();
        loader.load(
            'models/3d/marble_pilar.glb',  // Pfad zum GLB-Datei
            (gltf) => {
                // Füge das geladene Modell zur Szene hinzu
                this.pilar = gltf.scene;
                this.pilar.scale.set(0.005, 0.005, 0.005)
                this.pilar.position.x = positionX
                this.pilar.position.y = -3
                this.pilar.position.z = positionZ
                this.scene.add(this.pilar)
    
        
                this.isLoaded = true
            },
            undefined,
            (error) => {
                console.error('Error loading GLB model:', error);
            }
        );
    }    


}

export default Pilar;