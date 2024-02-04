let signUp = document.getElementById("signUpBtn");
let signIn = document.getElementById("signInBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signIn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signUp.classList.add("disable");
  signIn.classList.remove("disable");
};

signUp.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signUp.classList.remove("disable");
  signIn.classList.add("disable");
};
