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

let item = document.getElementsByClassName('list-group-item')
console.log(item)
item[2].style.backgroundColor = 'green'

for(let i = 0; i<item.length;i++){
    item[i].style.fontWeight = 'bold'
}


