import "./App.css";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CameraComponent from "./components/CameraComponent/CameraComponent";
import HorizontalScroll from "./components/ScrollingComponent/ScrollingComponent";
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
              <ProductPage
                product={{
                  imageUrl: "https://picsum.photos/500",
                  title: "Product Title",
                }}
              />
            }
          />
          <Route path="" element={<CameraComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
