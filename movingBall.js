var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');
	var ball = {
		pos: {x: 750,y: 350},
        direction: { x: 0, y: 0 },
		speed: 5,
        brake: 0.9, // smaller number stop faster, max 0.99999
	};
	var FPS = 20;
    window.onload = function() {
    	setInterval(function() {
            animate();
    		gameBack();
    	}, 1000/FPS);
    };
    function animate() {
        ball.pos.x += ball.direction.x * ball.speed;
        ball.pos.y += ball.direction.y * ball.speed;
        ball.direction.x *= ball.brake;
        ball.direction.y *= ball.brake;
    }
    // background code
    function gameBack() {
    	drawRect(0,0,canvas.width,canvas.height, 'white');
    	colorCircle(ball.pos.x,ball.pos.y,40, 'red');
    }
    // Rectangle Code
    function drawRect(leftX ,topY ,width ,height , drawColor) {
    	ctx.fillStyle = drawColor;
    	ctx.fillRect(leftX,topY,width,height);
    }
    //Circle Code
    function colorCircle(centerX,centerY,radius, drawColor) {
    	ctx.fillStyle = drawColor;
    	ctx.beginPath();
    	ctx.arc(centerX,centerY,radius,0,Math.PI*2,true);
    	ctx.closePath();
    	ctx.fill();
    }
    //Game Controls
    document.addEventListener('keydown', event => {
        if (event.keyCode === 37) { //Left
        	xBall(-1);
        } else if (event.keyCode === 39) { //Right
        	xBall(1);
        } else if (event.keyCode === 38) { //Up
        	yBall(-1);
        } else if (event.keyCode === 40) { //Down
        	yBall(1);
        }
    });
    function yBall(offset) {
    	ball.direction.y += offset;
    }
    function xBall(offset) {
    	ball.direction.x += offset;
    }