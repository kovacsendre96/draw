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

let canvasWidth=canvas.width;
let canvasHeight=canvas.height;
let padding=10;
let size=100;
context.fillStyle = 'green';
context.fillRect(canvasWidth-size-padding,canvasHeight-size-padding,size,size);