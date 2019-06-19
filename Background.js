// //variables background Image
class Background {
    constructor(wCanvas, hCanvas, ctx){
this.ctx=ctx
this.img = new Image();
this.img.src = "./images/fondo2.jpg";
this.wBg=wCanvas
this.hBg=hCanvas 
this.xBg = 0;
this.yBg = 0;
this.yBg2=-this.hBg;
this.speedBg= 10
this.bottomPosition=600
this.topPosition=-this.hCanvas
    }

drawBackground() { 
    console.log("esta pintando")
   this.ctx.drawImage(this.img, this.xBg, this.yBg, this.wBg, this.hBg);
   this.ctx.drawImage(this.img, this.xBg, this.yBg -this.hBg, this.wBg, this.hBg);
}

moveBackground(){
        this.yBg += this.speedBg;
        if (this.yBg > this.hBg) this.yBg = 0;

    }
}
// ///// HAY que conseguir pintar los fondos con una única función