import BookCollection from './modules/bookcollection.js';
import currentDate from './modules/currentDate.js';
const currentDateElement = document.getElementById('current-date');
currentDateElement.textContent = currentDate;
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
  
 