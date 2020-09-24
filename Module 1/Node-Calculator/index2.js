const readlineSync = require('readline-sync');
 

const num1 = (readlineSync.questionInt('Please enter your first number. '));
console.log (num1);
const num2 = (readlineSync.questionInt('Please enter your second number. '));
console.log(num2);
const operations = readlineSync.question('Please enter the operation to perform: add, sub, mul, div. ');
console.log(operations);

if (operations === "add"){
  addd(num1, num2)}
else if (operations === "mul"){
  mull(num1, num2)
}
else if (operations === "div"){
  divv(num1, num2)
}
else if (operations === "sub"){
  subb(num1, num2)
}
else {console.log ('try again')}

function addd(num1, num2){
  console.log(`The result is ${num1 + num2} congrats`)}
  function mull(num1, num2){
  console.log(`The result is ${num1 * num2} congrats`)}
function divv(num1, num2){
  console.log(`The result is ${num1 / num2} `)}
function subb(num1, num2){
  console.log(`The result is ${num1 - num2}`)}
