const textarea = document.querySelector('#text');
const count = document.querySelector('#character-count');

const getAreaLength = input => input.value.length;

const showCount = (value, output) => output.textContent = value;

const handleInput = () => {
  const lengthValue = getAreaLength(textarea);
  showCount(lengthValue, count);
}

textarea.addEventListener('input', handleInput, false);