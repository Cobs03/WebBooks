import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Main-Landing/LandingPage.jsx";
import Genre from "./Main-Genre/Genre.jsx";
import Popular from "./Main-Popular/Popular.jsx";
import Mybooks from "./Main-Mybooks/Mybooks.jsx";
import Collection from "./Main-Mybooks/Collection/Collection.jsx";
import CurrentReads from "./Main-Mybooks/CurrentReads/CurrentReads.jsx";
import History from "./Main-Mybooks/HIstory/History.jsx";
import Cart from "./Main-Cart/Cart.jsx";
import Checkout from "./Main-Cart/Checkout/Checkout.jsx";
import Confirm from "./Main-Cart/Payment/Confirm.jsx";

import Footer from "./Footer/Footer.jsx";
import Navbar from "./NavBar/Navbar.jsx";
import SignIn from "./SignIn/SignIn";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />

        {/* Protect main routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/genre"
          element={
            <ProtectedRoute>
              <Genre />
            </ProtectedRoute>
          }
        />
        <Route
          path="/popular"
          element={
            <ProtectedRoute>
              <Popular />
            </ProtectedRoute>
          }
        />

        {/* Nested Routes for Mybooks */}
        <Route
          path="/mybooks"
          element={
            <ProtectedRoute>
              <Mybooks />
            </ProtectedRoute>
          }
        >
          <Route path="current-reads" element={<CurrentReads />} />
          <Route path="collection" element={<Collection />} />
          <Route path="history" element={<History />} />
        </Route>

        <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart/>
          </ProtectedRoute>
        } />
          <Route path="/checkout" element={<ProtectedRoute><Checkout/></ProtectedRoute>}/>
          <Route path="/confirm" element={<ProtectedRoute><Confirm/></ProtectedRoute>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
