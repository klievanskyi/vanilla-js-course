if (document.location.pathname === '/monster-shuffle.html') {
  const btn = document.querySelector('button');
  const list = document.querySelector('#list');
  const monsters = [
    'monster1',
    'monster2',
    'monster3',
    'monster4',
    'monster5',
    'monster6',
    'monster7',
    'monster8',
    'monster9',
    'monster10',
    'monster11',
    'sock',
  ];

  const shuffle = array => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  const render = elem => {
    const div = document.createElement('div');
    const innerDiv = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
    div.classList.add('w-1/3');
    innerDiv.classList.add(
      'flex',
      'flex-col',
      'items-center',
      'bg-fourth',
      'm-3',
      'p-6'
    );
    div.append(innerDiv);
    img.setAttribute('src', `/assets/img/${elem}.svg`);
    img.classList.add('h-auto', 'max-w-full');
    span.textContent = elem;
    span.classList.add('pt-3');
    innerDiv.append(img, span);

    return list.append(div);
  };

  const getGrid = () => shuffle(monsters).map(monster => render(monster));

  const clearBox = () => [...list.childNodes].map(el => el.remove());

  const getNewGrid = () => {
    clearBox();
    getGrid();
  };

  getGrid();

  btn.addEventListener('click', getNewGrid, false);
}
