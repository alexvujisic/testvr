import * as THREE from 'three'
import { setupControls } from './control.js';
import Lights from './src/lights.js'
import World from './src/world.js'


// Szene, Kamera und Renderer erstellen
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const lights = new Lights()
scene.add(lights.ambientLight)
scene.add(lights.hemisphereLight)
scene.add(lights.directionalLight)
scene.add(lights.pointLight)

const world = new World(camera, scene)

function animate(){
    world.animate()
    renderer.render(scene, camera)
}
renderer.setAnimationLoop(animate)

// Kamera Positionieren
camera.position.z = 0;

// Boden und Wände erstellen
//const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xac7339, side: THREE.DoubleSide });
const wallMaterial = new THREE.MeshPhongMaterial({ color: 0xac7339, side: THREE.DoubleSide });
const floorMaterial = new THREE.MeshPhongMaterial({ color: 0x808080, side: THREE.DoubleSide });  // Boden in Grau



// Boden
const floorGeometry = new THREE.PlaneGeometry(10, 10);
//const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = Math.PI / 2;
scene.add(floor);

// Wände
const wallGeometry = new THREE.PlaneGeometry(15, 6);

// Linke Wand
const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
leftWall.position.x = -7.5;
leftWall.rotation.y = Math.PI / 2;
scene.add(leftWall);

// Rechte Wand
const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
rightWall.position.x = 7.5;
rightWall.rotation.y = -Math.PI / 2;
scene.add(rightWall);

// Hintere Wand
const backWall = new THREE.Mesh(wallGeometry, wallMaterial);
backWall.position.z = -7.5;
scene.add(backWall);

//Vordere Wand
const frontWall = new THREE.Mesh(wallGeometry, wallMaterial);
frontWall.position.z = 7.5;
scene.add(frontWall);


const textureLoader = new THREE.TextureLoader();





// Bild an der vordere Wand
textureLoader.load('photos/monalisa.jpg', (texture) => {
    const pictureMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const picture = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), pictureMaterial);
    picture.position.set(0, 0.5, -7.4);
    scene.add(picture);
});

// Bild an der rechten Wand
textureLoader.load('photos/edvard-munch-schrei-beruehmtes-gemaelde.jpg', (texture) => {
    const pictureMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const picture = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), pictureMaterial);
    picture.position.set(7.4, 0.5, 0);
    picture.rotation.y = -Math.PI / 2;
    scene.add(picture);
});

// Bild an der linke Wand
textureLoader.load('photos/csm_leonardo-da-vinci-vitruvianischer-mensch_3befc41428.jpg.pagespeed.ce.FgwBSJ3N-D.jpg', (texture) => {
    const pictureMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const picture = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), pictureMaterial);
    picture.position.set(-7.4, 0.5, 0);
    picture.rotation.y = Math.PI / 2;
    scene.add(picture);
    
});

//hintere wand
textureLoader.load('photos/van-Gogh-Sternennacht.jpg', (texture) => {
    const pictureMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const picture = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), pictureMaterial);
    picture.position.set(0, 0.5, 7.4);
    picture.rotation.y = 3.14
    scene.add(picture);
});


// Steuerung der Kamera aufrufen
setupControls(camera, renderer, scene);

// Fenster anpassen
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});