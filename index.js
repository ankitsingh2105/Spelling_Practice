var myTimeout;
function makearray(str) {
	let array = []; let string = "";
	for (e in str) {
		if (str[e] != ' ') {
			string += str[e];
		}
		else {
			array.push(string);
			string = "";
		}
	}
	return array;
}
let newArray = [];
newArray = makearray("attack attend bicycle breakfast brightly cabbage cable carpenter channel circle climb comfort comical confirm construct curtain customer damage decide delight disappear discover empty encourage entertain equal exactly forever fruit fuel group guard guest guide guitar handle health heart heavily helmet idea kindness level locket lumber magic melon meter money motor mountain partner perfect perhaps personal plastic pocket protect provide railways record reward shoulder socket stranger stroll subject suit supply temper theatre total toward treatment useful vacant windy writer");
function myTimer() {
	window.speechSynthesis.pause();
	window.speechSynthesis.resume();
	myTimeout = setTimeout(myTimer, 1000);
}
function sound(text) {
	window.speechSynthesis.cancel();
	var utt = new SpeechSynthesisUtterance(text);
	utt.voice = window.speechSynthesis.getVoices().find(voice => voice.name === 'Alice');
	utt.pitch = 1;
	utt.rate = 1;
	utt.onend = function () { clearTimeout(myTimeout); }
	window.speechSynthesis.speak(utt);
}
async function greeting( score , l){
	sound(`Welcome here your current score is ${score} out of ${l}`);
}
async function sessionmem(){
	sessionStorage.setItem('greet' , "greetend");
}
function Scoring(num, coloring) {
	if (num > 0) {
		coloring.style.color = 'green';
	}
	else if (num == 0) {
		coloring.style.color = "black";
	}
	else {
		coloring.style.color = 'red';
	}
}
let input = document.querySelector('#spelling');
let input1 = document.querySelector('.input1');
let total = document.querySelector('.total');
let points = document.querySelector('.points');
let repeat = document.querySelector('.repeat');
let next = document.querySelector('.next');
let scorepoints = localStorage.getItem("score");
let index = localStorage.getItem('index');
let score;
let i;
if (index == null) {
	i = 0;
	score = 0;
	points.innerHTML = 0;
	Scoring(score, points)
}
else {
	i = parseInt(index);
	score = parseInt(scorepoints)
	points.innerHTML = scorepoints;
	Scoring(score, points)
}
let sesiongreet = sessionStorage.getItem("greet");
myTimeout = setTimeout(myTimer, 10000);
let array = ["tree", "toy", "doll", "chair", "mother", "peace", "camel", "horse", "family", "friend", "pony", "jump", "forest", "deer", "clouds", "earth", "moon", "sun", "jelly", "bees", "monkey", "bull"];
let l = array.length;
if (sesiongreet === null) {
	async function outgreeting(){
		await greeting(score , l);
		await sessionmem();
	}   
	outgreeting();
}
total.innerHTML = `/${l}`;
input1.addEventListener("click", function () {
	let word = array[i].charAt(0).toUpperCase() + array[i].slice(1);
	if ((input.value === array[i] || input.value === word) && array[i] != undefined) {
		score++;
		Scoring(score, points);
		i++;
		if (array[i] === undefined) {
			sound(`You have completed the test, congratulations!!`);
		}
		else {
			localStorage.setItem("index", i);
			localStorage.setItem("score", score);
			sound(`Right answer, and The next word is ${array[i]}`);
		}
		points.innerHTML = score;
	}
	else {
		if (array[i] === undefined) {
			sound(`You have completed the test, congratulations!!`);
		}
		else {
			sound("Wrong Answer. Try again!!");
		}
	}
})
// localStorage.clear();
repeat.addEventListener("click", function () {
	if (array[i] === undefined) {
		sound(`You have completed the test, congratulations!!`);
	}
	else {
		sound(`The current word is ${array[i]}`);
	}
})

let moon = document.querySelector('.moon');
let list = document.querySelector('.list');
let bar = document.querySelector('.bar');
let check=1;
moon.addEventListener('click', function (e) {
    if (check % 2 != 0) {
        moon.innerHTML = '☀️';
        document.body.style.color = 'white';
        document.body.style.background = 'black';
        bar.style.border = '3px solid white';
        points.style.color = 'white';
		check++;
    }
    else {
		moon.innerHTML = '🌑';
        document.body.style.color = 'black';
        document.body.style.background = 'white';
        bar.style.border = '3px solid black';
        points.style.color = 'black';
		check++;
	}
})



