// Variablen zur Bewegung
let moveSpeed = 0.1;
let rotateSpeed = 0.02;
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let rotateLeft = false;
let rotateRight = false;

// Funktion, um die Steuerung zu aktivieren
export function setupControls(camera, renderer, scene) {
    // Event Listener für keydown und keyup
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'w':
                moveForward = true;
                break;
            case 's':
                moveBackward = true;
                break;
            case 'a':
                moveLeft = true;
                break;
            case 'd':
                moveRight = true;
                break;
            case 'ArrowLeft':
                rotateLeft = true;
                break;
            case 'ArrowRight':
                rotateRight = true;
                break;
        }
    });

    document.addEventListener('keyup', (event) => {
        switch (event.key) {
            case 'w':
                moveForward = false;
                break;
            case 's':
                moveBackward = false;
                break;
            case 'a':
                moveLeft = false;
                break;
            case 'd':
                moveRight = false;
                break;
            case 'ArrowLeft':
                rotateLeft = false;
                break;
            case 'ArrowRight':
                rotateRight = false;
                break;
        }
    });

    // Animationsfunktion für die Bewegung der Kamera
    function animate() {
        requestAnimationFrame(animate);

        // Bewegung basierend auf gedrückten Tasten
        if (moveForward) camera.position.z -= moveSpeed;
        if (moveBackward) camera.position.z += moveSpeed;
        if (moveLeft) camera.position.x -= moveSpeed;
        if (moveRight) camera.position.x += moveSpeed;

        // Kamera drehen
        if (rotateLeft) camera.rotation.y += rotateSpeed;
        if (rotateRight) camera.rotation.y -= rotateSpeed;

        renderer.render(scene, camera);
    }
    animate();
}
