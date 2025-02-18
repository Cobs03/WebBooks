import React, { useState } from "react";
import "./History.css"

function History() {
  const [books, setBooks] = useState({
    today: [
      {
        id: 1,
        title: "Financial Feminist",
        author: "Tori Dunlap",
        BookCover: "https://i.ibb.co/RhCdh2C/FinFem.png",
        chapter: "Ch. 5 - 8:30AM",
      },
    ],
    yesterday: [
      {
        id: 2,
        title: "I’m Glad My Mom Died",
        author: "Jennette McCurdy",
        BookCover: "https://i.ibb.co/tHqg0YH/MomDied.png",
        chapter: "Ch. 8 - 6:45PM",
      },
      {
        id: 3,
        title: "No More Police",
        author: "Andrea Ritchie",
        BookCover: "https://i.ibb.co/W3Gqr98/NoPolice.png",
        chapter: "Ch. 3 - 7:30PM",
      },
      {
        id: 4,
        title: "Nona The Ninth",
        author: "Tamsyn Muir",
        BookCover: "https://i.ibb.co/zn06KWW/Nona.png",
        chapter: "Ch. 8 - 10:20PM",
      },
    ],
  });

  const [showModal, setShowModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [sectionToDeleteFrom, setSectionToDeleteFrom] = useState(null);

  // Handle book deletion
  const handleTrashClick = (bookId, section) => {
    setBookToDelete(bookId);
    setSectionToDeleteFrom(section);
    setShowModal(true);
  };

  const handleDelete = () => {
    setBooks((prevBooks) => {
      const updatedSection = prevBooks[sectionToDeleteFrom].filter(
        (book) => book.id !== bookToDelete
      );
      return {
        ...prevBooks,
        [sectionToDeleteFrom]: updatedSection,
      };
    });
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleTitleChange = (e, bookId, section) => {
    const newTitle = e.target.value;
    setBooks((prevBooks) => {
      const updatedSection = prevBooks[section].map((book) =>
        book.id === bookId ? { ...book, title: newTitle } : book
      );
      return {
        ...prevBooks,
        [section]: updatedSection,
      };
    });
  };

  return (
    <div className="library-container1">
      <h2>
        My History
        <svg
          className="HistoryIcon"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3M3.223 14C4.132 18.008 7.717 21 12 21c4.971 0 9-4.029 9-9 0-4.971-4.029-9-9-9-3.729 0-6.929 2.268-8.294 5.5M7 9H3V5"
          />
        </svg>
      </h2>

      {/* "Today" Section */}
      <div className="history-books">
        <h4 className="today">Today</h4>
        {books.today.length > 0 ? (
          books.today.map((book) => (
            <div className="book3" key={book.id}>
              <img src={book.BookCover} alt={book.title} />
              <div className="book-text">
                <input
                readOnly
                  type="text"
                  className="editable-title"
                  value={book.title}
                  onChange={(e) => handleTitleChange(e, book.id, "today")}
                />
                <p className="author">{book.author}</p>
                <p className="chapters">{book.chapter}</p>
                <button className="Historybutton">Read</button>
              </div>
              <button
                className="trashbtn"
                onClick={() => handleTrashClick(book.id, "today")}
              >
                <svg
                  className="Trashbin"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))
        ) : (
          <p>No books to display for today.</p>
        )}

        {/* "Yesterday" Section */}
        <h4 className="Yesterday">Yesterday</h4>
        {books.yesterday.length > 0 ? (
          books.yesterday.map((book) => (
            <div className="book3" key={book.id}>
              <img src={book.BookCover} alt={book.title} />
              <div className="book-text">
                <input
                readOnly
                  type="text"
                  className="editable-title"
                  value={book.title}
                  onChange={(e) => handleTitleChange(e, book.id, "yesterday")}
                />
                <p className="author">{book.author}</p>
                <p className="chapters">{book.chapter}</p>
                <button className="Historybutton">Read</button>
              </div>
              <button
                className="trashbtn"
                onClick={() => handleTrashClick(book.id, "yesterday")}
              >
                <svg
                  className="Trashbin"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))
        ) : (
          <p>No books to display for yesterday.</p>
        )}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Confirmation Required</h3>
            </div>
            <div className="modal-body">
              <p>
                Are you sure you want to remove this book? This book cannot be
                recovered once deleted.
              </p>
            </div>
            <button onClick={handleDelete} className="modal-btn confirm">
              Yes, I’m sure
            </button>
            <button onClick={handleCancel} className="modal-btn cancel">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default History;
