import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

//todo rotation als variable und andere bilder aufhängen
class PictureFrame{
    constructor(scene, rotation){
        this.scene = scene
        this.frame
        this.isLoaded = false
        this.loadFrame()
    }

    animate(){
        //console.log("animiert frame")

        
    }

    loadFrame(){
        const loader = new GLTFLoader();
        loader.load(
            'models/3d/picture_frame-2.glb',  // Pfad zum GLB-Datei
            (gltf) => {
                // Füge das geladene Modell zur Szene hinzu
                this.frame = gltf.scene;
                this.frame.scale.set(1, 2, 2)
                this.frame.position.x = 7.4
                this.frame.position.y = 0.5
                this.frame.rotation.y = 1.570//90 grad in radiant
                this.scene.add(this.frame)
    
        
                this.isLoaded = true
            },
            undefined,
            (error) => {
                console.error('Error loading GLB model:', error);
            }
        );
    }    


}

export default PictureFrame;