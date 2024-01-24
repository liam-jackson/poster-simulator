// src/Components/WebcamComponents.js
import React, { useRef, useState, useCallback } from 'react';
import downloadImage from './downloadImage';
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

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImageSrc(imageSrc);
      // imageUrl.current = imageSrc;
    },
    [webcamRef]
  );

  // const capture = () => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   // Use the captured image as needed (e.g., send to a server, process, etc.)
  //   console.log(imageSrc);
  // };

  // const downloadImage = (imageData, imageName) => {
  //   // to be implemented
  //   console.log('Saving image as: ' + imageName + ' -> ' + imageUrl);
  // };
  // const downloadImage = () => {
  //   // Create a new link element
  //   const link = document.createElement('a');

  //   // Set the link's properties
  //   link.href = imageUrl;
  //   link.download = 'downloaded_image.jpg'; // Name for the downloaded file

  //   // Append the link to the document and trigger a click
  //   document.body.appendChild(link);
  //   link.click();

  //   // Clean up and remove the link
  //   document.body.removeChild(link);
  // };

  return (
    <div>
      <div className="container">
        <p className="text">Liam is a Beautiful Peking Duck</p>
        <GenericButton btnName={'CaptureButton'} btnText={'Capture Test Image'} btnHandler={capture} />
        <GenericButton btnName={'DownloadButton'} btnText={'Download Image'} btnHandler={downloadImage} />
      </div>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        mirrored={true}
      />
      <img src={imageSrc} alt="captured_image" />
    </div>
  );
};

export default WebcamComponents;
