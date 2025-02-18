import "./Navbar.css";
import "../index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Track the active link
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/signin");
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link when a link is clicked
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid navbar-expand-lg">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="https://i.ibb.co/ydzd58S/Web-Book-Logo.png"
              alt="Web-Book-Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 left">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`fontsize-nav-increase nav-link ${
                    activeLink === "/" ? "nav-active" : ""
                  }`} // Add active class conditionally
                  onClick={() => handleLinkClick("/")} // Set active link on click
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/genre"
                  className={`fontsize-nav-increase nav-link ${
                    activeLink === "/genre" ? "nav-active" : ""
                  }`} // Add active class conditionally
                  onClick={() => handleLinkClick("/genre")} // Set active link on click
                >
                  Genre
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/popular"
                  className={`fontsize-nav-increase nav-link ${
                    activeLink === "/popular" ? "nav-active" : ""
                  }`} // Add active class conditionally
                  onClick={() => handleLinkClick("/popular")} // Set active link on click
                >
                  Popular
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/mybooks"
                  className={`fontsize-nav-increase nav-link ${
                    activeLink === "/mybooks" ? "nav-active" : ""
                  }`} // Add active class conditionally
                  onClick={() => handleLinkClick("/mybooks")} // Set active link on click
                >
                  Mybooks
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-control">
          <ul className="ms-auto mb-2 mb-lg-0 flex-horizontal">

            <li className="nav-item ">
              <a className="nav-link" href="#">
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
              </a>
              <div className="tip">Collection</div>
            </li>

            <li className="nav-item">
              <Link to="/cart" className="nav-link" href="#">
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
                    d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <div className="tip">Cart</div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
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
                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <div className="tip">Profile</div>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleLogout}>
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
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                    />
                  </svg>
                </a>
                <div className="tip">LogOut</div>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
