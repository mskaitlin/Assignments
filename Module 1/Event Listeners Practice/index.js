// Color controls

var blueHover = document.getElementById("box")
box.addEventListener("mouseover", function() {
  box.style.backgroundColor = "blue"
})

var redDown = document.getElementById("box")
box.addEventListener("mousedown", function() {
    box.style.backgroundColor  = "darkred"
})

var yellowOver = document.getElementById("box")
box.addEventListener("mouseout", function() {
    box.style.backgroundColor  = "gold"
})

var greenDouble = document.getElementById("box")
box.addEventListener("dblclick", function() {
    box.style.backgroundColor  = "darkgreen"
})

var purpleUp = document.getElementById("box")
box.addEventListener("mouseup", function() {
    box.style.backgroundColor = "purple"
})

var orangeWheel = document.getElementById("box")
var colorContainer = document.getElementById("color-container")
colorContainer.addEventListener("wheel", function() {
   box.style.backgroundColor   = "darkorange"
})



var keyDown = document.getElementById("box")
document.addEventListener("keydown", function(event) {
   console.log(event)
    if (event.code === "KeyB") {
    box.style.backgroundColor = "blue"
    } 
    else if (event.code === "KeyR") {
        box.style.backgroundColor = "red"
    }
    else if (event.code === "KeyY") {
        box.style.backgroundColor = "yellow"
    }
    else if (event.code === "KeyG") {
        box.style.backgroundColor = "green"
    }
    else if (event.code === "KeyO") {
        box.style.backgroundColor = "orange"
    }
  }
  )

