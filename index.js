import BookCollection from './modules/bookcollection.js';
import currentDate from './modules/currentDate.js';
// Create a book collection instance
const bookCollection = new BookCollection();




const currentDateElement = document.getElementById('current-date');
currentDateElement.textContent = currentDate;
