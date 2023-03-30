function randomGeneration(min, max, num) {
    coord = Math.floor(Math.floor(Math.random() * (max - min + 1) + min) / num) * num;
    return coord + "px"
}

function randomMove(lvl) {
    const random_number = Math.floor(Math.random() * 2)
    if (lvl === 1) {
        if (random_number === 0) {
            return -50;
        } else {
            return 50;
        }
    }
}

