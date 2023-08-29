// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeadingProvider } from "./context/HeadingContext";
import Home from "./components/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    <Router>
      <div className="App">
        <HeadingProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            {/* Add more routes here */}
          </Routes>
        </HeadingProvider>
      </div>
    </Router>
  );
}

export default App;
