// Created variables
var passwordLength;
var includeNumbers;
var includeUpper;
var includeLower;
var includeSpecial;
var passwordBtnEl = $("#generate");
var passwordDisplayEl = $("#password");
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
// Function makes a random password with chars and numbers
// to do: make 4 "getPassword", Alerts, How many char
function getPasswordNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 49);
}
function getPasswordUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 66);
}
function getPasswordLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 98);
}
function getPasswordSpecial() {
  var randomIndex = Math.floor(Math.random() * specialChars.length);
  return specialChars[randomIndex];
}
function getPasswordCharacter() {
  var char = "";
  var chars = [];
  if (includeNumbers) {
    var num = getPasswordNumber();
    console.log("num " + num);
    chars.push(num);
  }
  if (includeLower) {
    chars.push(getPasswordLower());
  }
  if (includeUpper) {
    chars.push(getPasswordUpper());
  }
  if (includeSpecial) {
    chars.push(getPasswordSpecial());
  }
  console.log("options: " + chars);
  var index = Math.floor(Math.random() * chars.length)
  char = chars[index];
  console.log("index " + index);
  console.log("picked: " + char);
  return char;
}
// Returns the string that was generated
function passwordGenerator() {
  passwordLength = prompt("How long would you like your password to be?", "15");
  passwordLength = parseInt(passwordLength, 10);
  if (passwordLength <= 8) {
    alert("sorry enter a number greater then 8");
    return;
  } 
  if (passwordLength >= 128) {
    alert("sorry enter a number less then 128");
    return;
  } 
  includeNumbers = confirm("do you want number in your password?");
  includeUpper = confirm("do you want Uppercase letters?");
  includeLower = confirm("do you want Lowercase letters?");
  includeSpecial = confirm("do you want Special Letters?");
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

// Makes on click diplay password
passwordBtnEl.on("click", function () {
  var newPassword = passwordGenerator();
  passwordDisplayEl.text(newPassword);
});

