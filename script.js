// Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmBtn =  document.querySelector("#confirm");
var confirmArea = document.querySelector(".confirmArea");
var generateArea = document.querySelector(".generateArea");
var promptArea = document.querySelector(".prompt-area");
var passwordLength = document.querySelector(".password-length");

// crriteria
var lowerCase = document.querySelector("#lowercase");
var upperCase = document.querySelector("#uppercase");
var numeric = document.querySelector("#numeric");
var specialCharacters = document.querySelector("#special-characters");

function showPromptArea() { 
  promptArea.style.display = "block";
  generateArea.style.display = "none";
  confirmArea.style.display = "block ";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength.value);
  var passwordText = document.querySelector("#password");

  promptArea.style.display = "none";
  generateArea.style.display = "block";
  confirmArea.style.display = "none";
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", showPromptArea);
confirmBtn.addEventListener("click", writePassword);


function generatePassword(passwordLength) {

  var numbers =  "0123456789";
  var alphabetUppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
  var alphabetLowercase = alphabetUppercase.toLowerCase();
  var specialCharactersAll = "!@#$%^&*()"

  // the password we are generating
  var password = "";
  var passwordSelection = "";

  if (numeric.checked && !upperCase.checked && !lowerCase.checked && !specialCharacters.checked) {
    passwordSelection = numbers;
  }

  if (numeric.checked && upperCase.checked && !lowerCase.checked && !specialCharacters.checked) {
     passwordSelection = numbers + alphabetUppercase;
  }

  if (numeric.checked && upperCase.checked && lowerCase.checked && !specialCharacters.checked) {
     passwordSelection = numbers + alphabetUppercase + alphabetLowercase;
  }
 
  if (numeric.checked && upperCase.checked && lowerCase.checked && specialCharacters.checked) {
     passwordSelection = numbers + alphabetUppercase + alphabetLowercase + specialCharactersAll;
  }
  
  if (!numeric.checked && upperCase.checked && !lowerCase.checked && !specialCharacters.checked) {
    passwordSelection = alphabetUppercase
  }

  if (!numeric.checked && upperCase.checked && lowerCase.checked && !specialCharacters.checked) {
     passwordSelection = alphabetUppercase + alphabetLowercase;
  }
  
  if (!numeric.checked && upperCase.checked && lowerCase.checked && specialCharacters.checked) {
     passwordSelection = alphabetUppercase + alphabetLowercase + specialCharactersAll;
  }

  if (!numeric.checked && !upperCase.checked && lowerCase.checked && !specialCharacters.checked) {
    passwordSelection = alphabetLowercase;
  }

  if (!numeric.checked && !upperCase.checked && lowerCase.checked && specialCharacters.checked) {
    passwordSelection = alphabetLowercase + specialCharactersAll;
  }

  if (numeric.checked && !upperCase.checked && lowerCase.checked && specialCharacters.checked) {
    passwordSelection = numbers + alphabetLowercase + specialCharactersAll;
  } 

  if (!numeric.checked && !upperCase.checked && !lowerCase.checked && !specialCharacters.checked) {
    passwordSelection = specialCharactersAll;
  }
  
  if (numeric.checked && !upperCase.checked && !lowerCase.checked && specialCharacters.checked) {
    passwordSelection = numbers + specialCharactersAll;
  }

  if (numeric.checked && upperCase.checked && !lowerCase.checked && specialCharacters.checked) {
    passwordSelection = numbers + alphabetUppercase + specialCharactersAll;
 }


  if ( passwordLength >= 8 && passwordLength <= 128 ){
    for(var i = 0; i < passwordLength;i++) {
      var r = Math.floor(Math.random() * passwordSelection.length);
      password += passwordSelection.charAt(r)
      }
    }
  else {window.alert('Password lenght must be between 8 and 128 characters.')}
  
    return password;
  }