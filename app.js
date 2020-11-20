var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


//context.fillStyle = '#D2691E';
//context.fillRect(125,50,200,200);
//context.beginPath();
//context.moveTo(0,300);
//context.lineTo(450,0);
//context.strokeStyle = 'red';
//context.stroke();

//let canvasWidth=canvas.width;
//let canvasHeight=canvas.height;
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

let size = 150;
let canvasWidth=canvas.width;
let canvasHeight=canvas.height;



context.beginPath();
context.moveTo(canvasWidth/2-size/2,canvasHeight/2+size/2);
context.lineTo(canvasWidth/2,canvasHeight/2-size/2);
//
context.lineTo(canvasWidth/2+size/2, canvasHeight/2+size/2);
//
context.lineTo(canvasWidth/2-size/2,canvasHeight/2+size/2);
//
context.strokeStyle = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle = 'rgba(255,165,0,.5)';
context.fill();