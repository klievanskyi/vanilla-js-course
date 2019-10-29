const btn = document.querySelector('button');
const quote = document.querySelector('blockquote');
const endPoint = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

const getQuote = () => {
  fetch(endPoint)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        return Promise.reject(resp);
      }
    })
    .then(data => {
      quote.textContent = data;
    })
    .catch(err => {
      console.warn('Something went wrong.', err);
      quote.textContent = 'Something went wrong.';
    });
};

btn.addEventListener('click', getQuote, false);