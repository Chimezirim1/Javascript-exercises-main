// Create a class called Book with properties for title, author, and ISBN.
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  
    displayInfo() {
      console.log('Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}');
    }
  }
  
 


// Create a subclass called AudioBook that inherits from Book and adds a property for narrator.
class AudioBook extends Book {
    constructor(title, author, isbn, narrator) {
      super(title, author, isbn);
      this.narrator = narrator;
    }
  
  
    // Implement a method play in the AudioBook class that logs a message indicating the audiobook is playing.

    play() {
        console.log('Playing audiobook: ${this.title}, Narrated by: ${this.narrator}');
      }
    }


    // Create an instance of AudioBook and call the inherited method displayInfo (assuming it's defined in Book) to display book information, and then call the play method specific to AudioBook.

  // Create an instance of AudioBook
  const audioBook = new AudioBook('Alas', 'Regina Halls', '03453912', 'Steve Dylan');
  // Call the inherited method displayInfo to display book information
  audioBook.displayInfo();
  
  // Call the play method specific to AudioBook
  audioBook.play();