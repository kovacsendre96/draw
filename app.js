var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


//context.fillStyle = '#D2691E';
//context.fillRect(125,50,200,200);
context.beginPath();
context.moveTo(0,300);
context.lineTo(450,0);
context.strokeStyle = 'red';
context.stroke();

