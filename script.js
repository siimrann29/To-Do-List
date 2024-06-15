const addButton = document.getElementById("add-button")
const itemForm = document.getElementById("item-form")
const itemInput = document.getElementById("item-input")
const itemList = document.getElementById("item-list")
const deleteIcon = document.getElementById("delete-icon")
const addItemButton = (e) =>{
    e.preventDefault()
    const newItemText = itemInput.value;

    if (newItemText !== '' ) {

        const newItem = document.createElement('li');
        newItem.className = 'test-class';
        newItem.textContent = newItemText;
        newItem.innerHTML= `<span id="delete-icon"><i class="fa-regular fa-trash-can"></i>  &nbsp; </span> ${newItemText}`;

        itemList.appendChild(newItem);
        itemInput.value = '';
    }
    itemInput.focus();
}

const addItem = (e) => {
    if(e.key === 'Enter'){
        addItemButton(e)
    }
}
const cutOrRemoveItem = (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('completed');
    }

if(e.target.classList.contains('fa-trash-can')){
e.target.parentElement.parentElement.remove()
 }
}


addButton.addEventListener("click", addItemButton);
itemInput.addEventListener('keypress',addItem);
itemList.addEventListener('click',cutOrRemoveItem);
