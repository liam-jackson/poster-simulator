// src/Components/WebcamComponents.js
import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import './WebcamComponents.css';

const WebcamComponents = () => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Use the captured image as needed (e.g., send to a server, process, etc.)
    console.log(imageSrc);
  };

  function CaptureButton() {
    return (
      <button className="captureButton" onClick={capture}>
        Capture Test Photo
      </button>
    );
  };

  return (
    <div>
      <div className="container">
        <p className="text">Liam is a Beautiful Ugly Peking Duck</p>
        <CaptureButton />
      </div>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        mirrored={true}
      />
    </div>
  );
};

export default WebcamComponents;
