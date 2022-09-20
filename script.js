const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// SHOW INPUT ERROR MESSAGE
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// SHOW INPUT SUCCESS MESSAGE
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// CHECK EMAIL IS VALID

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "email is not valid");
  }
}
/*
// EVENT LISTENERS
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    ShowSuccess(username);
  }

  if (password.value === "") {
    showError(password, "password is required");
  } else {
    ShowSuccess(password);
  }
  if (email.value === "") {
    showError(email, "email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "email is not valid");
  } else {
    ShowSuccess(email);
  }
  if (password2.value === "") {
    showError(password2, "password 2 is required");
  } else {
    ShowSuccess(password2);
  }
});
*/

//CHECK REQUIRED FIELDS

function checkRequired(inputArr) {
  inputArr.forEach(function (input, i) {
    if (input.value.trim() === "") {
      console.log(input.value);
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// CHECK INPUT LENGHT

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less ${max} characters`);
  } else {
    showSuccess(input);
  }
}

//CHECK PASSWORD MATCH

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "passwords do not match");
  }
}

//GET FIELDNAME / capitalize first letter of 'input'
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// EVENT LISTENERS

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
