let items  = document.querySelectorAll('.item');
let item1  = document.querySelector('.item.active2');

for (let item of items) {
    item.addEventListener('click', function() {
        this.classList.add('change-bg');
        if(!clickNoResult.classList.contains('active2')) scores -= 1;
    });
}

item1.addEventListener('click', function() {
    item1.classList.add('sucsess');
    scores += 2;
    finish();
});

let result = document.querySelector('.result');
let i = 10;
let error = document.querySelector('.error-text');
let scores = 0;

const finish = () => {
    clearInterval(timerId);
    window.location = "./game4-1.html"; 
    localStorage.setItem('game_4_f', JSON.stringify({
        time: 10 - i,
        scores
    }))
}

let timerId = setInterval(function() {
	result.innerHTML = i--;
	if (i < 0) {
		finish();
	}
}, 1000);