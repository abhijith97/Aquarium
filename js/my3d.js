var tilted = true; // Turn the model 90 degrees?
var cameraPositionZ = 1500; // Distance of the camera
var cameraInitialVector = 30; // the smaller the vector, the larger the model appears
var colorLight = [0x40a4df, 0x40a4df]; // Colors of the two lights
var colorBackground = 0x40a4df; // Background color
var dimensions = [window.innerWidth, window.innerHeight, 5]; // Size of the display
var canvasid = '3dmodell'; // Name of the canvas container
var rotate = [0.0005, 0.01, 0.0005]; // speed of the animation (X, Y, Z axis)
var rotateManual = 0.1; // manual rotation via keyboard
var cameraZoom = 50; // manually change the zoom level
var play = true; // animate immediately after loading?
// do not change anything from here
var cam = "free view"
var curfish = 0;



//MODELS 
var fish = new Array();
fish[0] = new Object(), 
fish[0].file  = './collada/getriebe.dae';
fish[0].modelScale = 100;
fish[0].titled = true;
fish[0].x = Math.floor((Math.random()*  dimensions[0]) - (dimensions[0])/2) ;
fish[0].y = Math.floor((Math.random()*  dimensions[1]) - (dimensions[1])/2) ;
fish[0].z = Math.floor((Math.random()*  dimensions[2]) - (dimensions[2])/2) ;
fish[0].vx = -1;
fish[0].vy = Math.floor((Math.random()* 2) -1);
fish[0].vz = Math.floor((Math.random()* 2) -1);
fish[0].modelScale = 10;
fish[0].dae = new Object();

fish[1]= new Object();
fish[1].file  = './collada/barracuda.dae';
fish[1].titled = true;
fish[1].x =  Math.floor((Math.random()*  dimensions[0]) - (dimensions[0])/2);
fish[1].y =  Math.floor((Math.random()*  dimensions[1]) - (dimensions[1])/2);
fish[1].z =  Math.floor((Math.random()*  dimensions[2]) - (dimensions[2])/2);
fish[1].vx = -1;
fish[1].vy = Math.floor((Math.random()* 2) -1);
fish[1].vz = Math.floor((Math.random()* 2) -1);
fish[1].modelScale = 10;
fish[1].dae = new Object();

fish[2]= new Object();
fish[2].file  = './collada/barracuda.dae';
fish[2].titled = true;
fish[2].x =  Math.floor((Math.random()*  dimensions[0]) - (dimensions[0])/2);
fish[2].y =  Math.floor((Math.random()*  dimensions[1]) - (dimensions[1])/2);
fish[2].z =  Math.floor((Math.random()*  dimensions[2]) - (dimensions[2])/2);
fish[2].vx = 1;
fish[2].vy = Math.floor((Math.random()* 2) -1);
fish[2].vz = Math.floor((Math.random()* 2) -1);
fish[2].modelScale = 10;
fish[2].dae = new Object();

fish[3]= new Object();
fish[3].file  = './collada/getriebe.dae';
fish[3].titled = true;
fish[3].x =  Math.floor((Math.random()*  dimensions[0]) - (dimensions[0])/2);
fish[3].y =  Math.floor((Math.random()*  dimensions[1]) - (dimensions[1])/2);
fish[3].z =  Math.floor((Math.random()*  dimensions[2]) - (dimensions[2])/2);
fish[3].vx = -1;
fish[3].vy = Math.floor((Math.random()* 2) -1);
fish[3].vz = Math.floor((Math.random()* 2) -1);
fish[3].modelScale = 10;
fish[3].dae = new Object();

fish[4]= new Object();
fish[4].file  = './collada/barracuda.dae';
fish[4].titled = true;
fish[4].x =  Math.floor((Math.random()*  dimensions[0]) - (dimensions[0])/2);
fish[4].y =  Math.floor((Math.random()*  dimensions[1]) - (dimensions[1])/2);
fish[4].z =  Math.floor((Math.random()*  dimensions[2]) - (dimensions[2])/2);
fish[4].vx = -1;
fish[4].vy = Math.floor((Math.random()* 2) -1);
fish[4].vz = Math.floor((Math.random()* 2) -1);
fish[4].modelScale = 10;
fish[4].dae = new Object();

fish[5]= new Object();
fish[5].file  = './collada/getriebe.dae';
fish[5].titled = true;
fish[5].x =  Math.floor((Math.random()*  dimensions[0]) - (dimensions[0])/2);
fish[5].y =  Math.floor((Math.random()*  dimensions[1]) - (dimensions[1])/2);
fish[5].z =  Math.floor((Math.random()*  dimensions[2]) - (dimensions[2])/2);
fish[5].vx = 1;
fish[5].vy = Math.floor((Math.random()* 2) -1);
fish[5].vz = Math.floor((Math.random()* 2) -1);
fish[5].modelScale = 10;
fish[5].dae = new Object();

fish[6]= new Object();
fish[6].file  = './collada/barracuda.dae';
fish[6].titled = true;
fish[6].x =  Math.floor((Math.random()*  dimensions[0]) - (dimensions[0])/2);
fish[6].y =  Math.floor((Math.random()*  dimensions[1]) - (dimensions[1])/2);
fish[6].z =  Math.floor((Math.random()*  dimensions[2]) - (dimensions[2])/2);
fish[6].vx = 1;
fish[6].vy = Math.floor((Math.random()* 2) -1);
fish[6].vz = Math.floor((Math.random()* 2) -1);
fish[6].modelScale = 10;
fish[6].dae = new Object();

fish[7]= new Object();
fish[7].file  = './collada/getriebe.dae';
fish[7].titled = true;
fish[7].x =  Math.floor((Math.random()*  dimensions[0]) - (dimensions[0])/2);
fish[7].y =  Math.floor((Math.random()*  dimensions[1]) - (dimensions[1])/2);
fish[7].z =  Math.floor((Math.random()*  dimensions[2]) - (dimensions[2])/2);
fish[7].vx = 1;
fish[7].vy = Math.floor((Math.random()* 2) -1);
fish[7].vz = Math.floor((Math.random()* 2) -1);
fish[7].modelScale = 10;
fish[7].dae = new Object();



var rock = new Object();
rock.file  = './collada/Rock.dae';
rock.titled = true;
rock.x = 1;
rock.y = -dimensions[1]/2;
rock.z = 0;
rock.vx = 0;
rock.vy = 0;
rock.vz = 0;
rock.modelScale = 100;
rock.dae = new Object();

var tree = new Object();
tree.file  = './collada/tree.dae';
tree.titled = true;
tree.x = 3;
tree.y = -dimensions[1]/2;
tree.z = 0;
tree.vx = 0;
tree.vy = 0;
tree.vz = 0;
tree.modelScale = 50;
tree.dae = new Object();

var apple = new Object();
apple.file  = './collada/apple.dae';
apple.titled = false;
apple.x = 500;
apple.y = 500 + dimensions[1]/2;
apple.z = 0;
apple.vx = 0;
apple.vy = -1;
apple.vz = 0;
apple.modelScale = 10;
apple.dae = new Object();
food = false;
foodEating = false;
fishComing = false;
xreached = false;
yreached = false;

var egg = new Object();
egg.file  = './collada/egg.dae';
egg.titled = false;
egg.x = 2 * dimensions[0];
egg.y = 2 * dimensions[1];
egg.z = 0;
egg.vx = 0;
egg.vy = -1;
egg.vz = 0;
egg.modelScale = 10;
egg.dae = new Object();
eggPresent = false
newone = false;

// console.log(window.innerWidth);
var camera, scene, renderer, dae, skin, lastFrame;
scene = new THREE.Scene(); // Initiates the scene

window.addEventListener('load', function() {

 if (!Detector.webgl) Detector.addGetWebGLMessage(); // Browser can not use WebGL

// Collada model
var loader = new THREE.ColladaLoader();
 if (tilted) loader.options.upAxis = 'X'; // Rotation by 90 degrees
 loader.options.convertUpAxis = true; // On the Y axis

 //FISH 0
 loader.load(fish[0].file, function (collada) {

  fish[0].dae = collada.scene;

  fish[0].dae.scale.x = fish[0].dae.scale.y = fish[0].dae.scale.z = fish[0].modelScale;
  
  scene.add(fish[0].dae);
  animate();
});

 //FISH 1
 loader.load(fish[1].file, function (collada) {

  fish[1].dae = collada.scene;

  fish[1].dae.scale.x = fish[1].dae.scale.y = fish[1].dae.scale.z = fish[1].modelScale;
  
  scene.add(fish[1].dae);
  animate();
});

 //FISH 2
 loader.load(fish[2].file, function (collada) {

  fish[2].dae = collada.scene;

  fish[2].dae.scale.x = fish[2].dae.scale.y = fish[2].dae.scale.z = fish[2].modelScale;
  
  scene.add(fish[2].dae);
  animate();
});
 //FISH 3
 loader.load(fish[3].file, function (collada) {

  fish[3].dae = collada.scene;

  fish[3].dae.scale.x = fish[3].dae.scale.y = fish[3].dae.scale.z = fish[3].modelScale;
  
  scene.add(fish[3].dae);
  animate();
});
 //FISH 4
 loader.load(fish[4].file, function (collada) {

  fish[4].dae = collada.scene;
  fish[4].dae.scale.x = fish[4].dae.scale.y = fish[4].dae.scale.z = fish[4].modelScale;
  
  scene.add(fish[4].dae);
  animate();
});
 //FISH 5
 loader.load(fish[5].file, function (collada) {

  fish[5].dae = collada.scene;
  fish[5].dae.scale.x = fish[5].dae.scale.y = fish[5].dae.scale.z = fish[5].modelScale;
  
  scene.add(fish[5].dae);
  animate();
});
 //FISH 6
 loader.load(fish[6].file, function (collada) {

  fish[6].dae = collada.scene;
  fish[6].dae.scale.x = fish[6].dae.scale.y = fish[6].dae.scale.z = fish[6].modelScale;
  
  scene.add(fish[6].dae);
  animate();
});
 //FISH 7
 loader.load(fish[7].file, function (collada) {

  fish[7].dae = collada.scene;
  fish[7].dae.scale.x = fish[7].dae.scale.y = fish[7].dae.scale.z = fish[7].modelScale;
  
  scene.add(fish[7].dae);
  animate();
});

  //ROCK
  loader.load(rock.file, function (collada) {

    rock.dae = collada.scene;
    rock.dae.scale.x = rock.dae.scale.y = rock.dae.scale.z = rock.modelScale;

    scene.add(rock.dae);
    animate();
  });

   //TREE
   loader.load(tree.file, function (collada) {

    tree.dae = collada.scene;
    tree.dae.scale.x = tree.dae.scale.y = tree.dae.scale.z = tree.modelScale;

    scene.add(tree.dae);
    animate();
  });

   //APPLE
   loader.load(apple.file, function (collada) {

    apple.dae = collada.scene;
    apple.dae.scale.x = apple.dae.scale.y = apple.dae.scale.z = apple.modelScale;
    apple.dae.rotation.z = 90;
    scene.add(apple.dae);
    animate();
  });

    //EGG
    loader.load(egg.file, function (collada) {
      egg.dae = collada.scene;
      egg.dae.scale.x = egg.dae.scale.y = egg.dae.scale.z = egg.modelScale;
      egg.dae.rotation.z = 90;
      scene.add(egg.dae);
      animate();
    });

  // Camera
  camera = new THREE.PerspectiveCamera(cameraInitialVector, dimensions[0]/dimensions[1], 1, 100000);
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
  

// console.log(dimensions);

var animate = function() {
  requestAnimationFrame(animate); // Animation loop
  if (play) { // Rotate when Play status == true

    console.log(cam)
         // Camera
         if(cam == "free view")
         {
          camera = new THREE.PerspectiveCamera(cameraInitialVector, dimensions[0]/dimensions[1], 1, 100000);
          camera.position.z = cameraPositionZ;
        }
        else if(cam == "fish eye")
        {
          camera = new THREE.PerspectiveCamera(cameraInitialVector, dimensions[0]/dimensions[1], 1, 100000);
          camera.position.x = fish[curfish].x;
          camera.position.y = fish[curfish].y;
          camera.position.z = fish[curfish].z;
          camera.lookAt(new THREE.Vector3(0, 0, 0))


        }
        else if(cam == "fish head")
        {
          camera = new THREE.PerspectiveCamera(cameraInitialVector, dimensions[0]/dimensions[1], 1, 100000);
          camera.position.x = fish[curfish].x + 100;
          camera.position.y = fish[curfish].y + 100;
          camera.position.z = fish[curfish].z;

          camera.lookAt(new THREE.Vector3( fish[curfish].x - 30, fish[curfish].y +30 , fish[curfish].z))

        }

    // CHANGE IN POSITION
    if(food)
    {
      console.log(fish[0].x, fish[0].y);
      if(fishComing == false)
      {
        fish[0].vx = -(fish[0].x - apple.x)/500.0;
        fish[0].vy = -(fish[0].y + dimensions[1]/2 )/500.0;
        fishComing = true; 
      }
      if(fishComing)
      {
        if(Math.abs(fish[0].x - apple.x) < 0.5)
        {
          xreached = true;
          fish[0].vx = 0;
        } 
        if(Math.abs(fish[0].y + dimensions[1]/2 )< 0.5)
        {
          yreached= true;
          fish[0].vy = 0;
        }
        if(xreached && yreached)
        {
          fishComing = false;
        }
      }
      apple.y += apple.vy;
      if(apple.y == - dimensions[1]/2)
      {
        apple.vy = 0
        foodEating = true
      }
      if(foodEating)
        apple.modelScale -=0.025 ;

      if(apple.modelScale <= 0)
      {
        food = false;
        foodEating = false;
        fishComing = false;
        xreached = false;
        yreached = false;
        fish[0].vy = 0.5;
        fish[0].vx = -1;
      }
    }

    if(eggPresent)
    {
      egg.y += egg.vy;
      if(egg.y <= -dimensions[1]/2)
      {     
        egg.vy = 0;
        eggPresent=false;
        tempx = egg.x;
        tempy = egg.y;
        egg.x = dimensions[0] * 2;
        egg.y = dimensions[1] * 2;

        if(newone == false)
        {

          for(i=1;i<=100;i++)
          {
          }
          console.log("hello");
          newfish = new Object();
          newfish.file  = './collada/getriebe.dae';
          newfish.titled = true;
          newfish.x =  tempx;
          newfish.y =  tempy;
          newfish.z =  egg.z;
          newfish.vx = 0.2;
          newfish.vy = 1;
          newfish.vz = 0;
          newfish.modelScale = 10;
          newfish.dae = new Object();
          console.log("hi");
          fish.push(newfish);
          console.log("new");

          newone = true;
          loader.load(newfish.file, function (collada) {

           newfish.dae = collada.scene;
           newfish.dae.scale.x = newfish.dae.scale.y = newfish.dae.scale.z = newfish.modelScale;

           scene.add(newfish.dae);
           console.log("Fish loaded"+ fish.length);

         });
        }

      }
    }
    rock.dae.position.x = rock.x;
    rock.dae.position.y = rock.y;

    tree.dae.position.x = tree.x;
    tree.dae.position.y = tree.y;

    apple.dae.position.x = apple.x;
    apple.dae.position.y = apple.y;
    apple.dae.scale.x = apple.dae.scale.y = apple.dae.scale.z = apple.modelScale;

    egg.dae.position.x = egg.x;
    egg.dae.position.y = egg.y;

    for(i=0 ; i<fish.length; i++)
    {
      fish[i].x += fish[i].vx;
      fish[i].y += fish[i].vy;
      fish[i].z += fish[i].vz;

      if(Math.abs(fish[i].x) > dimensions[0]/2)
        fish[i].vx = fish[i].vx * -1;
      if(Math.abs(fish[i].y) > dimensions[1]/2)
        fish[i].vy = fish[i].vy * -1;
      if(Math.abs(fish[i].z) > dimensions[2]/2)
        fish[i].vz = fish[i].vx * -1;

      fish[i].dae.position.x = fish[i].x;
      fish[i].dae.position.y = fish[i].y;
      fish[i].dae.position.z = fish[i].z;


    // console.log(i, fish[i].dae.position.x); 
  }

}
renderer.render(scene, camera);
};

 // Query the mouse shortcut
 window.addEventListener("mousedown", function(e) {
   var key = e.which;
   switch (key) {
     case 1: //LEFT-CLICK
     console.log(1)
     if(food == false)
     {
       food = true;
       apple.y = dimensions[1]/2;
     }
     e.preventDefault();
     break;

     case 3: //RIGHT-CLICK
     console.log(3)
     
     break;
   }
 }, false);


 // Query the keyboard shortcut
 window.addEventListener('keydown', function(e) {
   var key = e.keyCode;
      var snd = new Audio('./js/button.wav'); // buffers automatically when created
   snd.play();

   // console.log("Key " + key);
   switch (key) {
    case 37: // left
    if(cam == "fish head" || cam == "fish eye")
    {

     fish[curview].x -=10;
   }
   e.preventDefault();
   break;
    case 39: // right
    if(cam == "fish head" || cam == "fish eye")
    {

     fish[curview].x -=10;
   }
   e.preventDefault();
   break;
    case 38: // up
    curfish = Math.min(curfish+1, 7)
    e.preventDefault();
    break;
    case 40: // down
    curfish = Math.max(curfish-1, 0)
    e.preventDefault();
    break;
    case 33: // pageup
    e.preventDefault();
    break;
    case 34: // pagedown
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

    case 73: // i FREE VIEW
    cam = "free view"
    e.preventDefault();
    break;

    case 79: // o FISH EYE
    cam = "fish eye"
    e.preventDefault();
    break;


    case 80: // p FISH HEAD
    cam  = "fish head"
    e.preventDefault();
    break;


    case 69:
    case 101:
    if(eggPresent == false)
    {
      eggPresent = true; 
      newone = false;
      egg.vy = -1;
      egg.x = fish[0].x;
      egg.y = fish[0].y;
    }
    break;

  }
  renderer.render(scene, camera);
}, false);
}, false);
