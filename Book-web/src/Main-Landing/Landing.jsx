import './Landing.css';
import '../index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Landing() {

    return(
        <>
        
            <div className="book">
                <div className="backshadow"></div>
                <img src="https://i.ibb.co/SQ2hQBp/book.png" alt="book" />
            </div>

            <div className="titles">
                <h1>Unlock the <br />World’s Best <br />Books </h1>
                <h2>Delivered to Your Doorstep</h2>
                <p>"Explore a world of books that inspire and entertain. Shop your favorites effortlessly and have them delivered to your doorstep. Your next great read awaits!"</p>
            </div>
        </>

    )
}

export default Landing