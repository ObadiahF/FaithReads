import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../CONSTANTS';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/books`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error loading books:', error);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/books/${id}`);
      loadBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h2>All Books</h2>
      {books.map((book) => (
        <div className="card mb-3" key={book.id}>
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="img-fluid rounded-start"
                style={{ objectFit: 'cover', height: '100%' }}
              />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text"><strong>Author:</strong> {book.author}</p>
                <p className="card-text"><strong>Price:</strong> ${book.price.toFixed(2)}</p>
                <p className="card-text"><strong>Rating:</strong> {book.rating}</p>
                <p className="card-text"><strong>Published:</strong> {new Date(book.publishDate).toLocaleDateString()}</p>

                <div className="mt-3 d-flex gap-2">
                  <Link to={`/edit/${book.id}`} className="btn btn-primary">Edit</Link>
                  <button className="btn btn-danger" onClick={() => deleteBook(book.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
