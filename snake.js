var GRID_SIZE = 40;

var snake = ["3_10","2_10","1_10"];
var direction = 'd';

var food = "";

var speed = 200;
var score = 0;

function popTail(){
	var tail = snake.pop();
	$("#p_"+tail).removeClass("snake-pixel");
	return tail;
}

function moveHead(tail){
	var head = snake[0];
	
	var coord = head.split("_");
	var row = parseInt(coord[0]);
	var column = parseInt(coord[1]);

	switch(direction){
		case 'd':
			row++;
			break;
		case 'l':
			column--;
			break;
		case 'u':
			row--;
			break;
		case 'r':
			column++;
			break;
	}
	var newPosition = ""+row+"_"+column;


	//check if snake ate food, if true increase size
	if(newPosition == food){
		snake.push(tail);
		$("#p_"+tail).addClass("snake-pixel");
		$("#p_"+food).removeClass("food");
		score++;
		$("#score").html(score);
		generateFood();
		if(speed > 75)
			speed -= 15;
		else
			speed = 75;
	}

	snake.unshift(newPosition);
	$('#p_'+newPosition).hasClass('snake-pixel'); 
   //condition to exist the Game !
  if (column<0 || row<0 || column>39 || row>39 ||  $('#p_'+newPosition).hasClass('snake-pixel') ){
    alert('You lost !');    
    initialize();
    return;
  } 
	$("#p_"+newPosition).addClass("snake-pixel");

	setTimeout(function(){ gameUpdate() }, speed);	
	
}


function render(){
	var size = GRID_SIZE;
	for (var i = 0; i < size; i++) {
		for(var j = 0; j < size; j++){
			$("#board").append('<div class="pixel" id=p_'+i+'_'+j+'></div>'); //id: p(ixel)_row_column
		}
	}
	$("#p_1_10").addClass("snake-pixel");
	$("#p_2_10").addClass("snake-pixel");
	$("#p_3_10").addClass("snake-pixel");
	generateFood();
}

function generateFood(){
	var row = Math.floor(Math.random() * 40);
	var column = Math.floor(Math.random() * 40);
	$("#p_"+row+"_"+column).addClass("food");

	food = ''+row+'_'+column;
}

function gameUpdate(){
	var tail = popTail();
	moveHead(tail);
}

function initialize(){
	snake = ["3_10","2_10","1_10"];
	direction = 'd';
	speed = 200;
	score = 0;
	food = "";
	$("#board").html("");
	$("#score").html(score);
	render();
	setTimeout(function(){ gameUpdate() }, speed);
}

$(document).ready(function(){
	$(document).keydown(function(key){
		switch(key.which)
		{
			case 37: //left
				console.log("Keyboard input detected: LEFT");
				if(direction != 'r') direction = 'l';
				break;
			case 38: //up
				console.log("Keyboard input detected: UP");
				if(direction != 'd') direction = 'u';
				break;
			case 39: //right
				console.log("Keyboard input detected: RIGHT");
				if(direction != 'l') direction = 'r';
				break;
			case 40: //down
				console.log("Keyboard input detected: DOWN");
				if(direction != 'u') direction = 'd';
				break;
			default: return;
		}
		key.preventDefault();
	});
	initialize();
});



