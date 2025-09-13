import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../CONSTANTS';

const EditBook = () => {
  const { id } = useParams();
  console.log(useParams())
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    price: '',
    publishDate: '',
    imageUrl: '',
    rating: '',
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/books/${id}`);
        if (res.data.length > 0) {
          const b = res.data[0];
          setBook({
            title: b.title,
            author: b.author,
            price: b.price,
            publishDate: b.publishDate.split('T')[0], //Convert date time
            imageUrl: b.imageUrl,
            rating: b.rating,
          });
        }
      } catch (err) {
        console.error('Error fetching book:', err);
      }
    };

    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_BASE_URL}/books`, 
        { ...book, id: parseInt(id) },
        { headers: { 'Content-Type': 'application/json' } }
      );
      navigate('/');
    } catch (err) {
      console.error('Error updating book:', err);
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Edit Book</h2>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>Back</button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" id="title" name="title" className="form-control" required value={book.title} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" id="author" name="author" className="form-control" required value={book.author} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price ($)</label>
          <input type="number" step="0.01" min="0" id="price" name="price" className="form-control" required value={book.price} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="publishDate" className="form-label">Publish Date</label>
          <input type="date" id="publishDate" name="publishDate" className="form-control" required value={book.publishDate} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Image URL</label>
          <input type="text" id="imageUrl" name="imageUrl" className="form-control" required value={book.imageUrl} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <input type="number" step="0.1" min="0" max="5" id="rating" name="rating" className="form-control" required value={book.rating} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
