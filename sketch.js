var paddle1, paddle2;
var paddles, form;



function setup() {
  createCanvas(1500,800);
  paddle1_img = loadImage("./assets/download.jpg")
  paddle2_img = loadImage("./assets/sddefault1.jpg")
  game = new Game();
  game.start()
}

function draw() {
  background("blue");
}