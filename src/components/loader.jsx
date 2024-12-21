// src/components/Loader.jsx
import React from 'react';
import './loader.css'; // Ensure you style the loader correctly
import loaderGif from '../images/loader.gif';

const Loader = () => {
  return (
   /* <div className="loader-container">
      <video autoPlay loop muted className="loader-video">
        <source src={require("../images/loader.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>*/
    <div className="loader">
      <img src={loaderGif} alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default Loader;
