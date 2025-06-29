export const bookQueries = {
  readBooks: `
    SELECT
      id AS id, title, author,
      publishDate, rating, price, imageUrl
    FROM library.books
  `,
  
  readBooksByAuthor: `
    SELECT
      id AS id, title, author,
      publishDate, rating, price, imageUrl
    FROM library.books
    WHERE library.books.author = ?
  `,
  
  readBooksByAuthorSearch: `
    SELECT
      id AS id, title, author,
      publishDate, rating, price, imageUrl
    FROM library.books
    WHERE library.books.author LIKE ?
  `,
  
  readBookById: `
    SELECT
      id AS id, title, author,
      publishDate, rating, price, imageUrl
    FROM library.books
    WHERE library.books.id = ?
  `,
  
  createBook: `
    INSERT INTO library.books(title, author, publishDate, rating, price, imageUrl)
    VALUES (?, ?, ?, ?, ?, ?)
  `,
  
  updateBook: `
    UPDATE library.books
    SET title = ?, author = ?, publishDate = ?, rating = ?, price = ?, imageUrl = ?
    WHERE id = ?
  `,
  
  deleteBook: `
    DELETE FROM library.books
    WHERE id = ?
  `,

  readBooksByLowestPrice: `
    SELECT
      id AS id, title, author,
      publishDate, rating, price, imageUrl
    FROM library.books
    ORDER BY price ASC
  `,

  readBooksByHighestPrice: `
    SELECT
      id AS id, title, author,
      publishDate, rating, price, imageUrl
    FROM library.books
    ORDER BY price DESC
  `
};
