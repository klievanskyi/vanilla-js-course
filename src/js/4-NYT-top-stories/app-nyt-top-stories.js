if (document.location.pathname === '/nyt-top-stories.html') {
  const endPoint =
    'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EdS4J6tNjJTENkNBtxKoWCMTHGdZJNdQ';

  const getStories = () =>
    fetch(endPoint).then(resp => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    });
  // .then(data => {

  // });
  getStories();
  console.log('asd');
}
