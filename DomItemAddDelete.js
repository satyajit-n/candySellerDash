let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", removeItem);

//filter event
filter.addEventListener("keyup", filterItems);

//add item function
function addItem(e) {
  e.preventDefault();

  // getting submitted value
  let newItem = document.getElementById("item").value;
  let newItemDescription = document.getElementById("description").value;

  //create new list element
  let li = document.createElement("li");

  //adding class name to new li
  li.className = "list-group-item";

  //add text node with input value
  li.append(document.createTextNode(newItem));
  li.append(document.createTextNode(newItemDescription));

  //create delete button element
  let deleteButton = document.createElement("button");
  let editButton = document.createElement("button");

  //add classes to delete button
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  editButton.className = "glyphicon glyphicon-edit btn btn-sm btn-outline-info float-right";

  //append text node
  deleteButton.appendChild(document.createTextNode("X"));
  editButton.appendChild(document.createTextNode("Edit"));

  //append button to li
  li.appendChild(deleteButton);
  li.appendChild(editButton);
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
function filterItems(e) {
  //convert text to lower text
  var text = e.target.value.toLowerCase();

  //get all li elements
  var items = itemList.getElementsByTagName("li");

  //convert to array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    var description = item.childNodes[1].textContent;
    console.log(itemName)
    if (itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
