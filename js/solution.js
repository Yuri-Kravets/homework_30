"use strict";

(function() {
// const tester = document.getElementsByTagName('li');
//     for(let i = 0; i <= tester.length-1; i++) {
//         if(tester[i].nodeName === 'LI') {
//             tester[i].innerHTML = 'list_number' + (i + 1);
//         }
//     }
// console.log(tester);


let bodyEl = document.body
let liCount = document.querySelectorAll('li');
let liData = document.querySelector('ul').innerText;

let arr = Array.from(document.querySelectorAll('ul>li'));

//console.log(li.textContent);



for (const li of document.querySelectorAll('ul>li')) {
    console.log(li.textContent);
}



// for(let node of liData) {
//     //console.log(node);
// }


console.log(arr);
// console.log(liCount);
//console.log(liData);





})();