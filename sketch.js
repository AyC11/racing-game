var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var players;
var form, player, game;

var cars, player1, player2, player31;

var track, player1_img, player2_img, player3_img;

function preload() {
  track = loadImage("images/track.jpg");
  player1_img = loadImage("images/runner.png");
  player2_img = loadImage("images/runner3.png");
  player3_img = loadImage("images/runner12.png");
  ground = loadImage("images/ground.png");
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {

  if (playerCount === 3) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }

  if (gameState === 2) {
console.log(gameState)
    game.update(2);
    game.end();

    fill("red")
    textSize(30)
    text("Game over", 1200, 600)
  }

}