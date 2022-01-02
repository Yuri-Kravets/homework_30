"use strict";

(function() {

let liCount = document.querySelectorAll('li');
let arr = Array.from(document.querySelectorAll('ul>li'),li => console.log(li.textContent))

console.log(arr);

for (const li of document.querySelectorAll('ul>li')) {
    console.log(Array.from(li.textContent));
}




})();