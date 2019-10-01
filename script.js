/*
var massjohn, massmark, heightjohn, heightmark;
massjohn=160;
console.log("John's mass = " + massjohn);
massmark=60;
console.log("Mark's mass = " + massmark);
heightjohn=157;
console.log("John's height = " + heightjohn);
heightmark=160;
console.log("Mark's height = " + heightmark);

var BMImark = massmark / (heightmark + heightmark);
console.log("Mark's BMI = " + BMImark);
var BMIjohn = massjohn / (heightjohn + heightjohn);
console.log("John's BMI = " + BMIjohn);

var isHigherBMI = BMImark > BMIjohn;

console.log("Is Mark's BMI higher than John's? " + isHigherBMI);

*/




/* if else

var firstName = 'John ';
var status = 'single ';

if(status == 'married'){
	console.log(firstName + 'is married');
} else
 {
 	console.log(firstName + 'will hopefully marry soon');
 }

 var isMarried = true;

 if(isMarried === true) {
 	console.log(firstName + 'is married');
 } else {
 	console.log(firstName + 'will hopefully marry soon' );
 }

 */




 /*boolean logic(and, or not)

 var firstName = 'John ';
 var age = 20;

 if(age < 13){
 	console.log(firstName + 'is a boy');
}else if(age >= 13 && age < 20){
	console.log(firstName + 'is a teenager');
}else if(age >= 20 && age < 30){
	console.log(firstName + 'is a young man');
} else {
	console.log(firstName + 'is a man');
}

*/





/* the ternary operator and switch statement */

//var firstName = 'John';
// var age = 14;


//ternary operator
// age >= 10 ? console.log( firstName + ' drinks Juice')
//  : console.log(firstName + 'drinks milk');

 

 /*switch statement
 var job = 'teacher';

 switch(job){
 	case 'teacher':
 		console.log(firstName + ' is a teacher');
 		break;
 	case 'driver':
 		 console.log(firstName + ' is a driver');
 		 break;
 	case 'designer':
 		console(firstName + ' is a designer');
 		break;
 	default:
 		console.log(firstName + ' does something else');
 }
*/





/*
age = 13;
switch(true){
	case age > 13:
	console.log(firstName + ' is a boy');
	break;
	case age >= 13 && age < 20:
	console.log(firstName + ' is a teenager');
	case age >= 20 && age < 30:
	console.log(firstName + ' is a young man');
	break;
	default:
	console.log(firstName + ' is a man');

}
*/





/* Truthy and falsy values

var height;

if(height || height === 0){
	console.log('variable is defined');
} else {
	console.log('variable is not defined');
}

*/




/* Function = repeat/pengulangan

function calculateAge(birthYear){
	return 2019 - birthYear;
}

var ageJohn = calculateAge(1991);
var ageMark = calculateAge(1960);
var ageMike = calculateAge(1971);

console.log(ageJohn, ageMark, ageMike);


function yearUntilRetirement(year, firstName){
	var age = calculateAge(year);
	var retirement = 60 - age;
	if(retirement > 0){
		console.log(firstName + ' retires in ' + retirement + ' years');
} else {
	console.log(firstName + ' is already retired');
	}
}

yearUntilRetirement(1987, 'John');
yearUntilRetirement(1990, 'Mark');
yearUntilRetirement(1940, 'Mike');

*/





// function statements and expressions
// function declaration
/*
function whatDoYouDo(job, firstName){}

//function expressions
var whatDoYouDo = function(job, firstName){
	switch(job){
		case 'teacher':
			return firstName + ' is a teacher';
		case 'driver':
			return firstName + ' is a driver';
		case 'designer':
			return firstName + ' is a designer';
		default:
			return firstName + ' does something else';
	}
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Mark'));
console.log(whatDoYouDo('retired', 'Mike'));

*/






// array

/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1998);

console.log(names[0]);
console.log(names.length);

//mutate array data
names[0] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

*/






// different data types
/*
var John = ['John', 'Smith', 1990, 'designer', false];
John.push('blue');
John.unshift('Mr');
console.log(John);

John.pop();
John.pop();
John.shift();
console.log(John);
*/





/*
// exercise 2
function tipcalculator(bill){
	var tippercentage;
	if(bill < 50){
		tippercentage = 20/100;
	} else if(bill >= 50 && bill < 200){
		tippercentage = 15/100;
	} else {
		tippercentage = 10/100;
	}
	return tippercentage * bill;
}

var bills = [124, 48, 260];
var tips = [tipcalculator(bills[0]),
			tipcalculator(bills[1]),
			tipcalculator(bills[2])];
var finalpaidamounts = [bills[0] + tips[0],
						bills[1] + tips[1],
						bills[2] + tips[2]];

console.log(tips);
console.log(finalpaidamounts);
*/




// object and properties
 /*
var John = {
	firstName : 'John',
	lastName : 'Smith',
	birthYear : 1990,
	family : ['Jane', 'Mark', 'Bob', 'Emily'],
	job : driver,
	isMarried : false
}

console.log(john.firstName);
console.log(john.lastName);
console.log(john.family[3]);
console.log(John['birthYear']);
console.log(john['family'][1]);
var x = 'birthYear';
console.log(john[x]);

*/




/*
var Jane = new Object();
Jane.firstName = 'Jane';
Jane.birthYear = '1969';
Jane['lastName'] = 'Smith';
console.log(Jane);

console.log('')

var John = {
	firstNameteacher : 'John',
	lastName : 'Smith',
	birthYear : 1990,
	family : ['Jane', 'Mark', 'Bob', 'Emily'],
	job : '',
	isMarried : false,
	calculateAge : function(birthYear){
	this.age = 2019 - this.birthYear;
	return this.age;
	}
}

var age = John.calculateAge();
console.log(age);
console.log(John);
*/








/* exercise di kls

var Jessica = {
	fullname : 'JessicaClements',
	mass: 42,
	height: 175,
	calculateBMI: function(){
		this.BMI = this.mass / (this.height * this.height);
		return this.BMI;
	}
}

var Regina = {
	fullname : 'ReginaPhoniex',
	mass: 45,
	height: 156,
	calculateBMI: function(){
		this.BMI = this.mass / (this.height * this.height);
		return this.BMI;
	}
}

console.log(Jessica.calculateBMI());
console.log(Jessica);

console.log(Regina.calculateBMI());
console.log(Regina);

if(Jessica.calculateBMI() > Regina.calculateBMI()){
	console.log(' Jessica has the highest BMI' + calculateBMI());
} else if (Regina.calculateBMI() > Jessica.calculateBMI()){
	console.log(' Regina has the highest BMI ' + calculateBMI());
} else {
	console.log('they have the same BMI');
}


*/






// loop and iteration
// for loop
/*

for(var i=0; i<10; i+=2){
	console.log(i);
}

var John = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for( var i=0; i<John.length; i++){
	console.log(John[i]);
}

var nama = 'John';
console.log(nama[1]+nama[2]+nama[3]+'s');

*/


// while loop 
/*
var i = 0;
while(i<John.length){
	console.log(John[i]);
	i++;
}

*/





// continue n break statement
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for(var i=0; i<john.length; i++){
	if(typeof john[i] !== 'string'){
		continue;
	}
	console.log(john[i]);
}


for(var i=0; i<john.length; i++){
	if(typeof john[i] !== 'string'){
		break;
	}
	console.log(john[i]);
}


// looping backward
for(var i=john.length-1; i>=0; i--){
	console.log(john[i]);
}

*/



//palindrome
/* Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan
mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah 
sebuah kata yang jika dibalik tetap sama, 'katak', dibalik tetaplah 'katak'. */

/*

function palindrome(kata2){

var kata = '';
for(var i= kata2.length-1; i>=0; i--){
	kata = kata + kata2[i];
	}
	if 
		(kata2 == kata){
	return true;
} else {
	return false;
	}
}

console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('civic'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister'));


*/





function cariMean(arr) {
	var jumlah = 0, i;

	for(var i=0; i< arr.length; i+=1){
		jumlah += arr[i];
	}
	return Math.round(jumlah / arr.length)
}

console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 3
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7])); // 7