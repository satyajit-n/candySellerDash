const btn = document.querySelector(".btn");
// localStorage.setItem('name','satyajeet');
// localStorage.setItem('email','namawar.satyajeet@gmail.com');

// const formName = localStorage.getItem('name')
// const formEmail = localStorage.getItem('email')

// btn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log('click');
// });

// btn.addEventListener('mouseover', (e) =>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'grey';
//     document.querySelector('body').classList.add('btn:hover');
// });

// btn.addEventListener('mouseout', (e) =>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'white';
//     console.log('click');
// });

const myForm = document.querySelector("#my-form");
// const nameInput = document.getElementById("name").value;
// const emailInput = document.getElementById("email").value;
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const delButton = document.querySelector(".btn:hover");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const expenseAmount = document.getElementById("amount").value;
  const expenseDesc = document.getElementById("description").value;
  const expenseCate = document.getElementById("category").value;

  //object
  let myObj = {
    amount: expenseAmount,
    desc: expenseDesc,
    cate: expenseCate,
  };

  //serializing object
  let myObjSerialized = JSON.stringify(myObj);

  //serializing the object so that it can be stored in localStorage
  localStorage.setItem(expenseAmount, myObjSerialized);

  //show user on screen
  const parentEle = document.getElementById("lisOfItems");
  const childEle = document.createElement("li");
  const childButton = document.createElement("input");
  const editButton = document.createElement("input");
  childButton.type = "button";
  editButton.type = "button";
  childButton.value = "Delete";
  editButton.value = "edit";

  childEle.textContent = myObj.amount + " - " + myObj.desc + " - " + myObj.cate;
  // childButton.appendChild(document.createTextNode('Delete'))
  childButton.onclick = () => {
    localStorage.removeItem(myObj.email);
    parentEle.removeChild(childEle);
  };

  editButton.onclick = () => {
    document.getElementById("amount").value = myObj.amount;
    document.getElementById("description").value = myObj.desc;
    document.getElementById("category").value = myObj.cate;
    localStorage.removeItem(myObj.email);
    parentEle.removeChild(childEle);
  };
  parentEle.appendChild(childEle);
  childEle.appendChild(childButton);
  childEle.appendChild(editButton);

  //deserializing the object to make it usable
  //let myObjDeserialized = JSON.parse(localStorage.getItem('myObject'));

  //console.log(myObjDeserialized)

  // if(nameInput.value === formName && emailInput.value === formEmail) {
  //   console.log(nameInput.value);
  //   console.log(emailInput.value);
  // } else {
  //   msg.classList.add('error');
  //   msg.innerHTML = 'Please enter correct details';

  //   setTimeout(() => msg.remove(), 3000);
  // }
}

// function removeList(e){
//   if(e.target.classList.contains('btn:hover')){
//     var li = e.target.parentElement;
//     parentEle.removeChild(li);
//   }
// }
