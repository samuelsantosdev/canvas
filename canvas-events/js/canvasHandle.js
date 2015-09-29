HTMLElement.prototype.canvasHandle = function(){
	
	this.canvasElement = this;
	this.ctx;
	
	this.getCanvasElement = function(){
		return this.canvasElement;
	}
	
	this.initialize = function(){
		if(this.getCanvasElement().nodeName != 'CANVAS')
			throw "This element is not a CANVAS";
		
		this.ctx = this.getCanvasElement().getContext('2d');
	}
	
	this.renderRect = function(rect){
		
		this.ctx.beginPath();
		this.ctx.rect(rect.x, rect.y, rect.width, rect.height);
		this.ctx.fillStyle = rect.fillStyle;
		this.ctx.strokeStyle = rect.strokeStyle;
		this.ctx.lineWidth = rect.lineWidth;
		this.ctx.fill()
		this.ctx.stroke();
	}
	
}















