var checkUpper = document.getElementById('upper');
var checkNumbers = document.getElementById('numbers');
var checkSymbols = document.getElementById('symbols');
var genBtn = document.getElementById('genBtn');
var pwView = document.getElementById('pwView');

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@#$%^&*"
var numbers = "0123456789"

var charTot = "";

genBtn.addEventListener('click', event =>{
        event.preventDefault();
        charTot = lower;
        if (checkNumbers.checked){
            charTot = charTot += numbers;
        }
        if (checkSymbols.checked){
            charTot = charTot += symbols;
        }
        if (checkUpper) {
            charTot = charTot += upper;
        }

        var pwLength = document.getElementById('pwLength').value;
         
        var pw = genPW(pwLength, charTot);
        console.log(pw);
        
    });

var genPW = function(length, charTot) {
    pw = "";
    for (var i = 0; i < length; i++){
        pw += charTot.charAt(Math.floor(Math.random() * charTot.length));
    }
    return pw;
}
// console.log(lower);

// checkUpper.addEventListener('change', () => {
//     if (checkUpper.checked){
//         charTot = lower += upper;
//         console.log(lower);

//     } else {
//         charTot = lower;
//         console.log(lower);

//     }
// });
// console.log(lower);

// tstBox.addEventListener('change', () => {
// if (tstBox.checked) {
//     console.log('test is checked');
// }else {
//     console.log('test is unchecked');
// }

// });


