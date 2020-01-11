if (document.location.pathname === '/nyt-top-stories.html') {
  const categories = ['arts', 'books', 'movies', 'health', 'theater'];
  const list = document.querySelector('#list');

  const articleTemplate = item => {
    return `
    <article class="w-1/5 max-w-md">
      <div class="flex flex-col justify-between h-full m-3">
        <div>
          <img src="https://via.placeholder.com/150" alt="" />
          <h3 class="font-semibold py-2">
            <a href="${item.url}">${item.title}</a>
          </h3>
          <span>${item.abstract}</span>
        </div>
        <span class="py-2">
          <a href="${item.short_url}">Read more</a>
        </span>
      </div>
    </article>`;
  }

  const sectionTemplate = (item, category) => {
    return `
    <div class="p-6 border border-primary rounded my-3">
      <h2 class="font-medium capitalize">${category}</h2>
      <div class="flex flex-wrap -mx-3">
        ${item}
      </div>
    </div>
    `
  }
  
  const getStories = item => {
    const endPoint =
    `https://api.nytimes.com/svc/topstories/v2/${item}.json?api-key=EdS4J6tNjJTENkNBtxKoWCMTHGdZJNdQ`;
    fetch(endPoint)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        return Promise.reject(resp);
      })
      .then(data => {
        return data.results.map(elem => articleTemplate(elem)).join('');
      })
      .then(data => {
        list.innerHTML += sectionTemplate(data, item);
      });
  };

  categories.map(item => getStories(item));
}
