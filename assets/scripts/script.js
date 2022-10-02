var passLength = document.getElementById('lengthPW');
var charLower = document.getElementById('lowerCase');

// charLower.addEventListener('change', () => {
//     if(charLower.checked){
//         console.log('charLower checked');
//     }else{
//         console.log('charLower unchecked');
//     }
// });


console.log(passLength);
console.log(charLower);

document.getElementById('genBtn').addEventListener('click', function(){
    var 

})
























// const charSymbols = document.getElementById('symbols');
// const charNumbers = document.getElementById('numbers');
// const charUpperCase = document.getElementById('upperCase');
// const charLowerCase = document.getElementById('lowerCase');
// const viewPW = document.getElementById('viewPW');

// const copyPW = document.getElementById('copyPW');

// var lengthPW = document.getElementById('slider-range');






// // character collection for each char selection
// const symbols = "!@#$%^&*_-+=";
// const numbers = "0123456789";
// const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lower = "abcdefghijklm(nopqrstuvwxyz";

// console.log(symbols);
// console.log(numbers);
// console.log(upper);
// console.log(lower);
// console.log(charLowerCase);
// console.log();
// console.log('lower');



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