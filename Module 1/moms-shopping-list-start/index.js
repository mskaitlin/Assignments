const form = document.addItem;
const newLi = document.createElement("li");
const newDiv = document.createElement("div");
const newEdit = document.createElement("button");
const newX = document.createElement("button");

form.addEventListener("submit", function(event){
    event.preventDefault()
    console.log(event)

    const titleInput = form.title.value;
    form.title.value = "";

    newDiv.textContent = titleInput;
    newEdit.textContent = "edit";
    newEdit.style.margin = "3.5px";
    newX.textContent = "X";
    
    document.getElementsByTagName("ul")[0].append(newLi)
    newLi.append(newDiv);
    newLi.append(newEdit);
    newLi.append(newX);

})

newX.addEventListener('click', function(event){
    event.target.parentNode.remove()
})
