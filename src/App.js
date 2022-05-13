import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import VSocial from "./Pages/VSocial";
import Vshop from "./Pages/Vshop";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vsocial" element={<VSocial />} />
          <Route path="/vshop" element={<Vshop />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
