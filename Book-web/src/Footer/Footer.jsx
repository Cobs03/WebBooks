import React from "react";

import "./Footer.css";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function Footer() {
    return (
      <div className="Footer">
        <div className="upControl">
          <div className="links">
            <div className="box1">
              <div className="About">
                <a href="" className="head">
                  About Us
                </a>
              </div>

              <div className="Categories">
                <p className="head">Categories</p>
                <ul>
                  <li>
                    <a href="">Psycology</a>
                  </li>
                  <li>
                    <a href="">Self-help</a>
                  </li>
                  <li>
                    <a href="">Romance</a>
                  </li>
                  <li>
                    <a href="">Mystery</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="box2">
              <div className="for-Kids">
                <p className="head">For Kids</p>
                <ul>
                  <li>
                    <a href="">Games</a>
                  </li>
                  <li>
                    <a href="">Comic</a>
                  </li>
                  <li>
                    <a href="">Fantasy</a>
                  </li>
                </ul>
              </div>

              <div className="e-books">
                <p className="head">E-Books</p>
                <ul>
                  <li>
                    <a href="">Fiction</a>
                  </li>
                  <li>
                    <a href="">Historical</a>
                  </li>
                  <li>
                    <a href="">Horror</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="box3">
              <div className="contacts">
                <p className="head">Help & Contacts</p>
                <ul>
                  <li>
                    <a href="">
                      <span>
                        <svg
                          className="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                        </svg>
                      </span>
                      +445 87 999 000
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span>
                        <svg
                          className="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                          <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                        </svg>
                      </span>
                      b.world@store.ro
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="requestCall">
            <p>
              If you have questions, you can contact us or we will do it for
              you.
            </p>
            <button>Request Call</button>
          </div>
        </div>

        <div className="midControl">
          <div className="social">
            <ul>
              <li>
                <a href="">
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
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="payment">
            <ul>
              <li>
                <a href="">
                  <img
                    src="https://i.ibb.co/kJL5ht4/paipal-1.png"
                    alt="paipal-1"
                    border="0"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="https://i.ibb.co/PZjw07L/Master-Card-Logo-1979-1.png"
                    alt="Master-Card-Logo-1979-1"
                    border="0"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="https://i.ibb.co/0B6Nb6b/VISA-card-logo-1.png"
                    alt="VISA-card-logo-1"
                    border="0"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottomCopyright">
          <hr />
          <p>© All copyrights are reserved. B-World 2024. </p>
        </div>
      </div>
    );
}

export default Footer