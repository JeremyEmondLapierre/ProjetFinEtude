//Déclarer la variable de la scène
const scene = new THREE.Scene();
//Créer une caméra 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//Renderer WebGL
const renderer = new THREE.WebGLRenderer();
//Appliquer au renderer la taille de la fenêtre
renderer.setSize( window.innerWidth, window.innerHeight );
//Mettre le renderer dans la scène / l'inclure
document.body.appendChild( renderer.domElement );

//****************************************Créer un cube!*******************************************************
//Module de geometry pour un cube
const geometry = new THREE.BoxGeometry();
//Matériel
const color1 = new THREE.Color('red');
const material = new THREE.MeshNormalMaterial( { color: color1 } );
//Créer le mesh (geométrie + matériel du cube)
const cube = new THREE.Mesh( geometry, material );
//Ajouter à la scène le cube
scene.add( cube );

//Position de la caméra (On peut la changer)
camera.position.z = 2;

//Fonction pour animer le cube
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.008;
    cube.rotation.y += 0.008;
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
    if(sonActif == false){
        //On le met en couleur!
        bouton.classList.add("FixedButtonAlume");
        //On joue le son
        let audio = new Audio('media/audio/PoliticsViolence.mp3');
        audio.volume = 0.2;
        audio.play();
        sonActif = true;
    }
});