//Déclarer la variable de la scène
const scene = new THREE.Scene();

//Créer une caméra 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );

//Position de la caméra (On peut la changer)
camera.position.set(0, 2, 5);

//Renderer WebGL
const renderer = new THREE.WebGLRenderer();

//Appliquer au renderer la taille de la fenêtre
renderer.setSize( window.innerWidth, window.innerHeight );

//Mettre le renderer dans la scène / l'inclure
document.body.appendChild( renderer.domElement );

//Render un objet qui est en .gltf
const loader = new THREE.GLTFLoader();


//**************************************CANARD*****************************************//
loader.load('model/Duck/scene.gltf', result =>{
    modelCanard = result.scene.children[0];
    modelCanard.position.set(-3,1.5,0);
    scene.add(modelCanard);
});

//**************************************GUN******************************************//
loader.load('model/Gun/scene.gltf', result =>{
    modelGun = result.scene.children[0];
    modelGun.position.set(3,2,0);
    scene.add(modelGun);
});

/*Skybox*/
let materielArray = [];
let texture_ft = new THREE.TextureLoader().load('media/skybox/WeltraumR.png');
let texture_bk = new THREE.TextureLoader().load('media/skybox/WeltraumL.png');
let texture_up = new THREE.TextureLoader().load('media/skybox/WeltraumO.png');
let texture_dn = new THREE.TextureLoader().load('media/skybox/WeltraumU.png');
let texture_rt = new THREE.TextureLoader().load('media/skybox/Weltraum.png');
let texture_lf = new THREE.TextureLoader().load('media/skybox/WeltraumH.png');

materielArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
materielArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
materielArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
materielArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
materielArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
materielArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));

for(let i=0; i<6; i++)
    materielArray[i].side = THREE.DoubleSide;


let skyboxGeo = new THREE.BoxGeometry(1000,1000,1000);
let skybox = new THREE.Mesh(skyboxGeo, materielArray);
scene.add(skybox);



//Lumière!
const lumiere = new THREE.HemisphereLight( 0xffeeb1, 0x080820, 4 );
scene.add(lumiere);

//Controle de la souris et des flèches
const controls = new THREE.PointerLockControls(camera, renderer.domElement);
//Le mouvement pour l'instant ne change pas selon la direction que l'on regarde, corriger cela!
//Vidéo Yt en espagnol qui pourrait m'aider : https://www.youtube.com/watch?v=b7MQSqU67Uo&ab_channel=MonkeyWit
let vitesseX = 2;
let vitesseZ = 2;
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) {
        camera.position.z -= vitesseZ;
    } else if (keyCode == 83) {
        camera.position.z += vitesseZ;
    } else if (keyCode == 65) {
        camera.position.x -= vitesseX;
    } else if (keyCode == 68) {
        camera.position.x += vitesseX;
    }
};


//****************************************Créer un cube!*******************************************************
//Module de geometry pour un cube
let geometry = new THREE.BoxGeometry(1,1,1);
//Matériel
let material = new THREE.MeshNormalMaterial();
//Créer le mesh (geométrie + matériel du cube)
let cube = new THREE.Mesh( geometry, material );
//Ajouter à la scène le cube
scene.add( cube );
//Ajuster la posistion du torus
cube.position.set(0,1,0)

/* Floor  */    
let geometrySol = new THREE.PlaneGeometry( 100, 100, 50, 50 );
let materialSol = new THREE.MeshBasicMaterial({ color: "black"})
let floor = new THREE.Mesh( geometrySol, materialSol );
floor.rotateX(-Math.PI / 2);
scene.add( floor );


//Fonction pour animer le cube
function animate() {
    requestAnimationFrame( animate );
    if(typeof modelGun != "undefined"){
        //Faire rotationer le gun
        modelGun.rotation.z += 0.05;
    }
    if(typeof modelCanard != "undefined"){
        //Faire rotationer le canard
        modelCanard.rotation.z += 0.05;
    }

    //Re-render la scène à chaque fois pour voir les modifs
    renderer.render( scene, camera );



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
    //Lock les contrôles
    controls.lock();
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