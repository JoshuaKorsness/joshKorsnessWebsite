const work = document.querySelector('.work');
const build = document.querySelector('.build');
const fun = document.querySelector('.fun');
const workHistory = document.querySelector('.workHistory');
const buildThings = document.querySelector('.buildThings');
const forFun = document.querySelector('.forFun');
work.addEventListener('click', moveBody);
build.addEventListener('click', moveBody);
fun.addEventListener('click', moveBody);

function moveBody () {
	if (this.className === 'work') {
		workHistory.className += " transIn";
	}
	else if (this.className === 'build') {
		buildThings.className += " transIn";
	}
	else if (this.className === 'fun') {
		forFun.className += " transIn";
	}

	document.addEventListener('mousedown', closeAll)
}

function closeAll () {
	workHistory.classList.remove("transIn");
	buildThings.classList.remove("transIn");
	forFun.classList.remove("transIn");
	document.removeEventListener('mousedown', closeAll);
}