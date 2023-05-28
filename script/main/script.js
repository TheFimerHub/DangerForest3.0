function createLevel(widthField, heightField, quantity) {
    forCenterX = (canvas.width - widthField) / 2
    forCenterY = (canvas.height - heightField) / 2
    generalBackground(widthField, heightField)
    drawScore()
    drawlevel()
    // menu()
    createTrail(widthField, heightField, forCenterX, forCenterY)
    createPlayerWithField(heightField, forCenterX, forCenterY)
    enemies = createEasyEnemy(quantity, widthField, heightField, forCenterX, forCenterY)
    document.addEventListener("keydown", function (event) {
        clearScore()
        drawScore()
        if (checkPositionsDead(enemies)) {
            gameOverWindow()
            return true
        } else if (checkPositionsWin(widthField, heightField, forCenterX, forCenterY)) {
            youAreWinWindow()
        } else {
            moveplayer(event.key, widthField, heightField, enemies, forCenterX, forCenterY)
        }
    });
}

var counterValue = localStorage.getItem('counter');

if (counterValue) {
    {
    }
} else {
    localStorage.setItem('counter', 1);
}

function linelevelsgame() {
    console.log(counterValue);
    if (counterValue === "0") {
        widthC = parseInt(widthC)
        heightC = parseInt(heightC)
        enemyC = parseInt(enemyC)

        if (widthC > 24) {
            widthC = 14
        }
        if (heightC > 14) {
            heightC = 24
        }
        if (enemyC > 100) {
            heightC = 100
        }


        if ((widthC === 0) || (widthC == NaN)) {
            widthC = 10
        }
        if ((heightC === 0) || (heightC == NaN)) {
            heightC = 6
        }
        if ((enemyC === 0) || (enemyC == NaN)) {
            enemyC = 1
        }

        if (widthC % 2 !== 0) {
            widthC += 1
        }
        if (heightC % 2 !== 0) {
            heightC += 1
        }

        createLevel(widthC * 50, heightC * 50, enemyC)
    }
    if (counterValue === "1") {
        createLevel(500, 300, 1);
    } else if (counterValue === "2") {
        createLevel(600, 400, 5);
    } else if (counterValue === "3") {
        createLevel(600, 400, 10);
    } else if (counterValue === "4") {
        createLevel(600, 600, 15);
    } else if (counterValue === "5") {
        createLevel(800, 400, 20);
    } else if (counterValue === "6") {
        createLevel(900, 500, 25);
    } else if (counterValue === "7") {
        createLevel(1000, 600, 26);
    } else if (counterValue === "8") {
        createLevel(1000, 700, 30);
    } else if (counterValue === "9") {
        createLevel(1100, 700, 35);
    } else if (counterValue === "10") {
        createLevel(1200, 700, 40);
    } else if (counterValue === "11") {
        createLevel(1200, 600, 40);
    } else if (counterValue === "12") {
        createLevel(1100, 600, 35);
    } else if (counterValue === "13") {
        createLevel(1000, 500, 30);
    } else if (counterValue === "14") {
        createLevel(1000, 400, 30);
    } else if (counterValue === "15") {
        createLevel(900, 400, 25);
    } else if (counterValue === "16") {
        createLevel(800, 400, 25);
    } else if (counterValue === "17") {
        createLevel(800, 300, 20);
    } else if (counterValue === "18") {
        createLevel(700, 300, 15);
    } else if (counterValue === "19") {
        createLevel(700, 300, 20);
    } else if (counterValue === "20") {
        createLevel(700, 200, 10);
    } else if (counterValue === "21") {
        createLevel(700, 100, 5);
    } else if (counterValue === "22") {
        createLevel(700, 100, 6);
    } else if (counterValue === "23") {
        createLevel(700, 100, 7);
    } else if (counterValue === "24") {
        createLevel(700, 100, 8);
    } else if (counterValue === "25") {
        createLevel(700, 100, 10);
    } else if (counterValue === "26") {
        createLevel(800, 100, 12);
    } else if (counterValue === "27") {
        localStorage.setItem('counter', 1);
    }
}

linelevelsgame()


