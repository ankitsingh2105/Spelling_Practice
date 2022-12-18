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
console.log("this is something new sir", newArray);
function myTimer() {
	window.speechSynthesis.pause();
	window.speechSynthesis.resume();
	myTimeout = setTimeout(myTimer, 10000);
}
// async function checkSpelling(word) {
// 	let input = document.querySelector('#spelling');
// 	let input1 = document.querySelector('.input1');
// 	input1.addEventListener("click", function () {
// 		if (input === word) {
// 			console.log("correct");
// 		}
// 		else {
// 			console.log("wrong");
// 		}
// 	})
// }
window.speechSynthesis.cancel();
myTimeout = setTimeout(myTimer, 10000);
let toSpeak = 'cat';
let array = ["tree", "toy", "doll", "toy", "chair", "mother", "toy", "piece", "peace", "camel", "horse", "family", "friend", "pony", "jump", "forest", "deer", "clouds", "earth", "moon", "sun", "jelly", "bees", "monkey", "bull"];
let l = array.length;
let i = 0;
let input = document.querySelector('#spelling');
let input1 = document.querySelector('.input1');
let repeat = document.querySelector('.repeat');
let next = document.querySelector('.next');
next.addEventListener("click", function () {
	i++;
	var utt = new SpeechSynthesisUtterance(array[i]);
	utt.voice = window.speechSynthesis.getVoices().find(voice => voice.name === 'Alice');
	utt.pitch = 1;
	utt.rate = 1;
	utt.onend = function () { clearTimeout(myTimeout); }
	window.speechSynthesis.speak(utt);
	console.log("0=->> ", array[i]);
})

input1.addEventListener("click", function () {
	console.log(array[i], " - ", input.value, " - ", i);
	if (input.value === array[i]) {
		var utt = new SpeechSynthesisUtterance("correct answer");
		utt.voice = window.speechSynthesis.getVoices().find(voice => voice.name === 'Alice');
		utt.pitch = 1;
		utt.rate = 1;
		utt.onend = function () { clearTimeout(myTimeout); }
		window.speechSynthesis.speak(utt);
	}
	else {
		var utt = new SpeechSynthesisUtterance("incorrect answer, try again" );
		utt.voice = window.speechSynthesis.getVoices().find(voice => voice.name === 'Alice');
		utt.pitch = 1;
		utt.rate = 1;
		utt.onend = function () { clearTimeout(myTimeout); }
		window.speechSynthesis.speak(utt);
	}
})

repeat.addEventListener("click", function () {
	var utt = new SpeechSynthesisUtterance(array[i]);
	utt.voice = window.speechSynthesis.getVoices().find(voice => voice.name === 'Alice');
	utt.pitch = 1;
	utt.rate = 1;
	utt.onend = function () { clearTimeout(myTimeout); }
	window.speechSynthesis.speak(utt);

	// next.addEventListener("click", function () {
	// 	i++;
	// })

})


const voices = speechSynthesis.getVoices();

voices.forEach(voice => {
	console.log("->> ", voice.name);
});
