/********************************************* */
/********************************************* */
/* Script qui est utilisé dans l'environnement */
/*        @Jérémy Emond-Lapierre - 2022        */
/********************************************* */
/********************************************* */

//Déclarer la variable de la scène
const scene = new THREE.Scene();

//Créer une caméra                         FOV                Dimension              Vue de près/ loin
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );

//Position de la caméra (On peut la changer)
camera.position.set(0, 2, 0);

// Canvas (dans quoi le rendu Three.js sera fait)
const canvas = document.querySelector('canvas.webgl');

//Renderer WebGL
const renderer = new THREE.WebGLRenderer({
    //Assigner le canvas dans lequel le rendu sera fait
    canvas: canvas
});

//Appliquer au renderer la taille de la fenêtre
renderer.setSize( window.innerWidth, window.innerHeight );

//Render un objet qui est en .gltf (format 3D dans le Web)
const loader = new THREE.GLTFLoader();


/* Quelques définitions avant de commencer... */
// result.scene.children[0] => Sert à mettre comme enfant de la scène l'objet
// position.set(x,y,z) => sa position
// scale.set(x,y,z) => Le redimensionner
// rotation.set => changer la rotation de l'objet
// .add => (l'ajouter à la scène)


// Planète qui tourne dans la scène
loader.load('model/planete/scene.gltf', result =>{
    planete = result.scene.children[0];
    planete.position.set(-90,11, -90);
    planete.scale.set(50,50,50);
    scene.add(planete);
});


// Tous les modèles qui font partis du biome neige //
/* l'ours */
loader.load('model/oursHache/scene.gltf', result =>{
    oursHache = result.scene.children[0];
    oursHache.position.set(-20,1.7, 50);
    oursHache.scale.set(0.5,0.5,0.5);
    oursHache.rotation.z = 180;
    scene.add(oursHache);
});
/* Les arbres avec de la neige */
loader.load('model/arbreNeige/scene.gltf', result =>{
    arbreNeige = result.scene.children[0];
    arbreNeige.position.set(-50,0, 50);
    arbreNeige.scale.set(10,10,10);
    scene.add(arbreNeige);
});

loader.load('model/arbreNeige/scene.gltf', result =>{
    arbreNeige2 = result.scene.children[0];
    arbreNeige2.position.set(-30,0, 35);
    arbreNeige2.scale.set(10,10,10);
    scene.add(arbreNeige2);
});

loader.load('model/arbreNeige/scene.gltf', result =>{
    arbreNeige3 = result.scene.children[0];
    arbreNeige3.position.set(-42,0, 20);
    arbreNeige3.scale.set(10,10,10);
    scene.add(arbreNeige3);
});
/* L'ile de neige qui flotte */
loader.load('model/ileNeige/scene.gltf', result =>{
    ileNeige = result.scene.children[0];
    ileNeige.position.set(-90,5, 30);
    ileNeige.scale.set(0.02,0.02,0.02);
    scene.add(ileNeige);
});
/* Le bigfoot */
loader.load('model/bigfoot/scene.gltf', result =>{
    bigfoot = result.scene.children[0];
    bigfoot.position.set(-40,0, 42);
    bigfoot.scale.set(4,4,4);
    bigfoot.rotation.z = -180;
    scene.add(bigfoot);
});
/* Le feu de camp avec le père-noel */
loader.load('model/feuCamp/scene.gltf', result =>{
    feuCamp = result.scene.children[0];
    feuCamp.position.set(-10,0, 10);
    feuCamp.scale.set(2,2,2);
    feuCamp.rotation.z = 135;
    scene.add(feuCamp);
});
/* Le sol de neige */
loader.load('model/solNeige/scene.gltf', result =>{
    solNeige = result.scene.children[0];
    solNeige.position.set(-18.7,0.001, 18.7);
    solNeige.scale.set(0.14,0.14,0.14);
    scene.add(solNeige);
});
/* Les igloos */
loader.load('model/igloo/scene.gltf', result =>{
    igloo = result.scene.children[0];
    igloo.position.set(-18.7,0, 20);
    igloo.scale.set(3,3,3);
    igloo.rotation.z = -180;
    scene.add(igloo);
});
loader.load('model/igloo/scene.gltf', result =>{
    igloo = result.scene.children[0];
    igloo.position.set(-18.7,0, 40);
    igloo.scale.set(3,3,3);
    igloo.rotation.z = -80;
    scene.add(igloo);
});
/* Le flocon en haut de la scène */
loader.load('model/flocon/scene.gltf', result =>{
    flocon = result.scene.children[0];
    flocon.position.set(-30,30, 30);
    flocon.scale.set(2,2,2);
    scene.add(flocon);
});

// Tous les modèles qui font partis du biome neige //

/* La plage en tier */
loader.load('model/plage/scene.gltf', result =>{
    plage = result.scene.children[0];
    plage.position.set(-14.2,-36, -3);
    plage.scale.set(0.46,0.46,0.46);
    scene.add(plage);
});
/* Le soleil en haut de la scène */
loader.load('model/soleil/scene.gltf', result =>{
    soleil = result.scene.children[0];
    soleil.position.set(30,30, 30);
    soleil.scale.set(0.05,0.05,0.05);
    scene.add(soleil);
});        


// Tous les modèles qui font partis du biome printemps //
//Montagne + lac + maison
loader.load('model/printemps/scene.gltf', result =>{
    printemps = result.scene.children[0];
    printemps.position.set(-35,-19.5, -36.5);
    printemps.rotation.z = 5.5;
    printemps.scale.set(17.3,17.3,17.3);
    scene.add(printemps);
});
// Fleur en haut de la scène
loader.load('model/fleur/scene.gltf', result =>{
    fleur = result.scene.children[0];
    fleur.position.set(-35,30, -45);
    fleur.scale.set(4,4,4);
    scene.add(fleur);
});      

// Tous les modèles qui font partis du biome automne //
//Maison classique                                
loader.load('model/maisonAutomne/scene.gltf', result =>{
    maisonAutomne = result.scene.children[0];
    maisonAutomne.position.set(22,-0.8, -22);
    maisonAutomne.rotation.z = 100;
    maisonAutomne.scale.set(2,2, 2);
    scene.add(maisonAutomne);
});
//Maison de la sorcière
loader.load('model/maisonPeur/scene.gltf', result =>{
    maisonPeur = result.scene.children[0];
    maisonPeur.position.set(49,0, -18);
    maisonPeur.scale.set(0.01,0.01, 0.02);
    scene.add(maisonPeur);
});


//Foret derriere les maisons 
loader.load('model/foret/scene.gltf', result =>{
    foret = result.scene.children[0];
    foret.position.set(27,0, -35);
    foret.scale.set(0.07,0.09, 0.09);
    foret.rotation.z = 1;
    scene.add(foret);
});

//Citrouille en haut de la scène
loader.load('model/citrouille/scene.gltf', result =>{
    citrouille = result.scene.children[0];
    citrouille.position.set(30,25, -30);
    citrouille.scale.set(0.2,0.2, 0.2);
    scene.add(citrouille);
});


/*Créer une skybox*/
let materielArray = [];
//Définir toutes les faces
let texture_ft = new THREE.TextureLoader().load('media/skybox/WeltraumR.png');
let texture_bk = new THREE.TextureLoader().load('media/skybox/WeltraumL.png');
let texture_up = new THREE.TextureLoader().load('media/skybox/WeltraumO.png');
let texture_dn = new THREE.TextureLoader().load('media/skybox/WeltraumU.png');
let texture_rt = new THREE.TextureLoader().load('media/skybox/Weltraum.png');
let texture_lf = new THREE.TextureLoader().load('media/skybox/WeltraumH.png');
//Les inclures dans le tableau "materielArray"
materielArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
materielArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
materielArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
materielArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
materielArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
materielArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));
//Pour chacun des côtés, afficher la texture sur les deux faces
for(let i=0; i<6; i++)
    materielArray[i].side = THREE.DoubleSide;

//Définir la boite de la skybox et l'ajouter
let skyboxGeo = new THREE.BoxGeometry(1000,1000,1000);
let skybox = new THREE.Mesh(skyboxGeo, materielArray);
scene.add(skybox);

//Le dome qui entoure la plateforme volante sur laquel le joueur se trouve
let domeGeo = new THREE.BoxGeometry(120,120,120);
let domeMat = new THREE.MeshPhongMaterial({color : "grey", opacity: 0.1, transparent: true});
domeMat.side = THREE.DoubleSide;
let dome = new THREE.Mesh(domeGeo, domeMat);
scene.add(dome);


//Faire des particules, soit les étoiles dans la scène
const particulesGeometrie = new THREE.BufferGeometry;
//Nombre de particules
const nbParticules = 1000;
const posArray = new Float32Array(nbParticules * 3);

//Mettre leur position random dans la scène à chaque fois!
for(let i = 0; i < nbParticules * 3; i++){
    posArray[i] = (Math.random() - 0.5) * 500;
}
//Mettre la valeur prise en haut avec la loop dans l'attribut de position
particulesGeometrie.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
//Matériel des particules
const materielParticule = new THREE.PointsMaterial({size : 0.005});
//Mesh des particules
const particulesMesh = new THREE.Points(particulesGeometrie, materielParticule);
//Ajout à la scène les particules
scene.add(particulesMesh);

//Source de lumière dans la scène
let intensite = 3;
const lumiere = new THREE.HemisphereLight( 0xffeeb1, 0x080820, intensite );
scene.add(lumiere);

//Controle de la souris et des flèches
const controls = new THREE.PointerLockControls(camera, renderer.domElement);

//Deplacement de base dans la direction X et Z
let directionX = 0, directionZ = 0;
//Initialiser les variables qui vont permettre le déplacement
let tempsI, tempsF, vel, delta;
tempsI = Date.now();
vel = 30;

//Quand une touche est appuyé sur le clavier
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    //W
    if (keyCode == 87) {
        directionZ = 1;
    }
    //S
    else if (keyCode == 83) {
        directionZ = -1;    }
    //A
    else if (keyCode == 65) {
        directionX = -1;
    }
    //D
    else if (keyCode == 68) {
        directionX= 1;
    }

    
};
//Quand la touch est relevée
document.addEventListener("keyup", onDocumentKeyUp, false);
function onDocumentKeyUp(event) {
    var keyCode = event.which;
    //W
    if (keyCode == 87) {
        directionZ = 0;
    }
    //S
    else if (keyCode == 83) {
        directionZ = 0;
    }
    //A
    else if (keyCode == 65) {
        directionX = 0;
    }
    //D
    else if (keyCode == 68) {
        directionX= 0;
    }


};

//Le sol dans la scène (corridor noir)
let geometrySol1 = new THREE.PlaneGeometry( 120, 10, 50, 50 );
let geometrySol2 = new THREE.PlaneGeometry( 10, 120, 50, 50 );
let materialSol = new THREE.MeshBasicMaterial({ color: "black" })
let floor = new THREE.Mesh( geometrySol1, materialSol );
let floor2 = new THREE.Mesh( geometrySol2, materialSol );
floor.rotateX(-Math.PI / 2);
floor2.rotateX(-Math.PI / 2);
scene.add( floor );
scene.add( floor2 );

//Initialiser le module qui permet de charger les textures
const textureLoader = new THREE.TextureLoader();
//Plancher du biome neige
//Charger la texture
const neigeBaseColor = textureLoader.load('../media/img/SnowMat/Snow_003_COLOR.jpg');
neigeBaseColor.wrapS = THREE.RepeatWrapping;
neigeBaseColor.wrapT = THREE.RepeatWrapping;
//Définir combien de fois la texture va se répeter dans le mesh
neigeBaseColor.repeat.set(40,40); 
//Toutes les paramètre de la texture
const neigeNormalMap = textureLoader.load('../media/img/SnowMat/Snow_003_NORM.jpg');
const neigeRoughnessMap = textureLoader.load('../media/img/SnowMat/Snow_003_ROUGH.jpg');
const neigeOCC = textureLoader.load('../media/img/SnowMat/Snow_003_OCC.jpg');
const neigeDisp = textureLoader.load('../media/img/SnowMat/Snow_003_DISP.png');
//Définir le plancher et l'ajouter dans la scène
let geometryNeige = new THREE.PlaneGeometry( 55, 55, 10, 10);
let materielSolNeige = new THREE.MeshBasicMaterial({
     map: neigeBaseColor,
     normalMap: neigeNormalMap,
     displacementMap : neigeDisp,
     displacementScale : 50,
     roughnessMap: neigeRoughnessMap
})
let solNeige = new THREE.Mesh( geometryNeige, materielSolNeige );
solNeige.position.set (-32.5,0,32.5);
solNeige.rotateX(-Math.PI / 2);
scene.add( solNeige );


//Plancher du biome printemps
let geometryPrintemps = new THREE.PlaneGeometry( 55, 55, 100, 100 );
let materielSolPrintemps = new THREE.MeshBasicMaterial({ color: "#28420E" })
let solPrintemps = new THREE.Mesh( geometryPrintemps, materielSolPrintemps );
solPrintemps.position.set (-32.5,0,-32.5);
solPrintemps.rotateX(-Math.PI / 2);
scene.add( solPrintemps );

//Plancher du biome automne
let geometryAutomne = new THREE.PlaneGeometry( 55, 55, 100, 100 );
let materielSolAutomne = new THREE.MeshBasicMaterial({ color: "#14660B" })
let solAutomne = new THREE.Mesh( geometryAutomne, materielSolAutomne );
solAutomne.position.set (32.5,0,-32.5);
solAutomne.rotateX(-Math.PI / 2);
scene.add( solAutomne );


// Définir le temps final du déplacement, soit après avoir regardé si une touche a été appuyée plus tôt
tempsF = Date.now();

//Fonction qui s'appelle a chaque frame
function update() {
    //Re-appeler la fonction à chaque fois
    requestAnimationFrame( update );

    if(typeof planete != "undefined"){
        //Faire tourner la planète de X unité sur l'axe des Y à chaque frame
        planete.rotation.y += 0.005;
    }

    //Faire tourner les étoiles
    particulesMesh.rotation.x += 0.0005;
    particulesMesh.rotation.z += 0.0005;


    /* Garder la caméra dans la limite*/
    if(camera.position.x > 59.5){
        camera.position.x = 59.5;
    }
    else if(camera.position.x < -59.5){
        camera.position.x = -59.5;
    }
    else if(camera.position.z > 59.5){
        camera.position.z = 59.5;
    }
    else if(camera.position.z < -59.5){
        camera.position.z = -59.5;
    }
    
    
    //Aller calculer le différentiel de temps entre le temps initial du déplacement au temps final
    delta = (tempsF - tempsI)/2000;

    //Définir la distance qui devrait être parcouru en X et Z
    let xDis = directionX * vel * delta;
    let zDis = directionZ * vel * delta;

    //Appliquer le déplacement aux controles
    controls.moveRight(xDis);
    controls.moveForward(zDis);

    //Re-render la scène à chaque fois pour voir les modifs
    renderer.render( scene, camera );
};
//Appeler la fonction
update();

//Bar de chargement avant d'entrer dans l'environnement
let pourcentage = document.querySelector('.pourcentage');
let progres = document.querySelector('.progres');
let boutton = document.querySelector('.button-49');
let compteur = 4;
let per = 16;
let chargement = setInterval(fonctionChargement, 50);
function fonctionChargement(){
    //Si le chragement est terminé...
    if(compteur == 100 && per == 400){
        clearInterval(chargement);
        boutton.style.display = 'block';
    }
    //Sinon, continuer de l'incrémenter
    else{
        per = per + 4;
        compteur = compteur + 1;
        progres.style.width = per + 'px';
        pourcentage.textContent = compteur + '%';
    }
}

let menuPause = document.querySelector('.pause');
let container = document.querySelector('.container');
//Si on clique sur le bouton "Commencer..."
function afficherEnviro(){
    //Lock les controles
    controls.lock();
    //Enelver l'écran de chargement
    container.style.display = "none";
    let audio = new Audio('media/audio/DirkGentlys.mp3');
    //Jouer la musique!
    audio.volume = 1;
    audio.play();
    audio.loop = true;
    //Afficher le menu de pause en bas à droite
    menuPause.style.display = "flex";
}

let menuDroit = true;
let menuFleche = document.querySelector('.fleche');



//Si on appui sur la flèche en bas à droite
menuFleche.addEventListener('click', function afficherMenu(){
    //Le monter
    if(menuDroit == true){
        menuFleche.style.transform = "rotate(180deg)";
        menuDroit = false;
        menuPause.style.bottom = "0px";
    }
    //Le descendre
    else{
        menuFleche.style.transform = "rotate(0deg)";
        menuDroit = true;
        menuPause.style.bottom = "-110px";
    }
    
});

//Si on appuie sur le bouton continuer dans le menu
function continuer(){
    //On lock les controles
    controls.lock();
    //On redescend le menu
    menuPause.style.bottom = "-110px";
    menuFleche.style.transform = "rotate(0deg)";
    menuDroit = true;
}

//S'assurer que si on change la taille de la fenêtre, le ratio du canva se conserve
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}, false);