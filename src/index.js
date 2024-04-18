import "./scss/styles.scss";
import axios from 'axios';

const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const results = document.getElementById('results');
const modal = document.getElementById('modal');
const title = document.getElementById('desc-title');
const description = document.getElementById('description');
const closeModal = document.getElementById('closeModal');



searchBtn.addEventListener('click', searchBooks)
searchBar.addEventListener('focus', clearResult);

function searchBooks() {
  fetchSubject();
}

function clearResult() {
  searchBar.value = ''; // Cancella il contenuto dell'input
}


function fetchSubject() {
  const subject = searchBar.value.toLowerCase();

  axios.get(`https://openlibrary.org/subjects/${subject}.json?limit=16`)
  .then(response => {
    
    if(response.status !== 200){
      throw new Error ('could not fetch resource');
    }

    getData(response.data);
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
  const descTitle = item.title;

  const author = document.createElement('p');
  author.textContent = item.authors[0].name;

  // const showMore = descriptionBtn(item.key);
  const book = item.key;

  results.appendChild(card);
  card.appendChild(cover);
  card.appendChild(littleContainer);
  littleContainer.appendChild(title);
  littleContainer.appendChild(author);
  card.appendChild(descriptionBtn(book, descTitle));
}

function descriptionBtn(book, descTitle) {
  const descriptionBtn = document.createElement('button');
  descriptionBtn.textContent = 'Show more'
  descriptionBtn.addEventListener('click', () => {
    fetchDesc(book, descTitle)
  })

  return descriptionBtn;
}

function fetchDesc(book, descTitle) {
  axios.get(`https://openlibrary.org${book}.json`)
  .then(response => {

    const bookDescription = response.data.description; // Rinominiamo la variabile
    showModal(bookDescription, descTitle);
  
  })
  .catch(error => {
    console.error('Errore durante il fetch:', error);
  });
}

function showModal(bookDescription, descTitle) {
  modal.style.display = 'block'; // Mostra il modal
  title.textContent =  descTitle; // Imposta il titolo del modal
  description.textContent = bookDescription; // Imposta il testo della descrizione nel modal
}

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'; // Chiudi il modal
})


