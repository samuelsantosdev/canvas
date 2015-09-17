var mainColor = "rgba(0,30,30,1)";
var stage = document.createElement("canvas");
var context = stage.getContext("2d");
var mouseIsDown= false;
var color = "yellow";
var color1 = document.createElement("div");
var color2 = document.createElement("div");
var erase = document.createElement("div");

stage.width = "400";
stage.height = "400";
stage.style.background = mainColor;
stage.style.marginTop = "40px";
stage.style.marginLeft = "-70px";
document.body.appendChild(stage);

toolColor(color1, "red");
toolColor(color2, "yellow");
toolColor(erase, "white");

function toolColor(element, c){
element.style.width = "20px";
element.style.height = "20px";
element.style.background = c;
element.style.border = "2px solid #000"; 
element.style.float = "left";
element.setAttribute("data-color", c);
document.body.appendChild(element);

}

function draw(x, y, color, size){
  context.lineTo(x, y);
  context.lineWidth = size;
  context.strokeStyle = color;
  context.lineCap = 'round';
  context.stroke();
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
  x: evt.clientX - rect.left,
  y: evt.clientY - rect.top
  };
}

erase.addEventListener('click', function(){
  color = mainColor;
});

color1.addEventListener('click', function(){
  color = "red";
});

color2.addEventListener('click', function(){
  color = "yellow";
});

stage.addEventListener('mousemove', function(evt){
  var mousePos = getMousePos(stage, evt);
  if(mouseIsDown)
     draw(mousePos.x, mousePos.y, color, 20);
}, false);

stage.addEventListener('mousedown', function(evt) {
  var axi = getMousePos(stage, evt);
  context.beginPath();
  context.moveTo(axi.x, axi.y);
  mouseIsDown = true;
}, false);

stage.addEventListener('mouseup', function(evt) {
  mouseIsDown = false;
}, false);

