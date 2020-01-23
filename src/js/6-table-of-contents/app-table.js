if (document.location.pathname === '/table-of-contents.html') {
  const entryTable = document.querySelector('#table-of-contents');
  const arrayHeaders = [...document.querySelectorAll('h2')];

  const templateCell = array => {
    return array
      .map(elem => `<div><a href="#${elem.id}">${elem.textContent}</a></div>`)
      .join('');
  };
  const renderTable = () => {
    entryTable.innerHTML = templateCell(arrayHeaders);
  };

  renderTable();
}
