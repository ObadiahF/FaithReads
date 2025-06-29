import { Request, RequestHandler, Response } from 'express';
import * as BookDao from './books.dao';
import { OkPacket } from 'mysql';

export const readBooks: RequestHandler = async (req: Request, res: Response) => {
  try {
    let books;
    let bookId = parseInt(req.query.bookId as string);

    if (Number.isNaN(bookId)) {
      books = await BookDao.readBooks();
    } else {
      books = await BookDao.readBookById(bookId);
    }

    res.status(200).json(books);
  } catch (error) {
    console.error('[books.controller][readBooks][Error] ', error);
    res.status(500).json({
      message: 'There was an error when fetching books',
    });
  }
};

export const readBooksByAuthor: RequestHandler = async (req: Request, res: Response) => {
  try {
    const books = await BookDao.readBooksByAuthor(req.params.author);
    res.status(200).json(books);
  } catch (error) {
    console.error('[books.controller][readBooksByAuthor][Error] ', error);
    res.status(500).json({
      message: 'There was an error when fetching books by author',
    });
  }
};

export const readBooksByAuthorSearch: RequestHandler = async (req: Request, res: Response) => {
  try {
    console.log('search', req.params.search);
    const books = await BookDao.readBooksByAuthorSearch('%' + req.params.search + '%');
    res.status(200).json(books);
  } catch (error) {
    console.error('[books.controller][readBooksByAuthorSearch][Error] ', error);
    res.status(500).json({
      message: 'There was an error when searching books by author',
    });
  }
};

export const createBook: RequestHandler = async (req: Request, res: Response) => {
  try {
    const okPacket: OkPacket = await BookDao.createBook(req.body);

    console.log('req.body', req.body);
    console.log('book', okPacket);

    res.status(200).json(okPacket);
  } catch (error) {
    console.error('[books.controller][createBook][Error] ', error);
    res.status(500).json({
      message: 'There was an error when creating the book',
    });
  }
};

export const updateBook: RequestHandler = async (req: Request, res: Response) => {
  try {
    const okPacket: OkPacket = await BookDao.updateBook(req.body);

    console.log('req.body', req.body);
    console.log('book', okPacket);

    res.status(200).json(okPacket);
  } catch (error) {
    console.error('[books.controller][updateBook][Error] ', error);
    res.status(500).json({
      message: 'There was an error when updating the book',
    });
  }
};

export const deleteBook: RequestHandler = async (req: Request, res: Response) => {
  try {
    let bookId = parseInt(req.params.bookId as string);

    console.log('bookId', bookId);
    if (!Number.isNaN(bookId)) {
      const response = await BookDao.deleteBook(bookId);
      res.status(200).json(response);
    } else {
      throw new Error('Integer expected for bookId');
    }
  } catch (error) {
    console.error('[books.controller][deleteBook][Error] ', error);
    res.status(500).json({
      message: 'There was an error when deleting the book',
    });
  }
};

export const readBooksByLowestPrice: RequestHandler = async (_req: Request, res: Response) => {
  try {
    const books = await BookDao.readBooksByLowestPrice();
    res.status(200).json(books);
  } catch (error) {
    console.error('[books.controller][readBooksByLowestPrice][Error]', error);
    res.status(500).json({ message: 'Error fetching books by lowest price' });
  }
};

export const readBooksByHighestPrice: RequestHandler = async (_req: Request, res: Response) => {
  try {
    const books = await BookDao.readBooksByHighestPrice();
    res.status(200).json(books);
  } catch (error) {
    console.error('[books.controller][readBooksByHighestPrice][Error]', error);
    res.status(500).json({ message: 'Error fetching books by highest price' });
  }
};

export const readBookById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const bookId = parseInt(req.params.bookId as string);
    if (Number.isNaN(bookId)) throw new Error('Invalid book ID');

    const books = await BookDao.readBookById(bookId);
    res.status(200).json(books);
  } catch (error) {
    console.error('[books.controller][readBookById][Error]', error);
    res.status(500).json({ message: 'Error fetching book by ID' });
  }
};


