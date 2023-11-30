// Assignment code here
var  characterLength = 8;
var allChars = [];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","~","`","{","[","}","]","|",">","?"];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



function getPrompt(){
  allChars = [];

  characterLength = parseInt(prompt("How many characters would you like your password to have? (Between 8 and 128)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please enter a valid character, as a number, between 8 and 128.");
    return false;
  }
  var confirmLowerCase =  confirm("Would you like to use lower case letters in your password?")
  if (confirmLowerCase){
    allChars = allChars.concat(lowerCase)
  }

  var confirmUpperCase = confirm("Would you like to use uppercase letters in your password?")
  if (confirmUpperCase){
    allChars = allChars.concat(upperCase);
  }

  var confirmNumber = confirm("Would you like to include numbers in your password?")
  if (confirmNumber){
  allChars = allChars.concat(number);
  }

  var confirmSpecialChar = confirm("Would you like to include special characters in your password?")
  if (confirmSpecialChar){
    allChars = allChars.concat(specialChar);
    }
  
  if(!confirmLowerCase && !confirmUpperCase && !confirmNumber && !confirmSpecialChar){
    alert("Please choose at least one criteria");
    return false;
  }
    return true;
  }

  function generatePassword(){
    var password = "";
    for(var index = 0; index < characterLength; index++) {
      var randomIndex = Math.floor(Math.random() * allChars.length)
      password  = password + allChars[randomIndex]
    }
    return password;
  }
// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompt(); 
    if (!correctPrompts){
      return false;
      } else if (correctPrompts){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



