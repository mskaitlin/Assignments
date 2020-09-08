if(5 > 3){
    console.log("is greater than" )
}

var name = "cat"

if(name.length === 3){
    console.log("is the length" )
}

if ("cat" === "dog"){
    console.log("is the same")
}   else {
    console.log("not the same")
}

var person = {
    name: "Bobby",
    age: 12
  }

if (person >= 18){
    console.log((person.name) + " is allowed to go to the movie")
}   else {
    console.log((person.name) + " is not allowed to go to the movie")
}

if (person.name[0] === "B"){
    console.log((person.name) + " is allowed to go to the movie")
}   else {
    console.log((person.name) + " is not allowed to go to the movie")
}

if ((person >= 18) && (person.name[0] === "B")){
    console.log((person.name) + " is allowed to go to the movie")
}   else {
    console.log((person.name) + " is not allowed to go to the movie")
}

if (1 === "1"){
    console.log("strict")
} else if( 1 == "1") {
    console.log("abstact")
} else {
    console.log('not equal at all')
}

