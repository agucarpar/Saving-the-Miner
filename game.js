class Game {
  constructor() {
    this.canvas = "";
    this.ctx = "";
    this.img = new Image();
    this.img.src = "./images/fondo 2.jpg";
    //dimension Canvas screen
    this.wCanvas=800;
    this.hCanvas=1200;
    //variables background Image
    this.wBg=this.wCanvas
    this.hBg=this.hCanvas 
    this.xBg = 0;
    this.yBg = 0;
    this.yBg2=-this.hBg;
    this.speedBg= 10
    this.bottomPosition=600
    this.topPosition=-this.hCanvas

    //variables Player
    //this.keys=keys
        //Imagen
    this.imgPlayer=new Image();
    this.imgPlayer.src = "./images/walking.png"
    this.imgPlayer.frames = 6;
    this.img.frameIndex=0;
    this.wImgPlayer=229
    this.hImgPlayer=45
      //Size Player
    this.wPlayer=90;
    this.hPlayer=60;
    this.xPlayer=this.wCanvas/2
    this.yPlayer=this.hCanvas*0.1
  }



  initGame = id => {
    /** @type CanvasRenderingContext2D */
    this.ctx = id.getContext("2d");
    this.start();
  };

  start = () => {
     this.intervalId=setInterval(()=>{
    this.clear()
    this.framesCounter++
    
    this.drawEverthing();
    this.moveEverything()
      },50)
  }


  moveEverything=()=>{
    this.move()
  }

  drawEverthing=()=>{
    
    this.drawBackground()
     this.drawPlayer()
  }

  drawBackground = () => { 
    
    this.ctx.drawImage(this.img, this.xBg, this.yBg, this.wCanvas, this.hCanvas);
    this.ctx.drawImage(this.img, this.xBg, this.yBg2, this.wCanvas, this.hCanvas);
    
  }

clear=()=>{
   this.ctx.clearRect(this.xBg, this.yBg, this.wCanvas, this.hCanvas)
}

move=()=>{
      this.yBg += this.speedBg;
      if (this.yBg > this.bottomPosition) this.yBg = this.topPosition;


      this.yBg2 += this.speedBg;
      if (this.yBg2 > this.bottomPosition) this.yBg2 = this.topPosition;
  };




  drawPlayer=()=>{
    this.ctx.drawImage(
    this.imgPlayer,
    this.img.frameIndex * Math.floor(this.wImgPlayer/this.imgPlayer.frames),
    0,
    Math.floor(this.wImgPlayer / this.imgPlayer.frames),
    this.himgPlayer,
    this.xPlayer,
    this.yPlayer,
    this.wPlayer,
    this.hPlayer
    );
    this.animateImg(this.framesCounter);
  }

   animateImg(framesCounter){
    if(this.frameCounter % 10 ===0){
      this.imgframeIndex +=1;
    if(this.moveEverything.frameIndex>2) this.imgframeIndex=0;
    }
  }
}
  




  





