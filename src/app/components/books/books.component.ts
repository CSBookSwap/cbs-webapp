import {Component} from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book} from "../../models/book";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  books: Book[] = [];

  constructor(private bookService: BookService) {
  }

  getBooks() {
    this.bookService.getBooks({number: 0, size: 100}).subscribe(books => {
      console.log(books);
      this.books = books;
    });
  }

}
