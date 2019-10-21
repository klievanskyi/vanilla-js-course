const inputPassword = document.querySelector('#password');
const checkBox = document.querySelector('#show-password');

const handleClick = () => {
  inputPassword.type = checkBox.checked ? 'text' : 'password';
}

checkBox.addEventListener('change', handleClick, false);