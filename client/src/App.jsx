import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const API_URL = 'http://localhost:5000/books';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all books (GET /api/books)
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBooks(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching books:', error);
        toast.error("Failed to load books");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Add Book (POST /api/books)
  const handleAddBook = async (bookData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData)
      });
      const newBook = await response.json();
      
      if (response.ok) {
        setBooks((prevBooks) => [newBook, ...prevBooks]);
        toast.success("Book added successfully!");
      } else {
        toast.error(newBook.error || "Failed to add book");
      }
    } catch (error) {
      console.error('Error adding book:', error);
      toast.error("Failed to add book");
    }
  };

  // Delete Book (DELETE /api/books/:id)
  const handleDeleteBook = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
        toast.success("Book deleted successfully!");
      } else {
        toast.error("Failed to delete book");
      }
    } catch (error) {
      console.error('Error deleting book:', error);
      toast.error("Failed to delete book");
    }
  };

  // Toggle Read Status (PUT /api/books/:id)
  const handleToggleRead = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT'
      });
      const updatedBook = await response.json();
      
      if (response.ok) {
        setBooks((prevBooks) =>
          prevBooks.map((book) => (book.id === id ? updatedBook : book))
        );
        toast.success("Status updated!");
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      console.error('Error updating book status:', error);
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">📚 BookShelf Manager</h1>
          <p className="text-gray-600 mt-1">Keep track of your personal reading journey</p>
        </header>

        <BookForm onAddBook={handleAddBook} />

        {loading ? (
          <p className="text-center text-gray-500">Loading books...</p>
        ) : (
          <BookList books={books} onDelete={handleDeleteBook} onToggleRead={handleToggleRead} />
        )}
      </div>

      <Toaster />
    </div>
  );
}

export default App;