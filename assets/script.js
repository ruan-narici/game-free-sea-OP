function setup() {
    createCanvas(800, 400);
  }
  
  function draw() {
    showBackgroundGame();
    formAndShowPlayer();
    formAndShowCars();
    moveCars();
    background(imgBKG);
    movePlayer();
    verifyColisionShip();
    formAndShowPoints();
  }