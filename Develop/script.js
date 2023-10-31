// Created variables and matched them with an ID
var passwordBtnEl = $('#generate');
var passwordDisplayEl = $('#password');
 
// Function makes a random password with chars and numbers 
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}
// Returns the string that was generated
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

// Makes on click diplay password
passwordBtnEl.on('click', function () {
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});
