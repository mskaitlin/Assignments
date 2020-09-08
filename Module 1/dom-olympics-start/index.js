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


var left = document.getElementsByClassName('message left')
left[0].textContent = 'so super fun'
left[1].textContent = 'i love summer'

var right = document.getElementsByClassName('message right')
right[0].textContent = 'cats are the cutest'
right[1].textContent = 'dogs are cool too'

const button = document.getElementById('clear-button')
const messages = document.getElementsByClassName('messages')
button.addEventListener("click", function() {
    messages[0].textContent = ''
 })