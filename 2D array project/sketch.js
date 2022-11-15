// 2nd project
// Nuha Maisara
// 28/10/22

// Extra for Experts:
// 

let ROWS = 15;
let COLS = 15;
let grid, cellWidth, cellHeight, shovel, treasure, dirt, holeInGround;

function preload(){
  shovel = loadImage("images/shovel.png");
  treasure = loadImage("images/treasure.png");
  dirt = loadImage("images/dirt.png");
  holeInGround = loadImage("images/hole.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // how many columns and rows there are
  cellWidth = width/COLS;
  cellHeight = height/ROWS;

  // randomizing grid
  grid = createRandom2dArray(COLS, ROWS);
}

function draw() {
  displayGrid(grid);
}

function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  // digging 
  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill("#79d220");
      }
      else if (grid[y][x] === 1) {
        fill("#37640a");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandom2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}