import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../src/layout/header.jsx";
import Footer from "../src/layout/footer.jsx";
import Home from "./pages/home/home.jsx";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
