const game = document.getElementById('game');
const startButton = document.querySelector('button');

let scores = 0;

let i = 60;

startButton.addEventListener('click', () => {
    game.innerHTML = '';

    const title = document.querySelector('header h1');
    const nav = document.querySelector('main nav');

    nav.appendChild(title);
    document.querySelector('header').innerHTML = '<img src="./image/timer.svg" alt="">&nbsp;Таймер:&nbsp; <span class="timer"></span>'

    let timer = document.querySelector('.timer');

    let timerId = setInterval(function () {
        i -= .1;
        timer.innerHTML = i.toFixed(1);
        if (i < 0) {
            clearInterval(timerId);
            finish();
        }
    }, 100);
})