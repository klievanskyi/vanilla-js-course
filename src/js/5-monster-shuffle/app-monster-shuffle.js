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
    list.innerHTML += `
    <div class="w-1/3 transition-transform-5 transform-style transform-scale-1">
      <div class="relative flex items-center justify-center h-40 bg-fourth m-3 p-6">
      <img src="/assets/img/${elem}.svg" class="absolute h-auto max-w-full transform-rotateY-180">
        <img src="/assets/img/door.svg" class="absolute h-auto max-w-full">
      </div>
    </div>`;
  };

  const getGrid = () => shuffle(monsters).map(monster => render(monster));

  const clearBox = () => [...list.children].map(el => el.remove());

  const handleGrid = () => {
    clearBox();
    getGrid();
  };

  // eslint-disable-next-line no-inner-declarations
  function handleCard() {
    console.log('click');
    this.classList.toggle('transform-rotateY-180');
  }

  getGrid();

  btn.addEventListener('click', handleGrid, false);

  [...list.children].map(card => card.addEventListener('click', handleCard));
}
