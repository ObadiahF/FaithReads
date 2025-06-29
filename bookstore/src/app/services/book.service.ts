import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  createBook(book: Partial<Book>): Observable<any> {
    return this.http.post(this.baseUrl, book);
  }
  private baseUrl = 'http://localhost:5000/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  getBookById(id: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/${id}`);
  }

  updateBook(book: Book): Observable<any> {
    return this.http.put(`${this.baseUrl}`, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
