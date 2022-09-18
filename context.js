var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');

context.beginPath();
context.rect(50 , 50 , 200, 150); // parameter(x asix, y asix, hight, width)
context.fillStyle = 'green';
context.fill(); // to fill the inside color of the box
context.lineWidth = 3;
context.strokeStyle = 'black';
context.stroke(); // to fill the border color