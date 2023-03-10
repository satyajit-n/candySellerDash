const btn = document.querySelector(".btn");
const myForm = document.querySelector("#my-form");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const delButton = document.querySelector(".btn:hover");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pnumber = document.getElementById("pnumber").value;

  //object
  let myObj = {
    name: name,
    email: email,
    pnumber: pnumber,
  };

  const parentEle = document.getElementById("lisOfItems");
  const childEle = document.createElement("li");
  const childButton = document.createElement("input");
  const editButton = document.createElement("input");
  childButton.type = "button";
  editButton.type = "button";
  childButton.value = "Delete";
  editButton.value = "edit";

  //API CALL TO POST DATA
  axios
    .post(
      "https://crudcrud.com/api/3b27526a199a4965966293895e397712/appointmentData",
      myObj
    )
    .then((res) => {
      showUserOnScreen(res);
    })
    .catch((err) => console.log(err));

  //serializing object
  //let myObjSerialized = JSON.stringify(myObj);

  //serializing the object so that it can be stored in localStorage
  //localStorage.setItem(email, myObjSerialized);

  // childButton.appendChild(document.createTextNode('Delete'))

  //Content load on start
  childButton.onclick = () => {
    localStorage.removeItem(myObj.email);
    parentEle.removeChild(childEle);
  };

  editButton.onclick = () => {
    document.getElementById("name").value = myObj.name;
    document.getElementById("email").value = myObj.email;
    document.getElementById("pnumber").value = myObj.pnumber;
    localStorage.removeItem(myObj.email);
    parentEle.removeChild(childEle);
  };

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
//Show user on screen function
function showUserOnScreen(user) {
  const parentEle = document.getElementById("lisOfItems");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pnumber = document.getElementById("pnumber").value;
  const childEle = document.createElement("li");
  const childButton = document.createElement("input");
  const editButton = document.createElement("input");
  childButton.type = "button";
  editButton.type = "button";
  childButton.value = "Delete";
  editButton.value = "edit";

  childEle.textContent =
    user.name + " - " + user.email + " - " + user.pnumber;
  parentEle.appendChild(childEle);
  childEle.appendChild(childButton);
  childEle.appendChild(editButton);
}

window.addEventListener("DOMContentLoaded", (e) => {
  //API CALL TO GET DATA
  e.preventDefault();
  axios
    .get(
      "https://crudcrud.com/api/3b27526a199a4965966293895e397712/appointmentData"
    )
    .then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        showUserOnScreen(res.data[i]);
      }
      console.log("hello");
    })
    .catch((res) => {
      console.log(res);
    });
});
// function removeList(e){
//   if(e.target.classList.contains('btn:hover')){
//     var li = e.target.parentElement;
//     parentEle.removeChild(li);
//   }
// }
