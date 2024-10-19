import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import NewUser from "./NewUser/NewUser";
import Home from "./Home/Home";
import { auth } from "./Firebase/firebaseconfig";

const App = () => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });
  }, []);

  return (
    <Router>
      <div className="nav font-t">
        <div className="flex-c">
          <div className="felx">
            <Link to="/">{/* <h1>Home</h1> */}</Link>
            <Link to="Login">{/* <h1>Login</h1> */}</Link>
          </div>
        </div>
        <p></p>
        <div className="felx">
          {/* <h1>Artwork</h1> */}
          <a
            href="https://www.instagram.com/gadoodlez_/ "
            target="_blank"
            rel="noreferrer"
          >
            {/* @gadoodlez */}
          </a>
        </div>
      </div>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login/*" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Newuser" element={<NewUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
