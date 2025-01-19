import './Navbar.css';
import '../index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Navbar() {

    return(
      <>      
      <nav className="navbar">
        <div className="container-fluid  navbar-expand-lg">
          <a className="navbar-brand d-flex align-items-center" href="#"><img src="https://i.ibb.co/ydzd58S/Web-Book-Logo.png" alt="Web-Book-Logo" border="0" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 left">
              <li className="nav-item">
                <a className="fontsize-nav-increase nav-link nav-active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="fontsize-nav-increase nav-link" href="#">Genre</a>
              </li>
              <li className="nav-item">
                <a className="fontsize-nav-increase nav-link" href="#">Popular</a>
              </li>
              <li className="nav-item">
                <a className="fontsize-nav-increase nav-link" href="#">Mybooks</a>
              </li>
              
            </ul>
        
          </div>
        </div>
        <div className="right-control">
          <ul className=" ms-auto mb-2 mb-lg-0 flex-horizontal">
              <li className="nav-item">
                <button><svg className="nav-link w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clipRule="evenodd"/>
                        </svg>
                </button>
                <div className="tip">Darkmode</div>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
                  </svg>
                </a>
                <div className="tip">Collection</div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
                  </svg>
                </a>
                <div className="tip">Cart</div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
                  </svg>
                </a>
                <div className="tip">Profile</div>
              </li>
              
            </ul>
        </div>
         

      </nav>

      
      </>


    );
    
    

}

export default Navbar