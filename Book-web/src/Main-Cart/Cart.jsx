import React from "react";
import "./Cart.css";
import { Link, useNavigate, Outlet } from "react-router-dom";

import data from "../utils/bookSlider.json"

function Cart() {
     const navigate = useNavigate();
       const book = data.find((item) => item.id == 8); // Change ID as needed

       if (!book) {
         return <p>Book not found</p>;
       }

  return (
    <div className="cart">
      <div className="cart-container">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate(-1)}>
          &lt; Back
        </button>
        <h1>Book Web Shopping Cart</h1>
        <div className="cart-header">
          <div className="select-all">
            <input type="checkbox" id="select-all" />
            <label htmlFor="select-all">Product</label>
          </div>

            <div className="unit-price">Unit Price</div>
        </div>
        <div className="cart-item">
          <div className="item-select">
            <input type="checkbox" />
            <div className="item-details">
              <img src={book.BookCover} alt="Chain of Gold Cover" />
              <div className="item-info">
                <p className="vendor">Margaret K. Books</p>
                <p className="title">Chain of Gold: The Last Hours #1</p>
              </div>
            </div>
          </div>

          <div className="item-price">$12.49</div>

        </div>

        <div className="cart-summary">
          <a href="#" className="delete">
            Delete
          </a>
          <Link to="/checkout" className="checkout">
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
