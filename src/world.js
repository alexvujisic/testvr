import * as THREE from 'three'
import PictureFrame from './pictureframe.js'

class World{
    constructor(camera, scene){
        this.scene = scene
        this.camera = camera

        this.pictureframe = new PictureFrame(this.scene)
        const planeGeometry = new THREE.PlaneGeometry( 10, 10 )
        const planeMaterial = new THREE.MeshStandardMaterial({color: 0xffffff})
        this.plane = new THREE.Mesh (planeGeometry, planeMaterial)
        this.plane.receiveShadow = true
        planeMaterial.side = THREE.DoubleSide //THREE.FrontSide THREE.BackSide
        
        this.plane.rotation.x = -Math.PI / 2
        
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        //this.onPointerMove = this.onPointerMove.bind(this)
    }

    animate(){
        if(this.pictureframe.isLoaded){
            this.pictureframe.animate()
        }
    
        this.raycaster.setFromCamera( this.pointer, this.camera );
        const intersects = this.raycaster.intersectObjects( this.scene.children );
        //console.log(intersects.length)

        this.plane.material.color.set(0xffffff)
        for ( let i = 0; i < intersects.length; i ++ ) {
            //intersects[ i ].object.material.color.set( 0xff0000 );
        }
    }
}
export default World