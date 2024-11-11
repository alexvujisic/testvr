import * as THREE from 'three'

class Lights {

    constructor(){


        // Ambient Light für Grundhelligkeit (färbt alles gleichmäßig)
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);


        // Hemisphere Light, um eine natürliche Farbtonänderung zu simulieren (bläulich für die Decke, erdig für den Boden)
        this.hemisphereLight = new THREE.HemisphereLight(0xaaaaff, 0x555555, 0.6);
        this.hemisphereLight.position.set(0, 10, 0); // Über der Szene positioniert

        // Directional Light als Hauptlichtquelle (starke Beleuchtung aus einer Richtung, z. B. Fensterlicht)
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);

        this.directionalLight.position.set(5, 10, 5); // Von oben und leicht seitlich
        this.directionalLight.castShadow = true; // Schattenwurf aktivieren
        this.directionalLight.shadow.mapSize.width = 1024; // Qualität des Schattens erhöhen
        this.directionalLight.shadow.mapSize.height = 1024;

        // Point Light für eine punktuelle Lichtquelle in der Raummitte
        this.pointLight = new THREE.PointLight(0xffddaa, 1, 50);

        this.pointLight.position.set(0, 5, 0); // In der Mitte des Raums

        // Alle Lichter als Eigenschaften der Klasse speichern
        this.lights = [this.ambientLight, this.hemisphereLight, this.directionalLight, this.pointLight];
    

        /*
        this.ambientLight
        this.directionalLight
        this.hemisphereLight
        this.spotLight
        this.pointLight

        //this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 2);


        
        
        this.hemisphereLight = new THREE.HemisphereLight(0xffff00, 0x0000ff, 0.9)
        
        
        this.directionalLight.castShadow = true
        
        //this.directionalLight.position.z = 0 //default target for directional light = (0,0,0)
        //this.directionalLight.position.x = 0 //default target for directional light = (0,0,0) */
        
        /* this.spotLight = new THREE.SpotLight( 0xff5555 , 100)
        this.spotLight.position.set (3, 3, 0)
        
        this.spotLight.castShadow = true
        
        this.pointLight = new THREE.PointLight( 0x00ff00, 100)
        this.pointLight.position.set( -3, 3, 0 )
        this.pointLight.castShadow = true */
    

        //this.directionalLight = new THREE.DirectionalLight(0xffffff, 3)
        //this.spotLight.target = cube
        //this.ambientLight = new THREE.AmbientLight(0xffffff, 0.1)*/
    }
}

export default Lights