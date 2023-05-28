var player = document.createElement("img");
var counter = 1;
var music_cnt = 0
function createPlayerWithField(height, forCenterX, forCenterY) {
    player.src = "../img/player.png";
    player.style.width = "50px";
    player.style.height = "50px";
    player.style.position = "absolute";
    player.style.left = 0 + forCenterX;
    player.style.top = height / 2 + forCenterY;
    document.body.appendChild(player);
}


function moveplayer(direction, width, height, enemies, forCenterX, forCenterY) {
    var left = parseInt(player.style.left) || 0;
    var up = parseInt(player.style.top) || 0;
    var moveAmount = 50;
    if (music_cnt === 0) {
        playBackground()
    }

    music_cnt++

    switch (direction) {
        case "ArrowLeft":
        case "a":
            if (left - moveAmount >= 0 + forCenterX) {
                left -= moveAmount
                fieldStepEnemy(enemies, width, height, forCenterX, forCenterY)
                counter++;
            }
            break;
        case "ArrowUp":
        case "w":
            if (up - moveAmount >= 0 + forCenterY) {
                up -= moveAmount
                fieldStepEnemy(enemies, width, height, forCenterX, forCenterY)
                counter++;
            }
            break;
        case "ArrowRight":
        case "d":
            if (left + moveAmount <= parseInt(width) - 50 + forCenterX) {
                left += moveAmount
                fieldStepEnemy(enemies, width, height, forCenterX, forCenterY)
                counter++;

            }
            break;
        case "ArrowDown":
        case "s":
            if (up + moveAmount <= parseInt(height) - 50 + forCenterY) {
                up += moveAmount
                fieldStepEnemy(enemies, width, height, forCenterX, forCenterY)
                counter++;
            }
    }
    player.style.left = left + "px";
    player.style.top = up + "px";

    player.style.transition = 'all 0.3s ease-in-out'

    if (checkPositionsDead(enemies)) {
        gameOverWindow()
        return true
    } else if (checkPositionsWin(widthField, heightField, forCenterX, forCenterY)) {
        youAreWinWindow()
    }
}


function checkPositionsDead(enemies) {
    for (let enemy of enemies) {
        if ((parseInt(player.style.left) == parseInt(enemy.style.left)) && (parseInt(player.style.top) == parseInt(enemy.style.top))) {
            return true
        }
    }
}

function checkPositionsWin(width, height, forCenterX, forCenterY) {
    if ((parseInt(player.style.left) == width + forCenterX - 50) && (parseInt(player.style.top) == height / 2 + forCenterY) ||
        (parseInt(player.style.left) == width + forCenterX - 50) && (parseInt(player.style.top) == height / 2 - 50 + forCenterY)) {
        return true
    }
}
