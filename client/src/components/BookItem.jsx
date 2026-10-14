

const BookItem = ({ book, onDelete, onToggleRead }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-3 border-l-4 border-blue-500">
      <div>
        <h3 className={`font-semibold text-lg ${book.status === 'Read' ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {book.title}
        </h3>
        <p className="text-sm text-gray-600">by {book.author}</p>
        <span
          className={`inline-block mt-1 px-2 py-0.5 text-xs font-semibold rounded-full ${
            book.status === 'Read' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {book.status}
        </span>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onToggleRead(book.id)}
          className={`px-3 py-1 text-sm font-medium rounded ${
            book.status === 'Read' ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {book.status === 'Read' ? 'Mark Unread' : 'Mark Read'}
        </button>
        <button
          onClick={() => onDelete(book.id)}
          className="bg-red-500 text-white px-3 py-1 text-sm font-medium rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookItem;