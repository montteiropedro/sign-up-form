const error = document.querySelector('.error_message');
const confirm_password = document.querySelector('#confirm_password')
const password = document.querySelector('#password');

function validate_password() {
  show_error();

  if (password.value !== '' && confirm_password.value !== '') {
    if (password.value === confirm_password.value) {
      show_error();
    }
    else {
      confirm_password.classList.add('password_not_match')
      password.classList.add('password_not_match')
      error.style.display = 'inline-block';
    }
  }
}

function show_error() {
  error.style.display = 'none';
  confirm_password.classList.remove('password_not_match');
  password.classList.remove('password_not_match');
}

password.onkeyup = validate_password;
confirm_password.onkeyup = validate_password;
