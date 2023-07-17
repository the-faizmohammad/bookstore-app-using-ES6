import BookCollection from './modules/bookcollection.js';
import currentDate from './modules/currentDate.js';

// Create a book collection instance
const bookCollection = new BookCollection();

// Navigation links
const navLinks = document.getElementsByClassName('nav-link');

// Content sections
const sections = {
  books: document.getElementById('books-section'),
  'add-book': document.getElementById('add-book-section'),
  'contact-info': document.getElementById('contact-info-section'),
};

// Function to switch active section
const switchSection = (event) => {
  event.preventDefault();
  const { section } = event.target.dataset;

  // Remove active class from current section
  const currentSection = document.querySelector('.content-section.active');
  currentSection.classList.remove('active');

  // Add active class to selected section
  sections[section].classList.add('active');

  // If the selected section is the books section, render the books
  if (section === 'books') {
    bookCollection.loadFromLocalStorage();
    bookCollection.renderBooks();
  }

  // Remove active class from current link
  const currentLink = document.querySelector('.nav-link.active');
  currentLink.classList.remove('active');

  // Add active class to selected link
  event.target.classList.add('active');
};

window.addEventListener('load', () => {
  bookCollection.loadFromLocalStorage();
  bookCollection.renderBooks();
});

// Attach event listeners to navigation links
Array.from(navLinks).forEach((link) => {
  link.addEventListener('click', switchSection);
});

// Get the add form and input elements
const addForm = document.getElementById('add-form');
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');

// Attach event listener to the add form
addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;

  if (title && author) {
    bookCollection.addBook(title, author);
    titleInput.value = '';
    authorInput.value = '';
  }
});

const currentDateElement = document.getElementById('current-date');
currentDateElement.textContent = currentDate;
