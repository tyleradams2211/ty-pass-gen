        // this code is left as prompts annoy me as a user and I want to change this back after I turn in
// var checkUpper = document.getElementById('upper');
// var checkNumbers = document.getElementById('numbers');
// var checkSymbols = document.getElementById('symbols');
// var checkLower = document.getElementById('lower')
var genBtn = document.getElementById('genBtn');
var pwView = document.getElementById('pwView');
var checkUpper = "";
var checkNumbers = "";
var checkSymbols = "";
var checkLower = "";


var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@#$%^&*"
var numbers = "0123456789"

var charTot = "";

genBtn.addEventListener('click', event =>{
        event.preventDefault();
        charTot = "";
        checkLower = prompt("Include lower case?(y/n)").charAt(0);
            if (checkLower == "y"){
                charTot = charTot += lower;
            }
        checkUpper = prompt("Include upper case?(y/n)").charAt(0);
            if (checkUpper == 'y'){
                charTot = charTot += upper;
            }
        checkNumbers = prompt("Include numbers?(y/n)").charAt(0);
            if (checkNumbers == 'y'){
                charTot = charTot += numbers;
            }
        checkSymbols = prompt("Include symbols?(y/n)").charAt(0);
            if (checkSymbols == 'y'){
                charTot = charTot += symbols;
            }
        // this code is left as prompts annoy me as a user and I want to change this back after I turn in

        // if (checkLower.checked){
        //     charTot = charTot += lower;
        // }
        // if (checkNumbers.checked){
        //     charTot = charTot += numbers;
        // }
        // if (checkSymbols.checked){
        //     charTot = charTot += symbols;
        // }
        // if (checkUpper.checked) {
        //     charTot = charTot += upper;
        // }

        var pwLength = document.getElementById('pwLength').value;
        var pw = genPW(pwLength, charTot);
        
        pwView.innerText = pw;
    });

var genPW = function(length, charTot) {
    pw = "";
    for (var i = 0; i < length; i++){
        pw += charTot.charAt(Math.floor(Math.random() * charTot.length));
    }
    return pw;
}

function copyPW(){
    var copyPW
}