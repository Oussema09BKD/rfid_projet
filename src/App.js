import "./App.css";
import Login from "./pages/Login";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/user/Home"

import { useState } from "react";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
          </Route>
          

          <Route path="/home" element={< Home />} />
         
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
