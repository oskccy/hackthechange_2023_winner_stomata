import React, { useRef, useState } from "react";

import Webcam from "react-webcam";
import styled from "styled-components";
import styles from "./CameraComponent.module.scss";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const videoConstraints = {
  width: 390,
  height: 844,
  facingMode: "user",
};

const BackgroundDiv = styled.div`
  background-color: green;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CaptureButton = styled.button`
  position: fixed;
  border: 9px solid white;
  border-radius: 50%;
  left: 41%;
  top: 80%;
  background: rgba(0, 0, 0, 0);
  color: white;
  width: 90px;
  height: 90px;
  cursor: pointer;
`;

const CameraComponent = () => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("");

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);

    const requestBody = JSON.stringify({ image: imageSrc });

    const visionSettings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    };

    try {
      const fetchVisionModel = await fetch(
        "http://localhost:5000/analyze",
        visionSettings,
      );
      const visionData = await fetchVisionModel.json();

      if (visionData && visionData.product) {
        const evaluationResponse = await fetch(
          "http://localhost:5000/evaluate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: visionData.product, image: imageSrc }),
          },
        );
        console.log(evaluationResponse);
        const evaluationData = await evaluationResponse.json();

        const searchRequestBody = JSON.stringify({ query: visionData.product });

        const searchSettings = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: searchRequestBody,
        };

        const fetchSearchRecommendation = await fetch(
          "http://localhost:5001/search",
          searchSettings,
        );
        const searchResults = await fetchSearchRecommendation.json();
        console.log(searchResults);

        const fetchSearchAlternatives = await fetch(
          "http://localhost:5001/search_alternatives",
          searchSettings,
        );
        const searchAlternatives = await fetchSearchAlternatives.json();
        console.log("searchAlternatives", searchAlternatives);

        navigate("/product", {
          state: {
            product: {
              imageUrl: imageSrc,
              title: visionData.product, // Pass the product title directly from visionData
              evaluation: evaluationData,
              alternatives: searchAlternatives,
            },
          },
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <BackgroundDiv
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        width: 390,
        height: "95vh",
      }}
    >
      {imageSrc ? (
        <CircularProgress size="4rem" style={{ color: "white" }} />
      ) : (
        <>
          <Webcam
            className={styles.webcam}
            audio={false}
            ref={webcamRef}
            width={390}
            height={844}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <CaptureButton onClick={capture} />
        </>
      )}
    </BackgroundDiv>
  );
};

export default CameraComponent;
