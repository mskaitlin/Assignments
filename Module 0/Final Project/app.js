//Data Types

//String
var name = 'Kaitlin'
console.log(name)

//Number
var age = 34
console.log(age)

//Boolean
var isShort = true

//Array
var crystals = ['rose quartz', 'amethyst', 'obsidian', 'citrine', 'lapis lazuli']


//Object
var dog = {
    name: 'Butters',
    age: 4,
    hairColor: 'brown',
    isGood: true
}


function over18() {
if (age >= 18) {
    console.log("welcone!")
} else {
    console.log('stay in school')
}
}

var carMake = 'toyota'

function car () {
if (carMake === 'toyota') {
    console.log("Japan!!")
} else if (carMake === 'suzuki') {
    console.log("Japan!!")
} else {
    console.log("Not Japan!!")
}
}

var stone = 'rose quartz'

if (stone === 'obsidian') {
    console.log("black")
} else if (stone === 'rose quartz') {
    console.log("pink")
} else {
    console.log("green")
}

//Preliminaries
var animal = 'cat'
var otherAnimal = 'dog'

if (animal.length === 3) {
    console.log("is the length")
} else {
    console.log("Whoa thats a big animal!")
}
console.log(animal.length)

if (animal === otherAnimal) {
    console.log("the same")
} else {
    console.log("not the same")
}

//Bronze
var person = {
    name: "Bobby",
    age: 12
}

if (person >= 18) {
    console.log((person.name) + " is allowed to go to the movie")
} else {
    console.log((person.name) + " is not allowed to go to the movie")
}


//Silver
if (1 === "1") {
    console.log("strict")
} else if (1 == "1") {
    console.log('loose')
} else {
    console.log('not equal at all')
}

if (1 >= 2 && 2 === 4) {
    console.log("yes!")
} else {
    console.log('no')
}


//For Loops
// for (#1 startingPoint;#2 endingPoint; #4howWeGetThere){#3 the code to be exectued }

//for (var i = 0; i < 10; i++) { console.log(i) }


function evenOrOdd() {
    for (var i = 0; i < 51; i++) {
        if (i % 2 === 0) {
            console.log(i + ' is even!')
        } else {
            console.log(i + ' is odd!')
        }
    }

}



var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

function fiverChecker() {
    if (5 > 3) {
        console.log("is greater than!")
    }
}
function sum() {
    console.log(2 + 2)
}

//Exercise for the weekend!
//#1
//Create 2-3 Objects, they should have 3+ properties.
    //Demonstrate dot notation
//#2
//Create 2-3 Arrays, they should have 3+ items.
    //Demonstrate bracket notation

    var cat = {
        name: 'Princess',
        age: 2,
        hairColor: 'orange fluff',
        purrs: true,
        personality: ['sweet', 'shy', 'judgemental']
    };
    console.log(cat.age)
    console.log(cat.personality[2])

    var sunflower = {
        genus: 'Helianthus',
        isTall: true,
        symbolize: ['loyalty', 'adoration', 'longevity']
    };
    console.log(sunflower.genus)
    console.log(sunflower.symbolize[2])


//#3 
//Go through code, find Conditional Statements. Create Functions and put those Conditional Statements inside the functions you created.