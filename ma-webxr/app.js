// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(0, 1.39271, -5);
minecraftModel.setScale(0.05, 0.05, 0.05);
minecraftModel.setRotation(0, 320, 0);

// create a model

const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(-0.61863, 0.59246, -4.7302);
cuberoom.setScale(0.33668, 0.44443, 0.16213);
cuberoom.setRotation(0, 0, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-1.68257, 0.96682, -5);
sphere.setScale(0.8, 0.8, 0.8)

// create some text
const testText = new Text('steve vibing with frog in room');
testText.setPosition(-3.38556, 0, -3.90937);
testText.setFontsize(2);
testText.setColor('#ffffff');

// create an image
const image = new XRImage('assets/images/sampleImage.jpg');
image.setPosition(-1.48819, 2.45839, -5.45513);

// create a 360 image
const image360 = new Sky('assets/images/berg.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));