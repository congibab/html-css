var draw = (function (){

    var bodySnake = function(x,y){
        ctx.fillStyle = 'green';
        ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    }
    
    var pizza = function(x, y){
        ctx.fillStyle = 'yellow';
        ctx.fillRect (x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    }

    var scoreText = function(){
        var score_text = "Score: " + score;
        ctx.fillStyle = 'blue';
        ctx.fillText(score_text, 145, h - 5);
    }

    var drawSnake = function(){
        var length = 4;
        snake = [];
        for(var i = length - 1; i >= 0; i--){
            snake.push({x:i, y:0});
        }
    }

    var paint = function(){
        ctx.fillStyle = 'lightgrey';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, w, h);

        btn.setAttribute('disabled', true);

        var snakeX = snake[0].x;
        var snakeY = snake[0].y;

        if(direction == 'right'){
            snakeX++;
        }
        else if(direction == 'left'){
            snakeX--;
        }
        else if(direction == 'up'){
            snakeY--;
        }
        else if(direction == 'down'){
            snakeY++;
        }

        if(snakeX == -1 || snakeX == w/snakeSize || snakeY == -1 || snakeY == h/snakeSize || checkCollision(snakeX, snakeY, snake)){
            btn.removeAttribute('disabled', true);

            ctx.clearRect(0,0,w,h);
            gameloop = clearInterval(gameloop);
        }
    }

    var init = function(){
        
    }
}());