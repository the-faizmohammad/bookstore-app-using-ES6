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

});



const currentDateElement = document.getElementById('current-date');
currentDateElement.textContent = currentDate;
