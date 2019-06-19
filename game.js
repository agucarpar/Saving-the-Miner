var Game = {
 
    canvas: undefined,
    ctx: undefined,
  
    //dimension Canvas screen
    wCanvas: 900,
    hCanvas: 600,
    frameCounter: 0,
    fps: 60,
    xBg:0,
    yBg:0,
 

  
  initGame:function (canvasId)  {
    this.canvas = document.getElementById(canvasId);
    /** @type CanvasRenderingContext2D */
    this.ctx = this.canvas.getContext("2d");
    this.start();
  },
  start:function(){
    
    this.reset()

    this.intervalId=setInterval(()=>{
    this.clear()

    this.frameCounter++
    if (this.frameCounter > 1000) {
      this.frameCounter = 0;
    }
    
    this.drawEverthing();
    this.moveEverything(); 
      },1000/this.fps)

    
  },
  reset:function () {
    this.background = new Background(this.wCanvas,this.hCanvas,this.ctx)
    this.player = new Player (this.wCanvas,this.hCanvas,this.ctx, this.frameCounter)
    this.frameCounter = 0
  },
  moveEverything:function (){
  //   // this.background.moveBackground()
     //this.player.movePlayer()
     this.player.directionPlayer();
   },
  drawEverthing:function (){

    // this.background.drawBackground(); 
    this.player.drawPlayer() 
  },
 
    
  
clear:function (){
  console.log("limpia")
   this.ctx.clearRect(this.xBg, this.yBg, this.wCanvas, this.hCanvas)
},

drawPlayer:function(){
  this.ctx.drawImage(this.imgPlayer,0,0,229/6, 45, this.xImglayer, this.yImgPlayer, 100, 100 )
}
}



   






  

  




  





