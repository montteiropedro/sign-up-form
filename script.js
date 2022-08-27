const error = document.querySelector('.error_message');
const confirm_password = document.querySelector('#confirm_password')
const password = document.querySelector('#password');

function validate_password() {
  error.style.display = "none";

  if (password.value !== '' && confirm_password.value !== '') {
    if (password.value === confirm_password.value) {
      error.style.display = "none";
    }
    else {
      error.style.display = "block";
    }
  }
}

password.onchange = validate_password;
confirm_password.onkeyup = validate_password;
