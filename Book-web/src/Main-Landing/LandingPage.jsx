import Landing from "./Landing.jsx"
import Book from "./BooksCarousel/Book.jsx"


import "../index.css"

import React from "react";

function LandingPage() {
    return (
      <div className="Landing">
        <Landing />
        <div className="carousels">
          <Book
            title="DISCOVER YOUR NEXT BOOK"
            id="carousel-1"
            genre="history"
          />
          <Book
            title="DON'T WAIT - MAKE IT YOURS TODAY!"
            id="carousel-2"
            genre="fantasy"
          />
          <Book
            title="ENJOY ACTION PACKED AND THRILLED IMAGINATION"
            id="carousel-3"
            genre="action"
          />
        </div>

      </div>
    );
}

export default LandingPage