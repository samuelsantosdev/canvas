var ElementCanvas = function(){
	
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	
}

var Rect = function(){
	
	this.fillStyle = "";
	this.strokeStyle = "";
	this.lineWidth = 10;
	
};

var Arc = function(){
	
	this.fillStyle = "";
	this.strokeStyle = "";
	this.lineWidth = 10;
	this.radius = 0;
	
}

Rect.prototype = new ElementCanvas();
Arc.prototype = new ElementCanvas();













