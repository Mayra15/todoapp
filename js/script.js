var addButton = document.querySelector('#add-task');
var list = document.querySelector('#list-items');

addButton.addEventListener('click',addItem);

function addItem(){

    //We're saving the what the user has put as a task. We're creating a new var and saving the user input to it.
    var userInput = document.querySelector('#task-text').value;

    //We have the user input and we're creating a list item.
    var listItem = document.createElement('li');

    //give the list item the content from the user (userInput)
    listItem.textContent = (userInput);

    //we're finally putting the list item onto the HTML (so the user can finally see it).
    list.appendChild(listItem);

}