import React, { createContext, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import Context, { instance } from "./modules";

function App() {
  return (
    <Context.Provider value={instance}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
