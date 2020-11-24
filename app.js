var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// ========TASK1========
//context.fillStyle = '#D2691E';
//context.fillRect(125,50,200,200);
//context.beginPath();
//context.moveTo(0,300);
//context.lineTo(450,0);
//context.strokeStyle = 'red';
//context.stroke();


// ========TASK2========
let canvasWidth=canvas.width;
let canvasHeight=canvas.height;
//context.fillStyle='black';
//context.fillRect(canvasWidth/2,canvasHeight/2,canvasWidth/2,canvasHeight/2);

//let canvasWidth=canvas.width;//450
//let canvasHeight=canvas.height;//300
//let padding=10;
//let size=100;

//context.fillStyle = 'rgba(255,0,0,.5)';
//context.fillRect(canvasWidth/2-size/4-size/2,canvasHeight/2-size/4-size/2,size,size);
//450-300, 

//context.fillStyle = 'rgba(0,0,255,.5)';
//context.fillRect(canvasWidth/2-size/4,canvasHeight/4+size/2,size,size);

//let sizeWidth=250;
//let sizeHeight=50;

//let w =canvasWidth/2-sizeWidth/2;
//let h =canvasHeight/2-sizeHeight/2;


//context.fillStyle = 'white';
//context.fillRect(w,h,sizeWidth,sizeHeight);


//context.fillStyle = 'red';
//context.fillRect(w,h-sizeHeight,sizeWidth,sizeHeight);


//context.fillStyle = 'green';
//context.fillRect(w,h+sizeHeight,sizeWidth,sizeHeight);






// let canvasWidth = canvas.width;
// let canvasHeight = canvas.height;

// context.beginPath();
// context.moveTo(0,canvasHeight);
// context.lineTo(canvasWidth,0);
// context.strokeStyle = 'red';
// context.stroke();

// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(canvasWidth,canvasHeight);
// context.strokeStyle = 'red';
// context.stroke();

// let size = 150;
// let canvasWidth=canvas.width;
// let canvasHeight=canvas.height;



// context.beginPath();
// context.moveTo(canvasWidth/2-size/2,canvasHeight/2+size/2);
// context.lineTo(canvasWidth/2,canvasHeight/2-size/2);
// //
// context.lineTo(canvasWidth/2+size/2, canvasHeight/2+size/2);
// //
// context.lineTo(canvasWidth/2-size/2,canvasHeight/2+size/2);
// //
// context.strokeStyle = 'rgba(128,128,128,.5)';
// context.stroke();
// context.fillStyle = 'rgba(255,165,0,.5)';
// context.fill();

/* context.beginPath();
context.moveTo(canvasWidth/2,canvasHeight-canvasHeight);
context.lineTo(canvasWidth/2,canvasHeight);
context.strokeStyle = 'green';
context.stroke(); */

/* context.beginPath();
context.moveTo(canvasWidth-canvasWidth,canvasHeight/2);
context.lineTo(canvasWidth,canvasHeight/2);
context.strokeStyle = 'red';
context.stroke(); */

/* var padding = 20;
var size = 45;
var positionX = canvasWidth-canvasWidth+padding;
var positionY = canvasHeight-canvasHeight+padding;

for(let i = 0; i<9; i++){
    context.fillStyle = "rgba(255,165,0,.5)";
    context.fillRect(positionX, positionY, size, size);
    positionX+=size/2;
    positionY+=size/2;
}
 */
// ========TASK12========
/* let size=50;
let slide=15;
let padding=5;
let number=5

for(let j = 0; j <= 4; j++){
    let newPosition= slide+size*j+padding*j;
    number=number-1
    
 for(let i = 0; i <= number; i++){
     

    context.fillStyle = "rgba(255,165,0,.5)";
    
    context.fillRect(newPosition, newPosition+size*i+padding*i, size, size); 


   

    
} } */
// ========TASK13========
/* let red=255;
let green=79;
let blue=120;

let size = 30;
let width = 125;
let padding = 5;


for(j=0; j<6; j++){
    blue += 15;
    let height=50+size*j+padding*j;
    
    for(i=0; i<6; i++){
        context.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
        context.fillRect(width+size*i+padding*i, height, size, size);
        red-=7;
   
    }
}
 */


// ========TASK14========


/* let size = 100;
let space = 5;
for(i=0; i<30; i++){
    let padding = 120+space*i;
    context.beginPath();
    context.moveTo(padding,padding);
    context.lineTo(padding+size/2,padding-size);
    context.lineTo(padding+size,padding);
    context.lineTo(padding,padding);
    context.strokeStyle = "grey";
    context.stroke();
}
 */

/* // ========TASK15========

let padding = 10;
let hue = 360;
for(i=0; i<17; i++){
    context.fillStyle = "hsl("+ hue + ","+ "60%, 45%)";
    context.fillRect((canvasWidth-canvasWidth)+i*padding, (canvasHeight-canvasHeight)+i*padding, canvasWidth-i*2*padding, canvasHeight-i*2*padding);
    hue-=hue/17;
}
 */






 // ========TASK16========
/*


var size = 50;
var width = 20;
var height = 15;
let x= width
let y=height



for(let i = 1; i<16; i++){
    if(i%15==0){
        context.fillStyle = "rgba(0,255,0,.5)";
    } else if(i%3==0){
        context.fillStyle = "rgba(0,0,255,.5)";
    } else if(i%5==0){
        context.fillStyle = "rgba(255,255,0,.5)";
    }else {
        context.fillStyle = "rgba(0,0,0,.5)";
    }
context.fillRect(x+=width, y+=height, size, size);
}*/



// ========TASK17========

/* let padding=3;

for(i=0;i<151;i++){

    context.beginPath();
    context.moveTo(canvasWidth-canvasWidth+padding*i,canvasHeight/2+padding);
    if(i%2==1){
        context.lineTo(canvasWidth/2,canvasHeight-canvasHeight)}
    if(i%2==0){
        context.lineTo(canvasWidth/2,canvasHeight)
    }
    
    context.strokeStyle = "rgba(255,0,0,.5)";
    context.stroke()

} */


// ========TASK18========

/* let padding=1;


for(let i=0;i<canvasWidth;i++){
    let x=padding*i
context.beginPath();
    context.moveTo(x,canvasHeight/2);
    if(x%4==0){
        context.lineTo(canvasWidth-canvasWidth,canvasHeight-canvasHeight);
    }

    if(x%4==1){
        context.lineTo(canvasWidth-canvasWidth,canvasHeight);
    }

    if(x%4==2){
        context.lineTo(canvasWidth,canvasHeight);
    }

    if(x%4==3){
        context.lineTo(canvasWidth,canvasHeight-canvasHeight);
    }
    
    context.strokeStyle = "rgba(0,0,255,.5)";
    context.stroke();
} */


//========TASK19========



/* function triangle(positionX, positionY, size){
    context.beginPath();
    context.moveTo(positionX,positionY);
    context.lineTo(positionX-size/2,positionY+size);
    context.lineTo(positionX+size/2,positionY+size);
    context.lineTo(positionX,positionY);
    context.strokeStyle = 'rgba(0,0,0,.5)';
    context.stroke();
    context.fillStyle = 'rgba(255,165,0,.5)';
    context.fill();
}



triangle(230, 160, 50);
triangle(270, 100, 50);
triangle(200, 50, 150);
 */




 //========TASK20========


 /*function star(positionX, positionY, size) {

    context.beginPath();

    context.moveTo(positionX, positionY);

    context.lineTo(positionX + size, positionY);
    context.lineTo(positionX + size * 0.15, positionY + size * 0.5);
    context.lineTo(positionX + size * 0.5, positionY - size * 0.4);
    context.lineTo(positionX + size * 0.85, positionY + size * 0.5);
    context.lineTo(positionX, positionY);
    context.strokeStyle = 'rgb(233,159,184)';
    context.stroke();
        context.fillStyle = 'rgb(233,159,184)';
        context.fill();
}

star(40, 50, 75);
star(130, 120, 100);
star(250, 220, 150);*/



 //========TASK21========
/*  function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function lineToCenter(positionX, positionY, color){
    context.beginPath();
    context.moveTo(positionX,positionY);
    context.lineTo(canvasWidth/2,canvasHeight/2);
    context.strokeStyle = color
    context.stroke();

}

for(let i=0;i<1000;i++){
lineToCenter(random(450,0),random(300,0),'teal');

} */


 //========TASK22========
/*
let width=113;
let height=98;

 function drawHexagon(positionX, positionY){
    context.beginPath();
    context.moveTo(positionX, positionY);
    context.lineTo(positionX+width/4, positionY-height/2);
    context.lineTo(positionX+(width/4)*3, positionY-height/2);
    context.lineTo(positionX+width, positionY);
    context.lineTo(positionX+(width/4)*3, positionY+height/2);
    context.lineTo(positionX+width/4, positionY+height/2);
    context.lineTo(positionX, positionY);
    context.strokeStyle = 'orange'
    context.stroke();

 }
 drawHexagon(76, 120);
drawHexagon(76, 230);
drawHexagon(168.5, 65);
drawHexagon(168.5, 175);
drawHexagon(168.5, 285);
drawHexagon(261, 120);
drawHexagon(261, 230);
context.fillStyle = 'orange';
    context.fill();*/



//========TASK23========

function drawCheckeredPattern(row,col){
    for(let j=0;j<row;j++){

        
    for( let i=0;i<col;i++){



if(j%2==1){

        if(i%2==1){
            context.fillStyle = 'black';
        }

        
        else{
            context.fillStyle = 'white';
        }
    }


    if(j%2==0){

        if(i%2==1){
            context.fillStyle = 'white';
        }

        
        else{
            context.fillStyle = 'black';
        }
    }


        context.fillRect(canvasWidth/row*i,canvasHeight/col*j,canvasWidth/row,canvasHeight/col);

    }
}
}

drawCheckeredPattern(8,8);