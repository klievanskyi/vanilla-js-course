if (document.location.pathname === '/random-ron.html') {
  const btn = document.querySelector('button');
  const quote = document.querySelector('blockquote');
  const endPoint = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
  const existQuotesArray = [];

  const getQuote = () => {
    fetch(endPoint)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        return Promise.reject(resp);
      })
      .then(data => {
        console.log(existQuotesArray.indexOf(data));
        if (existQuotesArray.indexOf(data) == -1) {
          existQuotesArray.push(data);
          quote.textContent = data;
          console.log(existQuotesArray);
        } else {
          getQuote();
        }
      })
      .catch(err => {
        console.warn('Something went wrong.', err);
        quote.textContent = 'Something went wrong.';
      });
  };

  btn.addEventListener('click', getQuote, false);
}
