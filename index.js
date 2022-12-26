let input = document.querySelector('#spelling');
let input1 = document.querySelector('.input1');
let total = document.querySelector('.total');
let points = document.querySelector('.points');
let repeat = document.querySelector('.repeat');
let next = document.querySelector('.next');
let clear = document.querySelector('.clear');
let scorepoints = localStorage.getItem("score");
let index = localStorage.getItem('index');
let array1 = ["tree", "toy", "doll", "chair", "mother", "peace", "camel", "horse", "family", "friend", "pony", "jump", "forest", "deer", "clouds", "earth", "moon", "sun", "jelly", "bees", "monkey", "bull"];
let word = document.querySelector('.word');
let moon = document.querySelector('.moon');
let list = document.querySelector('.list');
let bar = document.querySelector('.bar');
let reveal = document.querySelector('.reveal');
let score;
let i;
let l;
var myTimeout;
var myTimeout2;
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
let hardArray = makearray("abash abate abdicate aberration abstain abstruse acknowledgment adequate adjudicate adroit adversity amicable analogous annul applause apprehension aquatic arbitrary arid aristocracy articulation aspiration assessment assimilate asylum available avert basin bemoan benevolent bewildered bias boisterous boondoggle brazen brusque canny capability capacious capitulate caveat chaff chronic circumvent clairvoyant classic cognitive coherence collaborate combat commemorate commission comply concept concomitant condescending condition conjunction conspicuous constrain context controversy corollary corrugated covert decipher defunct delineate diversity dominant effective efficacy efficient elliptical eloquent embellish emission encompass endow engender enhancement enormous environment ethnic eventually evident expanse explicit export extravagant facilitate fiduciary finance framework frugality gregarious habitat harass harassment hereditary heritage hone hybrid illegitimate immerse immigrant imperative implicit improbable inalienable incident income indict indigenous infrastructure inimical innovative integrate intransigence jurisdiction jurisprudence kaleidoscope laud laudatory legacy legislate livelihood malediction mandate mayhem methodology migratory motivate muster")
let array = [];
function sound(text) {
	const synth = window.speechSynthesis;
	synth.cancel();
	synth.speak(new SpeechSynthesisUtterance(text));
}

function Scoring(num, coloring) {
	if (num > 0) {
		coloring.style.color = 'green';
	}
	else if (num == 0) {
		coloring.style.color = "white";
	}
	else {
		coloring.style.color = 'red';
	}
}
let sesiongreet = sessionStorage.getItem("greet");

let level = document.querySelectorAll(".level");
level.forEach((element, index) => {
	let difficulty;
	element.addEventListener("click", function () {
		word.style.color = 'transparent';
		if (index === 0) {
			difficulty = 'easy';
			let indexNumber = localStorage.getItem("index1");
			let Score = localStorage.getItem("score1");
			if (indexNumber === null) {
				i = 0;
				score = 0;
			}
			else {
				i = parseInt(indexNumber);
				score = parseInt(Score);
			}
			array = array1;
			l = array.length;
			word.innerHTML = array[i];
			points.innerHTML = score;
		}
		else if (index === 1) {
			difficulty = 'medium';
			sound(`medium level selected!`)
			let indexNumber1 = localStorage.getItem("index2");
			let Score1 = localStorage.getItem("score2");
			if (indexNumber1 === null) {
				i = 0;
				score = 0;
			}
			else {
				i = parseInt(indexNumber1);
				score = parseInt(Score1);
			}
			array = newArray;
			l = array.length;
			word.innerHTML = array[i];
			points.innerHTML = score;
		}
		else {
			difficulty = 'hard';
			sound(`hard level selected!`)
			let indexNumber2 = localStorage.getItem("index3");
			let Score2 = localStorage.getItem("score3");
			if (indexNumber2 === null) {
				i = 0;
				score = 0;
			}
			else {
				i = parseInt(indexNumber2);
				score = parseInt(Score2);
			}
			array = hardArray;
			l = array.length;
			word.innerHTML = array[i];
			points.innerHTML = score;
		}
		sound(`${difficulty} level selected!and your current word is ${array[i]}`);
		total.innerHTML = `/${l}`;
	})
});

input1.addEventListener("click", function () {
	word.style.color = 'transparent';
	let word1 = array[i].charAt(0).toUpperCase() + array[i].slice(1);
	if ((input.value === array[i] || input.value === word1) && array[i] != undefined) {
		if (array[i] === undefined) {
			sound(`You have completed the test, congratulations!!`);
		}
		else {
			i++;
			score++;
			Scoring(score, points);
			if (array[0] === 'tree') {
				localStorage.setItem("index1", i);
				localStorage.setItem("score1", score);
			}
			else if (array[0] === 'attack') {
				localStorage.setItem("index2", i);
				localStorage.setItem("score2", score);
			}
			else {
				localStorage.setItem("index3", i);
				localStorage.setItem("score3", score);
			}
			sound(`Right answer, and The next word is ${array[i]}`);
		}
		input.value = "";
		points.innerHTML = score;
		word.innerHTML = array[i];
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

reveal.addEventListener("click", function () {
	word.style.color = 'var(--blue)';
})
reveal.addEventListener("blur", function () {
	word.style.color = 'transparent';
})


clear.addEventListener("click", function () {
	if (array[0] === 'tree') {
		localStorage.removeItem("index1");
		localStorage.removeItem("score1");
	}
	else if (array[0] === 'attack') {
		localStorage.removeItem("index2");
		localStorage.removeItem("score2");
	}
	else {
		localStorage.removeItem("index3");
		localStorage.removeItem("score3");
	}
	word.style.color = 'transparent';
	if (array[i] === undefined) {
		sound("Please select a level and start the game");
	}
	else {
		score = 0;
		i = 0;
		input.value = "";
		points.innerHTML = score;
		if (array[0] == "tree") {
			sound(` RE-starting easy level`);
		}
		else if (array[0] == "attack") {
			sound(` RE-starting medium level`);
		}
		else {
			sound(` RE-starting hard level`);
		}
		word.innerHTML = array[i];
	}
})



repeat.addEventListener("click", function () {
	word.style.color = 'transparent';
	if (array[i] === undefined) {
		sound(`Please select a level and start the game!`);
	}
	else {
		sound(`The current word is ${array[i]}`);
	}
})


let check = 1;
let link2 = document.querySelector('.fa-github');
moon.addEventListener('click', function (e) {
	console.log(link2);
	word.style.color = 'transparent';
	if (check % 2 != 0) {
		link2.style.color = 'white'
		moon.innerHTML = '☀️';
		bar.style.border = '3px solid white';
		points.style.color = 'white';
		document.body.style.color = 'white';
		// document.body.style.background = 'rgba(22, 35, 57, 0.94)';
		document.body.style.background = 'rgb(23, 25, 25)';
		check++;
	}
	else {
		link2.style.color = 'black'
		points.style.color = 'black';
		moon.innerHTML = '🌑';
		bar.style.border = '3px solid rgba(22, 35, 57, 0.94)';
		document.body.style.color = 'black';
		document.body.style.background = 'white';
		check++;
	}
})

// instructions

let floating = document.querySelector('.floating');
let text = 0;
floating.addEventListener("click", function () {
	sound(`Welcome to Spell Hornet. My name is Chitti, from the movie Robot, 
	but super lite version. This is the place to sharpen and test
	your english spelling skills, you first have to select the level
	of difficulty, and then type the word as I ask, and you will be
	scored accordingly Welcome to Spell Hornet. My name is Chitti, from the movie Robot, 
	but super lite version. This is the place to sharpen and test
	your english spelling skills, you first have to select the level
	of difficulty, and then type the word as I ask, and you will be
	scored accordingly Welcome to Spell Hornet. My name is Chitti, from the movie Robot, 
	but super lite version. This is the place to sharpen and test
	your english spelling skills, you first have to select the level
	of difficulty, and then type the word as I ask, and you will be
	scored accordingly`);
})
let state = true;
let dev = document.querySelector('.dev');
let code = document.querySelector('.code');
let no_dev = document.querySelector('.no_dev');
dev.addEventListener("click", function () {
	if (state) {
		code.style.display = "block";
		no_dev.style.display = "none";
		dev.innerHTML = "Normal";
		state = false;
	}
	else {
		code.style.display = "none";
		dev.innerHTML = "Dev. Mode";
		no_dev.style.display = "block";
		state = true;
	}
})


// TODO : trying to add enthusiasm in the voice but  failed

// const synth = window.speechSynthesis;

// // Create a new SpeechSynthesisUtterance object
// const utterance = new SpeechSynthesisUtterance("Hello, World!");

// // Set the pitch and rate to higher values to add enthusiasm
// utterance.pitch = 1.5;
// utterance.rate = 1.5;

// // Start speech synthesis
// synth.speak(utterance);



