//Assign Arrays
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alpha1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];
var totalCharacters = [];


function generatePassword() {
    var userChoice = prompt("Please choose a number of characters from 8 - 128.");

// If user chooses a number outside of 8-128, then they will receive a prompt to use a correct value
      if (userChoice < 8 || userChoice > 128) {
    var totalCharacters = prompt("Please choose a number of characters betwen 8 - 128.");
    } else {
    confirm(`Your password will contain ${userChoice} characters`);
    }
// User prompted to continue, choosing numbers, letters, etc.
    var confirmNumber = confirm("Would you like to use numbers in your password?");
      if (confirmNumber) {
      confirm("Your password will contain numbers");
    } else {
      confirm("Your password will not contain any numbers");
    }
    var confirmLower = confirm("Would you like to use lowercase letters?");
      if (confirmLower) {
      confirm("Your password will contain lower case letters");
    } else {
      confirm("Your password will not contain a lower case letter");
    }
    var confirmUpper = confirm("Would you like to use upper case letters?");
      if (confirmUpper) {
      confirm("Your password will contain upper case letters");
    } else {
      confirm("Your password will not contain upper case letters");
     }
    var confirmSpecials = confirm("Would you like to use special characters? !@#$%^&*?");
      if (confirmSpecials) {
      confirm("Your password will contain special characters");
    } else {
      confirm("Your password will not contain any special characters");
    }
// If none of the 4 criteria are chosen, user recieves confirm to choose at least one criteria.
      if (confirmLower === false && confirmUpper === false && confirmNumber == false && confirmSpecials === false) {
      confirm("Please select at least one character type.");
      generatePassword();
    }

// Otherwise, the password will be generated according to selected criteria:

// 4  selected criteria:
    if (confirmLower && confirmUpper && confirmNumber && confirmSpecials) {
    totalCharacters = alpha.concat(alpha1, numbers, specialChars);

// 3 selected criteria
    } else if (confirmLower && confirmUpper && confirmNumber) {
      totalCharacters = alpha.concat(alpha1, numbers);
    } else if (confirmLower && confirmUpper && confirmSpecials) {
      totalCharacters = alpha.concat(alpha1, specialChars);
    } else if (confirmLower && confirmNumber && confirmSpecials) {
      totalCharacters = alpha.concat(numbers, specialChars);
    } else if (confirmUpper && confirmNumber && confirmSpecials) {
      totalCharacters = alpha1.concat(numbers, specialChars);

// 2 selected criteria
    } else if (confirmLower && confirmUpper) {
      totalCharacters = alpha.concat(alpha1);
    } else if (confirmLower && confirmNumber) {
      totalCharacters = alpha.concat(numbers);
    } else if (confirmLower && confirmSpecials) {
      totalCharacters = alpha.concat(specialChars);
    } else if (confirmUpper && confirmNumber) {
      totalCharacters = alpha1.concat(numbers);
    } else if (confirmUpper && confirmSpecials) {
      totalCharacters = alpha1.concat(specialChars);
    } else if (confirmNumber && confirmSpecials) {
      totalCharacters = numbers.concat(specialChars);

// 1 selected criteria
    } else if (confirmLower) {
      totalCharacters = alpha;
    } else if (confirmUpper) {
      totalCharacters = alpha1;
    } else if (confirmNumber) {
      totalCharacters = numbers;
    } else if (confirmSpecials) {
      totalCharacters = specialChars
    }

// Add logic to generate random password based on user criteria

var finalPassword = "";

for (let i = 0; i < userChoice; i++) {
    var random = Math.floor(Math.random() * totalCharacters.length);
    finalPassword = finalPassword + totalCharacters[random];
}
return finalPassword;
};
// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = "";
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
