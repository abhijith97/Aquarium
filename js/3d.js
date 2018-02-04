"use strict";

var file = './collada/barracuda.dae'; // Path to the Collada model
var tilted = true; // Turn the model 90 degrees?
var modelScale = 100; // depending on the size of the model
var cameraPositionZ = 1500; // Distance of the camera
var cameraInitialVector = 30; // the smaller the vector, the larger the model appears
var colorLight = [0xffffaa, 0xffffaa]; // Colors of the two lights
var colorBackground = 0xffffaa; // Background color
var dimensions = [window.innerWidth, window.innerHeight]; // Size of the display
var canvasid = '3dmodell'; // Name of the canvas container
var rotate = [0.0005, 0.01, 0.0005]; // speed of the animation (X, Y, Z axis)
var rotateManual = 0.1; // manual rotation via keyboard
var cameraZoom = 50; // manually change the zoom level
var play = true; // animate immediately after loading?
// do not change anything from here

var camera, scene, renderer, dae, skin, lastFrame;
window.addEventListener('load', function() {
 if (!Detector.webgl) Detector.addGetWebGLMessage(); // Browser can not use WebGL

// Collada model
 var loader = new THREE.ColladaLoader();
 if (tilted) loader.options.upAxis = 'X'; // Rotation by 90 degrees
 loader.options.convertUpAxis = true; // On the Y axis
 loader.load(file, function (collada) {
  dae = collada.scene;
  dae.scale.x = dae.scale.y = dae.scale.z = modelScale;
  scene = new THREE.Scene(); // Initiates the scene
  scene.add(dae);

  // Camera
  camera = new THREE.PerspectiveCamera(cameraInitialVector, dimensions[0]/dimensions[1], 1, 10000);
  camera.position.z = cameraPositionZ;

  // Lights
  var directionalLight1 = new THREE.DirectionalLight(colorLight[0], 1.0);
  directionalLight1.position.set(1, 0, 0);
  var directionalLight2 = new THREE.DirectionalLight(colorLight[1], 2.0);
  directionalLight2.position.set(-1, 0, 0);
  scene.add(directionalLight1);
  scene.add(directionalLight2);

  // Renderer
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setClearColor(colorBackground);
  renderer.setSize(dimensions[0], dimensions[1]);
  // Anchored representation in HTML
  document.getElementById(canvasid).appendChild(renderer.domElement);
  animate();
 });

 var animate = function() {
  requestAnimationFrame(animate); // Animation loop
  if (play) { // Rotate when Play status == true
   dae.rotation.x += rotate[0];
   dae.rotation.y += rotate[1];
   dae.rotation.z += rotate[2];
  }
  renderer.render(scene, camera);
 };

 // Query the keyboard shortcut
 window.addEventListener('keydown', function(e) {
  var key = e.keyCode;
  console.log("Key " + key);
  switch (key) {
   case 37: // left
    dae.rotation.y -= rotateManual;
    e.preventDefault();
    break;
   case 39: // right
    dae.rotation.y += rotateManual;
    e.preventDefault();
    break;
   case 38: // up
    dae.rotation.x -= rotateManual;
    e.preventDefault();
    break;
   case 40: // down
    dae.rotation.x += rotateManual;
    e.preventDefault();
    break;
   case 33: // pageup
    dae.rotation.z += rotateManual;
    e.preventDefault();
    break;
   case 34: // pagedown
    dae.rotation.z -= rotateManual;
    e.preventDefault();
    break;
   case 32: // space
    play = play? false : true;
    e.preventDefault();
    break;
   case 187: // plus
    camera.position.z -= cameraZoom;
    e.preventDefault();
    break;
   case 189: // minus
    camera.position.z += cameraZoom;
    e.preventDefault();
    break;
  }
  renderer.render(scene, camera);
 }, false);
}, false);