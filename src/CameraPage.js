import React, { useEffect, useRef, useState } from 'react';
import './CameraPage.css';
import Navbar from './components/Navbar'; 

const CameraPage = () => {
  const videoRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Function to start the video
  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsStreaming(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  // Function to stop the video
  const stopVideo = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsStreaming(false);
    }
  };

  return (
    <div><Navbar />
    <div className="cameraPage">
      <div className="cameraPage__content">
        <div className="cameraPage__video">
          <video ref={videoRef} autoPlay playsInline muted />
        </div>
        <div className="cameraPage__info">
          <h2>Real-Time Yoga Pose Detection</h2>
          <p>{dateTime.toLocaleString()}</p>
          <button 
            className="cameraPage__button" 
            onClick={startVideo} 
            disabled={isStreaming}
          >
            Start Camera
          </button>
          <button 
            className="cameraPage__button" 
            onClick={stopVideo} 
            disabled={!isStreaming}
          >
            Stop Camera
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CameraPage;
