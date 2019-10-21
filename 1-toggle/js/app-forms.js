// Element.matches() polyfill (simple version)
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

// Reset checkboxes in FF
const checkBoxes = [...document.querySelectorAll('[type="checkbox"]')];
checkBoxes.forEach(item => {
  item.checked = false;
});

const handleClick = (event) => {
  if(event.target.matches('[type="checkbox"]')) {
    const checkBox = event.target;
    const parentForm = checkBox.closest('form');
    const inputPasswordArray = [...parentForm.querySelectorAll('[data-type="password"]')];

    inputPasswordArray.forEach(element => {
      element.type = checkBox.checked ? 'text' : 'password';
    });
  };
};

document.addEventListener('change', handleClick, false);