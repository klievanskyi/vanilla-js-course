const textArea = document.querySelector('#text');
const characterCount = document.querySelector('#character-count');
const wordCount = document.querySelector('#word-count');

const getAreaValue = input => input.value;

const showCount = (value, output) => output.textContent = value;

const handleInput = () => {
  const value = getAreaValue(textArea);
  showCount(value.split(' ').length, wordCount);
  showCount(value.length, characterCount);
}

textArea.addEventListener('input', handleInput, false);