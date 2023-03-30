var canvasContext;
var canvas = document.getElementById('canvas');

function drawScore() {
    canvasContext.fillStyle = "white";
    canvasContext.font = "30px Arial Black";
    canvasContext.fillText("Level steps: " + counter , 850, 30);
}

function drawlevel() {
    canvasContext.fillStyle = "white";
    canvasContext.font = "30px Arial Black";
    if (counterValue === '0') {
            canvasContext.fillText("Custom level", 580, 30);

    } else {
        canvasContext.fillText("Level: " + counterValue , 630, 30);
    }
}

function clearScore() {
    canvasContext.fillStyle = "#333333";
    canvasContext.fillRect(840, 0, 500, 31);
}

function createCanvas(width, height) {
    canvas.width = width
    canvas.height = height
    canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = "#333333";
    canvasContext.fillRect(0, 0, 1200, 700);
}

function generatePatternField(width, height, BLOCK, forCenterX, forCenterY) {
    BLOCK.x = forCenterX
    BLOCK.y = forCenterY
    var cnt = 0;
    var dig = 1;
    save = 0;
    for (var j = 0; j < height / 50; j++) {
        for (var i = 0; i < width / 50; i++) {
            colorAndDrawBlocks(BLOCK.colors[cnt])
            cnt += dig
            BLOCK.x += 50
        }
        BLOCK.y += 50
        BLOCK.x = forCenterX
        cnt = 0
        BLOCK.colors.push(BLOCK.colors[0])
        BLOCK.colors.shift()
    }
}

function colorAndDrawBlocks(x) {
    canvasContext.fillStyle = x;
    canvasContext.fillRect(BLOCK.x, BLOCK.y, BLOCK.side, BLOCK.side)
}

function generalBackground(width, height) {
    createCanvas(1400, 800)
    forCenterX = (canvas.width - width) / 2
    forCenterY = (canvas.height - height) / 2
    generatePatternField(width, height, BLOCK, forCenterX, forCenterY)
}
