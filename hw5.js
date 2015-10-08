// these are variables
var string ="string";
var num = 6;
var bool = true;

// create alert pop-ups through the alert function
alert("hiiii");

//Part 1
// log things into the console
console.log(num);

/* arrays can hold multiple variables
and can hold other arrays */
var arrayOne = ["one", "two"];
var arrayTwo = [3, 4];
var multiArray = [arrayOne, arrayTwo];

// this will return "two", which is the character at 
// index 0 of multiArray and index 1 of arrayOne
console.log(multiArray[0][1])

// testing can be done through ===, == (which doesn't check type), !==, <><=>=
// can use if, else if, else statements for logic
if (num===5) {
	console.log (true);
}
else {
	console.log (false);
}

//functions can automate things
function pickNum(number){
	if (number===6){
		alert("you guessed right")
	}
	else {
		alert("you guessed wrong")
	}
}
//call a function
pickNum(7)

//loops get repeated until a criteria is met
//for-loop
for (var i = 0; i < 3; i++) {
	console.log(i)
};
//while-loop
var j=0
while (j<3){
	console.log(j);
	j++;
}

//Part 2
function hello(name){
	alert("Hello "+name);
}
hello("Lusi")

function multiplyByTwo(num){
	return num*2;
}
multiplyByTwo(18)

function add(n1, n2){
	return n1+n2;
}
add(2,8)

