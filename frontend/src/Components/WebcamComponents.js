// src/Components/WebcamComponents.js
import React, { useRef, useState, useCallback } from 'react';
import downloadImage from 'downloadjs';
import Webcam from 'react-webcam';
import './WebcamComponents.css';

const WebcamComponents = () => {
  const imageUrl = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const webcamRef = useRef(null);

  function GenericButton({ btnName, btnText, btnHandler }) {
    return (
      <button className={btnName} onClick={btnHandler}>
        {btnText}
      </button>
    );
  };

  const CaptureWebcamFrame = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImageSrc(imageSrc);
      imageUrl.current = imageSrc;
    },
    [webcamRef]
  );

  const DownloadWebcamFrame = () => {
    downloadImage(imageUrl.current, 'image.jpg');
  };

  const ClearFrame = () => {
    setImageSrc(null);
  }

  return (
    <div>
      <div className="container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        height={480}
        width={640}
        mirrored={true}
      />

      <div className="button-container">

      <GenericButton btnName={'CaptureButton'} btnText={'Capture Test Image'} btnHandler={CaptureWebcamFrame} />

      <GenericButton btnName={'DownloadButton'} btnText={'Download Image'} btnHandler={DownloadWebcamFrame} />

      <GenericButton btnName={'ClearButton'} btnText={'Clear Image'} btnHandler={ClearFrame} />

      </div>

      {imageSrc && <img src={imageSrc} alt="captured_image" className="CapturedImage" />}

      </div>
    </div>
  );
};

export default WebcamComponents;
