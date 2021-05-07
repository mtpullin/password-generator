// Assignment code here
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var symbolArray = ["!", "@", "#", "%", "^", "&", "*", "?", "-", "=", "+", "$", "_"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
var passlength = prompt("Choose password length between 8 and 128 characters.");
while (isNaN(passlength) || passlength < 8 || passlength > 128) passlength = prompt("length must be between 8 and 128 chracters.");

var number = confirm("would you like to include numbers?")
var upper = confirm("would you like to include uppercase letters?")
var lower = confirm("would you like to include lowercase letters?")
var symbol = confirm("would you like to include symbols?")

//results
var result = [];
var passwordResult = [];
 
if (number) {
 result = result.concat(numberArray);
 }
 if (upper) {
   result = result.concat(upperArray);
 }
 if (lower) {
   result = result.concat(lowerArray);
 }
 if (symbol) {
   result = result.concat(symbolArray);
 }
 console.log(result)

for (var i = 0; i < passlength; i++) {
 passwordResult.push (result[Math.floor(Math.random()* result.length)]);

}
return passwordResult.join("");
  
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
