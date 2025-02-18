import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Genre.css";


function Genre() {
  const [activeTheme, setActiveTheme] = useState("Drama"); // Default active button
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]); // State for search results
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const themes = ["Drama", "Fantasy", "Comedy"];

  const getRandomDollarAmount = () => (Math.random() * (20 - 5) + 5).toFixed(2); // Random price between $5 and $20

  // Fetch books based on active theme
  useEffect(() => {
    fetch(`https://openlibrary.org/subjects/${activeTheme.toLowerCase()}.json`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.works.slice(0, 20));
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, [activeTheme]);

  // Fetch books based on search query
  useEffect(() => { 
    if (searchQuery) {
      fetch(`https://openlibrary.org/search.json?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchBooks(data.docs.slice(0, 20)); // Store search results in searchBooks
        })
        .catch((error) => console.error("Error fetching books:", error));
    } else {
      setSearchBooks([]); // Clear search results when there's no search query
    }
  }, [searchQuery]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="main-genre">
      <form className="search-form d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery} // Bind the value of the input to searchQuery
          onChange={handleSearchChange} // Update searchQuery on input change
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

      <div className="search-section">
        {searchBooks.length > 0 ? (
          searchBooks.map((book, index) => (
            <div className="book-card" key={index}>
              <div className="card">
                <div className="wrapper">
                  <img
                    src={
                      book.cover_id
                        ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                        : "https://via.placeholder.com/150" // Fallback to a placeholder image if cover_id is missing
                    }
                    alt={book.title || "No Title"}
                    className="card-img-top"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">
                    {book.authors && book.authors.length > 0
                      ? book.authors[0].name
                      : "Unknown Author"}
                  </p>

                  <p className="card-text">{`$${getRandomDollarAmount()}`}</p>
                  <button className="add-favorites">
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                    </svg>
                  </button>
                  <button className="add-to-cart">
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1"
                        clipRule="evenodd"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No books found matching your search.</p> // Show a message if no books are found
        )}
      </div>

      <div className="theme-section">
        <div className="button-control">
          {themes.map((theme) => (
            <button
              key={theme}
              className={`theme-button ${
                activeTheme === theme ? "active-theme2" : ""
              }`}
              onClick={() => setActiveTheme(theme)}
            >
              {theme}
            </button>
          ))}
        </div>

        <div className="books-container">
          {books.map((book, index) => (
            <div className="book-card" key={index}>
              <div className="card">
                <div className="wrapper">
                  <img
                    src={`https://covers.openlibrary.org/b/id/${
                      book.cover_id || "default"
                    }-M.jpg`}
                    alt={book.title || "No Title"}
                    className="card-img-top"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">
                    {book.authors && book.authors.length > 0
                      ? book.authors[0].name
                      : "Unknown Author"}
                  </p>

                  <p className="card-text">{`$${getRandomDollarAmount()}`}</p>
                  <button className="add-favorites">
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                    </svg>
                  </button>
                  <button className="add-to-cart">
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1"
                        clipRule="evenodd"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Genre;
