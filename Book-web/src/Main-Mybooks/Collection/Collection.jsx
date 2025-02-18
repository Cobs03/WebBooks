import data from "../../utils/bookSlider.json";
import "../CurrentReads/CurrentReads.css";

function Collection() {
  return (
    <div className="book-container">
      {data.splice(0, 7).map((book, index) => (
        <div className="book4" key={book.id}>
          <div className="current-read-wrapper">
            <img src={book.BookCover} alt={book.Title} />
          </div>

          <h2>{book.Title}</h2>
          <svg
            className="dot-vertical"
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
              strokeWidth="2"
              d="M12 6h.01M12 12h.01M12 18h.01"
            />
          </svg>
          <p>{book.Author}</p>
          <button>View</button>
        </div>
      ))}
    </div>
  );
}

export default Collection;
