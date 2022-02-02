//Déclarer la variable de la scène
const scene = new THREE.Scene();

//Créer une caméra 
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Position de la caméra (On peut la changer)
camera.position.set(0, 0, 15);

//Renderer WebGL
const renderer = new THREE.WebGLRenderer({ antialias: false,alpha:true });

//Appliquer au renderer la taille de la fenêtre
renderer.setSize( window.innerWidth, window.innerHeight );

//Mettre le renderer dans la scène / l'inclure
document.body.appendChild( renderer.domElement );

//Render un objet qui est en .gltf
const loader = new THREE.GLTFLoader();

//**************************************CANARD******************************************/
loader.load('model/Duck/scene.gltf', result =>{
    modelCanard = result.scene.children[0];
    modelCanard.position.set(0,5,0);
    scene.add(modelCanard);
});

//**************************************GUN******************************************/
loader.load('model/Gun/scene.gltf', result =>{
    modelGun = result.scene.children[0];
    modelGun.position.set(0,8,0);
    scene.add(modelGun);
});


//Lumière!
const lumiere = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
scene.add(lumiere);

//Controle de la souris et des flèches
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

//****************************************Créer un cube!*******************************************************
//Module de geometry pour un cube
let geometry = new THREE.TorusKnotGeometry();
//Matériel
let material = new THREE.MeshNormalMaterial();
//Créer le mesh (geométrie + matériel du cube)
let torus = new THREE.Mesh( geometry, material );
//Ajouter à la scène le cube
scene.add( torus );
//Ajuster la posistion du torus
torus.position.set(0,2,0)

/* Floor  */    
let geometrySol = new THREE.PlaneGeometry( 8, 8, 1, 1 );
let materialSol = new THREE.MeshNormalMaterial();
let floor = new THREE.Mesh( geometrySol, materialSol );
floor.material.side = THREE.BackSide;
floor.rotation.x += 90;
scene.add( floor );


//Fonction pour animer le cube
function animate() {
    requestAnimationFrame( animate );
    torus.rotation.x += 0.008;
    torus.rotation.y += 0.008;
    floor.rotation.z += 0.008;
    modelGun.rotation.z += 0.05;
    modelCanard.rotation.z += 0.05;
    //Re-render la scène à chaque fois pour voir les modifs
    renderer.render( scene, camera );
    controls.update();
};
//Appeler la fonction
animate();

//Musique!
//Variable qui permet de lancer le son juste une fois
let sonActif = false;
//Trouver le bouton dans la page
const bouton = document.querySelector("#fixedbutton");
//Si on appuie dessus...
bouton.addEventListener("click", function(){
    if(sonActif == false){
        //On le met en couleur!
        bouton.classList.toggle("FixedButtonAlume");
        //On joue le son
        let audio = new Audio('media/audio/PoliticsViolence.mp3');
        audio.volume = 0.2;
        audio.play();
        sonActif = true;
    }
});