import { Component, OnInit  } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  imports: [CommonModule, RouterModule],
})
export class BookListComponent implements OnInit {
  constructor(private bookService: BookService, private router: Router) {}

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId).subscribe(() => {
      this.books = this.books.filter((book) => book.id !== bookId);
    });
  }
  books: Book[] = [];


  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }
}
