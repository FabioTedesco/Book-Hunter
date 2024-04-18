import "./scss/styles.scss";

const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const results = document.getElementById('results');


searchBtn.addEventListener('click', searchBooks)

function searchBooks() {
  // clearResult();
  fetchSubject();
}


// function fetchSubject(subject) {
//   fetch(`https://openlibrary.org/subjects/.json?limit=16`)
//    .then(response => {
//       if (!response.ok) {
//         throw new Error('Could not fetch resource');
//       }
//       return response.json();
//     })
//    .then(data => {
//       console.log(data.works);
//       getData(data);
//     })
//    .catch(error => console.error(error));
// }
function fetchSubject() {
  const subject = searchBar.value.toLowerCase();

  fetch(`https://openlibrary.org/subjects/${subject}.json?limit=16`)
  .then(response => {
    
    if(!response.ok){
      throw new Error ('could not fetch resource');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.works)
    getData(data)
  })
  .catch(error => console.error(error))
}


function getData(data) {
  const value = data.works;

    value.forEach(item => {
      createCard(item);
    })
}


function createCard(item) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cover = document.createElement('img');
  cover.src = `https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`;

  const littleContainer = document.createElement('div');
  littleContainer.classList.add('littleContainer');

  const title = document.createElement('h2');
  title.textContent = item.title;

  const author = document.createElement('p');
  author.textContent = item.authors[0].name;

  // const showMore = descriptionBtn(item.key);
  const book = item.key;

  results.appendChild(card);
  card.appendChild(cover);
  card.appendChild(littleContainer);
  littleContainer.appendChild(title);
  littleContainer.appendChild(author);
  card.appendChild(descriptionBtn(book));
}

function descriptionBtn(book) {
  const descriptionBtn = document.createElement('button');
  descriptionBtn.textContent = 'Show more'
  descriptionBtn.addEventListener('click', () => {
    fetchDesc(book)
  })

  return descriptionBtn;
}

function fetchDesc(book) {

  fetch(`https://openlibrary.org${book}.json`)
  .then(response => {

    if(!response.ok){
      throw new Error ('could not fetch resource');
    }
    
    return response.json();
  })
  .then(response => {
    console.log('---' + response.description)
  })
}