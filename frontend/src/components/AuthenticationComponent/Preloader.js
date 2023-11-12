import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Your world, </span>
        <span>Your green, </span>
        <span>Your choice.</span>
      </div>
    </div>
  );
};

export default PreLoader;