//Assign Arrays
var generateBtn = document.querySelector("#generate");
var lpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alpha1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var totalCharacters = [];


//Function Generate Password:
function generatePassword() {
   var userChoice = prompt("Please choose a number of value from 8 - 128.");

// If user values value outside of 8-128, then they will receive a prompt to use correct value
    if (userChoice < 8 || userChoice > 128) {
    var userChoice = prompt("Please choose a number betwen 8 - 128.");
    
// User prompted to continue, choosing numbers, letters, etc.
  } else {
    var confirmNumber = confirm("Would you like to use a number in your password?");
    var confirmLower = confirm("Would you like to use lowercase letters?");
    var confirmUpper = confirm("Would you like to use upper case letters?");
    var confirmSpecials = confirm("Would you like to use special characters? (!@#$%^&*)?");
  };

//If none of the 4 criteria are chosen, user recieves alert to choose at least one criteria.
  if (!confirmNumber && !confirmLower && !confirmUpper && !confirmSpecials) {
    generatePassword();

//Otherwise, the password will be generated according to selected criteria:

// 4  selected criteria:
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecials) {
    value = alpha.concat(alpha1, numbers, specialChars);

// 3 selected criteria
  } else if (confirmLower && confirmUpper && confirmNumber) {
    value = alpha.concat(alpha1, numbers);
  } else if (confirmLower && confirmUpper && confirmSpecials) {
    value = alpha.concat(alpha1, specialChars);
  } else if (confirmLower && confirmNumber && confirmSpecials) {
    value = alpha.concat(numbers, specialChars);
  } else if (confirmUpper && confirmNumber && confirmSpecials) {
    value = alpha1.concat(numbers, specialChars);

//2 selected criteria
  } else if (confirmLower && confirmUpper) {
    value = alpha.concat(alpha1);
  } else if (confirmLower && confirmNumber) {
    value = alpha.concat(numbers);
  } else if (confirmLower && confirmSpecials) {
    value = alpha.concat(specialChars);
  } else if (confirmUpper && confirmNumber) {
    value = alpha1.concat(numbers);
  } else if (confirmUpper && confirmSpecials) {
    value = alpha1.concat(specialChars);
  } else if (confirmNumber && confirmSpecials) {
    value = numbers.concat(specialChars);

  //1 selected criteria
  } else if (confirmLower) {
    value = alpha;
  } else if (confirmUpper) {
    value = alpha1;
  } else if (confirmNumber) {
    value = numbers;
  } else if (confirmSpecials) {
    value = specialChars
  }
};

//Add logic, uique math to generate random password based on user critiria

for (var i = 0; i < value; i++) {
  var choices = value[Math.floor(Math.random() * value.length)];
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  writePassword();
}

generatePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


