let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
var filter = document.getElementById('filter');

//form submit event
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", removeItem);

//filter event
filter.addEventListener('keyup',filterItems);

//add item function
function addItem(e) {
  e.preventDefault();

  // getting submitted value
  let newItem = document.getElementById("item").value;

  //create new list element
  let li = document.createElement("li");
  //adding class name to new li
  li.className = "list-group-item";
  //add text node with input value
  li.append(document.createTextNode(newItem));

  //create delete button element
  let deleteButton = document.createElement("button");

  //add classes to delete button
  deleteButton.className = "btn btn-danger btn-sm float-right delete";

  //append text node
  deleteButton.appendChild(document.createTextNode("X"));

  //append button to li
  li.appendChild(deleteButton);
  //append li to list
  itemList.appendChild(li);
}

//remove Item function
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are u sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


//filter Function
function filterItems(e){
    //convert text to lower text
    var text = e.target.value.toLowerCase();

    //get all li elements
    var items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })

}