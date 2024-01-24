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
        {btnText};
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

  // create a function that downloads the image captured by the webcam
  const DownloadWebcamFrame = () => {
    downloadImage(imageUrl.current, 'image.jpg');
  };

  return (
    <div>
      <div className="container">
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        mirrored={true}
      />
      <img src={imageSrc} alt="captured_image" />
        <p className="text">Liam is a Beautiful Peking Duck</p>
        <GenericButton btnName={'CaptureButton'} btnText={'Capture Test Image'} btnHandler={CaptureWebcamFrame} />
        <GenericButton btnName={'DownloadButton'} btnText={'Download Image'} btnHandler={DownloadWebcamFrame} />
      </div>
    </div>
  );
};

export default WebcamComponents;
