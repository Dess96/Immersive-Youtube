import React, { useState } from "react";
import "./image.css";

const Image = ({ source }) => {
  const [data] = useState(source);
  return (
    <div className="container">
      <div className="imgDiv">
        <div className="contentOverlay"></div>
        <img className="contentImage" src={data} alt="thumbnail" />
        <div class="contentDetails fadeIn-left">
          <span>See more</span>
        </div>
      </div>
    </div>
  );
};

export default Image;
