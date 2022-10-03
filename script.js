var genBtn = document.getElementById('genBtn');
var copyBtn = document.getElementById('copyBtn');
var pwView = document.getElementById('pwView');
var checkUpper = "";
var checkNumbers = "";
var checkSymbols = "";
var checkLower = "";

// character pools that will be selected for use and added to charTot 
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@#$%^&*"
var numbers = "0123456789"
// charTot will be the total characters selected for use in generation
var charTot = "";
// Prompts and listens for responses to determine which characters are put into charTots pool.
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
                // numbers and symbols are added twice to increase priority on gen.
                charTot = charTot += numbers;
                charTot = charTot += numbers;
            }
        checkSymbols = prompt("Include symbols?(y/n)").charAt(0);
            if (checkSymbols == 'y'){
                // numbers and symbols are added twice to increase priority on gen.
                charTot = charTot += symbols;
                charTot = charTot += symbols;
            }

        var pwLength = document.getElementById('pwLength').value;
        var pw = genPW(pwLength, charTot);
        
        pwView.innerText = pw;
    });
// Generates the password by generating a random number and multiplying by the amount of characters selected and pulling the products location from charTot
var genPW = function(length, charTot) {
    pw = "";
    for (var i = 0; i < length; i++){
        pw += charTot.charAt(Math.floor(Math.random() * charTot.length));
    }
    return pw;
}
// Copies the pw value to the clipboard
copyBtn.addEventListener("click", event =>{
    var copyPW = document.getElementById('pwView');
       //copies the text
       navigator.clipboard.writeText(pw);
       // alerts that the pw was copied
       alert(pw + " was copied.");
});

// this code is left as prompts annoy me as a user and I want to change this back after I turn in
// var checkUpper = document.getElementById('upper');
// var checkNumbers = document.getElementById('numbers');
// var checkSymbols = document.getElementById('symbols');
// var checkLower = document.getElementById('lower')

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
