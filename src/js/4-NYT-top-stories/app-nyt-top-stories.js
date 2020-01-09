if (document.location.pathname === '/nyt-top-stories.html') {
  const endPoint =
    'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EdS4J6tNjJTENkNBtxKoWCMTHGdZJNdQ';
  const resultsArray = [];
  const list = document.querySelector('#list');

  const getStories = () => {
    fetch(endPoint)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        return Promise.reject(resp);
      })
      .then(data => {
        console.log(data.results);
        data.results.map(elem => {
          resultsArray.push(elem);
        });
        list.innerHTML = resultsArray
          .map(elem => {
            return `
            <article class="flex flex-col max-w-md mx-3">
              <img src="https://via.placeholder.com/150" alt="" />
              <h2 class="font-semibold py-2">
                <a href="${elem.url}">${elem.title}</a>
              </h2>
              <span>${elem.abstract}</span>
              <span class="py-2">
                <a href="${elem.short_url}">Read more</a>
              </span>
            </article>
            `;
          })
          .join('');
      });
  };
  getStories();
  // const template = (elem) => {

  // }
  // list.innerHTML = resultsArray
  //   .map(elem => {
  //     return `<li>${elem.abstract}</li>`;
  //   })
  //   .join('');
}
