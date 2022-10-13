// * ===== JAVASCRIPT REVIEW LAB =====

// * I. VARIABLES AND DATATYPES

// * A. Q + A

// * ===== How do we assign a value to a variable?
// *        Assignment operator ( = )
// * ===== How do we change the value of a variable?
// *        Use its name and ( = ) and input new value
// * ===== How do we assign an existing variable to a new variable?
// *        Store the value in a new variable.
// * ===== Remind me, what are declare, assign, and define?
// *        Declare value to a variable using 'let' or 'const', assign a value using ( = ), define is same as declare.
// * ===== What is pseudocoding and why should you do it?
// *        Informal way to write out your instructions.
// *        It can help you work out problems and also break things into pieces to make it easier.
// * ===== What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// *        Depends on the person.

// * B. Strings
// *    1. Create a variable called firstVariable
// *    Assign it the value of the string "Hello World"
// *    Change the value of this variable to some number
// *    Store the value of firstVariable in a new variable called secondVariable
// *    Change the value of secondVariable to any string.
// *    What is the value of firstVariable?
let firstVariable = "Hello World";
irstVariable = 7;
let secondVariable = firstVariable;
secondVariable = "Goodbye friend";
// *   2. Create a variable called yourName and set it equal to your name as a string.
// *    Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
const yourName = "Alex";
const myHello = "Hello, my name is " + yourName;

console.log(myHello);

// * C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

// console.log(a _<_ b);
// console.log(c _>_ d);
// console.log('Name' _===_ 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true _||_ false);
// console.log(false _||_ false _||_ false _||_ false ||_ false _||_ true);
// console.log(false _===_ false)
// console.log(e _===__ 'Kevin');
// console.log(a _!=_ b _-_ c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a _<_ a __+_ d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 _==_ '48');

// * D. The farm
// *  Declare a variable animal. Set it to be either "cow" or something else
// *  Write code that will print out "mooooo" if the it is equal to cow
// *  Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

let animal = "cow";

function animalSounds(a) {
  if (a === "cow") {
    console.log("mooooo");
  } else {
    console.log("Hey, you're not a cow.");
  }
}

animalSounds(animal);

// * E. Driver's Ed

// *   Make a variable that holds a person's age; be semantic
// *   Write code that will print out "Here are the keys!", if the age is 16 years or older,
// *   Or, if the age is younger than 16, a message should print "Sorry, you're too young."

const age = 16;

if (age >= 18) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

// * II. Loops
// ! Remember: USE let when you initialize your for loops!
// ! This is GOOD: for(let i = 0; i < 100; i++)

// * A. The basics

// * Write a loop that will print out all the numbers from 0 to 10, inclusive
// for (let num = 0; num <= 10; num++) {
//   console.log(num);
// }
// loop works
// * Write a loop that will print out all the numbers from 10 up to and including 400
// for (let num2 = 10; num2 <= 400; num2++) {
//   console.log(num2);
// }
// loop works

// * Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let num3 = 12; num3 <= 4000; num3++) {
//   if (num3 % 3 === 0) {
//     console.log(num3);
//   }
// }
// loop works

// * B. Get even
// * Print out the numbers that are within the range of 1 - 100
// * Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
// for (let num4 = 1; num4 <= 100; num4++) {
//   if (num4 % 2 === 0) {
//     console.log(`${num4} is an even number.`);
//   }
// }

// * C. Give me Five
// * For numbers divisible by both three and five, be sure your code prints both messages "I found a number. High Five! Three is a crowd."
// * For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// * Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

// for (let num5 = 0; num5 <= 100; num5++) {
//   if (num5 % 3 === 0 && num5 % 5 === 0) {
//     console.log(`I found ${num5} . High Five! Three is a crowd.`);
//   } else if (num5 % 5 === 0) {
//     console.log(`I found ${num5}. High five!`);
//   } else if (num5 % 3 === 0) {
//     console.log(`I found ${num5}. Three is a crowd.`);
//   }
// }

// * D. Savings account
// *    Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// *    Check your work! Your bank_account should have $55 in it.
// *    You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// *    Check your work! Your bank_account should have $10,100 in it.

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// } // output: 55

// let bank_account = sum;
// console.log(bank_account);

// let sum2 = 0;
// for (let i = 1; i <= 100; i++) {
//   sum2 += i * 2;
// }
// let bank_account = sum2;
// console.log(bank_account); // output: 10100

// * III. Arrays & Control flow

// * ===== A. Talk about it:
// *    What are the things in an array called?
// *        Element
// *    Do Arrays guarantee those things will be in order?
// *        Yes, arrays guarantee order
// *    What real-life thing could you model with an array?
// *     Music playlist

// * ===== B. Easy Does It
// * Create an array that contains three quotes and store it in a variable called quotes

const arrQuote = ["sing", "dance", "play"];
let quotes = arrQuote;
console.log(quotes); // output: ["sing", "dance", "play"]
// * ===== C. Accessing elements

// * Given the following array const randomThings = [1, 10, "Hello", true]
// * How do you access the 1st element in the array?

const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]); //output: 1

// * Change the value of "Hello" to "World"
randomThings.splice(2, 1, "World");
console.log(randomThings); // output: [ 1, 10, 'World', true ]

// * Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// * ===== D. Change values

// * Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// * What would you write to access the 3rd element of the array?
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]); // output: Sardine

// * Change the value of "Github" to "Octocat"
ourClass.pop();
ourClass.push("Octocat");
console.log(ourClass);
// * Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

// * ===== E. Mix It Up
// * Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.
// * Given the following array: const myArray = [5, 10, 500, 20]
// * Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
const myArray = [5, 10, 500, 20];

myArray.push("Aegon");
console.log(myArray); // output: [ 5, 10, 500, 20, 'Aegon' ]

// * Remove the 5 from the beginning of the array.

myArray.shift();
console.log(myArray); // output: [ 10, 500, 20, 'Aegon' ]

// * Add the string "Bob Marley" to the beginning of the array.

myArray.splice(0, 1, "Bob Marley");
console.log(myArray); // output: [ 'Bob Marley', 500, 20, 'Aegon' ]

// * Remove the string of your choice from the end of the array.

myArray.splice(2, 1);
console.log(myArray);

// * Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything? Yes

myArray.reverse();
console.log(myArray);

// * ===== F. Biggie Smalls

// *  Create a variable that contains an integer.
let integer = 27;

// * Write an if ... else statement that:
// * console.log()s "little number" if the number is entered is less than 100
// * console.log()s big number if the number is greater than or equal to 100.

if (integer < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

// output: little number

// * ===== G. Monkey in the Middle

// * Write an if ... else if ... else statement:
// *     console.log() little number if the number entered is less than 5.
// *   If the number entered is more than 10, log big number.
// *    Otherwise, log "monkey".

let number = 13;

if (number > 10) {
  console.log("monkey");
} else {
  console.log("little number");
}

// * ===== H. What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

// *  What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

// *  Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset); // output: [ 'left shoe','cowboy boots','right sock','GA hoodie','green pants','yellow knit hat','raybans','marshmallow peeps']

// *  Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset.splice(5, 1, "stained knit hat");
console.log(kristynsCloset);
// *  Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
let shirt = thomsCloset[0][0];
console.log(shirt);

// * In the same way, access one item from Thom's pants array.
let pants = thomsCloset[1][1];
console.log(pants);
// *  Access one item from Thom's accessories array.
let accessory = thomsCloset[2][1];
console.log(accessory);
// * Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(
  `Thom is always looks fabulous! Today he is wearing a ${shirt}, ${pants} and ${accessory}.`
);
// * Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1].splice(2, 1, "Footie Pajamas");
console.log(thomsCloset[1]);

// * ====== IV. Functions

// *===== A. printGreeting

// * Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
// Like so?

//     => Hello there, Slimer!
// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

function printGreeting(name) {
  console.log(`Hello there, ${name}!`);
}

printGreeting("Slimer");

// * ===== B. printCool
// * Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

function printCool(name) {
  console.log(`${name} is cool!`);
}
printCool("Captain Reynolds");

// * ===== C. calculateCube
// * Write a function calculateCube that takes a single number and prints the volume of a cube made from that number. (V = a^3)

let calculateCube = function (v) {
  return v * v * v;
};
console.log(calculateCube(5)); // output: 125

// * ===== D. isVowel

// * Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// * The vowel could be upper or lower case. Test your function on every vowel and make sure it's working.
// * In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// * console.log(isVowel("a"));

// *  => true

function isVowel(arg) {
  const vowel = "a, e, i, o, u, A, E, I, O, U";
  for (let i = 0; i < vowel.length; i++) {
    if (arg === vowel[i]) {
      return true;
    }
  }
  return false;
}

console.log(isVowel("c")); // output: False
console.log(isVowel("Z")); // output: False
console.log(isVowel("a")); // output: True
console.log(isVowel("A")); // output: True
console.log(isVowel("e")); // output: True
console.log(isVowel("E")); // output: True
console.log(isVowel("i")); // output: True
console.log(isVowel("I")); // output: True
console.log(isVowel("o")); // output: True
console.log(isVowel("O")); // output: True
console.log(isVowel("u")); // output: True
console.log(isVowel("U")); // output: True

// * ===== E. getTwoLengths
// *    Write a function getTwoLengths that accepts two parameters (strings).
// *    The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLengths(str1, str2) {
  return [str1.length, str2.length];
}

console.log(getTwoLengths("Hank", "Hippopopalous")); // => [ 4, 13 ]

// * ===== F. getMultipleLengths
// * Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings.
// * The function should return an array of numbers where each number is the length of the corresponding string.
// function getMultipleLengths(strArr) {

// }

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// * ===== G. maxOfThree
// * Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// * If all numbers are the same, it doesn't matter which one is returned.
// * If the two largest numbers are the same, one of them should be returned.
// * Be sure to test it with larger values in each of the three locations.

const maxOfThree = (a, b, c) => (a > b ? a : a && b > c ? b : b && c ? c : c);

console.log(maxOfThree(99, 5, 19)); // output: 99
console.log(maxOfThree(4, 17, 1)); // output: 17
console.log(maxOfThree(5, 8, 33)); // output: 33

// * ===== H. printLongestWord
// * Write a function printLongestWord that accepts a single argument, an array of strings.
// * The method should return the longest word in the array.
// * In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = [
  "BoJack",
  "Princess",
  "Diane",
  "a",
  "Max",
  "Peanutbutter",
  "big",
  "Todd",
];

let longestWord = "";

printLongestWord.forEach((item) => {
  const words = item.split(" ");
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
});

// All done - let's output the longest word
console.log(longestWord);

// => "Peanutbutter"

// * ====== OBJECTS =====
// *Let's set up an object data structure.
// * Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data.
//* The object data structure is a good way to organize the data from our user.

// * =====A. Make a user object
// * Create an object called user.

// const user = {};

// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
// * B. Update the user

const user = {
  name: "triple H",
  email: "cerebral-assasin@DGenerationX.com",
  age: 45,
  purchased: [],
};

// * Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.

user.email = "tripps@@DGenerationX.com";
console.log(user); // output: email: 'tripps@@DGenerationX.com'

// * Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++

// user.age = ++user.age;
console.log(user);

// * C. Adding keys and values
// * You have decided to add your user's location to the data that you want to collect.
// * Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
// user.push(location: "Stamford, CT")

user["location"] = "Stamford, CT";
console.log(user);

// output: {
//   name: 'Triple H',
//   email: 'tripps@@DGenerationX.com',
//   age: 46,
//   purchased: [],
//   location: 'Stamford, CT'
// }

// * D. Shopaholic!
// * Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
// * Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
// * Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
// Console.log just the "Merino jodhpurs" from the purchased array.

user.purchased.push("carbohydrates", "peace of mind", "Merino Jodhpurs");
console.log(user);

// output:
// {
//   name: 'Triple H',
//   email: 'tripps@@DGenerationX.com',
//   age: 46,
//   purchased: [ 'carbohydrates', 'peace of mind', 'Merino Jodhpurs' ],
//   location: 'Stamford, CT'
// }

// * E. Object-within-object
// * Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// * If we want to give our user a friend with a name and age, we could write:

//  user.friend = {
//     name: "Grace Hopper",
//    age: 85
// }
// When we console.log user, we would see the friend object added to our user object.

// * Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
// * Console.log just the friend's name
// * Console.log just the friend's location
// * CHANGE the friend's age to 55
// * The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.
// * The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchased array.
// * Console.log just "A latte" from the friend's purchased array.

user.xpac = {
  name: "X-Pac",
  age: 40,
  location: "Santa Monica, CA",
  purchased: [],
};
console.log(user.xpac.name);
console.log(user.xpac.location);
user.xpac.age = ++user.xpac.age;
user.xpac.purchased.push("The One Ring", "A Latte");
console.log(user.xpac.purchased[1]);
console.log(user);

// output:

// X-Pac
// Santa Monica, CA
// A Latte

// {
//   name: 'Triple H',
//   email: 'tripps@@DGenerationX.com',
//   age: 46,
//   purchased: [ 'carbohydrates', 'peace of mind', 'Merino Jodhpurs' ],
//   location: 'Stamford, CT',
//   xpac: {
//     name: 'X-Pac',
//     age: 41,   // friends age incremented
//     location: 'Santa Monica, CA',
//     purchased: [ 'The One Ring', 'A Latte' ]
//   }
// }

// * F. Loops
// * Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
// * Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.

for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}
//output:
// carbohydrates
// peace of mind
// Merino Jodhpurs

for (const key of Object.keys(user.xpac.purchased)) {
  console.log(`${key} => ${user.xpac.purchased[key]} `);
}
// output
// 0 => The One Ring
// 1 => A Latte

// * G. Functions can operate on objects
// * Write a single function updateUser that takes no parameters. When the function is run, it should:
// * it should increment the user's age by 1
// * make the user's name uppercase
// * The function does not need a return statement, it will merely modify the user object.

const updateUser = Object.assign(user, { name: "TRIPLE H", age: 47 });
console.log(user);

// output:
// {
//   name: 'TRIPLE H',
//   email: 'tripps@@DGenerationX.com',
//   age: 47,
//   purchased: [ 'carbohydrates', 'peace of mind', 'Merino Jodhpurs' ],
//   location: 'Stamford, CT',
//   xpac: {
//     name: 'X-Pac',
//     age: 41,
//     location: 'Santa Monica, CA',
//     purchased: [ 'The One Ring', 'A Latte' ]
//   }
// }

// *Write a function oldAndLoud that performs the exact same tasks as updateUser,
// * but instead of hard-coding it to only work on our user object,
// * make it take a parameter person, and
// * have it modify the object that is passed in as an argument when the function is called.
// * Call your oldAndLoud function with user as the argument.
// const oldAndLoud = user;
// console.log(oldAndLoud);

function oldAndLoud(user) {
  Object.assign(user, { name: "TRIPLE H", age: 47 });
}

console.log(user);
