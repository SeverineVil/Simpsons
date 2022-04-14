import React from "react";
import Home from "@pages/Home";
import Simpson from "@pages/Simpson";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/simpsons">Get a clever quote</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simpsons" element={<Simpson />} />
      </Routes>
    </div>
  );
}

export default App;
