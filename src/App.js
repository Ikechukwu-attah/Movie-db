import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNoteFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieDbId" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
