const btn = document.querySelector('.btn');
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

const myForm = document.querySelector('#my-form');
// const nameInput = document.getElementById("name").value;
// const emailInput = document.getElementById("email").value;
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const delButton = document.querySelector('.btn:hover');

myForm.addEventListener('submit', onSubmit);



function onSubmit(e) {
  e.preventDefault()
  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const numInput = document.getElementById("number").value;

  //object
  let myObj = {
    name : nameInput,
    email : emailInput,
    number : numInput
  };

  //serializing object
  let myObjSerialized = JSON.stringify(myObj);

  //serializing the object so that it can be stored in localStorage
  localStorage.setItem(emailInput,myObjSerialized);

  //show user on screen
  const parentEle = document.getElementById('lisOfItems');
  const childEle = document.createElement('li');
  const childButton = document.createElement('input');
  childButton.type = 'button';
  childButton.value = 'Delete';

  childEle.textContent = myObj.name + ' - ' + myObj.email + ' - ' + myObj.number;
  // childButton.appendChild(document.createTextNode('Delete'))
  childButton.onclick = () =>{
    localStorage.removeItem(myObj.email)
    parentEle.removeChild(childEle)
  }
  parentEle.appendChild(childEle)
  childEle.appendChild(childButton);

  

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