class Player{
    constructor(wCanvas, hCanvas, ctx, frameCounter){
       
        this.ctx=ctx;
        this.wCanvas=wCanvas
        this.frameCounter=frameCounter
        //suelo
        this.suelo=this.hCanvas*0.8

        
         //Imagen
    this.imgPlayer=new Image();
    this.imgPlayer.src = "./images/walking.png"
    this.imgPlayer.frame = 6;
    this.imgPlayer.frameIndex=0;
    this.xImgPlayer=wCanvas/2
    console.log(this.xImgPlayer)
    this.yImgPlayer=hCanvas/2
    this.wImgPlayer=229
    this.hImgPlayer=45
        //Frames
    this.imgPlayer.frame = 3
    this.imgPlayer.frameIndex=0
        //Keys
    this.rightKey=39
      this.leftKey=37
      this.spaceKey=32

      this.directions = {
        space: false,
        left: false,
        right: false
      }

      this.vy= -100;
    }
    drawPlayer=()=>{
     
      

        this.ctx.drawImage(
          this.imgPlayer,
        this.imgPlayer.frameIndex * Math.floor(this.wImgPlayer / this.imgPlayer.frame ),
      0,
          38, 
          45, 
          this.xImgPlayer, 
          this.yImgPlayer, 
          100, 100 )
      }



      
      directionPlayer=()=>{
        
        document.onkeydown = (e) => {
            switch (e.keyCode){
             case this.rightKey:
                this.directions.left=false
                 this.directions.space=false;
                 this.directions.right = true;
                this.animationPlayer(this.frameCounter);
                this.movingPlayer();
                 break;
            case this.leftKey:
                  this.directions.right=false;
                  this.directions.space=false;
                  this.directions.left =true;
                  this.animationPlayer(this.frameCounter);
                this.movingPlayer();
            case this.spaceKey:
                this.directions.right=false;
                this.directions.left =false;
                this.directions.space=true;
                this.movingPlayer();
            }  
               }
                   }
                  

    animationPlayer=(frames)=>{

        if (this.frameCounter % 6 === 0) {
            console.log("4")
            this.imgPlayer.frameIndex += 1;
      
            // Si el frame es el último, se vuelve al primero
            if (this.imgPlayer.frameIndex > 2) this.imgPlayer.frameIndex = 0;
    }
  }
    movingPlayer = () =>{
      var gravity =0.4;
            if(this.directions.right ){
                  if(this.xImgPlayer<this.wCanvas-100){
                    this.xImgPlayer+=10
                      }
                          }
            else if(this.directions.left){
                              // this.ctx.scale=(-1, 1)
                if(this.xImgPlayer>=100){
                this.xImgPlayer-=10
                     }}
               else {
                 if(this.yImgPlayer>=this.suelo){
                   this.vy = 1;
                   this.yImgPlayer = this.suelo;
                 }else {
                   this.vy +=gravity;
                   this.yImgPlayer +=this.vy;
               } 

               }    }

                    
                
}