import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  imports: [FormsModule, RouterModule],
})
export class CreateBookComponent {
  book: Partial<Book> = {};

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit() {
    // match MySQL DATETIME format
    const adjustedBook = {
      ...this.book,
      publishDate: this.book.publishDate + ' 00:00:00'
    };

    this.bookService.createBook(adjustedBook).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => console.error('Error creating book', err),
    });
  }
}
