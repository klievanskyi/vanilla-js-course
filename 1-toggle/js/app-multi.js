const inputPasswordArray = [...document.querySelectorAll('[type="password"]')];
const checkBox = document.querySelector('#show-passwords');

const handleClick = () => {
  inputPasswordArray.forEach(element => {
    element.type = checkBox.checked ? 'text' : 'password';
  });
}

checkBox.addEventListener('change', handleClick, false);