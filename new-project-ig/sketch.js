// Image
// Nuha Maisara
// 22/9/22

let Backgroundimg, catImg1, catImg2, startImg1, startImg2, x, y, someTime;
let isCat1 = true;
let state = "start screen";

function preload(){
  Backgroundimg = loadImage("Images/Background.jpg");
  catImg1 = loadImage("Images/cat 1.png");
  catImg2 = loadImage("Images/cat 2.png");
  startImg1 = loadImage("Images/start 1.png");
  startImg2 = loadImage("Images/start 2.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  someTime = 800;
  x = 100;
  y = 200;
}

function draw() {
  image(Backgroundimg, 0 , 0, windowWidth, windowHeight);

  if (state === "start screen"){
    drawCat();
    image(startImg1, x, y, windowWidth/2, windowHeight/2);
  }
}

// the blinking cat on the start screen
function drawCat(){
  if (millis() > someTime) {
    isCat1 = !isCat1;
    someTime = millis() + 800;
  }
    
  if (isCat1) {
    image(catImg1, windowWidth/2.8, windowHeight/2);
  }
  else {
    image(catImg2, windowWidth/2.8, windowHeight/2);
  }
}

