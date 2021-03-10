// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create Password
function generatePassword() {

  // Initialize Variables --> Best to use const/ var/ let??
  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = lowercase.map(lowercase => lowercase.toUpperCase());
  var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var special = ['~', '!', '#', ']', '%', '}', '&', '*', '(', ')', '+', '[', '/', '{', '.', ',', ';', ':', '-', '_', '`', '^', '?', '@', '$' ];
  var charTypeArray = [lowercase, uppercase, numeric, special];
  var selectedChar = [];
  var count = 0;
  var loop = 0;
  var passwordString = '';

  // Begin Prompts
  var lengthInput = prompt('Password length? (password must be 8 - 128 characters long)');


  while((lengthInput >=8 && lengthInput <=128)==false) {
    lengthInput = prompt('Please enter valid length; Password must be 8 - 128 characters long');
    }
    
  while (loop < 4) {
    for (var charType of charTypeArray) {
      loop += 1;
      var useCharType = confirm('Click OK to use [' + charType + '] characters.');
      if (useCharType==false) {
        count +=1;
        if (count==4) {
          alert('At least one character type required');
          loop = 0;
        }
      } 
      else {
        selectedChar.push(charType);
      }
    }
  }  
  

  for(let i=0; i<lengthInput; i++) {
    let getType = Math.floor(Math.random() * selectedChar.length);
    let getElement = Math.floor(Math.random() * lengthInput);
    let randomCharType = selectedChar[getType];
    let randomChar = randomCharType[getElement];
    passwordString += randomChar;
  }
  return passwordString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  return passwordText.value;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
