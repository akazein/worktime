import React from "react";
import { createBrowserRouter, Routes, Route, createRoutesFromElements, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Stats from "./pages/Stats";


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/settings" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
