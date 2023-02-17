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

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;

  localStorage.setItem('name',nameInput);
  localStorage.setItem('email',emailInput);  


  // if(nameInput.value === formName && emailInput.value === formEmail) {
  //   console.log(nameInput.value);
  //   console.log(emailInput.value);
  // } else {
  //   msg.classList.add('error');
  //   msg.innerHTML = 'Please enter correct details';

  //   setTimeout(() => msg.remove(), 3000);
  // }

}