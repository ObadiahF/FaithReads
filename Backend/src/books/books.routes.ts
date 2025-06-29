import { Router } from 'express';
import * as BooksController from './books.controller';

const router = Router();

router
  .route('/books')
  .get(BooksController.readBooks)
  .post(BooksController.createBook)
  .put(BooksController.updateBook);

router
  .route('/books/search/author/:search')
  .get(BooksController.readBooksByAuthorSearch);

router
  .route('/books/price/low-to-high')
  .get(BooksController.readBooksByLowestPrice);

router
  .route('/books/price/high-to-low')
  .get(BooksController.readBooksByHighestPrice);

router
  .route('/books/:bookId')
  .get(BooksController.readBookById)
  .delete(BooksController.deleteBook);

router
  .route('/books/author/:author')
  .get(BooksController.readBooksByAuthor);

export default router;
