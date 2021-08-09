const root = document.querySelector('html');
const result = document.querySelector('#result');
let rest;
let TimerLeft;

rest = 300;
TimerLeft = 1000;

const counter = () => {
	const timerId = setInterval(() => {
		result.innerHTML = TimerLeft;
		if (TimerLeft === 0) {
			clearInterval(timerId);
			TimerLeft = 1000;
			// your function here
		} else {
			TimerLeft--;
		}
	}, 1);
};

root.addEventListener('mousedown', () => {
	setInterval(counter(), 1000);
	setTimeout(counter(), rest);
	TimerLeft = 1000;
});

root.addEventListener('mouseup', () => {
	for (let i = 0; i < 100; i++) {
		clearInterval(i);
		clearTimeout(i);
	}
	TimerLeft = 1000;
});
