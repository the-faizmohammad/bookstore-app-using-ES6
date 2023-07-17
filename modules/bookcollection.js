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


}
