import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Detail from "./components/DetailPage/Detail";
import "./App.css";
import { bg } from "./assets";

const App = () => {


  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:city" element={<Detail />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
