if (document.location.pathname === '/table-of-contents.html') {
  const entryTable = document.querySelector('#table-of-contents');

  const titlesArray = () => {
    const array = [...document.querySelectorAll('h2')];
    const contextArray = array.map(element => `#${element.textContent}`);
    return contextArray;
  };

  console.log(titlesArray());
}
