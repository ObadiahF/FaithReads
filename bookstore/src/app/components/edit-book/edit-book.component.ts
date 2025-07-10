import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  imports: [FormsModule, CommonModule, RouterModule],
})
export class EditBookComponent implements OnInit {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    price: 0,
    publishDate: '',
    rating: 0,
    imageUrl: '',
  };

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(bookId).subscribe((data) => {
      const book: Book = data[0];
      this.book = {
        ...book,
        publishDate: book.publishDate.split('T')[0] || book.publishDate.split(' ')[0]
      };
    });
  }

  onSubmit(): void {
    // match MySQL DATETIME format
    const adjustedBook = {
      ...this.book,
      publishDate: this.book.publishDate + ' 00:00:00'
    };

    this.bookService.updateBook(adjustedBook).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
