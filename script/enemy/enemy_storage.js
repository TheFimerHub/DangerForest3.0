function createTrail(width, height, forCenterX, forCenterY) {
    var trail = document.createElement("img");
    trail.src = "../img/trail.png";
    trail.style.width = "100px";
    trail.style.height = "100px";
    trail.style.position = "absolute";
    trail.style.left = width - 100 + forCenterX + 'px'
    trail.style.top = height / 2 - 50 + forCenterY + "px"
    document.body.appendChild(trail);
}

function createEasyEnemy(quantity, width, height, forCenterX, forCenterY) {
    var enemies = []

    for (var i = 1; i <= quantity; i++) {
        var enemy = document.createElement("img");
        enemies.push(enemy);
    }

    var data_distance = []
    for (let enemy of enemies) {
        enemy.src = "../img/enemylvl1.png";
        enemy.style.width = "50px";
        enemy.style.height = "50px";
        enemy.style.position = "absolute";
        while (true) {
            enemy.style.left = randomGeneration(100 + forCenterX, width + forCenterX - 50, 50);
            enemy.style.top = randomGeneration(0 + forCenterY + 50, height + forCenterY - 50, 50);
            if (!data_distance.includes([enemy.style.left, enemy.style.top])) {
                data_distance.push([enemy.style.left, enemy.style.top])
                break
            }
        }
        document.body.appendChild(enemy);
    }
    return enemies
}