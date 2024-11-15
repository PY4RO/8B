// 8 Ball poll/ By: Arthur Sousa
var canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    tableWidth = canvas.width-60,
    tableHeight = canvas.height,
    crash = 0,
    mouseX, mouseY,
    WBW, WBH,
    shooter = false,
    stickRecoil = 0,
    isMouseDown = false,
    x = 0,
    y = 0,
    speedX = 0,
    speedY = 0,
    friction = 0.98, 
    count = 0,
    vel = 0.1,
    indicatorS = false, 
    holeWB = false,
    followCursor = false,
    test = false,
    first = true,
    a =0,
    centerX,
    centerY,
    debug = false,
    regulation = false,
    stickDistanceFromBall,
    stickAB,
    checkScore=false,
    rx=0,ry=0,
    w,
    h,
    random =Math.random(),
    player1 = false,
    countYellow = 100,
    click = false,
    blackBall = false,
    blackBallr = false,
    PlayAgain = document.querySelector("button");
    PlayAgain.style.display = "none"



if(random<0.500){
   player1 = true;
   
}
else{
  player1 = false;
  //console.log(player1);
}
var identifyBrowser  = navigator.userAgent
// if(identifyBrowser.indexOf("Edg") >-1){
//   console.log("Edge");
//   canvas.style.width ="200vw"
//   canvas.style.height ="350vh"

// }
if(identifyBrowser.indexOf("Chrome") >-1 && identifyBrowser.indexOf("Edg") ==-1 ){
  console.log("Chrome");
  canvas.style.width ="200vw"
  canvas.style.height ="330vh"
}
if(identifyBrowser.indexOf("Firefox") >-1){
  console.log("Firefox")
}


var balls = [
  { x: 1040, y: 410, name: "redB",    velX: 0, velY: 0 , inHole : false, id:"r1", score:false},
  { x: 1040, y: 375, name: "yellowB", velX: 0, velY: 0 , inHole : false, id:"y1", score:false},
  { x: 1070, y: 390,  name: "blackB",  velX: 0, velY: 0 , inHole : false, id:"bl", score:false},
  { x: 1009, y: 390, name: "redB",    velX: 0, velY: 0 , inHole : false, id:"r2", score:false},
  { x: 1070, y: 425, name: "yellowB", velX: 0, velY: 0 , inHole : false, id:"y2", score:false},
  { x: 1070, y: 360, name: "redB",    velX: 0, velY: 0 , inHole : false, id:"r3", score:false},
  { x: 1100, y: 360, name: "yellowB", velX: 0, velY: 0 , inHole : false, id:"y3", score:false},
  { x: 1100, y: 430, name: "redB",    velX: 0, velY: 0 , inHole : false, id:"r4", score:false},
  { x: 1100, y: 395, name: "yellowB", velX: 0, velY: 0 , inHole : false, id:"y4", score:false},
//{ x: 120,  y: 60,  name: "yellowB", velX: 0, velY: 0 , inHole : false, id:"y5", score:false},
//{ x: 900,   y: 80,  name: "redB",    velX: 0, velY: 0 , inHole : false, id:"r5", score:false},
];

var game = function () {
  this.canvas = document.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");
};

game.prototype.background = function () {
  this.ctx.drawImage(sprites.background, 0, 0);
};


game.prototype.stick = function () {
  if (!shooter) {
  
    this.ctx.save();
  
   centerX = w + x + sprites.WB.width / 2;
   centerY = h+ y + sprites.WB.height / 2;

    const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
    this.ctx.translate(centerX, centerY);
    this.ctx.rotate(angle);
    stickDistanceFromBall = -600 + stickRecoil;
  
    this.ctx.drawImage(sprites.stick, -sprites.stick.width / 2 + stickDistanceFromBall, -sprites.stick.height / 2);
    this.ctx.restore();
  }
};

game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

game.prototype.WB = function () {
  WBW = 680/*this.canvas.width / 7.778;*/
  WBH = 100;
 //console.log(parseInt(WBW+x),parseInt(WBH+y))
  if(rx+x<60 && ry+y<100 && first===false && click===true || rx+x>=700 && rx+x<=750 && ry+y<=60 && first === false && click===true|| rx+x>=60 && rx+x<=100 && ry+y >=703 && first === false && click ===true || rx+x>=700 && rx+x<=750 && ry+y>=720 && first === false && click ===true || rx+x>=1360 && rx+x<=1380 && ry+y>=710 && first === false  && click ===true|| rx+x>=1360 && rx+x<=1380 && ry+y<=80 && first === false && click ===true){
    console.log("dentro");
    holeWB = true;
    speedX*=0,speedY*=0;
    followCursor = false;
    test=false;
    count = 0;
    click = false;
    
 
   setTimeout( ()=>{
  followCursor= true;
  

     },2000);
    
  }
  if(WBH+y>40 && WBH+y <73 && WBW+x <80 && first ===true || WBH+y>40 && WBH+y <73 && WBW+x >=690  &&  WBW+x <=728 && first ===true  || WBW+x>=40 && WBW+x<=100 && WBH+y>=700 && first === true || WBW+x>=699 && WBW+x<=720 && WBH+y>=700 && first === true || WBW+x>=1380 && WBH+y>=700 && first === true || WBW+x>=1360 && WBW+x<=1380 && WBH+y<=100 && first === true){
    followCursor = false;
   // console.log("hole");
    holeWB = true;
    a=1;
    speedX*=0,speedY*=0;
    count = 0;
    setTimeout( ()=>{
     followCursor= true;
     first=false;
   

      },2000);
     // console.log(holeWB);

}

else if (!followCursor) {

  if(a===0){

  
  holeWB = false; 
  w = WBW;
  h = WBH;

  this.ctx.drawImage(sprites.WB, WBW + x, WBH + y);
  }
  if(test===true && a===1){

    Game.clear();
    Game.background();
    WBH = ry;
    WBW = rx;
    w = rx;
    h = ry;
    holeWB = false;

    this.ctx.drawImage(sprites.WB,WBW+x, WBH + y);
  /*  console.log(`x:${parseInt(WBW+x)}
                 y:${parseInt(WBH+y)}  
    `)*/

  
}


} 

else {
  
  rx= mouseX 
  ry= mouseY 
  this.ctx.drawImage(sprites.WB, rx, ry);
//console.log(mouseY);
  count = 0;
  
}

  
 




};

game.prototype.drawBall = function(ball) {
  let ballImage;
  if (ball.inHole){
    ball.x = 0;
    ball.y = 0;   
    return;
  }  
  switch (ball.name) {
    case "redB":
      ballImage = sprites.redB;
      break;
    case "yellowB":
      ballImage = sprites.yellowB;
      break;
    case "blackB":
      ballImage = sprites.BB;
      break;
  }
  this.ctx.drawImage(ballImage, ball.x, ball.y);
};

var Game = new game();

window.onload = () => {
  document.addEventListener("keypress", (e) => {
    if(e.key==="a" && regulation === true){
    
      count +=1;
    

      stickRecoil =  - count;
     // console.log(count)
    } 
    if(e.key==="d" && regulation === true){
      if(count>2){
      count -= 1;
       stickRecoil = - count;
      // console.log(count)
     } }
      if (count > 90) {
        count = 90;
      
      }
      if (count < -160) {
        count = -160;
      }

    
    });


  document.addEventListener("mousemove", (e) => {
  // console.log(scoreBoardp1[0][0]);
  
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    if (followCursor===true) {
    
    
       x = mouseX 
       y = mouseY 
      speedX = 0; 
      speedY = 0;
  document.addEventListener("keypress",(e)=>{
  if(e.key = "25"){
if(followCursor){
  click = true;
   

    x=0;
    y=0;
    followCursor=false;
    test = true;
    console.log("Mariana")
    
}
  }

  })
    }
  });

  document.addEventListener("mousedown", () => {
    regulation = true;
     if(followCursor===false && regulation ===true){
     
    indicatorS = true;
  
   

    if (!shooter && !isMouseDown) {
      isMouseDown = true;
      stickRecoil = 0;
    }
  }
  });

  document.addEventListener("mouseup", () => {
    indicatorS = false;
    checkScore = false;
    if (!shooter && isMouseDown ) {
      isMouseDown = false;
      if (count >= 5 && count < 20) {
        stickRecoil = + count;
        stickAB = stickRecoil += + count;
        vel = 0.1;
        crash = 1;
      } else if (count > 20 && count < 60) {
        stickRecoil =  + count;
        stickAB = stickRecoil += + count;
        vel = 0.2;
        crash = 2;
      } else if (count > 60 && count <80) {
        stickRecoil = +count;
        stickAB = stickRecoil += + count;
        vel = 0.3;
        crash = 3;
      
      }else if(count>80){
        stickRecoil = +count;
        stickAB = stickRecoil += + count;
        vel = 0.4;
        crash = 4;
      }else {
        stickRecoil = 115;
        stickAB = stickRecoil;
        vel = 0.010;
        crash = 0;
      }

      const angle = Math.atan2(
        mouseY - (WBH + y + sprites.WB.height / 2),
        mouseX - (WBW + x + sprites.WB.width / 2)
      );
      const force = Math.min(Math.abs(stickAB), 300);
      speedX = Math.cos(angle) * force * vel;
      speedY = Math.sin(angle) * force * vel;

      setTimeout(() => {
        stickRecoil = 0;
        shooter = true;
        count = 0;
        regulation = false;
      }, 100);
    }
    
  });

  GameLoop();
};

function GameLoop() {



 
console.log(count)
  Game.clear();
  Game.background();
 
  Game.WB();
  
  balls.forEach(ball => {


    
    
    ball.velX *= friction;
    ball.velY *= friction;

    


    if (Math.abs(ball.velX) < 0.1 && Math.abs(ball.velY) < 0.1) {
      ball.velX = 0;
      ball.velY = 0;
    }

    ball.x += ball.velX;
    ball.y += ball.velY;

    if (ball.x < 50) {
      ball.x = 50 ;
      ball.velX *= -1;
    }
    if (ball.x > 1400) {
      ball.x = 1400 ;
      ball.velX *= -1;
    }
    if (ball.y < 50 ) {
      ball.y = 50;
      ball.velY *= -1;
    }
    if (ball.y > 725) {
      ball.y = 725 ;
      ball.velY *= -1;
    }

    
    Game.drawBall(ball);

  });
  for (let i = 0; i < balls.length; i++) {
   if( balls[1].score && balls[4].score && balls[6].score && balls[8].score){
    console.log("todas bolas amarelas foram colocadas");
    blackBall  = true;
   
  

   }
   if( balls[0].score && balls[3].score && balls[5].score && balls[7].score){
  console.log("todas bolas vermelhas  foram colodas");
  blackBallr  = true;


   }

  if(balls[i].x >0 && balls[i].x<=100 && balls[i].y <=60){
     console.log("hole 1")
     balls[i].inHole = true;
     checkScore = true;
     count = 0;  
    if(balls[i].id.includes("bl") && blackBall){
  
      balls[i].inHole = true;
      PlayAgain.style.display = "block";
      PlayAgain.onclick = ()=>{
       location.reload();
    }
     

    }
    if(balls[i].id.includes("bl") && blackBallr ){
  
      balls[i].inHole = true; 
      PlayAgain.style.display = "block";
      PlayAgain.onclick = ()=>{
       location.reload();
    }
    }
   
    if(balls[i].inHole && checkScore && player1){
      
      if(balls[i].id.includes("y1")){
         scoreBoardp1[0][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[1].score = true;
         console.log("score é true");
        
    }
  
  

   
  if(balls[i].id.includes("bl") && !blackBallr){
  
    balls[i].inHole = true;
    console.log("Game Over,vitória das amarelas") ;
    speedX = 0;
    speedY = 0;
    if(speedX ===0){
      setTimeout(()=>{
        alert("vitória das amarelas 🟡");
        location.reload();
      },1000)
     
    }
    
   }

      if(balls[i].id.includes("y2")){
         scoreBoardp1[1][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[4].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("y3")){
         scoreBoardp1[2][0,0,0,0]=[0,0,0,0];
         player1 = !player1
        balls[6].score = true; 
        console.log("score é true");

    }
      if(balls[i].id.includes("y4")){
         scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[8].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("y5")){
         scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
        
         player1 = !player1;
         balls[9].score = true;
         //console.log("deu bom")
         console.log("score é true");
        
    }

      if(balls[i].id.includes("r1")){
         scoreBoardp2[0][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[0].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("r2")){
        scoreBoardp2[1][0,0,0,0]=[0,0,0,0];
        player1 = player1
        balls[3].score = true;
        console.log("score é true");
    }
      if(balls[i].id.includes("r3")){
         scoreBoardp2[2][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[5].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("r5")){
         scoreBoardp2[3][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[10].score = true;
         console.log("score true")
    }
  
    
  
    }
    if(balls[i].inHole && checkScore && !player1){
    if(balls[i].id.includes("bl") && !blackBall){
  
      balls[i].inHole = true;
      console.log("Game Over,vitória das vermelhas");
      speedX = 0;
      speedY = 0;
      if(speedX ===0){
        setTimeout(()=>{
         alert("vitória das amarelas 🔴");
         location.reload();
      },1000)
     
    }
     }
   
    if(balls[i].id.includes("y1")){
       scoreBoardp1[0][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[1].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y2")){
       scoreBoardp1[1][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[4].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y3")){
       scoreBoardp1[2][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[6].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y4")){
       scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[8].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y5")){
       scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[9].score = true;
       console.log("score é true")
  }

    if(balls[i].id.includes("r1")){
       scoreBoardp2[0][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[0].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("r2")){
      scoreBoardp2[1][0,0,0,0]=[0,0,0,0];
      player1 = !player1
      balls[3].score = true;
      console.log("score é true");
  }
    if(balls[i].id.includes("r3")){
       scoreBoardp2[2][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[5].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("r5")){
       scoreBoardp2[3][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[10].score = true;
       console.log("score true")
      
  }
  
    }
   }

   if(balls[i].x >=700 && balls[i].x<=750 && balls[i].y <=50){
    console.log("hole 2")
    balls[i].inHole = true;
    checkScore = true;
    count = 0;
    
    if(balls[i].id.includes("bl") && blackBall){
  
      balls[i].inHole = true;
      PlayAgain.style.display = "block";
      PlayAgain.onclick = ()=>{
       location.reload();
    }
     

    }
    if(balls[i].id.includes("bl") && blackBallr ){
  
      balls[i].inHole = true; 
      PlayAgain.style.display = "block";
      PlayAgain.onclick = ()=>{
       location.reload();
    }
    }
   
   if(balls[i].inHole && checkScore && player1){
      
      if(balls[i].id.includes("y1")){
         scoreBoardp1[0][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[1].score = true;
         console.log("score é true");
        
    }
  
  

   
  if(balls[i].id.includes("bl") && !blackBallr){
  
    balls[i].inHole = true;
    console.log("Game Over,vitória das amarelas") ;
    speedX = 0;
    speedY = 0;
    if(speedX ===0){
      setTimeout(()=>{
        alert("vitória das amarelas 🟡");
        location.reload();
      },1000)
     
    }
    
   }

      if(balls[i].id.includes("y2")){
         scoreBoardp1[1][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[4].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("y3")){
         scoreBoardp1[2][0,0,0,0]=[0,0,0,0];
         player1 = !player1
        balls[6].score = true; 
        console.log("score é true");

    }
      if(balls[i].id.includes("y4")){
         scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[8].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("y5")){
         scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
        
         player1 = !player1;
         balls[9].score = true;
         //console.log("deu bom")
         console.log("score é true");
        
    }

      if(balls[i].id.includes("r1")){
         scoreBoardp2[0][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[0].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("r2")){
        scoreBoardp2[1][0,0,0,0]=[0,0,0,0];
        player1 = player1
        balls[3].score = true;
        console.log("score é true");
    }
      if(balls[i].id.includes("r3")){
         scoreBoardp2[2][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[5].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("r5")){
         scoreBoardp2[3][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[10].score = true;
         console.log("score true")
    }
  
    
  
  }
  if(balls[i].inHole && checkScore && !player1){
    if(balls[i].id.includes("bl") && !blackBall){
  
      balls[i].inHole = true;
      console.log("Game Over,vitória das vermelhas");
      speedX = 0;
      speedY = 0;
      if(speedX ===0){
        setTimeout(()=>{
         alert("vitória das amarelas 🔴");
         location.reload();
      },1000)
     
    }
     }
   
    if(balls[i].id.includes("y1")){
       scoreBoardp1[0][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[1].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y2")){
       scoreBoardp1[1][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[4].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y3")){
       scoreBoardp1[2][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[6].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y4")){
       scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[8].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y5")){
       scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[9].score = true;
       console.log("score é true")
  }

    if(balls[i].id.includes("r1")){
       scoreBoardp2[0][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[0].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("r2")){
      scoreBoardp2[1][0,0,0,0]=[0,0,0,0];
      player1 = !player1
      balls[3].score = true;
      console.log("score é true");
  }
    if(balls[i].id.includes("r3")){
       scoreBoardp2[2][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[5].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("r5")){
       scoreBoardp2[3][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[10].score = true;
       console.log("score true")
      
  }
  
}
   

   }

   if(balls[i].x >=1380 && balls[i].y <=60){
    console.log("hole 3")
    balls[i].inHole = true;
    checkScore = true;
    count = 0;
    if(balls[i].id.includes("bl") && blackBall){
  
      balls[i].inHole = true;
      PlayAgain.style.display = "block";
      PlayAgain.onclick = ()=>{
       location.reload();
    }
     

    }
    if(balls[i].id.includes("bl") && blackBallr ){
  
      balls[i].inHole = true; 
      PlayAgain.style.display = "block";
      PlayAgain.onclick = ()=>{
       location.reload();
    }
    }
   
    if(balls[i].inHole && checkScore && player1){
      
      if(balls[i].id.includes("y1")){
         scoreBoardp1[0][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[1].score = true;
         console.log("score é true");
        
    }
  
  

   
  if(balls[i].id.includes("bl") && !blackBallr){
  
    balls[i].inHole = true;
    console.log("Game Over,vitória das amarelas") ;
    speedX = 0;
    speedY = 0;
    if(speedX ===0){
      setTimeout(()=>{
        alert("vitória das amarelas 🟡");
        location.reload();
      },1000)
     
    }
    
   }

      if(balls[i].id.includes("y2")){
         scoreBoardp1[1][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[4].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("y3")){
         scoreBoardp1[2][0,0,0,0]=[0,0,0,0];
         player1 = !player1
        balls[6].score = true; 
        console.log("score é true");

    }
      if(balls[i].id.includes("y4")){
         scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[8].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("y5")){
         scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
        
         player1 = !player1;
         balls[9].score = true;
         //console.log("deu bom")
         console.log("score é true");
        
    }

      if(balls[i].id.includes("r1")){
         scoreBoardp2[0][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[0].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("r2")){
        scoreBoardp2[1][0,0,0,0]=[0,0,0,0];
        player1 = player1
        balls[3].score = true;
        console.log("score é true");
    }
      if(balls[i].id.includes("r3")){
         scoreBoardp2[2][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[5].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("r5")){
         scoreBoardp2[3][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[10].score = true;
         console.log("score true")
    }
  
    
  
    }
    if(balls[i].inHole && checkScore && !player1){
    if(balls[i].id.includes("bl") && !blackBall){
  
      balls[i].inHole = true;
      console.log("Game Over,vitória das vermelhas");
      speedX = 0;
      speedY = 0;
      if(speedX ===0){
        setTimeout(()=>{
         alert("vitória das amarelas 🔴");
         location.reload();
      },1000)
     
    }
     }
   
    if(balls[i].id.includes("y1")){
       scoreBoardp1[0][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[1].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y2")){
       scoreBoardp1[1][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[4].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y3")){
       scoreBoardp1[2][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[6].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y4")){
       scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[8].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y5")){
       scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[9].score = true;
       console.log("score é true")
  }

    if(balls[i].id.includes("r1")){
       scoreBoardp2[0][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[0].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("r2")){
      scoreBoardp2[1][0,0,0,0]=[0,0,0,0];
      player1 = !player1
      balls[3].score = true;
      console.log("score é true");
  }
    if(balls[i].id.includes("r3")){
       scoreBoardp2[2][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[5].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("r5")){
       scoreBoardp2[3][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[10].score = true;
       console.log("score true")
      
  }
  
    }

   }
 
   if(balls[i].x >0 && balls[i].x<=60 && balls[i].y >=700){
    console.log("hole 4 ")
    balls[i].inHole = true;
    checkScore = true;
    count = 0;
    if(balls[i].id.includes("bl") && blackBall){
  
      balls[i].inHole = true;
      PlayAgain.style.display = "block";
      PlayAgain.onclick = ()=>{
       location.reload();
    }
     

    }
    if(balls[i].id.includes("bl") && blackBallr ){
  
      balls[i].inHole = true; 
      PlayAgain.style.display = "block";
      PlayAgain.onclick = ()=>{
       location.reload();
    }
    }
   
    if(balls[i].inHole && checkScore && player1){
      
      if(balls[i].id.includes("y1")){
         scoreBoardp1[0][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[1].score = true;
         console.log("score é true");
        
    }
  
  

   
  if(balls[i].id.includes("bl") && !blackBallr){
  
    balls[i].inHole = true;
    console.log("Game Over,vitória das amarelas") ;
    speedX = 0;
    speedY = 0;
    if(speedX ===0){
      setTimeout(()=>{
        alert("vitória das amarelas 🟡");
        location.reload();
      },1000)
     
    }
    
   }

      if(balls[i].id.includes("y2")){
         scoreBoardp1[1][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[4].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("y3")){
         scoreBoardp1[2][0,0,0,0]=[0,0,0,0];
         player1 = !player1
        balls[6].score = true; 
        console.log("score é true");

    }
      if(balls[i].id.includes("y4")){
         scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[8].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("y5")){
         scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
        
         player1 = !player1;
         balls[9].score = true;
         //console.log("deu bom")
         console.log("score é true");
        
    }

      if(balls[i].id.includes("r1")){
         scoreBoardp2[0][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[0].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("r2")){
        scoreBoardp2[1][0,0,0,0]=[0,0,0,0];
        player1 = player1
        balls[3].score = true;
        console.log("score é true");
    }
      if(balls[i].id.includes("r3")){
         scoreBoardp2[2][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[5].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("r5")){
         scoreBoardp2[3][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[10].score = true;
         console.log("score true")
    }
  
    
  
    }
    if(balls[i].inHole && checkScore && !player1){
    if(balls[i].id.includes("bl") && !blackBall){
  
      balls[i].inHole = true;
      console.log("Game Over,vitória das vermelhas");
      speedX = 0;
      speedY = 0;
      if(speedX ===0){
        setTimeout(()=>{
         alert("vitória das amarelas 🔴");
         location.reload();
      },1000)
     
    }
     }
   
    if(balls[i].id.includes("y1")){
       scoreBoardp1[0][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[1].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y2")){
       scoreBoardp1[1][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[4].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y3")){
       scoreBoardp1[2][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[6].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y4")){
       scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[8].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y5")){
       scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[9].score = true;
       console.log("score é true")
  }

    if(balls[i].id.includes("r1")){
       scoreBoardp2[0][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[0].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("r2")){
      scoreBoardp2[1][0,0,0,0]=[0,0,0,0];
      player1 = !player1
      balls[3].score = true;
      console.log("score é true");
  }
    if(balls[i].id.includes("r3")){
       scoreBoardp2[2][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[5].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("r5")){
       scoreBoardp2[3][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[10].score = true;
       console.log("score true")
      
  }
  
    }
   

   }
   if(balls[i].x >=700 && balls[i].x<=750 && balls[i].y >=725){
    console.log("hole 5")
    balls[i].inHole = true;
    checkScore = true;
    count = 0;
    if(balls[i].id.includes("bl") && blackBall){
  
      balls[i].inHole = true;
      PlayAgain.style.display = "block";
      PlayAgain.onclick = ()=>{
       location.reload();
    }
     

    }
    if(balls[i].id.includes("bl") && blackBallr ){
  
      balls[i].inHole = true; 
      PlayAgain.style.display = "block";
      PlayAgain.onclick = ()=>{
       location.reload();
    }
    }
   
    if(balls[i].inHole && checkScore && player1){
      
      if(balls[i].id.includes("y1")){
         scoreBoardp1[0][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[1].score = true;
         console.log("score é true");
        
    }
  
  

   
  if(balls[i].id.includes("bl") && !blackBallr){
  
    balls[i].inHole = true;
    console.log("Game Over,vitória das amarelas") ;
    speedX = 0;
    speedY = 0;
    if(speedX ===0){
      setTimeout(()=>{
        alert("vitória das amarelas 🟡");
        location.reload();
      },1000)
     
    }
    
   }

      if(balls[i].id.includes("y2")){
         scoreBoardp1[1][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[4].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("y3")){
         scoreBoardp1[2][0,0,0,0]=[0,0,0,0];
         player1 = !player1
        balls[6].score = true; 
        console.log("score é true");

    }
      if(balls[i].id.includes("y4")){
         scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[8].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("y5")){
         scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
        
         player1 = !player1;
         balls[9].score = true;
         //console.log("deu bom")
         console.log("score é true");
        
    }

      if(balls[i].id.includes("r1")){
         scoreBoardp2[0][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[0].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("r2")){
        scoreBoardp2[1][0,0,0,0]=[0,0,0,0];
        player1 = player1
        balls[3].score = true;
        console.log("score é true");
    }
      if(balls[i].id.includes("r3")){
         scoreBoardp2[2][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[5].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("r5")){
         scoreBoardp2[3][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[10].score = true;
         console.log("score true")
    }
  
    
  
    }
    if(balls[i].inHole && checkScore && !player1){
    if(balls[i].id.includes("bl") && !blackBall){
  
      balls[i].inHole = true;
      console.log("Game Over,vitória das vermelhas");
      speedX = 0;
      speedY = 0;
      if(speedX ===0){
        setTimeout(()=>{
         alert("vitória das amarelas 🔴");
         location.reload();
      },1000)
     
    }
     }
   
    if(balls[i].id.includes("y1")){
       scoreBoardp1[0][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[1].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y2")){
       scoreBoardp1[1][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[4].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y3")){
       scoreBoardp1[2][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[6].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y4")){
       scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[8].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y5")){
       scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[9].score = true;
       console.log("score é true")
  }

    if(balls[i].id.includes("r1")){
       scoreBoardp2[0][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[0].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("r2")){
      scoreBoardp2[1][0,0,0,0]=[0,0,0,0];
      player1 = !player1
      balls[3].score = true;
      console.log("score é true");
  }
    if(balls[i].id.includes("r3")){
       scoreBoardp2[2][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[5].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("r5")){
       scoreBoardp2[3][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[10].score = true;
       console.log("score true")
      
  }
  
    }
   
   }
   if(balls[i].x >=1380 && balls[i].y >=725){
    console.log("hole 6")
    balls[i].inHole = true;
    checkScore = true;
    count = 0;
    if(balls[i].id.includes("bl") && blackBall){
  
      balls[i].inHole = true;
      PlayAgain.style.display = "block";
      PlayAgain.onclick = ()=>{
       location.reload();
    }
     

    }
    if(balls[i].id.includes("bl") && blackBallr ){
  
      balls[i].inHole = true; 
      PlayAgain.style.display = "block";
      PlayAgain.onclick = ()=>{
       location.reload();
    }
    }
   
    if(balls[i].inHole && checkScore && player1){
      
      if(balls[i].id.includes("y1")){
         scoreBoardp1[0][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[1].score = true;
         console.log("score é true");
        
    }
  
  

   
  if(balls[i].id.includes("bl") && !blackBallr){
  
    balls[i].inHole = true;
    console.log("Game Over,vitória das amarelas") ;
    speedX = 0;
    speedY = 0;
    if(speedX ===0){
      setTimeout(()=>{
        alert("vitória das amarelas 🟡");
        location.reload();
      },1000)
     
    }
    
   }

      if(balls[i].id.includes("y2")){
         scoreBoardp1[1][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[4].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("y3")){
         scoreBoardp1[2][0,0,0,0]=[0,0,0,0];
         player1 = !player1
        balls[6].score = true; 
        console.log("score é true");

    }
      if(balls[i].id.includes("y4")){
         scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
         player1 = !player1
         balls[8].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("y5")){
         scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
        
         player1 = !player1;
         balls[9].score = true;
         //console.log("deu bom")
         console.log("score é true");
        
    }

      if(balls[i].id.includes("r1")){
         scoreBoardp2[0][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[0].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("r2")){
        scoreBoardp2[1][0,0,0,0]=[0,0,0,0];
        player1 = player1
        balls[3].score = true;
        console.log("score é true");
    }
      if(balls[i].id.includes("r3")){
         scoreBoardp2[2][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[5].score = true;
         console.log("score é true");
    }
      if(balls[i].id.includes("r5")){
         scoreBoardp2[3][0,0,0,0]=[0,0,0,0];
         player1 = player1
         balls[10].score = true;
         console.log("score true")
    }
  
    
  
    }
    if(balls[i].inHole && checkScore && !player1){
    if(balls[i].id.includes("bl") && !blackBall){
  
      balls[i].inHole = true;
      console.log("Game Over,vitória das vermelhas");
      speedX = 0;
      speedY = 0;
      if(speedX ===0){
        setTimeout(()=>{
         alert("vitória das amarelas 🔴");
         location.reload();
      },1000)
     
    }
     }
   
    if(balls[i].id.includes("y1")){
       scoreBoardp1[0][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[1].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y2")){
       scoreBoardp1[1][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[4].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y3")){
       scoreBoardp1[2][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[6].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y4")){
       scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[8].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("y5")){
       scoreBoardp1[3][0,0,0,0]=[0,0,0,0];
       player1 = player1
       balls[9].score = true;
       console.log("score é true")
  }

    if(balls[i].id.includes("r1")){
       scoreBoardp2[0][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[0].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("r2")){
      scoreBoardp2[1][0,0,0,0]=[0,0,0,0];
      player1 = !player1
      balls[3].score = true;
      console.log("score é true");
  }
    if(balls[i].id.includes("r3")){
       scoreBoardp2[2][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[5].score = true;
       console.log("score é true");
  }
    if(balls[i].id.includes("r5")){
       scoreBoardp2[3][0,0,0,0]=[0,0,0,0];
       player1 = !player1
       balls[10].score = true;
       console.log("score true")
      
  }
  
    }
   

  
   }
  }
if(!holeWB){
  Game.stick();

  
}



for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      const ballA = balls[i];
      const ballB = balls[j];
      const dist = Math.sqrt(Math.pow(ballB.x - ballA.x, 2) + Math.pow(ballB.y - ballA.y, 2));

      if (dist < 30) {
        const angle = Math.atan2(ballB.y - ballA.y, ballB.x - ballA.x);
        
        const overlap =30 - dist;
        ballA.x -= Math.cos(angle) * overlap / 2;
        ballA.y -= Math.sin(angle) * overlap / 2;
        ballB.x += Math.cos(angle) * overlap / 2;
        ballB.y += Math.sin(angle) * overlap / 2;

        const speedA = Math.sqrt(ballA.velX ** 2 + ballA.velY ** 2);
        const speedB = Math.sqrt(ballB.velX ** 2 + ballB.velY ** 2);
        
        const elasticity = 1;
        

        const totalVel = speedA + speedB;

        ballA.velX = (totalVel / 2) * Math.cos(angle + Math.PI);
        ballA.velY = (totalVel / 2) * Math.sin(angle + Math.PI);
        ballB.velX = (totalVel / 2) * Math.cos(angle);
        ballB.velY = (totalVel / 2) * Math.sin(angle);

        const maxSpeed = 10;
        const speedAAfter = Math.sqrt(ballA.velX ** 2 + ballA.velY ** 2);
        const speedBAfter = Math.sqrt(ballB.velX ** 2 + ballB.velY ** 2);
        
        if (speedAAfter > maxSpeed) {
          ballA.velX *= (maxSpeed / speedAAfter);
          ballA.velY *= (maxSpeed / speedAAfter);
        }
        if (speedBAfter > maxSpeed) {
          ballB.velX *= (maxSpeed / speedBAfter);
          ballB.velY *= (maxSpeed / speedBAfter);
        }
      }
    }
  }

  if (indicatorS) {
    ctx.beginPath();

    ctx.arc(mouseX, mouseY, 20, 0, 2 * Math.PI);
    ctx.stroke();
    if(player1){
      ctx.fillStyle = "red"
      ctx.fill();
    }
    else{
      ctx.fillStyle = "yellow";
      ctx.fill();
    }
  /*  
    ctx.rect(600,20,10,30);
    ctx.rect(620,20,10,30);
    ctx.rect(640,20,10,30);
    ctx.rect(660,20,10,30);
    ctx.fill();
    ctx.rect(820,20,10,30);
    ctx.rect(840,20,10,30);
    ctx.rect(860,20,10,30);
    ctx.rect(880,20,10,30);
*/

  }

if(true){
 
  ctx.fillStyle = "yellow"
  if(player1){
    ctx.fillStyle = "#f1ee8e"
  }
  ctx.beginPath();
  ctx.rect(scoreBoardp1[0][0],scoreBoardp1[0][1],scoreBoardp1[0][2],scoreBoardp1[0][3]);
  ctx.rect(scoreBoardp1[1][0],scoreBoardp1[1][1],scoreBoardp1[1][2],scoreBoardp1[1][3]);
  ctx.rect(scoreBoardp1[2][0],scoreBoardp1[2][1],scoreBoardp1[2][2],scoreBoardp1[2][3]);
  ctx.rect(scoreBoardp1[3][0],scoreBoardp1[3][1],scoreBoardp1[3][2],scoreBoardp1[3][3]);
  ctx.fill();
  ctx.beginPath();

  
  ctx.fillStyle = "red"
 
  if(!player1){
    ctx.fillStyle = "#9f2b68"
    }
  ctx.rect(scoreBoardp2[0][0],scoreBoardp2[0][1],scoreBoardp2[0][2],scoreBoardp2[0][3]);
  ctx.rect(scoreBoardp2[1][0],scoreBoardp2[1][1],scoreBoardp2[1][2],scoreBoardp2[1][3]);
  ctx.rect(scoreBoardp2[2][0],scoreBoardp2[2][1],scoreBoardp2[2][2],scoreBoardp2[2][3]);
  ctx.rect(scoreBoardp2[3][0],scoreBoardp2[3][1],scoreBoardp2[3][2],scoreBoardp2[3][3]);
  ctx.fill();

}

  if (shooter) {
    x += speedX;
    y += speedY;
    speedX *= friction;
    speedY *= friction;
   //console.log(count);
   count = 0;
   


    if (WBW + x < 50) {
      x = -WBW+50; 
      speedX *= -1; 
    } 
    else if (WBW + x + sprites.WB.width > 1450) {
      x = 1450 - WBW - sprites.WB.width; 
      speedX *= -1; 
    }
  
    if (WBH + y < 50) {
      y = -WBH+50; 
      speedY *= -1; 
    } 
    else if (WBH + y + sprites.WB.height > 780) {
      y = 780 - WBH - sprites.WB.height; 
      speedY *= -1; 
      console.log(tableHeight)
    }

    if (Math.abs(speedX) < 0.1 && Math.abs(speedY) < 0.1) {
      speedX = 0;
      speedY = 0;
      shooter = false;
   
    
    
    }

if(speedX ==0 && speedY == 0 && !checkScore){
  player1=!player1;
}
if(!holeWB){
  balls.forEach(ball => {
    const dist = Math.sqrt(Math.pow(ball.x - (WBW + x), 2) + Math.pow(ball.y - (WBH + y), 2));
  
    if (dist < 30) {
      const angle = Math.atan2(ball.y - (WBH + y), ball.x - (WBW + x));
  
      
      const speed = Math.sqrt(Math.pow(speedX, 2) + Math.pow(speedY, 2));
  
      
      const force = Math.min(Math.abs(stickAB) * speed * 0.003, 300);
  
      
      ball.velX += Math.cos(angle) * force;
      ball.velY += Math.sin(angle) * force;
  

      if (Math.abs(speedX) < 0.1 && Math.abs(speedY) < 0.1) {
        vel = 0.1;  
      }
  
      if (Math.abs(speedX) > 0.5 && Math.abs(speedY) > 0.5) {
        vel = 0.1;  
      }
  
  
    if(crash === 1){
          speedY*=-0.02
          speedX*=-0.02
          ball.velX += Math.cos(angle) *  4 * vel;
          ball.velY += Math.sin(angle) *  4 * vel;
    }
    if(crash === 0){
        
          speedY*=-1
          speedX*=-1
          ball.velX += Math.cos(angle) *  1.0 ;
          ball.velY += Math.sin(angle) *  1.0 ;
         
          }
         if(force>20 && force <60){
        
         ball.velX += Math.cos(angle) *  6* vel;
         ball.velY += Math.sin(angle) *  6 * vel;
        
        }
        if(force>60 && force <80){
      
          ball.velX += Math.cos(angle) *  6* vel;
          ball.velY += Math.sin(angle) *  6 * vel;
        
        }

      




     
      
     
        const overlap = 30 - dist;
        ball.x += Math.cos(angle) * overlap;
        ball.y += Math.sin(angle) * overlap;
      }
    });
  }
  }
  requestAnimationFrame(GameLoop);
}

var Sprites = function () {
  this.background = new Image();
  this.background.src = "./assets/sprites/spr_background4.png";
  this.stick = new Image();
  this.stick.src = "./assets/sprites/spr_stick.png";
  this.WB = new Image();
  this.WB.src = "./assets/sprites/spr_ball2.png";
  this.redB = new Image();
  this.redB.src = "./assets/sprites/spr_redBall2.png";
  this.BB = new Image();
  this.BB.src = "./assets/sprites/spr_blackBall2.png";
  this.yellowB = new Image();
  this.yellowB.src = "./assets/sprites/spr_yellowBall2.png";
};

var sprites = new Sprites();


var   scoreBoardp1 =[

     [600,20,10,30],
     [620,20,10,30],
     [640,20,10,30],
     [660,20,10,30]
//   ctx.fill();
  
]
  



 var scoreBoardp2=[
  [820,20,10,30],
  [840,20,10,30],
  [860,20,10,30],
  [880,20,10,30]
 ]


 function restart(){
  location.reload();
 }