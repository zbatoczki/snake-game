var GRID_SIZE = 40;

var snake = {
	position: [[20,20], [20,19], [20,18]],
	direction: 'r'
};

function render(){
	var size = GRID_SIZE;
	for (var i = 1; i <= size; i++) {
		$("#board").append('<div class="row"></div>');
		for(var j = 1; j <= size; j++){
			$(".row:last-child").append('<div class="box"></div>');
		}
	}
}

function getDirectionKey(){
	$(document).keypress(function(key){
		switch(key.which)
		{
			case 37: //left
				console.log("Keyboard input detected");
				snake.direction = 'l';
				break;
			case 38: //up
				console.log("Keyboard input detected");
				snake.direction = 'u';
				break;
			case 39: //right
				console.log("Keyboard input detected");
				snake.direction = 'r';
				break;
			case 40: //down
				console.log("Keyboard input detected");
				snake.direction = 'd';
				break;
			default: return;
		}
		key.preventDefault();
	});
}

render();
getDirectionKey();
