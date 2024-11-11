import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

//todo rotation als variable und andere bilder aufhängen
class PictureFrame{
    constructor(scene, rotation, scaleX, scaleY, scaleZ, positionX, positionY, positionZ){
        this.scene = scene
        this.frame
        this.isLoaded = false
        this.loadFrame(rotation, scaleX, scaleY, scaleZ, positionX, positionY, positionZ)
    }

    animate(){
        //console.log("animiert frame")

        
    }

    loadFrame(rotation, scaleX, scaleY, scaleZ, positionX, positionY, positionZ = 0){
        const loader = new GLTFLoader();
        loader.load(
            'models/3d/picture_frame-2.glb',  // Pfad zum GLB-Datei
            (gltf) => {
                // Füge das geladene Modell zur Szene hinzu
                this.frame = gltf.scene;
                this.frame.scale.set(scaleX, scaleY, scaleZ)
                this.frame.position.x = positionX
                this.frame.position.y = positionY
                this.frame.position.z = positionZ
                this.frame.rotation.y = rotation//90 grad in radiant
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