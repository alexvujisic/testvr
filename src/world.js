import * as THREE from 'three'
import PictureFrame from './pictureframe.js'
import Pilar from './pilar.js'

class World{
    constructor(camera, scene){
        this.scene = scene
        this.camera = camera

        //rechte wand 
        this.rightpictureframe = new PictureFrame(this.scene, 1.570, 1, 2, 2, 7.4, 0.5)

        //linke Wand
        this.leftpictureframe = new PictureFrame(this.scene, -1.57, 1.2, 2, 2, -7.4, 0.5)

        //vordere wand
        this.frontpictureframe = new PictureFrame(this.scene, 3.14, 1.2, 2, 2, 0, 0.5, -7.4)

        //hintere wand
        this.backpictureframe = new PictureFrame(this.scene, 0, 1.8, 3, 3, 0, 0.5, 7.4)

        //pilars
        this.rightPilar = new Pilar(this.scene, 6.9, 6.9)

        this.leftPilar = new Pilar(this.scene, -6.9, -6.9)

        this.backPilar = new Pilar(this.scene, 6.9, -6.9)

        this.frontPilar = new Pilar(this.scene, -6.9, 6.9)
    }

    animate(){}
}
export default World