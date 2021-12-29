"use strict";

(function() {

let liCount = document.querySelectorAll('li');
let arr = Array.from(document.querySelector('ul').innerText);


for (const li of document.querySelectorAll('ul>li')) {
    console.log(li.textContent);
}


console.log(arr);
console.log(liCount);






})();