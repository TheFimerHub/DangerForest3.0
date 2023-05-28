var heightC = localStorage.getItem('heightC')
var widthC = localStorage.getItem('widthC')
var enemyC = localStorage.getItem('enemyC')


var cnt = 0
const buttonForMenu = document.querySelector('.button-for-menu');
buttonForMenu.addEventListener('click', createMenu);


function createMenu() {
    playButtton()
    const menuDiv = document.getElementById('menu-container');
    if (cnt === 1) {
        cnt = 0;
        menuDiv.style.display = 'none';
    } else {
        cnt++;
        menuDiv.style.display = 'block';
        const continueB = menuDiv.querySelector('.button-menu1')
        const newGameB = menuDiv.querySelector('.button-menu2')
        const customB = menuDiv.querySelector('.button-menu3')
        const twoPlayersB = menuDiv.querySelector('.button-menu4')
        menuDiv.style.animation = 'scale-in 0.5s ease-in-out forwards';

        continueB.addEventListener('click', () => {
            playButtton()
            menuDiv.style.display = 'none'
            cnt++;
        });

        newGameB.addEventListener('click', () => {
            playButtton()
            localStorage.setItem('counter', 1);
            menuDiv.style.display = 'none'
            reloading();
        });

        customB.addEventListener('click', () => {
            playButtton()
            menuDiv.style.display = 'none';
            const customDiv = document.getElementById('custom-container');
            customDiv.style.display = 'block';
            customDiv.style.animation = 'scale-in 0.5s ease-in-out forwards';

            const heightInput = document.getElementById('height-input');
            const widthInput = document.getElementById('width-input');
            const enemyInput = document.getElementById('enemy-input');
            const applyButton = document.getElementById('apply-btn');

            applyButton.addEventListener('click', function () {
                playButtton()
                localStorage.setItem('counter', 0);
                localStorage.setItem('heightC', heightInput.value)
                localStorage.setItem('widthC', widthInput.value)
                localStorage.setItem('enemyC', enemyInput.value)
                customDiv.style.display = 'none';
                reloading()
            });

            buttonForMenu.addEventListener('click', () => {
                playButtton()
                customDiv.style.display = 'none'
                menuDiv.style.display = 'block'
            });

        })
        twoPlayersB.addEventListener('click', () => {
            playButtton()
        });
    }


}

function reloading() {
    setTimeout(function () {
        location.reload()
    }, 500);
}