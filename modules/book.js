const Book = ((title, author) => {
    return class {
      constructor() {
        this.title = title;
        this.author = author;
      }
    };
  })();
  
  export default Book;
  