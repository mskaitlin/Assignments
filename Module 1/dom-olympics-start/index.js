//Qualifier
const header = document.querySelector('#header')
header.textContent = 'JavaScript Made This!!'
header.style.fontSize = '20px'
header.style.display = 'flex'
header.style.alignItems = 'center'
header.style.flexDirection = 'column'

const div = document.createElement('div')
header.append(div)

const span = document.createElement('span')
div.prepend(span)
span.textContent = 'Kaitlin'
span.style.color = 'peachpuff'
span.style.fontSize = '15px'

const span2 = document.createElement('span')
div.append (span2)
span2.textContent = [' wrote the Javascript']
span2.style.fontSize = '15px'

//bronze

let left = document.getElementsByClassName('left')
left[0].textContent = 'so super fun'
left[1].textContent = 'i love summer'

let right = document.getElementsByClassName('right')
right[0].textContent = 'cats are the cutest'
right[1].textContent = 'dogs are cool too'

const button = document.getElementById('clear-button')
const messages = document.getElementsByClassName('messages')
button.addEventListener("click", function() {
    messages[0].textContent = ''
 })

 //silver
 let dropDown = document.getElementById('theme-drop-down');

 dropDown.addEventListener("change", function() {   
    if (dropDown.value === "theme-two" ){
        left[0].style.backgroundColor = "red";
        left[1].style.backgroundColor = "red";

        right[0].style.backgroundColor = "black";
        right[0].style.color = "white";

        right[1].style.backgroundColor = "black";
        right[1].style.color = "white";
    }

    if (dropDown.value === "theme-one" ){
        left[0].style.backgroundColor = "pink";
        left[1].style.backgroundColor = "pink";

        right[0].style.backgroundColor = "green";
        right[0].style.color = "white";

        right[1].style.backgroundColor = "green";
        right[1].style.color = "white";
    }
    }
 )

 //gold
 let messageDiv = document.querySelector(".messages");
 let form = document.getElementById("message")

 form.addEventListener("submit", function(e){
         e.preventDefault()
        let newDiv = document.createElement('div');
         newDiv.textContent = input.value;
         messageDiv.append(newDiv);   
 })