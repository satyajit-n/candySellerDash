//Examine Document Object

//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// // console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
//console.log(document.images);

// GETELEMENTBYID

// console.log(document.getElementById('header-title'))

// let headertitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');

// console.log(headertitle)

// headertitle.textContent = 'hello';
// headertitle.innerText = 'goodbye';

// console.log(headertitle.textContent);
// console.log(headertitle.innerText);

// header.style.borderBottom = 'solid 3px #000';

//GET ELEMENT BY CLASS NAME

// let item = document.getElementsByClassName("list-group-item");
// console.log(item);
// item[2].style.backgroundColor = "green";

// for (let i = 0; i < item.length; i++) {
//   item[i].style.fontWeight = "bold";
// }

// GET ELEMENT BY TAG NAME
// let li = document.getElementsByTagName("li");
// console.log(li);
// li[4].style.backgroundColor = "gray";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.fontWeight = "bold";
// }

// let item = document.getElementsByClassName("list-solo-item");
// console.log(item);
// // item[0].style.backgroundColor = "green";
// item[0].style.fontWeight = "bold";

// QUERY SELECTOR

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc'

// let input = document.querySelector('input');
// input.value = 'Hello World'

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND'

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(2)');
// thirdItem.style.color = 'green';

// QUERY SELECTOR ALL

// var odd = document.querySelectorAll('li:nth-child(odd');
// var greenFontLi = document.querySelectorAll('li:nth-child(1)');
// greenFontLi.style.color = 'green';
// for(let i = 0; i < odd.length; i++ ){
//     odd[i].style.backgroundColor = 'green'
// }

// var greenLi = document.querySelectorAll('li:nth-child(1');
// for(let i = 0; i < odd.length; i++ ){
//     if(odd == 1){
//         odd[i].style.color = 'green'
//     }
// }

// TRAVERSING DOM

let itemList = document.querySelector('#items');

// parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

//parent element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

//child nodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[0]);


//first child
// console.log(itemList.firstChild);

//first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello World!!'

//last child & last element child
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello World!!'

//next sibling
// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling)

// previous sibling
// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling)

// Creating Element

//create a div

var newDiv = document.createElement('div');
// ad class
newDiv.className = 'Hello'
//add Id
newDiv.id = 'hello1'
//add title
newDiv.setAttribute('title','Hello Div')
//create text node
var newDivText = document.createTextNode('Hello world!')

//add text to div
newDiv.appendChild(newDivText)

//add newDIv to DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv)

container.insertBefore(newDiv,h1)