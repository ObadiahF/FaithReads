import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BookList from './components/BookList';
import CreateBook from './components/CreateBook';
import EditBook from './components/EditBook';

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">FaithReads</Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create Book</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/create" element={<CreateBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
