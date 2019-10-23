const textArea = document.querySelector('#text');
const charOutput = document.querySelector('#character-count');
const wordOutput = document.querySelector('#word-count');

const getCharCount = input => input.value.length;

const getWordCount = input => {
  if (input.value.length === 0) return 0;
  else {
    return input.value.split(" ").filter(val => val !=="").length;
  }
};

const showCount = (value, output) => output.textContent = value;

const handleInput = () => {
  const charCount = getCharCount(textArea);
  const wordCount = getWordCount(textArea);
  showCount(wordCount, wordOutput);
  showCount(charCount, charOutput);
}

textArea.addEventListener('input', handleInput, false);