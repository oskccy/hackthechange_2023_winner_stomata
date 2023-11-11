import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  RecommendedProductCard,
} from "./components/ProductCard/ProductCard";
import ScoreCard from "./components/Score/ScoreCard";
import turtle from "./turtle.jpeg";
import CameraComponent from "./components/CameraComponent/CameraComponent";

import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/product" element={<ProductPage />} />
          <Route path="" element={<CameraComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
