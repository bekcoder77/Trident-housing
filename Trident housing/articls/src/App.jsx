import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="*" element={<PageNotFound/>}/>
          {/* <Route path="*" element={<Navigate to = "<PageNotFound/>"/>}/> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;