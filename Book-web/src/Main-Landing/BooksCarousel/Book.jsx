import "./Book.css";
import "../../index.css";

import PropTypes from "prop-types";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-prev-arrow`}
      onClick={onClick}
      style={style}
      aria-label="Previous Slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        color="black"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-next-arrow`}
      onClick={onClick}
      style={style}
      aria-label="Next Slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 6 15 12 9 18"></polyline>
      </svg>
    </button>
  );
};


function Book({ id, title, genre }) {
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://openlibrary.org/subjects/${genre}.json`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.works.slice(0, 8)); // Ensure `works` exists in the JSON response
      })
      .catch((error) => console.error("Error fetching books by genre:", error));
  }, [genre]);

  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 5,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


function getRandomDollarAmount(min = 5.0, max = 100.0) {
  const randomAmount = (Math.random() * (max - min) + min).toFixed(2);
  return parseFloat(randomAmount);
}
  return (
    <div className="Discover-Next" id={`carousel-${id}`}>
      <h2>{title}</h2>
      <div className="carousel">
        <div className="carousel-inner">
          <Slider {...settings}>
            {books.map((book, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="d-flex justify-content-center flex-wrap">
                  <div className="card mx-2" style={{ width: "16rem" }}>
                    <img
                      src={`https://covers.openlibrary.org/b/id/${
                        book.cover_id || "default"
                      }-M.jpg`}
                      alt={book.title || "No Title"}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-text">
                        {book.authors
                          ?.map((author) => author.name)
                          .join(", ") || "Unknown Author"}
                      </p>
                      <p className="card-text">{`$${getRandomDollarAmount()}`}</p>

                      <button className="Add-Favorites">
                        <svg
                          className="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                        </svg>
                      </button>
                      <button className="Add-to-Cart">
                        <svg
                          className="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};


export default Book;
