const btn = document.querySelector('button');
const text = document.querySelector('blockquote');

const getQuote = () => {
  fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(resp => {
    return resp.json();
  }).then(data => {
    text.textContent = data;
  });
}

btn.addEventListener('click', getQuote, false);