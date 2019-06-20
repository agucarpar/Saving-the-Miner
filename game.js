function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const keys = {
  rightKey: 39,
  leftKey: 37,
  spaceKey: 32
}

window.onkeydown = (e) => {
  switch (e.keyCode) {
    case keys.rightKey:
      Game.background.moveLeft()
      Game.player.animationPlayer()
      break;
    case keys.leftKey:
      Game.background.moveRight()
      Game.player.animationPlayer()
    case keys.spaceKey:
      Game.player.jump()
  }
}


class Obstacle {
  constructor(speed) {
    this.x = 900
    this.y = 400
    this.speed = speed
  }

  draw() {
    Game.ctx.beginPath();
    Game.ctx.fillStyle = 'red'
    Game.ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    Game.ctx.fill();
    Game.ctx.closePath();
  }

  moveLeft() {
    this.x-=this.speed

    console.log(this.x)
  }
}

var Game = {

  canvas: undefined,
  ctx: undefined,

  //dimension Canvas screen
  wCanvas: 900,
  hCanvas: 600,
  frameCounter: 0,
  fps: 60,
  xBg: 0,
  yBg: 0,
  obstacle: undefined,
  // if you lower this number, it will generate obstacles faster!
  dificultyLevel: 200,


  initGame: function (canvasId) {
    this.canvas = document.getElementById(canvasId);
    /** @type CanvasRenderingContext2D */
    this.ctx = this.canvas.getContext("2d");
    this.start();
  },
  start: function () {
    this.reset()

    this.intervalId = setInterval(() => {
      this.clear()

      this.frameCounter++
      if (this.frameCounter > 1000) {
        // alert('x')
        this.frameCounter = 0;
      }

      if (this.frameCounter % this.dificultyLevel === 0) {
        this.obstacle = new Obstacle(randomInt(5, 10))
      }

      if (this.obstacle !== undefined) {
        this.obstacle.moveLeft()

        console.log(this.obstacle.x)

        if (this.obstacle.x < 0) {
          this.obstacle = undefined
        }
      }

      this.drawEverything();
      this.moveEverything();
    }, 1000 / this.fps)
  },
  reset: function () {
    this.background = new Background(this.wCanvas, this.hCanvas, this.ctx)
    this.player = new Player(this.wCanvas, this.hCanvas, this.ctx, this.frameCounter)
    this.frameCounter = 0
  },
  moveEverything: function () {
    //   // this.background.moveBackground()
    //this.player.movePlayer()
    // this.player.directionPlayer();
  },
  drawEverything: function () {
    this.background.drawBackground();
    this.player.drawPlayer()

    if (this.obstacle !== undefined) {
      this.obstacle.draw()
    }
  },
  clear: function () {
    // console.log("limpia")
    this.ctx.clearRect(this.xBg, this.yBg, this.wCanvas, this.hCanvas)
  },

  drawPlayer: function () {
    this.ctx.drawImage(this.imgPlayer, 0, 0, 229 / 6, 45, this.xImglayer, this.yImgPlayer, 100, 100)
  }
}























