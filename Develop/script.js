// Assignment code here
  
        /* Function to generate combination of password */
        function generateP() {
            var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
              
            for (i = 1; i <= 12; i++) {
                var char = Math.floor(Math.random()
                            * str.length + 8);
                  
                pass += str.charAt(char)
            }
              
            return pass;
        }
  
        function gfg_Run() {
            el_down.innerHTML = generateP();
        }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generateP();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
