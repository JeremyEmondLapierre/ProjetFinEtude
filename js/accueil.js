//Déclarer la variable de la scène
const scene = new THREE.Scene();

//Créer une caméra 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight/2.2, 0.1, 10000 );
scene.add( camera );

//Position de la caméra (On peut la changer)
camera.position.set(0, 0, 5);

// Canvas
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



//Appliquer au renderer la taille de la fenêtre
renderer.setSize( window.innerWidth, window.innerHeight );


let geometryCube = new THREE.BoxGeometry();
let materialCube = new THREE.MeshStandardMaterial({});
let cube = new THREE.Mesh( geometryCube, materialCube );
cube.position.set(0,1,0)
cube.rotation.set(10,0,0);
scene.add(cube);

let geometryChaine = new THREE.BoxGeometry(0.05,1.1,0.5);
let materialChaine = new THREE.MeshBasicMaterial({color : "grey"});
let chaine = new THREE.Mesh( geometryChaine, materialChaine );
scene.add(chaine);
chaine.position.set(0,2,0);

const geometry = new THREE.TorusKnotGeometry( 0.4, 0.10, 100 );
const material = new THREE.MeshNormalMaterial();
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );
torusKnot.position.set(3.5,-1,0);

const geometryCone = new THREE.ConeGeometry( 0.3, 1.2, 32 );
const materialCone = new THREE.MeshNormalMaterial( );
const cone = new THREE.Mesh( geometryCone, materialCone );
scene.add( cone );
cone.position.set(-3.5,-3.2,0);


//Lumière!
const lumiere = new THREE.AmbientLight(0x404040);

scene.add(lumiere);

camera.position.z = 5;

function animate() {
    //Re-render la scène à chaque fois pour voir les modifs
    renderer.render( scene, camera );
};

//Appeler la fonction
animate();