var stage = document.createElement("canvas");
stage.style.backgroundColor = "black";
stage.style.width = "300";
stage.style.height = "300";
document.body.appendChild(stage);

var ctx = stage.getContext("2d");
var ope = false;
angle = 30;

function draw(){
  
ctx.beginPath();
ctx.arc(75,75,20, 0, Math.PI*2,true);
ctx.lineWidth = 41;
ctx.strokeStyle = "black";
ctx.stroke();
  
ctx.beginPath();
ctx.arc(75,75,20, (Math.PI/180)*angle, -(Math.PI/180)*angle); 
ctx.lineWidth = 40;
ctx.strokeStyle = "yellow";
ctx.stroke();
  
}

setInterval(function(){
  draw();
  
  if(ope)
    angle++;
  else
    angle--;
  
  if(angle <= 1 || angle >= 30){
    ope = (angle <= 1) ? true : false;
  }
}, 6);
