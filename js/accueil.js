//Déclarer la constante de la scène principale
const scene = new THREE.Scene();

//Déclarer la constante de la scène de la première boite
const scene2 = new THREE.Scene();

//Déclarer la constante de la scène de la deuxième boite
const scene3 = new THREE.Scene();

//Déclarer la constante de la scène de la troisième boite
const scene4 = new THREE.Scene();


//Créer une caméra 
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );


//Position de la caméra (On peut la changer)
camera.position.set(0, 0, 5);

// Canvas
const canvas1 = document.querySelector('canvas.canvaEntete');
const canvas2 = document.querySelector('canvas.canvaBoite1');
const canvas3 = document.querySelector('canvas.canvaBoite2');
const canvas4 = document.querySelector('canvas.canvaBoite3');
const renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvas1 });
const renderer2 = new THREE.WebGLRenderer({ alpha: true, canvas: canvas2 });
const renderer3 = new THREE.WebGLRenderer({ alpha: true, canvas: canvas3 });
const renderer4 = new THREE.WebGLRenderer({ alpha: true, canvas: canvas4 });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer2.setSize( window.innerWidth/9, window.innerHeight/9);
renderer3.setSize( window.innerWidth/9, window.innerHeight/9);
renderer4.setSize( window.innerWidth/9, window.innerHeight/9);

/*Premier gros cube avec la chaine dans le premier 100vh */
let geometryChaine = new THREE.BoxGeometry(0.05,1.7,0.05);
let coteChaine = new THREE.EdgesGeometry(geometryChaine);
const chaine = new THREE.LineSegments( coteChaine, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add(chaine);
chaine.position.set(0,2.2,0);

let geometryCube = new THREE.BoxGeometry(2,2,2);
let coteCube = new THREE.EdgesGeometry(geometryCube);
const cube = new THREE.LineSegments( coteCube, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( cube );
cube.rotation.set(0.5,0,0);
cube.position.set(0,0.5,0);

/* Cube dans la première boite */
const geometryCube2 = new THREE.BoxGeometry( 3, 3, 3 );
const materialCube2 = new THREE.MeshNormalMaterial( );
const cube2 = new THREE.Mesh( geometryCube2, materialCube2 );
scene2.add( cube2 );
cube2.rotation.set(13,90,0);

/* TorusKnot dans la deuxième boite */
const geometryKnot = new THREE.TorusKnotGeometry( 1.4, 0.5, 100);
const torusKnot = new THREE.Mesh( geometryKnot, materialCube2 );
scene3.add( torusKnot );

/* Torus dans la troisième boite */
const geometryTorus = new THREE.TorusGeometry( 1.4, 0.5, 16, 100 );
const torus = new THREE.Mesh( geometryTorus, materialCube2 );
scene4.add( torus );






//Lumière!
const lumiere = new THREE.AmbientLight(0x404040);
scene.add(lumiere);


function animate() {
    requestAnimationFrame( animate );
    //Re-render la scène à chaque fois pour voir les modifs
    renderer.render( scene, camera );
    renderer2.render( scene2, camera );
    renderer3.render( scene3, camera );
    renderer4.render( scene4, camera );
    chaine.rotation.y += 0.02;
    cube.rotation.y += 0.02;
    cube2.rotation.y += 0.02
    cube2.rotation.x += 0.02
    torusKnot.rotation.y += 0.02
    torusKnot.rotation.x += 0.02
    torus.rotation.y += 0.02
    torus.rotation.x += 0.02
};

//Appeler la fonction
animate();