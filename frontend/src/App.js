import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  RecommendedProductCard,
} from "./components/ProductCard/ProductCard";
import ScoreCard from "./components/Score/ScoreCard";
import turtle from "./turtle.jpeg";
import CameraComponent from "./components/CameraComponent/CameraComponent";

function ProductPage() {
  return (
    <>
      <RecommendedProductCard
        title={"Product Title"}
        metrics={[ // dummy data
          { value: 4, name: "carbon-1-metric", points: ["yo", "yo", "yo"] },
          { value: 5, name: "carbon-2 metric", points: ["yo", "yo", "yo"] },
          { value: 8.9, name: "other-metric", points: ["yo", "yo", "yo"] },
        ]}
        imgUrl={turtle}
      />
      <ScoreCard score={5.9} />
    </>
  );
}

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
