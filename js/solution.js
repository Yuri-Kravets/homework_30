"use strict";

(function() {
// const tester = document.getElementsByTagName('li');
//     for(let i = 0; i <= tester.length-1; i++) {
//         if(tester[i].nodeName === 'LI') {
//             tester[i].innerHTML = 'list_number' + (i + 1);
//         }
//     }
// console.log(tester);



let liCount = document.querySelectorAll('li');
let liData = document.querySelector('ul').innerText;
let li = document.querySelector('li');

let arr = Array.from(document.querySelector('ul').innerText);
console.log(arr);
// for(let node of liData) {
//     console.log(node);
// }

console.log(liCount);
console.log(liData);
console.log(li);




})();