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

let canvasWidth=canvas.width;//450
let canvasHeight=canvas.height;//300
//let padding=10;
let size=100;

context.fillStyle = 'rgba(255,0,0,.5)';
context.fillRect(canvasWidth/2-size/4-size/2,canvasHeight/2-size/4-size/2,size,size);
//450-300, 

context.fillStyle = 'rgba(0,0,255,.5)';
context.fillRect(canvasWidth/2-size/4,canvasHeight/4+size/2,size,size);