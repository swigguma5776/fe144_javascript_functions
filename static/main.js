let isClassCool = true; // in JS we use camelCase, the let key word lets us declare our variable, semi-colons as of now considered syntactical sugar


if (isClassCool) {
    console.log("Heck yeah we are!")
} else {
    console.log("Sorry guys but you can't sit with us")
}


let num; // arming our variables

num = 5;
num = 8; 
num = -15;


if (num % 2 == 0) {
    console.log("We have an even # here")
} else if ((num - 5) % 2 == 0) {
    console.log("Woah you're getting a lil spicy here")
} else {
    console.log("Didn't hit any of the spice, better luck next time")
}

/* 
comparison operators
Python we use 'and' and 'or' and 'not' as comparison operators 
JavaScript we use '&&' and '||' and '!' as comparison operators
*/

num = 10;

if (num % 2 == 0 && num - 5 > 0){
    console.log("That's cool")
} else {
    console.log("Not cool")
}

// Terinary if statements 

// first part is conditional  ? is then what               : is else do this
(num % 2 == 0 && num - 5 > 0) ? console.log("That's cool") : console.log("Not cool")


// same as first if/else if/else statment just terinary
num % 2 == 0 ? console.log("We have an even # here") : 
    ((num - 5) % 2 == 0 ? console.log("Woah you're getting a lil spicy here") : 
        console.log("Didn't hit any of the SpeechSynthesisVoice, better luck next time"));
        
/* can also do this in Python
print("We have an eeven # here") if num % 2 == 0 \
else print("Woah you're getting a lil spicy here") \ 
if (num -5) % 2 == 0 else print("Didn't hit any of the spice, better luck next time")
*/



// FOR LOOPS

// similar to Python utilizing the range()
// for i in range(5); 
for (let i = 0; i < 5; i++){
    console.log(i, "was here")
}

for (let i = 10; i > 0; i-=2){
    console.log(i, "was here")
}

let myFruits = ['strawberries', 'blueberries', 'peaches']
// for i in range(len(myFruits)) in Python
for (let i = 0; i < myFruits.length; i++){
    console.log(myFruits[i])
}

// we can utilize the IN keyword to cutback some code (still accessing the index)
// exact same thing as above
for (let i in myFruits){
    console.log(myFruits[i])
}

// we can utilize the OF keyword to access the value
// similar to for fruit in myFruits in Python
for (let fruit of myFruits){
    console.log(fruit)
}

// FOREACH LOOP

// similar to for i, fruit in enumerate(myFruits) in Python
myFruits.forEach((fruit, i) => {console.log(i, fruit)})

// NESTED LOOPS

for (let i in myFruits){
    for (let j in myFruits){
        console.log(i, j, myFruits[j])
    }
}




// WHILE LOOPS
let count = 5;

while (count > 0){
    console.log("My count is bussin")
    count--; 
}

// DO WHILE LOOP
let myNum = 1;

do {
    console.log(`My number is ${myNum}`)
    myNum++
} while (myNum < 1); 




// FUNCTIONS
// we utilize the keyword 'function' to declare a function

function sayHello(name){
    return name + " You are so cool!"
};

console.log(sayHello('Chris'));

function oneThang(num) { console.log('Hey this is more than 1 thang'); return num + 1}; // example of using the semi-colon to do multiple lines of code in 1 line


console.log(oneThang(5));


// SCOPE & VARIABLES

function outer() {
    let message = "Hello"; // local variable
  
    function inner() {
      console.log(message, myName); // Accesses 'message' from outer scope
      let myDogsName = 'Henri';
    }
  
    return inner;
  }
  let myName = 'Alex' //global variable
  let myFunc = outer();
  myFunc(); // Outputs: Hello
  // console.log(myDogsName); //doesn't work! Doesn't have access
  
  
  // Arrow Functions aka anonymous functions aka functions with no names. 
  
// defined by the arrow syntax =>
// they don't need to be saved/stored to memory
// also if you only have 1 parameter do not need parenthesis 
// do not need return if there is only 1 line of code 

//no function name
//a is the parameter
//a + 1 is the return
//5 is the argument

console.log((a => a + 1)(5));

// equivalent to 
function addNums(a){
    return a + 1
}

console.log(addNums(5))

//could also store to a variable
const addNumsArrow = a => a + 1

//more than 1 paremeter
const addMoreNumsArrow = (a, b) => { return a + b }

console.log(addMoreNumsArrow(5, 3))



