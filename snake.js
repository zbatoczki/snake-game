var GRID_SIZE = 40;

var snake = {
	size: 3,
	position: [[20,20], [20,19], [20,18]],
	direction: '',
	alive: true
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
	$(document).keydown(function(key){
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

function moveSnake(){

	switch(snake.direction){
		case 'u':
			snake.position[0][0] -= 1;
			break;
		case 'd':
			snake.position[0][0] += 1;
			break;
		case 'l':
			snake.position[0][1] -= 1;
			break;
		case 'r':
			snake.position[0][1] += 1;
			break;
	}
	console.log("X: "+snake.position[0][0] + " | Y: " + snake.position[0][1]);
	$(".row:nth-child(" + snake.position[0][0] + ") > .box:nth-child(" + snake.position[0][1] + ")").addClass("snake-pixel");
	console.log("X: "+((snake.position[0][0])-1) + " | Y: " + ((snake.position[0][1])-1));
	$(".row:nth-child(" + ((snake.position[0][0])-1) + ") > .box:nth-child(" + ((snake.position[0][1])-1) + ")").removeClass("snake-pixel");

	// for (var i = 0; i < snake.size; i++) {
 //      $(".row:nth-child(" + snake.position[i][0] + ") > .box:nth-child(" + snake.position[i][1] + ")").addClass("snake-pixel");
 //    }
}

function gameLoop(){
		setTimeout(function(){
		getDirectionKey();
		moveSnake();
		if (snake.alive) { gameLoop(); }
	}, 1000);

}

render();
gameLoop();
