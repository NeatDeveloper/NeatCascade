const imageExample = document.querySelector('img');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const variants = ['x', 'triangle', 'circle', 'square'];

const variant = variants[getRandomInt(0, variants.length - 1)]

imageExample.src = `./image/game_1/${variant}.svg`;

const game = document.getElementById('game');
const startButton = document.querySelector('button');

let scores = 0;

let i = 60;

startButton.addEventListener('click', () => {
    game.innerHTML = ''
    initGame(document.querySelector('#game'));

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



function initGame(game) {
    let field = createGameField(game);

    let sizeHeight = 8;
    let sizeWidth = 3;

    newGame();

    function newGame() {
        clearGameField(field);
        var cells = drawGameField(sizeHeight, sizeWidth, field);
        addActivateHandler(cells);
    }

    function addActivateHandler(cells, tds) {
        const images = document.querySelectorAll('table img');
        for (const image of images) {
            image.addEventListener('click', () => {

                if (image.classList.contains('fine')) {
                    if (image.classList.contains('correct')) return;

                    scores += 2;
                    image.classList.add('correct');
                    image.src = `./image/game_1/${image.dataset.type}_correct.svg`

                    setTimeout(() => {
                        image.src = `./image/game_1/${image.dataset.type}_select.svg`
                    }, 1000);
                } else {
                    scores -= 1;

                    image.src = `./image/game_1/${image.dataset.type}_error.svg`

                    setTimeout(() => {
                        image.src = `./image/game_1/${image.dataset.type}.svg`
                    }, 1000);
                }

                finish()
            });
        }


    }
}

function createGameField(game) {
    var table = document.createElement('table');
    game.appendChild(table);

    return table;
}

function clearGameField(field) {
    field.innerHTML = '';
}

function drawGameField(sizeHeight, sizeWidth, field) {
    return createCells(field);
}

function createCells(elem) {
    var cells = [];

    for (var i = 0; i < 8; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 5; j++) {
            let td = document.createElement('td');
            let randomImgNumber = getRandomInt(0, 3);

            let images = [
                ['./image/game_1/x.svg', 'x'],
                ['./image/game_1/circle.svg', 'circle'],
                ['./image/game_1/triangle.svg', 'triangle'],
                ['./image/game_1/square.svg', 'square'],
            ];

            let image = images[randomImgNumber];

            const img = new Image();

            img.classList.add('img-table')
            img.dataset.type = image[1]
            img.src = image[0];

            td.appendChild(img);

            if (variant === img.dataset.type) img.classList.add('fine');

            tr.appendChild(td);

            cells.push(td);

        }

        elem.appendChild(tr);
    }
    //console.log(cells);
    return cells;
}



const finish = () => {
    const fineImgs = document.querySelectorAll('.fine');

    let corrects = Array.from(fineImgs).filter(img => img.classList.contains('correct'))

    if (corrects.length === fineImgs.length) {
        localStorage.setItem('game_1', JSON.stringify({
            scores,
            time: 60 - i
        }));

        window.location = './index1.html'
    }
}