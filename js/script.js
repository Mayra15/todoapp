var addButton = document.querySelector('#add-task');
var list = document.querySelector('#list-items');


addButton.addEventListener('click',addItem);


function addItem() {

    //We're saving the what the user has put as a task and creating a new var and then saving the user input in it.
    var userInput = document.querySelector('#task-text').value;

    //We have the user input and we're creating a list item.
    var listItem = document.createElement('li');
    listItem.classList.add('collection-item')
    //giving the list item the content from the user (userInput)
    var idNumber = list.length;
    var liHTML = [  '<input type="checkbox" class="complete" id="checkbox'+idNumber+'" /> <label for="checkbox'+idNumber+'"> </label> <span>'+ userInput+'</span> ',
        '<button class="btn waves-effect waves-light delete red right" type="submit" name="action">Delete',
        '<i class="mdi-action-delete right"></i>',
        '</button>',
        '<button class="btn waves-effect waves-light edit right" type="submit" name="action">Edit',
        '<i class="mdi-action-description right"></i>',
        '</button>'].join('\n');
    listItem.innerHTML = liHTML;

    document.getElementById('list-items').appendChild(listItem);
    setUpListener()
}
//delete function - var delbutton was created in the function but a separate function was made to actually delete the li
function setUpListener (){
    var delButtons = document.querySelectorAll('.delete');
    for (var i = 0; i < delButtons.length; i++){
       var delButton = delButtons[i];
        delButton.addEventListener('click', delListItem);
    }

}

//delete function

function delListItem (){

    this.parentNode.outerHTML = '';
}

// for the user to be able to edit their li
function editToDo (){
    var editButton = document.querySelectorAll('.edit');
    for (var i = 0; i < editButtons.length; i++){
        var editButton = editButtons[i];
        editButton.addEventListener('click', editLi);

// edit function

function editLi(){

    this.parentNode.innerHTML = '<input type="edit"/>' + userInput;
}

//to mark the list item as done

function doneLi () {

}






