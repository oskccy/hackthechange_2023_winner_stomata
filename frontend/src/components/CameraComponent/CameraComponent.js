import React, { useRef } from 'react';

import Webcam from 'react-webcam';
import styled from 'styled-components';
import styles from './CameraComponent.module.scss';

const videoConstraints = {
  width: 390,
  height: 844,
  facingMode: 'user',
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
  border:9px solid white;
  border-radius:50%;
  left: 41%;
  top: 80%;
  background:rgba(0,0,0,0);
  color:white;
  width:90px;
  height:90px;
  cursor: pointer;
`;

const CameraComponent = () => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // there will be pushing the image to the model
    console.log(imageSrc);
  };

  return (
    <BackgroundDiv>
      <Webcam
        className={styles.webcam}
        audio={false}
        ref={webcamRef}
        width={390}
        height={844}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <CaptureButton onClick={capture}/>
    </BackgroundDiv>
  );
};

export default CameraComponent;
