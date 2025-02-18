import React from "react";
import { Link, Outlet } from "react-router-dom"; // Import Outlet

import data from "../utils/bookSlider.json";
import "./Mybooks.css";

function Mybooks() {
  return (
    <div className="upperBooks">
      <div className="recent_purchases">
        <h1>Recent Purchases</h1>

        <div className="recent-books">
          {data.slice(3, 6).map((book) => (
            <div className="book1" key={book.id}>
              <div className="purchase-wrapper">
                <img src={book.BookCover} alt={book.Title} />
              </div>
              <h2>{book.Title}</h2>
              <p>{book.Author}</p>

              <button className="add-favorites-mybooks">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                </svg>
              </button>
              <button className="btn1">Start Reading</button>
            </div>
          ))}
        </div>
      </div>

      {/* Library Navigation Tabs */}
      <div className="library-container">
        <h1>Library</h1>
        <div className="tabs">
          <Link to="current-reads" className="tab">
            Current Reads
          </Link>
          <Link to="collection" className="tab">
            Collection
          </Link>
          <Link to="history" className="tab">
            History
          </Link>
        </div>

<Outlet/>
      </div>
    </div>
  );
}

export default Mybooks;
