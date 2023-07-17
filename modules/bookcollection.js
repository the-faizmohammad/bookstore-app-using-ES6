import Book from './book.js';

// BookCollection class
export default class BookCollection {
  constructor() {
    this.books = [];
  }

  addBook = (title, author) => {
    const book = new Book(title, author);
    this.books.push(book);
    this.saveToLocalStorage();
  };

  removeBook = (index) => {
    this.books.splice(index, 1);
    this.saveToLocalStorage();
  };

  renderBooks = () => {
    const bookSection = document.getElementById('books-section');
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    this.books.forEach((book, index) => {
      const bookItem = document.createElement('li');
      bookItem.classList.add('book-item');
      bookItem.innerHTML = `
        <span>${book.title} by ${book.author}</span>
        <button class="remove-btn" data-index="${index}">Remove</button>
      `;
      bookList.appendChild(bookItem);
      bookSection.appendChild(bookList);
    });

    const removeButtons = document.getElementsByClassName('remove-btn');
    for (let i = 0; i < removeButtons.length; i += 1) {
      const removeButton = removeButtons[i];
      removeButton.addEventListener('click', (event) => {
        const { index } = event.target.dataset;
        this.removeBook(index);
        this.renderBooks();
      });
    }
  };

  saveToLocalStorage = () => {
    localStorage.setItem('books', JSON.stringify(this.books));
    this.renderBooks();
  };

  loadFromLocalStorage = () => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
      this.renderBooks();
    }
  };
}
