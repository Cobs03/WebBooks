import React from "react";
import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";

import data from "../../utils/bookSlider.json";

function Checkout() {
         const navigate = useNavigate();
                const book = data.find((item) => item.id == 8); // Change ID as needed

                if (!book) {
                  return <p>Book not found</p>;
                }
         
  return (
    <div>
      <div className="checkout-container">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate(-1)}>
          &lt; Back
        </button>
        <h1>Checkout</h1>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-item">
            <img src={book.BookCover} alt="Chain of Gold Cover" />
            <div className="item-details">
              <h3>Chain of Gold: The Last Hours #1</h3>
            </div>
            <div className="item-price">$12.49</div>
          </div>
          <div className="order-total">
            <span>Order Total (1 item):</span>
            <span className="total-amount">$12.49</span>
          </div>
        </div>

        <div className="voucher-section">
          <h2>Book Vouchers</h2>
          <div className="voucher-selection">
            <label htmlFor="voucher">Select Voucher:</label>
            <select id="voucher">
              <option value="">-- Select a voucher --</option>
            </select>
          </div>
          <div className="voucher-info">
            <span>Book Vouchers:</span>
            <span className="voucher-discount">-$0.00</span>
          </div>
        </div>

        <div className="payment-section">
          <h2>Payment Method</h2>
          <div className="payment-method">
            <span>Gcash</span>
            <a href="#">Change</a>
          </div>

          <div className="payment-summary">
            <div className="summary-item">
              <span>Book Subtotal:</span>
              <span>$12.49</span>
            </div>
            <div className="summary-item">
              <span>Voucher Discount:</span>
              <span>$0.00</span>
            </div>
          </div>
        </div>

        <Link to="/confirm" className="place-order">
          Place Order
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
