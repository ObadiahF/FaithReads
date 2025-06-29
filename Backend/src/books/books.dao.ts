import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Book } from './book.model';
import { bookQueries } from './books.queries';

export const readBooks = async () => {
  return execute<Book[]>(bookQueries.readBooks, []);
};

export const readBooksByAuthor = async (author: string) => {
  return execute<Book[]>(bookQueries.readBooksByAuthor, [author]);
};

export const readBooksByAuthorSearch = async (search: string) => {
  return execute<Book[]>(bookQueries.readBooksByAuthorSearch, [search]);
};

export const readBookById = async (id: number) => {
  return execute<Book[]>(bookQueries.readBookById, [id]);
};

export const createBook = async (book: Book) => {
  return execute<OkPacket>(bookQueries.createBook, [
    book.title,
    book.author,
    book.publishDate,
    book.rating,
    book.price,
    book.imageUrl,
  ]);
};

export const updateBook = async (book: Book) => {
  return execute<OkPacket>(bookQueries.updateBook, [
    book.title,
    book.author,
    book.publishDate,
    book.rating,
    book.price,
    book.imageUrl,
    book.id,
  ]);
};

export const deleteBook = async (id: number) => {
  return execute<OkPacket>(bookQueries.deleteBook, [id]);
};

export const readBooksByLowestPrice = async () => {
  return execute<Book[]>(bookQueries.readBooksByLowestPrice, []);
};

export const readBooksByHighestPrice = async () => {
  return execute<Book[]>(bookQueries.readBooksByHighestPrice, []);
};
