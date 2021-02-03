class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {

    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value")
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val()
        player.getCount();

      }

      form = new Form()
      form.display();
    }
    player1 = createSprite(1100, 200);
    player2 = createSprite(700, 200);

    player31 = createSprite(900, 200);

    cars = [player1, player2, player31]
  }
  play() {

    form.hide();
    // textSize(32)
    //ext("Game Start",120,100)
    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      //var display_Position=130;
      background(rgb(198, 135, 103));
      image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
      image.scale = 3;
      var x = 0;
      var y;
      var index = 0;
      for (var plr in allPlayers) {
        // var x;
        index = index + 1;
        x = x + 200
        y = displayHeight - allPlayers[plr].distance

        cars[index - 1].x = x;
        cars[index - 1].y = y;

        if (index === player.index) {
          cars[index - 1].shapecolor = red;
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y
        }
      }
      // display_Position+=20
      // textSize(15)
      //text(allPayers [plr].name + ":" + allPlayers[plr].distance, 120, display_position)
    }
    if (keyIsDown(UP_ARROW) && player.index !== null) {
      if(gameState!=2){
      player.distance += 50;
      player.update();
      }

    }
console.log(player.distance)
    if (player.distance == 3850) {
      gameState =2
      console.log(gameState)
      database.ref('/').update({
        gameState: 2
      });
      //game.update(2);
    }
    drawSprites();
    player31.addImage(player3_img);
    player2.addImage(player2_img);
    player1.addImage(player1_img);
    player1.scale = 0.4;
    player2.scale = 0.3;
    player31.scale = 1.1




  }
  end() {
    console.log("Game Ended");
  }
}