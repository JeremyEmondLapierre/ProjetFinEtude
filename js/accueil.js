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


let geometryCube = new THREE.BoxGeometry(2,2,2);
let coteCube = new THREE.EdgesGeometry(geometryCube);
const cube = new THREE.LineSegments( coteCube, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( cube );
cube.rotation.set(0.08,0,0);
cube.position.set(0,-1,0);


let geometryChaine = new THREE.BoxGeometry(0.05,1.7,0.05);
let coteChaine = new THREE.EdgesGeometry(geometryChaine);

const chaine = new THREE.LineSegments( coteChaine, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add(chaine);
chaine.position.set(0,0.8,0);

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
    requestAnimationFrame( animate );
    //Re-render la scène à chaque fois pour voir les modifs
    renderer.render( scene, camera );
    chaine.rotation.y += 0.02;
    cube.rotation.y += 0.02
};

//Appeler la fonction
animate();