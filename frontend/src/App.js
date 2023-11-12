import "./App.css";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CameraComponent from "./components/CameraComponent/CameraComponent";
import ProductPage from "./components/ProductPage/ProductPage";
import React from "react";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/product"
            element={
              <ProductPage/>
            }
          />
          <Route path="" element={<CameraComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
