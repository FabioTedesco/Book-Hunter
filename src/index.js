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
closeModal.addEventListener('click', () => { modal.style.display = 'none'; })   //Hides the modal.
   
function searchBooks() {
  fetchSubject();
}

function clearResult() {   // Cancella il contenuto dell'input per una nuova ricerca
  searchBar.value = ''; 
}

function fetchSubject() {  // Fetches the subject data from the Open Library API.
  const subject = searchBar.value.toLowerCase();

  axios.get(`https://openlibrary.org/subjects/${subject}.json?limit=16`)
  .then(response => {
    
    if(response.status !== 200){
      throw new Error ('could not fetch resource');
    }

    getData(response.data);
  })
  .catch(error => alert(error))
}

function getData(data) {
  const value = data.works;

    value.forEach(item => {
      createCard(item);
    })
}

function createCard(item) {  //Creates a card for a book result.
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

  const book = item.key;

  results.appendChild(card);
  card.appendChild(cover);
  card.appendChild(littleContainer);
  littleContainer.appendChild(title);
  littleContainer.appendChild(author);
  card.appendChild(descriptionBtn(book, descTitle));
}

function descriptionBtn(book, descTitle) {    //Creates a "Show more" button that displays the book description in a modal.
  const descriptionBtn = document.createElement('button');
  descriptionBtn.textContent = 'Show more'
  descriptionBtn.addEventListener('click', () => {
    fetchDesc(book, descTitle)
  })

  return descriptionBtn;
}

function fetchDesc(book, descTitle) {  //Fetches the book description from the Open Library API and displays it in a modal.
  axios.get(`https://openlibrary.org${book}.json`)
  .then(response => {

    const bookDescription = response.data.description; 
    showModal(bookDescription, descTitle);
  
  })
  .catch(error => {
    console.error('Could not fetch data', error);
  });
}

function showModal(bookDescription, descTitle) {  //Displays the book description in a modal.
  modal.style.display = 'block'; 
  title.textContent =  descTitle; 
  description.textContent = bookDescription; 
}




