const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory array to store books
let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "1984", author: "George Orwell" }
];

// GET /books - Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST /books - Add a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  if (!newBook.title || !newBook.author) {
    return res.status(400).json({ message: "Title and author are required." });
  }
  newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id - Update a book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;

  const book = books.find(b => b.id === bookId);
  if (book) {
    book.title = updatedBook.title || book.title;
    book.author = updatedBook.author || book.author;
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// DELETE /books/:id - Delete a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);

  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    res.json(deletedBook[0]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

