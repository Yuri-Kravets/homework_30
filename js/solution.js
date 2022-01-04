"use strict";

(function() {

let liCount = document.querySelectorAll('ul li');

console.log(liCount.length);

const arr = Array.from(liCount,(li) => li.textContent);
console.log(arr);

console.log(liCount);

})();