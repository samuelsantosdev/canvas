var EventHandle = function(){
	
	this.addEvent = function(element, canvas, event, callback){
		console.log(element);
		switch(event){
		
		case 'mousedown':
		case 'mouseup':
		case 'mouseover':
		case 'mouseout':
			this.eventMouse(element, canvas, event, callback);
			break;
		case 'keyup':
		case 'keydown':
			this.eventKeyboard(element, canvas, event, callback);
			break;
		}
	}
	
	this.mouseCanvasCoordinate = function(canvas, e){
		var positionCanvas = canvas.getBoundingClientRect();
		return {
			x : e.clientX - positionCanvas.left,
			y : e.clientY - positionCanvas.top
		};
	}
	
	this.inElement = function(canvas, element, e){
		var coordinates = this.mouseCanvasCoordinate(canvas, e);
		var xIn = coordinates.x >= element.x  
				&& coordinates.x <= (element.x + element.width);
		
		var yIn = coordinates.y >= element.y  
				&& coordinates.y <= (element.y + element.height);

		return xIn && yIn;
	}
	
	this.eventMouse = function(element, canvas, event, callback){
		switch(event){
		case 'mouseover':
			var events = this;
			document.addEventListener('mousemove', function(e){
				var coordinates = events.mouseCanvasCoordinate(canvas, e);
				if(events.inElement(canvas, element, e))
					callback(coordinates);
			});
			break;
		}
	}
	
}


























