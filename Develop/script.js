// Assignment Code
// Prompt 1: Choose characger length between 8-128 characters
var generateBtn = document.querySelector("#generate");

//Prompt 2: Would you likke your password to contain UPPERCASE, LOWERCASe, Numbers, special characters?

//Logic: At least 1 needs to be chosen and validated.
//Password is generated
//Password is displayed as prompt or in PW generator box.


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
