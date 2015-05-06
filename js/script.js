var addButton = document.querySelector('#add-task');
var list =

addButton.addEventListener('click',addItem);

function addItem(){
    var newItem = document.querySelector('#task-text').value;
    li.textContent = (newItem);
    list.appendChild(li);

}