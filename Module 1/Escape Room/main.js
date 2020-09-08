const readlineSync = require('readline-sync');

const num1 = parseInt(readlineSync.question('Please enter your first number. '));
console.log (num1);

const num2 = parseInt(readlineSync.question('Please enter your second number. '));
console.log(num2);

const operations = readlineSync.question('Please enter the operation to perform: add, sub, mul, div. ');
console.log(operations);
 
function add(num1, num2){
    console.log(`The result is ${operations} isn't that great`)}
function mul(num1, num2){
    console.log(`The result is ${num1 * num2}`)}
function div(num1, num2){
    console.log(`The result is ${num1 / num2}`)}
function sub(num1, num2){
    console.log(`The result is ${num1 - num2}`)}

if (operations === "add"){
    add(num1, num2)}
else if (operations === "mul"){
    mul(num1, num2)
}
else if (operations === "div"){
    div(num1, num2)
}
else if (operations === "sub"){
    sub(num1, num2)
}
else {console.log ('try again')}
