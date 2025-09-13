import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../CONSTANTS';

const CreateBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    price: '',
    publishDate: '',
    imageUrl: '',
    rating: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/books`, book);
      navigate('/');
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Create New Book</h2>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          Back
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            className="form-control"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price ($)</label>
          <input
            type="number"
            step="0.01"
            min="0"
            id="price"
            name="price"
            className="form-control"
            value={book.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="publishDate" className="form-label">Publish Date</label>
          <input
            type="date"
            id="publishDate"
            name="publishDate"
            className="form-control"
            value={book.publishDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="form-control"
            value={book.imageUrl}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            id="rating"
            name="rating"
            className="form-control"
            value={book.rating}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Create Book</button>
      </form>
    </div>
  );
};

export default CreateBook;
