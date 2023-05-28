function fieldStepEnemy(enemies, width, height, forCenterX, forCenterY) {
    var data_move = []
    for (let enemy of enemies) {
        while (true) {
            const random_number = Math.floor(Math.random() * 3)
            let xEnemy = parseInt(enemy.style.left)
            let yEnemy = parseInt(enemy.style.top)
            xEnemy += randomMove(1)
            yEnemy += randomMove(1)
            if (random_number === 0) {
                if (xEnemy < 0 + forCenterX) {
                    xEnemy += 100
                }
                if (xEnemy >= width + forCenterX) {
                    xEnemy -= 100
                }
                enemy.style.left = xEnemy + 'px'
            } else if (random_number === 1) {
                if (yEnemy < 0 + forCenterY) {
                    yEnemy += 100
                }
                if (yEnemy >= height + forCenterY) {
                    yEnemy -= 100
                }
                enemy.style.top = yEnemy + 'px'
            } else if (random_number === 2) {
                if (xEnemy < 0 + forCenterX) {
                    xEnemy += 100
                }
                if (xEnemy >= width + forCenterX) {
                    xEnemy -= 100
                }
                enemy.style.left = xEnemy + 'px'
                if (yEnemy < 0 + forCenterY) {
                    yEnemy += 100
                }
                if (yEnemy >= height + forCenterY) {
                    yEnemy -= 100
                }
                enemy.style.top = yEnemy + 'px'
            }
            if (!data_move.includes([enemy.style.left, enemy.style.top])) {
                data_move.push([enemy.style.left, enemy.style.top])
                break
            }
        }
        enemy.style.transition = 'all 0.3s ease-in-out'
    }
}