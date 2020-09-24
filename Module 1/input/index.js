box.addEventListener("click", click)

function click (){
    const inputValue = myInput.value
    console.log(inputValue)

    const newP = document.createElement('p')
    document.body.append(newP)
    newP.textContent = inputValue
}



