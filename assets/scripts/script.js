var charSymbols = document.getElementById('symbols');
var charNumbers = document.getElementById('numbers');
var charUpperCase = document.getElementById('upperCase');
var charLowerCase = document.getElementById('lowerCase');
var viewPW = document.getElementById('viewPW');

var copyPW = document.getElementById('copyPW');

var lengthPW = Element.getElementById('slider-range');

// character collection for each char selection
const symbols = "!@#$%^&*_-+=";
const numbers = "0123456789";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";

console.log('symbols');
console.log('numbers');
console.log('upper');
console.log('lower');


// document.getElementById('generateBut').addEventListener("click", event => {
//     event.preventDefault();  
//     var charSelected = "";
//         charLowerCase.checked ? (charSelected += lower) : "";
//         charUpperCase.checked ? (charSelected += upper) : "";
//         charNumbers.checked ? (charSelected += numbers) : "";
//         charSymbols.checked ? (charSelected += symbols) : "";
//         charSelected.split('');
//     var pw = generatePW(lengthPW, charSelected);
// });

// var generatePW = (length, charSelected) => {
//     var pw = "";
//     for (var i = 0; i < length; i++) {
//         pw += charSelected.charAt(Math.floor(Math.random() * charSelected.length));
//     }
//         return pw;
// };